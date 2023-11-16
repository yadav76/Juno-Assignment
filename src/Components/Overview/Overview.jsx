import React from 'react'
import "./styles.css"
import Profile from "../../assets/avatar.png"

const Overview = () => {
    return (
        <div className='overview-container'>
            <div class="left-container">
                <div className="logo">
                    <p>Logo Here</p>
                </div>
                <div className="menu-content">
                    <p>Overview</p>
                    <p>Onboarding</p>
                    <p>Monitoring</p>
                    <p>Flagging</p>
                    <p>Source of Income</p>
                    <p>UAR</p>
                </div>
            </div>
            <div className="right-container">
                <div className="profile">
                    <img src={Profile} alt="" />
                </div>
                <div className="profile-details">
                    <h4>Elon Musk</h4>
                    <p>elon@twitter.com</p>
                </div>
            </div>

        </div>
    )
}

export default Overview