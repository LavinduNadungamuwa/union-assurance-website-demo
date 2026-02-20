import React from 'react'
import Button from '../Button/Button'
import logo from '../../../assets/logo.png'
import './style.css'

export default function Navbar(props) {
    return (
        <div>
            <div className="navbar" style={{ marginBottom: props.marginBottom }}>
                <img src={logo} alt="Logo" style={{ width: "180px", height: "auto" }} />
                {props.children}
            </div>
        </div>
    )
}

