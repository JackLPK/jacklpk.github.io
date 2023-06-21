import React from "react"

import { CardData } from "../models"

/* 
  Note:
  wrap description in <p></p>
*/

// prettier-ignore
const data: CardData[] = [
  {
    title: "Todo App",
    image: "/images/crop/django-todo-1.png",
    alt: "Todo app",
    date: "2023-05-26",
    descriptionHtml: "A simple Todo app.<br />Build with Django.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/django-simple-todo-app",
    siteUrl: null,
    tags: ["Python", "Django"],
  },
  {
    title: "Screen Saver",
    image: "/images/crop/react-screen-saver-1.png",
    alt: "Screen Saver",
    date: "2023-02-29",
    descriptionHtml: "A simple screen saver.<br />Build with React.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/react-screen-saver",
    siteUrl: "https://pkljack-react-screen-saver.netlify.app/",
    tags: ["ReactJS", "JavaScript", "TypeScript", "NextJS"],
  },
  {
    title: "QR Code Generator",
    image: "/images/crop/qrcode-generator-react-1-crop.png",
    alt: "QR Code Generator",
    date: "2022-08-20",
    descriptionHtml: "A simple QR Code generator.<br />Build with React.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/react-qrcode-generator",
    siteUrl: "https://pkljack-qrcode-generator-react.netlify.app/",
    tags: ["ReactJS", "JavaScript", "TypeScript", "NextJS"],
  },
  {
    title: "World Clock",
    image: "/images/crop/react-world-clock-1.png",
    alt: "World Clock",
    date: "2022-07-22",
    descriptionHtml: "Clocks to show different time across the world. Use sliders to advance time.<br />Build with React.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/react-world-clock",
    siteUrl: "https://pkljack-world-clock-react.netlify.app/",
    tags: ["ReactJS", "JavaScript", "TypeScript"],
  },
  {
    title: "Whac-A-Mole Game",
    image: "/images/crop/react-whac-a-mole-1.png",
    alt: "Whac-A-Mole Game",
    date: "2022-07-15",
    descriptionHtml: "A game where you click on all the moles, they can be really fast.<br />Build with React.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/react-whac-a-mole",
    siteUrl: "https://pkljack-whac-a-mole-react.netlify.app/",
    tags: ["ReactJS", "JavaScript"],
  },
  {
    title: "Async pipx package update checker",
    image: "/images/crop/aiocpxo-1.png",
    alt: "alt of image",
    date: "2021-01-01",
    descriptionHtml: "Since there is no simple way to know which packages installed under <code>pipx</code> are outdated, I create this installable script. Also a fun litte experiment with threading and asynchronous programming in Python.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/JackLPK/check-pipx-outdates",
    siteUrl: null,
    tags: ["Python", "Async"],
  },
  // {
  //   title: "Conway's Game of Life",
  //   image: "/images/crop/game-of-life-1.png",
  //   alt: "alt of image",
  //   descriptionHtml: "Conway's Game of Life Build with React.",
  //   descriptionJSX: <span>descriptionJSX</span>,
  //   sourceUrl: "#",
  //   siteUrl: "https://pkljack-game-of-life.netlify.app/",
  //   tags: ["JavaScript"],
  // },
  {
    title: "Rock Paper Scissors Game",
    image: "/images/crop/rock-paper-scissors-1.png",
    alt: "rock-paper-scissors",
    date: null,
    descriptionHtml: "A game of rock-paper-scissors.<br />Build with React.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/react-rock-paper-scissors",
    siteUrl: "https://pkljack-rockpaperscissors-react.netlify.app/",
    tags: ["ReactJS", "JavaScript"],
  },
  {
    title: "Memory Game",
    image: "/images/crop/memory-game-1.png",
    alt: "alt of image",
    date: null,
    descriptionHtml: "A game where you flip cards and remember where they are.<br />Build with React.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/react-memory-game",
    siteUrl: "https://pkljack-memorygame-react.netlify.app/",
    tags: ["ReactJS", "JavaScript"],
  },
  {
    title: "Checksum Program",
    image: "/images/crop/ghash-01-crop.png",
    alt: "Checksum Program",
    date: "2022-12-12",
    descriptionHtml: "A Checksum Program.<br />Build with PySide6.",
    descriptionJSX: <span>descriptionJSX</span>,
    sourceUrl: "https://github.com/PKLJack/ghash",
    siteUrl: null,
    tags: ["Python", "Qt", "PySide6"],
  },
]

function fetchProjectCardsData() {
  return data
}

export { fetchProjectCardsData }
