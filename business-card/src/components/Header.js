import React from "react";
import Button from "./Button";

export default function Header() {
    return (
        <>
            <h1>Tural Quliyev</h1>
            <h4>Software Developer</h4>
            <p>turalquliyev.website</p>
            <div className="button">
                <Button id="mail-btn" text="Email" />
                <Button id="linkedin-btn" text="Linkedin" />
            </div>
        </>
    )
}