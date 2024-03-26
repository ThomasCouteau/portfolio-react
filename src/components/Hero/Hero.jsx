import React, {useEffect, useRef} from "react";
import "./Hero.css"
import Typed from 'typed.js';

const Hero = ({timelineRef}) => {
    const avatarGH = "https://avatars.githubusercontent.com/u/85634434"
    const text = useRef(null)

    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: ['Thomas', 'a Developer', 'a Master Student'],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    const onScrollToTimeline = (e) => {
        e.preventDefault();
        timelineRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={avatarGH}
                     className=" rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-5xl font-bold">I'm <span className="text-primary" ref={text}/></h1>
                    <p className="py-6">I'm a work-study student working in web development. I have 2 years experience
                        in the world of work.</p>
                    <button className="btn btn-primary text-base-100" onClick={onScrollToTimeline}>My Background</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;