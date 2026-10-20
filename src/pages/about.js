import * as React from "react"
import AboutPage from "./index"
import Seo from "../components/seo"

export default function About(props) {
  return <AboutPage {...props} />
}
export const Head = () => <Seo title="About" />
