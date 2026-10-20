/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  if (process.env.NODE_ENV === "development" && process.env.GATSBY_REACT_DEVTOOLS === "1") {
    setHeadComponents([React.createElement("script", { key: "react-devtools", src: "http://localhost:8097" })])
  }
}
