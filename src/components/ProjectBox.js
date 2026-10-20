import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { projectBox, thumbnail, placeholder, details } from "./ProjectBox.module.css"

const ProjectBox = ({ project, eager = false }) => {
  const { title, category, date } = project.frontmatter
  const image = getImage(project.frontmatter.image)
  return (
    <a href={project.fields.slug} className={projectBox}>
      {image ? <GatsbyImage image={image} alt={title} className={thumbnail} loading={eager ? "eager" : "lazy"} objectFit="cover" objectPosition="50% 50%" /> : <div className={`${thumbnail} ${placeholder}`} aria-hidden="true"><span>{title}</span><small>image pending</small></div>}
      <div className={details}>
        <h2>{title}</h2>
        <p><span>{category}</span><span>{date?.slice(0, 4)}</span></p>
      </div>
    </a>
  )
}
export default ProjectBox
