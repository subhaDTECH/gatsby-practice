import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PartnerContainer, PartnerTitle, row, box, PartnerBtn, partnerImg } from "../components/partner.module.css";
const PartnerPage = () => (
      <Layout>
            <div className={PartnerContainer}>
                  <h3 className={PartnerTitle}>Our Partner</h3>
                  <div className={row}>
                        <div className={box}>
                              <h4 className={PartnerTitle}>Tech Solutions</h4>
                              <p>Create a homepage using Gatsby and WordPress. This starter demonstrates how to use WordPress to build a
                                    homepage and can be customized to match your own visual branding</p>
                              <button className={PartnerBtn}>Join</button>
                        </div>

                        <div className={box}>
                              <img className={partnerImg} src="https://img.freepik.com/free-vector/search-concept-landing-page_52683-20158.jpg?size=626&ext=jpg&ga=GA1.1.87270789.1701151901&semt=ais" />
                        </div>
                  </div>
                  <div className={row}>
                        <div className={box}>
                              <img className={partnerImg} src="https://img.freepik.com/free-vector/hand-drawn-business-deal-concept_23-2148130976.jpg?size=626&ext=jpg&ga=GA1.1.87270789.1701151901&semt=ais" />
                        </div>

                        <div className={box}>
                              <h4 className={PartnerTitle}> Github </h4>
                              <p>Create a homepage using Gatsby and WordPress. This starter demonstrates how to use WordPress to build a
                                    homepage and can be customized to match your own visual branding</p>
                              <button className={PartnerBtn}>Join</button>
                        </div>
                  </div>
            </div>
      </Layout>
);

export const Head = () => <Seo title="About" />

export default PartnerPage;
