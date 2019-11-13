import React from 'react'
import './button.css'
export default function Button({type, onButton, title}) {
    return <div onClick={onButton} className={`mybutton ${type}`} > {title}</div>;
}
