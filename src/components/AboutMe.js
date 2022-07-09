import React from "react"
import UserIcon from "../images/UserIcon1.svg"

export default function AboutMe() {
  const shortAbout = (
    <div className="about-me--text">
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
    <section className="about-me">
      <img src={UserIcon} className="user--icon" />
      <div className="about-me--right">
        {/* <button className="active">Short About Me</button>
        <button className="">Long About Me</button> */}
        <h1 className="about-me--title">Hi, I'm Jack</h1>
        {shortAbout}
      </div>
    </section>
  )
}
