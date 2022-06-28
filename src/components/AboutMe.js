import React from "react"
import UserIcon from "../images/UserIcon1.svg"

export default function AboutMe() {
  const shortAbout = (
    <>
      I am a Computer Science student from University of Nottingham. I love{" "}
      <strong>learning</strong> new tech, <strong>building</strong> projects, and <strong>sharing</strong> my
      experience. <br />I have experience in full stack web development, Python,
      JavaScript, R, Java, Linux...
    </>
  )

  return (
    <section className="about-me">
      <img src={UserIcon} className="user--icon" />
      <div className="about-me--right">
        {/* <button className="active">Short About Me</button>
        <button className="">Long About Me</button> */}
        <h1 className="about-me--title">Hi, I'm Jack</h1>
        <p className="user--text">
          {shortAbout}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          efficitur lacus. Nam rhoncus ex vel urna vestibulum, eget dictum
          libero vulputate. Duis sed aliquam mi, sed rhoncus velit. Curabitur
          suscipit tristique mauris ut lacinia. Phasellus bibendum lorem nec
          quam faucibus congue. Fusce aliquet libero a enim efficitur molestie.
          Etiam aliquet neque vitae porta semper. Pellentesque eget orci
          eleifend, placerat nunc quis, pulvinar odio. Mauris id eros volutpat,
          dignissim mi vel, sollicitudin velit. Donec vel quam vitae tellus
          pulvinar euismod. In a dolor eu arcu egestas fermentum a ac leo. Etiam
          lacus augue, consequat in purus a, hendrerit molestie nunc. Fusce
          lobortis neque at diam aliquet suscipit. In hac habitasse platea
          dictumst. Nullam at purus neque. */}
        </p>
      </div>
    </section>
  )
}
