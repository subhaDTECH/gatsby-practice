import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>Hi from About  page</h1>
    <p>Welcome to About Page</p>
     <p>About Us ,Take a moment to think back on what you’ve learned so far. Challenge yourself to answer the following questions from memory:

What is a transformer plugin? How do transformer plugins affect the data in the data layer?
What is MDX? Why is it useful Take a moment to think back on what you’ve learned so far. Challenge yourself to answer the following questions from memory:

What is a transformer plugin? How do transformer plugins affect the data in the data layer?
What is MDX? Why is it useful</p>
 </Layout>
);

export const Head = () => <Seo title="About" />

export default AboutPage ;
