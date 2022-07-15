import React from "react";

export default function Button(props) {
    return (
        <button>
            <i id={props.id}></i>
            {props.text}
        </button>

    )
}