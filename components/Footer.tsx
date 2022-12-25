import React from "react"
import { Popup } from "semantic-ui-react"
import styles from "../styles/Footer.module.scss"

type Props = {
  buildTimestamp: string
}

export default function Footer(props: Props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>
        Made by&nbsp;
        <Popup
          content="It's me, Jack!"
          position="top center"
          trigger={<span>Pui Kit Li</span>}
          size="mini"
        />
      </div>
      <div className={styles.footer__text}>Build with Next.JS</div>
      <div style={{ display: "none" }}>Build: {props.buildTimestamp}</div>
    </footer>
  )
}
