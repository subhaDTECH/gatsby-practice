import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ContactContainer, contactTitle, contactPara, fromContainer, inputBox, contactBtn } from "../components/contact.module.css";
const ContactPageCom = () => (

    <div className={ContactContainer}>
        <h3 className={contactTitle}>Contact Us</h3>
        <p className={contactPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et ipsum dolor sit amet, consectetur adipiscing elit, se .</p>

        <div className={fromContainer}>
            <div className={inputBox}>
                <input type="text" placeholder="Enter Your Name"></input>
            </div>
            <div className={inputBox}>
                <input type="email" placeholder="Enter Your Email"></input>
            </div>
            <div className={inputBox}>
                <input type="text" placeholder="Enter Your Phone number"></input>
            </div>
            <div className={inputBox}>
                <button className={contactBtn}>submit</button>
            </div>
        </div>
    </div>


)

export const Head = () => <Seo title="contact Page" />

export default ContactPageCom
