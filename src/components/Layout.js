import * as React from "react"
import { Link } from "gatsby"
import UnderConstruction from "./UnderConstruction"

const Layout = ({ location, title, children }) => {
  if (process.env.GATSBY_PORTFOLIO_PREVIEW !== "true") {
    return <UnderConstruction title={title} />
  }
  const isRootPath = location?.pathname === `${__PATH_PREFIX__}/`
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="global-header">
        <Link className="site-wordmark" to="/">{title}</Link>
        <nav aria-label="Main navigation">
          <Link to="/#projects">Work</Link>
          <Link to="/#about">About</Link>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Moon, Jung Hyun</span>
        <span>Art · Code · Education</span>
      </footer>
    </div>
  )
}
export default Layout
