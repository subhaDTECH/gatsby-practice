import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  mainConatiner, imgcontainer,
  heroImg, mainTextBox, MyBtn,
  Title
} from "../components/index.module.css"
import AboutPage from "./about"
import AboutPageCom from "../components/about"
import ServicePageCom from "../components/service"
import PartnerPage from "../components/partner"
import PartnerPageCom from "../components/partner"
import ContactPageCom from "../components/contact"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={mainConatiner}>
      <div className={mainTextBox}>
        <h1 className={Title}>Gatsby WordPress Homepage Starter</h1>
        <p>Clone, deploy, edit, and customize this starter to build your own homepage.</p>
        <button className={MyBtn}>
          Join now
        </button>
      </div>
      <div className={imgcontainer}>
        <img className={heroImg} src="https://gatsbywordpresshomepage.gatsbyjs.io/static/3d117a055fc83505a58f7fc5a21acec8/11959/Hero.webp" />
      </div>
    </div>

    {/* about page  */}
    <AboutPageCom />
    <ServicePageCom />
    <PartnerPageCom />
    <ContactPageCom />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
