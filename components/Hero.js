import React from "react"
import TypeIt from "typeit-react"

export default function Hero() {
  const typeItConfig = {
    getBeforeInit: (instance) => {
      // console.log(instance.getOptions())
      instance
        // .options({ speed: 0, lifeLike: false })
        // .type("Hello!")
        .options({ speed: 100, lifeLike: true })
        .pause(1000)
        // .break({ delay: 1000 })
        .type("Welcome to my Website!!!")
        .pause(1000)
        .delete(1)
        .pause(100)
        .delete(1)
      return instance
    },
  }

  return (
    <div className="hero">
      <span className="hero__text">Hello!</span>
      <TypeIt
        className="hero__text"
        getBeforeInit={typeItConfig.getBeforeInit}
      />
    </div>
  )
}
