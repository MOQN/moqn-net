import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { projectBox, thumbnail, details, number, arrow } from "./ProjectBox.module.css"

const ProjectBox = ({ project, index = 0 }) => {
  const image = getImage(project.frontmatter.image)
  return (
    <Link to={project.fields.slug} className={projectBox}>
      <span className={number}>{String(index + 1).padStart(2, "0")}</span>
      {image ? <GatsbyImage image={image} alt={project.frontmatter.title} className={thumbnail} /> : <div className={thumbnail} />}
      <div className={details}>
        <h3>{project.frontmatter.title}</h3>
        <p>{project.frontmatter.description || project.excerpt}</p>
      </div>
      <svg className={arrow} aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 19 19 5M5 5h14v14" /></svg>
    </Link>
  )
}
export default ProjectBox
