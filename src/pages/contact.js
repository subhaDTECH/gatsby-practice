import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <h1>Hi from contact  page</h1>
    <p>Welcome to contact Page</p>
     <p>Answering questions for fellow Gatsby users on Discord or GitHub Discussions are valuable contributions.
     You can also help out users on issues and Pull Requests to contribute or fix their issues.</p>
     <img src="https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D" />
</Layout>
)

export const Head = () => <Seo title="About" />

export default ContactPage
