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
    <>
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-sky-300 text-center font-mono text-7xl font-bold">
        <div className="">Hello!</div>
        <TypeIt
          className="max-w-[93%]"
          getBeforeInit={typeItConfig.getBeforeInit}
          as="div"
        />
      </div>
    </>
  )
}
