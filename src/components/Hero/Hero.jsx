import React from "react";
import "./Hero.css"

const Hero = () => {
    const avatarGH = "https://avatars.githubusercontent.com/u/85634434"

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={avatarGH}
                     className="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-5xl font-bold animated-text">I'm <span></span></h1>
                    <p className="py-6">I'm a work-study student working in web development. I have 2 years experience
                        in the world of work.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;