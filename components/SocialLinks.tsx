import React from "react"
import { Icon } from "semantic-ui-react"
import styles from "../styles/SocialLinks.module.scss"

export default function SocialLinks() {
  return (
    <div className={styles["social-links"]}>
      <a
        href="https://github.com/PKLJack"
        className={styles["social-links__btn"]}
      >
        <Icon name="github" />
        <span>Github</span>
      </a>
      <a
        href="https://twitter.com/PKL_Jack"
        className={styles["social-links__btn"]}
      >
        <Icon name="linkedin" />
        <span>Twitter</span>
      </a>
      <a
        href="https://www.linkedin.com/in/pui-kit-li-793555177/"
        className={styles["social-links__btn"]}
      >
        <Icon name="twitter" />
        <span>LinkedIn</span>
      </a>
    </div>
  )
}
