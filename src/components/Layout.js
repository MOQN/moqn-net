import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => (
  <div className={`global-wrapper${location?.pathname?.replace(/\/$/, "") === "/work" ? " work-page" : ""}`} id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="global-header">
      <Link className="site-wordmark" to="/" aria-label="moqn home">moqn</Link>
      <nav aria-label="Main navigation">
        <Link to="/work/" activeClassName="active">[ Work ]</Link>
        <Link to="/" activeClassName="active" className={location?.pathname === "/about/" ? "active" : undefined}>[ About ]</Link>
      </nav>
    </header>
    <main id="main-content">{children}</main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} moqn</span><a href="#top">Back to top ↑</a></footer>
  </div>
)
export default Layout
