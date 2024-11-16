import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        {/* <Bio /> */}
        <p>
          No blog posts found.
          {/* Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js). */}
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      <div className="post-list-container">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div key={post.fields.slug} className="post-list-item" itemScope itemType="http://schema.org/CreativeWork">
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="name">{title}</span>
                  </Link>
                </h2>
                {/* <small itemprop="author">Moon</p> */}
                <small itemProp="dateCreated">
                  {post.frontmatter.date}
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

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
          description
        }
      }
    }
  }
`
