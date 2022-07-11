import React from "react"
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
    <section className="aboutme">
      <img src={UserIcon} className="aboutme__img" />
      <div className="aboutme__right">
        {/* <button className="active">Short About Me</button>
        <button className="">Long About Me</button> */}
        <h1 className="aboutme__title">Hi, I'm Jack</h1>
        {shortAbout}
      </div>
    </section>
  )
}
