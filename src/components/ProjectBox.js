import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { projectBox } from "./ProjectBox.module.css";

const ProjectBox = ({ project }) => {
  const { title, date, keywords, description, excerpt, slug, image } = {
    title: project.frontmatter.title,
    date: project.frontmatter.date,
    keywords: project.frontmatter.keywords,
    description: project.frontmatter.description,
    excerpt: project.excerpt,
    slug: project.fields.slug,
    image: project.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src,
  };

  return (
    <div
      key={slug}
      className={projectBox}
      itemScope
      itemType="http://schema.org/CreativeWork"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <h2>
          <Link to={slug} itemProp="url">
            <span itemProp="name">{title}</span>
          </Link>
        </h2>
        <small itemProp="dateCreated">{date}</small>
        <br />
        <small itemProp="keywords">{keywords}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
          itemProp="description"
        />
      </section>
    </div>
  );
};

ProjectBox.propTypes = {
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      keywords: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.shape({
            images: PropTypes.shape({
              fallback: PropTypes.shape({
                src: PropTypes.string.isRequired,
              }),
            }),
          }),
        }),
      }),
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string,
  }).isRequired,
};

export default ProjectBox;