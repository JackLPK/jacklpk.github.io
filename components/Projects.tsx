import { useState } from "react"

import { fetchProjectCardsData } from "../assets/data"
import { calculateTags } from "../lib/utilsClient"
import ProjectCard from "./ProjectCard"

const NO_TAG = "" // Means not filtering anything

type Props = {
  handleClick: React.MouseEventHandler
  isEmpty: boolean
}

function ClearFilterButton(props: Props) {
  return (
    <>
      <span
        onClick={props.handleClick}
        className={`cursor-pointer px-3 ${
          props.isEmpty && "font-bold text-slate-600 underline"
        } `}
      >
        All
      </span>
    </>
  )
}

export default function Projects() {
  const [cardsArray, setCardArray] = useState(fetchProjectCardsData)
  const [currTag, setCurrTag] = useState(NO_TAG)

  const orderedTags = calculateTags(cardsArray)

  function handleTagClick(event: React.MouseEvent, tagText: string) {
    setCurrTag(tagText)
  }

  const tagsElements = orderedTags.map((tag) => {
    return (
      <span
        key={tag.name}
        className={`text-primary ${
          currTag === tag.name && "font-bold underline"
        }`}
        onClick={(event) => handleTagClick(event, tag.name)}
      >
        {tag.name} ({tag.count})
      </span>
    )
  })

  const projectCardElements = cardsArray
    .filter((cardObj) => {
      return currTag === "" || cardObj.tags.includes(currTag)
    })
    .map((obj, idx) => (
      <ProjectCard key={idx} project={obj} handleTagClick={handleTagClick} />
    ))

  function clearFilterTags() {
    setCurrTag(NO_TAG)
  }

  return (
    <section className="container mt-8 px-1" id="projects">
      <h1 className="mb-2 border-b-4 border-slate-400 pb-3 text-5xl">
        Projects
      </h1>
      <div className="mb-4 flex flex-wrap gap-3 rounded-md bg-slate-200 p-2">
        <ClearFilterButton
          isEmpty={currTag === NO_TAG}
          handleClick={clearFilterTags}
        />
        {tagsElements}
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 place-content-center place-items-center gap-8 md:grid-cols-2 md:place-items-stretch md:justify-items-center">
        {projectCardElements}
      </div>
    </section>
  )
}
