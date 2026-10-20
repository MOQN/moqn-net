import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectBox from "../components/ProjectBox"

const PostIndex = ({ data, location }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <section className="home-intro" aria-labelledby="intro-title">
        <p className="eyebrow">Moon, Jung Hyun · Portfolio</p>
        <h1 id="intro-title">Code, art,<br />and everything between.</h1>
        <p className="intro-description">Educator & creative coder.<br />Exploring ideas through interactive media, performance, and creative technology.</p>
        <a className="text-link" href="#projects">Explore selected work <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 5 14 14M5 19h14V5" /></svg></a>
      </section>
      <section id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <h2 id="projects-title">Selected work</h2>
          <span>{String(projects.length).padStart(2, "0")} projects</span>
        </div>
        <div className="project-list">
          {projects.map((project, index) => <ProjectBox key={project.fields.slug} project={project} index={index} />)}
        </div>
        {!projects.length && <p>New projects are on the way.</p>}
      </section>
      <section id="about" className="home-about" aria-labelledby="about-title">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Making room for curiosity.</h2>
        <p>My practice brings together education, creative coding, and new media. This is a collection of experiments, performances, and collaborations along the way.</p>
      </section>
    </Layout>
  )
}
export default PostIndex
export const Head = () => <Seo title="Home" />
export const pageQuery = graphql`
  {
    site { siteMetadata { title } }
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { frontmatter: { priority: DESC } }
    ) {
      nodes {
        excerpt(pruneLength: 140)
        fields { slug }
        frontmatter {
          title
          description
          image { childImageSharp { gatsbyImageData(width: 480, aspectRatio: 1.5, placeholder: BLURRED) } }
        }
      }
    }
  }
`
