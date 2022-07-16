import React from "react";

export default function Button(props) {
    return (
        <div id={props.id}>
            <div></div>
            <span>{props.text}</span>
        </div>

    )
}