import React from "react"
import Button from "../../common/component/Button/Button"
import img2 from "../../assets/img2.png"
import Navbar from "../../common/component/Navbar/Navbar";
import BottomBar from "../../common/component/BottomBar/BottomBar";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./style.css"

export default function Page2() {

    return (
        <>
            <div className="home-hero-section">
                <Navbar>
                    <Button btnName={"Already have an account?"} bgcolor={"white"} color={"#FE5000"} />
                </Navbar>
                <div className="home-container">
                    <div className="home-content">
                        <p className="home-title">Life Insurance <br /> Made Simple</p>
                        <p className="home-subtitle">Find your goals and Plan your future</p>
                        <br /><br />
                        <Button btnName={"Get Started"}>
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                    <div>
                        <img src={img2} alt="Image2" className="pg2-image" />
                    </div>
                </div>
                <BottomBar />
            </div>
        </>
    )
}