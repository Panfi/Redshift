import React from 'react'
import './button.css'
export default function Button({type, onButton, title}) {
    return <div onClick={onButton} className={`btn ${type}`} > {title}</div>;
}
