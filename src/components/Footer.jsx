import React, { useContext } from 'react'
import appleStoreImg from "../img/appleStore.webp"
import googlePlayImg from "../img/google-play-badge.webp"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeContext from '../Context/context';
import { Link } from 'react-router-dom';

function Footer() {
    const { theme, setTheme } = useContext(ThemeContext);

    const linkStyle = {
        color: theme ? "#000" : "#bebebe"
    }

    const socialNetworksIconsStyle = {
        fontSize: "20px",
        color: theme ? "#cfcfcf" : "rgb(251, 250, 243)",
    }

    const socialNetworksIconsBtnStyle = {
        width: "42px",
        height: "44px",
        padding: "10px",
        boxSizing: "border-box",
        border: theme ? "1px solid #cfcfcf" : "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "61px",
        backdropFilter: "blur(40px)",
        background: theme ? "#dfdfdf" : "rgba(255, 255, 255, 0.2)",
        cursor: "pointer"
    }

    const languageBtn = {
        width: "169px",
        padding: "10px 27px",
        boxSizing: "border-box",
        border: theme ? "1px solid #cfcfcf" : "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "40px",
        backdropFilter: "blur(40px)",
        background: theme ? "#dfdfdf" : "rgba(255, 255, 255, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        color: theme ? "#cfcfcf" : "rgb(251, 250, 243)",
        cursor: "pointer"
    } 

    return (
        <footer style={{ backgroundColor: theme ? "#e8e8e8" : "rgb(17, 17, 17)" }}>
            <div className="links-box">
                <div className="link-box" >
                    <h4 style={{ color: theme ? "#000" : "#fff" }}>Company</h4>

                    <div className="footerBox" style={{ color: theme ? "#000" : "#fff" }}>
                        <Link to="/" style={linkStyle}>About Us</Link>
                        <Link to="/" style={linkStyle}>Careers</Link>
                    </div>
                </div>

                <div className="link-box">
                    <h4 style={{ color: theme ? "#000" : "#fff" }}>Need Help</h4>

                    <div className="footerBox" style={{ color: theme ? "#000" : "#fff" }}>
                        <Link to="/" style={linkStyle}>Visit Help Center?</Link>
                        <Link to="/" style={linkStyle}>Share Feedback</Link>
                    </div>
                </div>

                <div className="link-box">
                    <h4 style={{ color: theme ? "#000" : "#fff" }}>View Website in</h4>

                    <div className="footerBox2" style={{ color: theme ? "#000" : "#fff" }}>
                        <button style={languageBtn}><ion-icon name="checkmark-outline"></ion-icon> English <ion-icon name="chevron-down-outline"></ion-icon></button>
                    </div>
                </div>

                <div className="link-box">
                    <h4 style={{ color: theme ? "#000" : "#fff" }}>Social Media</h4>

                    <div className="footerBox2" style={{ color: theme ? "#000" : "#fff" }}>
                        <button style={socialNetworksIconsBtnStyle} ><FaInstagram style={socialNetworksIconsStyle} /></button>

                        <button style={socialNetworksIconsBtnStyle} ><FaXTwitter style={socialNetworksIconsStyle} /></button>
                    </div>
                </div>

                <div className="link-box">
                    <h4 style={{ color: theme ? "#000" : "#fff" }}>Download Our App</h4>

                    <div className="footerBox" style={{ color: theme ? "#000" : "#fff" }}>
                        <img src={appleStoreImg} alt="" className="appleStoreAndgooglePlay" />

                        <img src={googlePlayImg} alt="" className="appleStoreAndgooglePlay" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;