import React from "react"

/* 
  Note:
  wrap description in <p></p>
*/

const data = [
  {
    title: "QR Code Generator",
    image: "/images/crop/qrcode-generator-react-1-crop.png",
    alt: "QR Code Generator",
    date: "2022-08-20",
    description: (
      <p>
        A simple QR Code generator.
        <br />
        Build with React.
      </p>
    ),
    sourceUrl: "https://github.com/PKLJack/react-qrcode-generator",
    siteUrl: "https://pkljack-qrcode-generator-react.netlify.app/",
    tags: ["ReactJS", "JavaScript", "TypeScript", "NextJS"],
  },
  {
    title: "World Clock",
    image: "/images/crop/react-world-clock-1.png",
    alt: "World Clock",
    date: "2022-07-22",
    description: (
      <p>
        Clocks to show different time across the world. Use sliders to advance time.
        <br />
        Build with React.
      </p>
    ),
    sourceUrl: "https://github.com/PKLJack/react-world-clock",
    siteUrl: "https://pkljack-world-clock-react.netlify.app/",
    tags: ["ReactJS", "JavaScript", "TypeScript"],
  },
  {
    title: "Whac-A-Mole Game",
    image: "/images/crop/react-whac-a-mole-1.png",
    alt: "Whac-A-Mole Game",
    date: "2022-07-15",
    description: (
      <p>
        A game where you click on all the moles, they can be really fast.
        <br />
        Build with React.
      </p>
    ),
    sourceUrl: "https://github.com/PKLJack/react-whac-a-mole",
    siteUrl: "https://pkljack-whac-a-mole-react.netlify.app/",
    tags: ["ReactJS", "JavaScript"],
  },
  {
    title: "Async pipx package update checker",
    image: "/images/crop/aiocpxo-1.png",
    alt: "alt of image",
    description: (
      <p>
        Since there is no simple way to know which packages installed under{" "}
        <code>pipx</code> are outdated, I create this installable script. Also a
        fun litte experiment with threading and asynchronous programming in
        Python.
      </p>
    ),
    sourceUrl: "https://github.com/JackLPK/check-pipx-outdates",
    siteUrl: null,
    tags: ["Python", "Async"],
  },
  // {
  //   title: "Conway's Game of Life",
  //   image: "/images/crop/game-of-life-1.png",
  //   alt: "alt of image",
  //   description: (
  //     <p>
  //       Conway's Game of Life Build with React.
  //     </p>
  //   ),
  //   sourceUrl: "#",
  //   siteUrl: "https://pkljack-game-of-life.netlify.app/",
  //   tags: ["JavaScript"],
  // },
  {
    title: "Rock Paper Scissors Game",
    image: "/images/crop/rock-paper-scissors-1.png",
    alt: "rock-paper-scissors",
    description: (
      <p>
        A game of rock-paper-scissors. <br />
        Build with React.
      </p>
    ),
    sourceUrl: "https://github.com/PKLJack/react-rock-paper-scissors",
    siteUrl: "https://pkljack-rockpaperscissors-react.netlify.app/",
    tags: ["ReactJS", "JavaScript"],
  },
  {
    title: "Memory Game",
    image: "/images/crop/memory-game-1.png",
    alt: "alt of image",
    description: (
      <p>
        A game where you flip cards and remember where they are.
        <br />
        Build with React.
      </p>
    ),
    sourceUrl: "https://github.com/PKLJack/react-memory-game",
    siteUrl: "https://pkljack-memorygame-react.netlify.app/",
    tags: ["ReactJS", "JavaScript"],
  },
]

function fetchData() {
  return data
}

export { fetchData }
