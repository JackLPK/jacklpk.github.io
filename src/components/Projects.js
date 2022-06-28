import React, { useState } from "react"
import data from "../fakeData1"
import ProjectCard from "./ProjectCard"

function setIntersect(setA, setB) {
  return new Set([...setA].filter((element) => setB.has(element)))
}

export default function Projects() {
  function ClearFilterButton(props) {
    if (props.isEmpty) {
      return <></>
    } else {
      return <button onClick={props.handleClick}>clear</button>
    }
  }

  // const tags = ["Python", "JavaScript", "R"]
  const tags = ["Python", "JavaScript"]


  const [filterTags, setFilterTags] = useState(new Set([]))
  // console.log(filterTags)

  function handleTagClick(event, item) {
    setFilterTags((prevFilterTags) => new Set(prevFilterTags).add(item))
  }

  const tagsElements = tags.map((item, idx) => (
    <span
      key={idx}
      className="tag"
      onClick={(event) => handleTagClick(event, item)}
    >
      {item}
    </span>
  ))

  const projectCardElements = data
    .filter((item) => {
      if (filterTags.size === 0) {
        return true
      }

      // Get intersect
      const tagsIntersect = setIntersect(new Set(item.tags), filterTags)
      return tagsIntersect.size > 0
    })
    .map((item, idx) => <ProjectCard key={idx} project={item} />)

  function clearFilterTags() {
    setFilterTags(new Set())
  }

  return (
    <section className="projects">
      <h1 className="projects--title">Projects</h1>
      <div className="projects--tags">
        tags:
        <ClearFilterButton
          isEmpty={filterTags.size === 0}
          handleClick={clearFilterTags}
        />
        {tagsElements}
      </div>
      <div className="projects--cards">{projectCardElements}</div>
    </section>
  )
}
