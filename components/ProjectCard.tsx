import React from "react"
import { Icon } from "semantic-ui-react"
import { CardData } from "../models"
import Image from "next/image"

/* 
  <img 
    src={project.image} 
    className="card-image" 
    alt={project.alt}
  />
*/

type Props = {
  project: CardData
}

export default function ProjectCard(props: Props) {
  const { project } = props

  const imgElement = (
    <img src={project.image} className="card__img" alt={project.alt} />
  )

  // const imgElement = (
  //   <Image src={project.image} className="card__img" alt={project.alt} width={300} height={200}/>
  // )

  const viewSourceElement = (
    <a href={project.sourceUrl} className="card__url">
      <Icon name="github" />
      View Source
    </a>
  )

  // const viewSiteElement = (
  //   <a href={project.siteUrl} className="card__url">
  //     <Icon name="arrow right" />
  //     View Site
  //   </a>
  // )
  const getViewSiteElement = () => {
    // Just use ts-ignore
    return project.siteUrl ? (
      <a href={project.siteUrl} className="card__url">
        <Icon name="arrow right" />
        View Site
      </a>
    ) : (
      <></>
    )
  }

  const tagsElements = project.tags.map((tagText: string, idx: number) => (
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
        {project.siteUrl && getViewSiteElement()}
        {project.sourceUrl && viewSourceElement}
      </div>
      <div className="card__tags">{tagsElements}</div>
    </div>
  )
}
