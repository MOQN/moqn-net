import * as React from "react"
import { Link, navigate } from "gatsby"

export default function WorkRedirect() {
  React.useEffect(() => { navigate("/", { replace: true }) }, [])
  return <p><Link to="/">work</Link></p>
}
