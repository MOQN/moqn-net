import * as React from "react"
import { navigate } from "gatsby"

export default function ProjectRedirect({ pageContext }) {
  const { to } = pageContext
  React.useEffect(() => { navigate(to, { replace: true }) }, [to])
  return <main><p><a href={to}>Continue to the project</a></p></main>
}
export const Head = ({ pageContext }) => <><title>Project moved</title><meta httpEquiv="refresh" content={`0;url=${pageContext.to}`} /><meta name="robots" content="noindex" /></>
