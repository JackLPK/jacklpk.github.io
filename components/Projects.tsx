import React, { useState } from "react"
import { Icon } from "semantic-ui-react"

import { fetchProjectCardsData } from "../assets/data"
import styles from "../styles/Projects.module.scss"
import { calculateTags } from "../utils"
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
        style={{ visibility: props.isEmpty ? "hidden" : "visible" }}
        className={styles["clear-btn"]}
      >
        <Icon name="times circle outline" size="large" color="grey" />
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

  const tagsElements = orderedTags.map((tag, idx) => {
    const className = `${styles.tag} ${currTag === tag.name && styles["tag--active"]}` // prettier-ignore
    return (
      <span
        key={idx}
        className={className}
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
    <section className={styles.projects} id="projects">
      <h1 className={styles.projects__title}>Projects</h1>
      <div className={styles.projects__tags}>
        Filter:
        <ClearFilterButton
          isEmpty={currTag === NO_TAG}
          handleClick={clearFilterTags}
        />
        {tagsElements}
      </div>
      <div className={styles.projects__cards}>{projectCardElements}</div>
    </section>
  )
}
