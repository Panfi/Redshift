import React from 'react'
import './button.css'
import { withRouter } from 'react-router-dom';


 function Button({type, onButton, title, history, to}) {
    return <div onClick={to ? () => history.push(to): onButton} className={`mybutton ${type}`} > {title}</div>;
}

export default withRouter(Button)