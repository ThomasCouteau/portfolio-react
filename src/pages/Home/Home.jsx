import React, {useRef} from 'react';
import Hero from "../../components/Hero/Hero";
import Timeline from "../../components/Timeline/Timeline";

const Home = () => {
    const timelineRef = useRef(null);

    return (
        <div className="container mx-auto">
            <Hero timelineRef={timelineRef}/>
            <Timeline ref={timelineRef}/>

        </div>

    );
    }
;

export default Home;
