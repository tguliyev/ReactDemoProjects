import React from "react"
import ReactIcon from "../images/reactjs-icon.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={ReactIcon} alt="icon" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}