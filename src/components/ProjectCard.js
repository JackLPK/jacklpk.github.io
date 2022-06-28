import React from "react"

/* 
<img src={project.image} className="project--card-image" alt={project.alt}/>


*/

export default function ProjectCard(props) {
  // console.log(props)
  const { project } = props
  console.log(project.image)
  return (
    <div className="project--card">
      {project.image ? (
        <img src={process.env.PUBLIC_URL + project.image} className="project--card-image" alt={project.alt}/>
      ) : (
        <div className="project--card-image">pic here</div>
      )}
      {/* <img src=""/> */}
      {/* <div className="project--card-image">pic here</div> */}
      <h2 className="project--card-title">{project.title}</h2>
      <p className="project--card-description">
        <div>{project.description}</div> {/* wrap in div because flex */}
      </p>
      <div className="project--card-url">
        {project.sourceUrl && (
          <a href={project.sourceUrl} className="project--card-source">
            <i className="bi bi-github"></i>
            View Source
          </a>
        )}
        {project.siteUrl && (
          <a href={project.siteUrl} className="project--card-site">
            <i className="bi bi-arrow-right"></i>View Site
          </a>
        )}
      </div>
      <div className="project--card-tags">
        {project.tags.map((item, idx) => (
          <span key={idx} className="tag">
            # {item}
          </span>
        ))}
      </div>
    </div>
  )
}
