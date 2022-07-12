import React from "react"

import { GithubIcon } from "../icons"
import { ReactComponent as ArrowRight } from "bootstrap-icons/icons/arrow-right.svg"

/* 
  <img 
    src={project.image} 
    className="card-image" 
    alt={project.alt}
  />
*/

export default function ProjectCard(props) {
  const { project } = props

  const imgElement = (
    <img
      src={project.image}
      className="card__img"
      alt={project.alt}
    />
  )

  const viewSourceElement = (
    <a href={project.sourceUrl} className="card__url">
      <GithubIcon className="bi bi-github" />
      View Source
    </a>
  )

  const viewSiteElement = (
    <a href={project.siteUrl} className="card__url">
      <ArrowRight className="bi" />
      View Site
    </a>
  )

  const tagsElements = project.tags.map((tagText, idx) => (
    <span key={idx} className="tag">
      {`# ${tagText}`}
    </span>
  ))

  return (
    <div className="card">
      {imgElement}
      <h3 className="card__title">{project.title}</h3>
      <div className="card__body">{project.description}</div>
      <div className="card__urls">
        {project.siteUrl && viewSiteElement}
        {project.sourceUrl && viewSourceElement}
      </div>
      <div className="card__tags">{tagsElements}</div>
    </div>
  )
}
