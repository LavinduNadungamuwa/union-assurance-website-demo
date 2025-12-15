import React from "react"
import Button from "../../common/component/Button/Button"
import img1 from "../../assets/img1.png"
import logo from "../../assets/logo.png"

import "./style.css"

export default function Home() {

    return (
        <>
            <div className="home-hero-section">
                <div className="navbar">
                    <img src={logo} alt="Logo" style={{ width: "180px", height: "auto" }} />
                    <Button btnName={"Already have an account?"} bgcolor={"white"} color={"#FE5000"} />
                </div>
                <div className="home-container">
                    <div className="home-content">
                        <p className="home-title">Life Insurance <br /> Made Simple</p>
                        <p>Find your goals and Plan your future</p>
                        <br /><br />
                        <Button btnName={"Get Started ->"} />
                    </div>
                    <div>
                        <img src={img1} alt="Image1" className="home-image"/>
                    </div>
                </div>
            </div>
        </>
    )
}