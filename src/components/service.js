import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { serviceContainer, serviceTitle, row, box } from "../components/service.module.css";
const ServicePageCom = () => (
  <>
    <div className={serviceContainer}>
      <h3 className={serviceTitle}>Our Services</h3>
      <div className={row}>
        <div className={box}>
          <h4>Digital Marketing</h4>
          <p>Create a homepage using Gatsby and WordPress. This starter demonstrates how to use WordPress to build a
            homepage and can be customized to match your own visual branding</p>
        </div>
      <div className={box}>
          <h4>Website Hosting </h4>
          <p>Create a homepage using Gatsby and WordPress. This starter demonstrates how to use WordPress to build a
            homepage and can be customized to match your own visual branding</p>
        </div>
        <div className={box}>
          <h4>Software Service</h4>
          <p>Create a homepage using Gatsby and WordPress. This starter demonstrates how to use WordPress to build a
            homepage and can be customized to match your own visual branding</p>
        </div>

      </div>
    </div>
  </>
)

export const Head = () => <Seo title="service page " />

export default ServicePageCom
