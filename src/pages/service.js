import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicePage = () => (
  <Layout>
    <h1> Hi from the service page</h1>
    <p>Welcome to Service page</p>
     <p>Service the installation of dependencies or developing on Windows in general gives you headaches, Windows 10 provides a great alternative: Windows Subsystem for Linux (WSL). It lets you run most command-line tools, utilities, and applications in a GNU/Linux environment directly on Windows, unmodified, without the overhead of a virtual machine.
      For more explicit instructions on getting set up with WSL, see the Gatsby on Linux documentation.</p>
  </Layout>
)

export const Head = () => <Seo title="service page " />

export default ServicePage
