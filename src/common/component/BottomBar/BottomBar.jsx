import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./style.css"

export default function BottomBar() {
    return (
        <div>
            <div className="bottom-bar">
                <div className="social-buttons">
                    <button className="social-btn">
                        <FacebookIcon />
                    </button>
                    <button className="social-btn">
                        <InstagramIcon />
                    </button>
                    <button className="social-btn">
                        <LinkedInIcon />
                    </button>
                    <button className="social-btn">
                        <TwitterIcon />
                    </button>
                </div>
                <a href="#" className="bottom-link">Find your needs</a>
            </div>
        </div>
    )
}
