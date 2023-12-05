import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  aboutContainer,
  ImgContainer,
  aboutTextContainer,
  aboutimg,
  aboutTitle,
  aboutBtn
} from "../components/about.module.css"
const AboutPage = () => (
  <Layout>
    <div className={aboutContainer}>
      <div className={ImgContainer}>
        <img className={aboutimg} src="https://gatsbywordpresshomepage.gatsbyjs.io/static/6384ea1ceedc8de79cbbd1d38cb19cb4/11959/Developer-Laptop.webp" />
      </div>
      <div className={aboutTextContainer}>
        <h3 className={aboutTitle}>About us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. aliquip ex ea commodo consequat.
        </p>
        <button className={aboutBtn}>
          Learn more
        </button>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="About Page" />

export default AboutPage;
