import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { projectBox, thumbnail, details } from "./ProjectBox.module.css"

const ProjectBox = ({ project }) => {
  const image = getImage(project.frontmatter.image)

  return (
    <Link to={project.fields.slug} className={projectBox}>
      {image && <GatsbyImage image={image} alt="" className={thumbnail} />}
      <div className={details}>
        <h3>{project.frontmatter.title}</h3>
        <p>{project.frontmatter.description || project.excerpt}</p>
      </div>
    </Link>
  )
}

export default ProjectBox
