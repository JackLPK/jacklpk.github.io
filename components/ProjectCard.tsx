import React from "react"
import { Icon } from "semantic-ui-react"
import { CardData } from "../models"
import styles from "../styles/ProjectCard.module.scss"

/* 
  <img 
    src={project.image} 
    className="card-image" 
    alt={project.alt}
  />
*/

type Props = {
  project: CardData
  handleTagClick: Function
}

export default function ProjectCard(props: Props) {
  const { project } = props

  const imgElement = (
    <img src={project.image} className={styles.card__img} alt={project.alt} />
  )

  const viewSourceElement = (
    <a href={project.sourceUrl} className={styles.card__url}>
      <Icon name="github" className={styles["card__url-icon"]} color="black" />
      View Source
    </a>
  )

  const getViewSiteElement = () => {
    // Just use ts-ignore
    return project.siteUrl ? (
      <a href={project.siteUrl} className={styles["card__url"]}>
        <Icon name="arrow right" className={styles["card__url-icon"]} />
        View Site
      </a>
    ) : (
      <></>
    )
  }

  const tagsElements = project.tags.map((tagText: string, idx: number) => (
    <span
      key={idx}
      className={styles.tag}
      onClick={(e) => props.handleTagClick(e, tagText)}
    >
      {tagText}
    </span>
  ))

  return (
    <div className={styles.card}>
      {imgElement}
      <h3 className={styles.card__title}>{project.title}</h3>
      {/* <div className={styles.card__body}>{project.descriptionJSX}</div> */}
      <div className={styles.card__body}>
        <p dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}></p>
      </div>
      <div className={styles.card__urls}>
        {project.siteUrl && getViewSiteElement()}
        {project.sourceUrl && viewSourceElement}
      </div>
      <div className={styles.card__tags}>{tagsElements}</div>
    </div>
  )
}
