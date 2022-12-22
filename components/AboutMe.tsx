import React from "react"
import { Grid, Segment } from "semantic-ui-react"
import UserIcon from "../images/UserIcon1.svg"

export default function AboutMe() {
  const shortAbout = (
    <div className="aboutme__body">
      <p>
        I am a Computer Science student from University of Nottingham. I love{" "}
        <strong>learning</strong> new tech, <strong>building</strong> projects,
        and <strong>sharing</strong> my experience.
      </p>
      <p>
        I have experience in full stack web development, Python, JavaScript, R,
        Java, Linux...
      </p>
    </div>
  )

  return (
    <Segment as={"segment"} className="aboutme" basic>
      <Grid columns={2} stackable>
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="right">
            <UserIcon className="aboutme__img" />
          </Grid.Column>
          <Grid.Column>
            <div className="aboutme__right">
              {/* <button className="active">Short About Me</button>
                  <button className="">Long About Me</button> */}
              <h1 className="aboutme__title">{"Hi, I'm Jack"}</h1>
              {shortAbout}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}
