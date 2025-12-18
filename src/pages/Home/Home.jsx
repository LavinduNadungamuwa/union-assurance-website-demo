import React from "react"
import BottomBar from "../../common/component/BottomBar/BottomBar"
import Navbar from "../../common/component/Navbar/Navbar"
import Button from "../../common/component/Button/Button"
import img1 from "../../assets/img1.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./style.css"
import { useNavigate } from "react-router-dom"


export default function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/page2');
    };

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
                        <Button btnName={"Get Started "} onClick={handleGetStarted} >
                            <ArrowForwardIcon />
                        </Button>                        
                    </div>
                    <div>
                        <img src={img1} alt="Image1" className="home-image"/>
                    </div>
                </div>
                <BottomBar />
            </div>
        </>
    )
}