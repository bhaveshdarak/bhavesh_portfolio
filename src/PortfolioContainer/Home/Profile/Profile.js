import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className='colz'>
                        <div className='colz-icon'>
                         
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">Bhavesh</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Technology",
                                    1000,
                                    "Ethusiastic Dev 🖥",
                                    1000,
                                    "Frontend Dev 💾",
                                    1000,
                                    "React Dev 🖥",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                            Ehusiastic Developer with Frontend ability to develop web apps
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                    <button className="btn primary-btn"
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
                        <a href='My_CV_2_0.pdf' download='My Portfolio.pdf'>
                            <button className="btn highlighted-btn">Get Portfolio</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>            
        </div>
    );
}
