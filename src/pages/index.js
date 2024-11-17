import * as React from "react";
import { graphql } from "gatsby";

// import Bio from "../components/Bio"
import Layout from "../components/Layout";
import Seo from "../components/seo";
import ProjectBox from "../components/ProjectBox";

const PostIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.allMarkdownRemark.nodes

  // if there are no posts, display a message
  if (projects.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        {/* <Bio /> */}
        <p>
          No posts found.
          {/* Add markdown posts to "content/posts" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js). */}
        </p>
      </Layout>
    )
  }

  // if there are posts, display them in a grid
  return (

    <Layout location={location} title={siteTitle}>
      <div className="project-grid">
        {projects.map(project => (
          <ProjectBox key={project.fields.slug} project={project} />
        ))}
      </div>

      {/* <Bio /> */}
    </Layout>
  )
}

export default PostIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          keywords
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED),
            }
          }
        }
      }
    }
  }
`
