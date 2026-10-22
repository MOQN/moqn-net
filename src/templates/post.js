import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import projectDetails from "../../content/project-details.json";

const renderDetail = value => value.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g).map((part, index) => {
  const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
  return link ? <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a> : part;
});

const PostTemplate = ({
  data: { previous, next, site, markdownRemark: post, allFile },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  const formatDate = value => {
    const date = value.trim();
    if (/^present$/i.test(date)) return "Present";
    const match = date.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
    if (!match) return date;
    const [, year, month, day] = match;
    if (!month || month === "00") return year;
    const name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Number(month) - 1];
    if (!name) return date;
    return !day || day === "00" ? `${name} ${year}` : `${name} ${Number(day)}, ${year}`;
  };
  const processDate = value => value.split(",").map(part => part.split(/ to /i).map(formatDate).join(" – ")).join("; ");

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="post"
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <header>
          <h1 itemProp="name">{post.frontmatter.title}</h1>
          <div className="project-facts">
            {post.frontmatter.description && <p itemProp="description">{post.frontmatter.description}</p>}
            {post.frontmatter.date && <p>{processDate(post.frontmatter.date)}</p>}
            {projectDetails[post.fields.slug]?.map((detail, index) => (
              <p key={`${detail.label}-${index}`}>
                {detail.label === "collaborators" && "collaborators: "}{renderDetail(detail.value.replace(/ · /g, ", "))}
              </p>
            ))}
          </div>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="description"
        />


      </article>
      <nav className="post-nav" aria-label="Other projects">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      fields { slug }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
