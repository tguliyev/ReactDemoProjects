import React from "react";
import FbLogo from "../images/facebook.png"
import GitLogo from "../images/github.png"
import InstaLogo from "../images/instagram.png"
import TwitterLogo from "../images/twitter.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={FbLogo} />
            <img src={GitLogo} />
            <img src={InstaLogo} />
            <img src={TwitterLogo} />
        </div>
    )
}