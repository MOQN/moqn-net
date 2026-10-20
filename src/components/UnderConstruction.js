import * as React from "react"

const UnderConstruction = ({ title = "Moon." }) => (
  <div className="global-wrapper">
    <header className="global-header"><a className="site-wordmark" href="/">{title}</a></header>
    <main className="home-intro construction" id="main-content">
      <p className="eyebrow">A new chapter is on its way</p>
      <h1>Under<br />construction.</h1>
      <p className="intro-description">The webpage is currently under construction.<br />I will see you again soon with more projects and updates!</p>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Moon, Jung Hyun</span><span>Art · Code · Education</span></footer>
  </div>
)
export default UnderConstruction
