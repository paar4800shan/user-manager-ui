import React from 'react'
import styles from "./Button.module.css"
import {Button as BSButton} from "react-bootstrap"

function Button({ text, onClickMethod }) {
    return (
        <BSButton data-testid = "button" variant="primary" onClick={onClickMethod}>{text}</BSButton>

    )
}

export default Button