import * as React from "react"

export default function Intro({ onComplete }) {
  const [leaving, setLeaving] = React.useState(false)
  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const timer = window.setTimeout(() => setLeaving(true), 4000)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [])
  React.useEffect(() => {
    if (!leaving) return
    const timer = window.setTimeout(onComplete, 600)
    return () => window.clearTimeout(timer)
  }, [leaving, onComplete])

  return <button type="button" className={`site-intro${leaving ? " is-leaving" : ""}`} onClick={() => setLeaving(true)} aria-label="Continue to selected work">
    <span className="site-intro-copy">
      <span className="site-intro-name">moqn</span>
      <span className="site-intro-description">educator and creative coder<br />working across art, technology, and performance.</span>
    </span>
  </button>
}
