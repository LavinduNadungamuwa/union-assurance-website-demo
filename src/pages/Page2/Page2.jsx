import React from "react"
import Button from "../../common/component/Button/Button"
import img2 from "../../assets/img2.png"
import logo from "../../assets/logo.png"
import BottomBar from "../../common/component/BottomBar/BottomBar";
import "./style.css"

export default function Page2() {

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
                        <p className="home-subtitle">Find your goals and Plan your future</p>
                        <br /><br />
                        <Button btnName={"Get Started ->"} />
                    </div>
                    <div>
                        <img src={img2} alt="Image2" className="pg2-image"/>
                    </div>
                </div>
                <BottomBar />
            </div>
        </>
    )
}