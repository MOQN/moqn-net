import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectBox from "../components/ProjectBox"

const HomePage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <section className="home-intro" aria-labelledby="intro-title">
        <h1 id="intro-title">Moon Jung Hyun</h1>
        <p>Educator and creative coder working across art, technology, and performance.</p>
      </section>

      <section id="projects" aria-labelledby="projects-title">
        <h2 className="section-title" id="projects-title">Selected work</h2>
        <div className="project-list">
          {projects.map(project => <ProjectBox key={project.fields.slug} project={project} />)}
        </div>
        {projects.length === 0 && <p>New projects are on the way.</p>}
      </section>

      <section id="about" className="home-about" aria-labelledby="about-title">
        <h2 className="section-title" id="about-title">About</h2>
        <p>I explore ideas through education, creative coding, and new media. Here are some projects, performances, and collaborations along the way.</p>
      </section>
    </Layout>
  )
}

export default HomePage
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
          image { childImageSharp { gatsbyImageData(width: 320, aspectRatio: 1.5, placeholder: BLURRED) } }
        }
      }
    }
  }
`
