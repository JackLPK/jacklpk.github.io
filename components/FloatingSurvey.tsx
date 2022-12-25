import SmallSurvey from "./SmallSurvey"
import styles from "../styles/FloatingSurvey.module.scss"

export default function FloatingSurvey(props: any) {
  return (
    <>
      {/* prettier-ignore */}
      <div className={styles.frame}>
        {props.children}
        <div className={styles.floatthis}>
          {<SmallSurvey />}
        </div>
      </div>
    </>
  )
}
