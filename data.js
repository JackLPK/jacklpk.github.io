import React from "react"

/* 
  Note:
  wrap description in <p></p>
*/

const data = [
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
    tags: ["Python", "async"],
  },
  // {
  //   title: "Conway's Game of Life",
  //   image: "/images/crop/game-of-life-1.png",
  //   alt: "alt of image",
  //   description: (
  //     <p>
  //       Conway's Game of Life written in React.
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
        Written in React.
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
        A Game where you flip cards and remember where they are.
        <br />
        Written in React.
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
