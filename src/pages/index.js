import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function About({ location }) {
  return <Layout location={location}><section className="about-page"><p className="eyebrow">About</p><h1>Moon, Jung Hyun</h1><p className="about-intro">Educator and creative coder working across art, technology, and performance.</p><p>I explore ideas through education, creative coding, and new media.</p></section></Layout>
}
export const Head = () => <Seo title="About" />
