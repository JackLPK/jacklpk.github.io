import Image from "next/image"

import UserIcon1 from "../assets/images/UserIcon1.svg"

export default function AboutMe() {
  // prettier-ignore
  const shortAbout = (
    <div className="text-lg">
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
    <>
      <div className="container flex flex-col items-center justify-center p-10 md:flex-row">
        <Image
          src={UserIcon1}
          alt="Picture of author"
          width={150}
          height={150}
          className="md:h-w-52 m-10 md:w-52"
        />
        <div className="max-w-md md:ml-4 lg:ml-20">
          <h1 className="mb-2 text-6xl">{"Hi, I'm Jack"}</h1>
          {shortAbout}
        </div>
      </div>
    </>
  )
}
