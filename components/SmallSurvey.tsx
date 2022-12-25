import React, { useEffect, useState } from "react"
import EMOJI_1 from "../assets/images/emojis/emoji-1-very_bad.svg"
import EMOJI_2 from "../assets/images/emojis/emoji-2-poor.svg"
import EMOJI_3 from "../assets/images/emojis/emoji-3-medium.svg"
import EMOJI_4 from "../assets/images/emojis/emoji-4-good.svg"
import EMOJI_5 from "../assets/images/emojis/emoji-5-excellent.svg"
import styles from "../styles/SmallSurvey.module.scss"
import { useCookies } from "react-cookie"
import { Icon, Segment } from "semantic-ui-react"

const SURVEY_SHOW_TIME = 5000 // 5 seconds

const EMOJI_LEVEL = {
  EXCELLENT: 5,
  GOOD: 4,
  MEDIUM: 3,
  POOR: 2,
  VERYBAD: 1,
}

type Props = {}

export default function SmallSurvey(props: Props) {
  const [cookies, setCookie] = useCookies(["submitted"])
  const [isVisible, setIsVisible] = useState(false)
  const [isBackendAlive, setIsBackendAlive] = useState(false)

  // console.log("RENDER!")
  /* 
    Ping backend &
    set timeout for show survey
  */
  useEffect(() => {
    // @ts-ignore
    fetch(process.env.NEXT_PUBLIC_BACKEND_ALIVE_URL)
      .then((response) => response.json())
      .then((data) => setIsBackendAlive(data.alive))
      .catch((err) => {
        console.log(
          `Backend not responding: ${process.env.NEXT_PUBLIC_BACKEND_ALIVE_URL}`
        )
        console.error(err)
        setIsBackendAlive(false)
      })

    const isSurveyFirstTime = (cookies: any): boolean => {
      return cookies["submitted"] !== "true"
    }

    const timer = setTimeout(() => {
      setIsVisible(isSurveyFirstTime(cookies) && isBackendAlive)
    }, SURVEY_SHOW_TIME)

    return () => {
      clearTimeout(timer)
    }
  }, [cookies, isBackendAlive])

  /* Handlers */
  const handleCloseBtn = () => {
    setIsVisible(false)
    // console.log("close btn clicked")
  }

  const handleEmojiClick = (e: React.SyntheticEvent, level: number) => {
    // console.log(`Level: ${level}`)

    setIsVisible(false)
    setCookie("submitted", true, { sameSite: true, maxAge: 864000 }) // 10 days

    const url = String(process.env.NEXT_PUBLIC_BACKEND_SURVEY_API)

    const formData = new FormData()
    formData.append("level", `${level}`)

    fetch(url, { method: "POST", body: formData })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  }

  if (!isVisible) return <></>
  return (
    <>
      {/* prettier-ignore */}
      <Segment as={"div"} className={styles.survey}>
        <Icon
          name="times circle outline"
          className={styles["close-btn"]}
          size="large"
          onClick={handleCloseBtn}
        />
        <strong>Quick!</strong>
        <br />
        Send the author an emoji!
        <div className={styles["emoji-list"]}>
          <EMOJI_1 onClick={(e: any) => handleEmojiClick(e, EMOJI_LEVEL.VERYBAD)} />
          <EMOJI_2 onClick={(e: any) => handleEmojiClick(e, EMOJI_LEVEL.POOR)} />
          <EMOJI_3 onClick={(e: any) => handleEmojiClick(e, EMOJI_LEVEL.MEDIUM)} />
          <EMOJI_4 onClick={(e: any) => handleEmojiClick(e, EMOJI_LEVEL.GOOD)} />
          <EMOJI_5 onClick={(e: any) => handleEmojiClick(e, EMOJI_LEVEL.EXCELLENT)} />
        </div>
      </Segment>
    </>
  )
}
