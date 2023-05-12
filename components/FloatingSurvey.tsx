import SmallSurvey from "./SmallSurvey"
import styles from "../styles/FloatingSurvey.module.scss"

export default function FloatingSurvey(props: any) {
  return (
    <>
      {/* prettier-ignore */}
      <div className={styles.frame}>
        {props.children}
        {/* Temporary disable SmallSurvey */}
        {/* 
        <div className={styles.floatthis}>
          {<SmallSurvey />}
        </div>
        */}
      </div>
    </>
  )
}
