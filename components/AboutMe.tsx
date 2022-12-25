import { Grid, Segment } from "semantic-ui-react"

import UserIcon from "../assets/images/UserIcon1.svg"
import styles from "../styles/AboutMe.module.scss"

export default function AboutMe() {
  // prettier-ignore
  const shortAbout = (
    <div className="aboutme__body">
      <p>
        I am a Computer Science student from University of Nottingham. I love{" "}
        <strong>learning</strong> new tech, <strong>building</strong> projects,
        and <strong>sharing</strong> my experience.
      </p>
      <p>
        I have experience in Machine Learning, full stack web development, Python, JavaScript, R, Java, Linux...
      </p>
    </div>
  )

  return (
    <Segment as={"segment"} className={styles.aboutme} basic>
      <Grid columns={2} stackable>
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="center">
            <UserIcon className={styles.aboutme__img} />
          </Grid.Column>
          <Grid.Column>
            <div className={styles.aboutme__right}>
              {/* <button className="active">Short About Me</button>
                  <button className="">Long About Me</button> */}
              <h1 className={styles.aboutme__title}>{"Hi, I'm Jack"}</h1>
              {shortAbout}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
