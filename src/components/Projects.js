import React, { useState } from "react"

import { fetchData } from "../data"
import { sortTags, reduceTags } from "../utils"

import ProjectCard from "./ProjectCard"

const NO_TAG = "" // Means not filtering anything

function ClearFilterButton(props) {
  return (
    <button
      onClick={props.handleClick}
      style={{ visibility: props.isEmpty ? "hidden" : "visible" }}
      className="clear-btn"
    >
      All
    </button>
  )
}

export default function Projects() {
  const [cardsArray, setCardArray] = useState(fetchData)
  const [currTag, setCurrTag] = useState(NO_TAG)

  const availableTags = reduceTags(cardsArray)
  const tags = sortTags(availableTags)

  function handleTagClick(event, tagText) {
    setCurrTag(tagText)
  }

  const tagsElements = tags.map((tagText, idx) => (
    <span
      key={idx}
      className="tag"
      onClick={(event) => handleTagClick(event, tagText)}
    >
      {tagText}
    </span>
  ))

  const projectCardElements = cardsArray
    .filter((cardObj) => {
      return currTag === "" || cardObj.tags.includes(currTag)
    })
    .map((obj, idx) => <ProjectCard key={idx} project={obj} />)

  function clearFilterTags() {
    setCurrTag(NO_TAG)
  }

  return (
    <section className="projects">
      <h1 className="projects--title">Projects</h1>
      <div className="projects--tags">
        Filter:
        <ClearFilterButton
          isEmpty={currTag === NO_TAG}
          handleClick={clearFilterTags}
        />
        {tagsElements}
      </div>
      <div className="projects--cards">{projectCardElements}</div>
    </section>
  )
}
