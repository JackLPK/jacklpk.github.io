import React from "react"
import { Container } from "semantic-ui-react"
import TypeIt from "typeit-react"

export default function Hero() {
  const typeItConfig = {
    getBeforeInit: (instance: any) => {
      // console.log(instance.getOptions())
      instance
        // .options({ speed: 0, lifeLike: false })
        // .type("Hello!")
        // .options({ speed: 0, lifeLike: false })
        // .type("<br/>")
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
        <div className="hero__text">Hello!</div>
        {/* <br/> */}
        <TypeIt
          className="hero__text"
          getBeforeInit={typeItConfig.getBeforeInit}
          as="div"
        />
      </div>
    
  )
}
