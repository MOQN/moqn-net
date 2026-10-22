import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => (
  <div className={`global-wrapper${["", "/index.html", "/work"].includes(location?.pathname?.replace(/\/$/, "")) ? " work-page" : ""}`} id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="global-header">
      <Link className="site-wordmark" to="/" aria-label="moqn home">moqn</Link>
      <nav aria-label="Main navigation">
        <Link to="/" activeClassName="active">[ Work ]</Link>
        <Link to="/about/" activeClassName="active">[ About ]</Link>
      </nav>
    </header>
    <main id="main-content">{children}</main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} moqn</span><a href="#top">Back to top ↑</a></footer>
  </div>
)
export default Layout
