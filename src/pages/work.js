import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import ProjectBox from "../components/ProjectBox"

const WorkPage = ({ data, location }) => {
  const projects = [...data.allMarkdownRemark.nodes].sort((a, b) => Number(Boolean(b.frontmatter.image)) - Number(Boolean(a.frontmatter.image)))
  const [category, setCategory] = React.useState("all")
  const categories = ["all", "art", "code", "education"]
  const visible = category === "all" ? projects : projects.filter(project => project.frontmatter.category === category)

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <section id="projects" aria-label="Selected work">
        <div className="work-toolbar">
          <div className="work-filters" role="group" aria-label="Filter projects">
            {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
        </div>
        <div className="project-grid">
          {visible.map((project, index) => <ProjectBox key={project.fields.slug} project={project} eager={index < 2} />)}
        </div>
        {visible.length === 0 && <p>No projects yet.</p>}
      </section>
    </Layout>
  )
}

export default WorkPage
export const Head = () => <Seo title="Selected work" />
export const pageQuery = graphql`
  {
    site { siteMetadata { title } }
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: [{ frontmatter: { priority: DESC } }, { frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      nodes {
        fields { slug }
        frontmatter {
          title
          category
          date
          image { childImageSharp { gatsbyImageData(width: 1400, aspectRatio: 1, transformOptions: { cropFocus: CENTER }, placeholder: DOMINANT_COLOR, quality: 85) } }
        }
      }
    }
  }
`
