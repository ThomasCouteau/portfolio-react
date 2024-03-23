import React from "react";

const Timeline = () => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2020</time>
                    <div className="text-lg font-black">Scientific baccalaureate</div>
                    I passed my scientific baccalauréat.
                </div>
                <hr/>
            </li>
            <li>
                <hr/>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">7 June - 23 July 2021</time>
                    <div className="text-lg font-black">6-week internship at SAS Isisphinx</div>
                    Creation of a website in ReactJS. <br/>
                    System management of network infrastructure.
                </div>
                <hr/>
            </li>
            <li>
                <hr/>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">July 2022</time>
                    <div className="text-lg font-black">BTS - Systèmes Numériques option Informatique et Réseaux</div>
                    I passed my advanced technician's certificate.
                </div>
                <hr/>
            </li>
            <li>
                <hr/>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">September 2022 - September 2023</time>
                    <div className="text-lg font-black">Licence Concepteur et Dévelopeur d'Application</div>
                    I did my degree in IT under a sandwich course at NEU-JKF Delta NEU. <br/> I had the opportunity to develop a web application using the Quasar framework (based on VueJS) and the FastAPI framework (Python). This application can be used to perform calculations specific to the world of aeraulics and generate PDF documents using forms. These documents can be signed via the application. <br/> I was able to use the .NET framework for an API for calculations in the world of aerodynamics, powder handling and dust collection.
                </div>
                <hr/>
            </li>
            <li>
                <hr/>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">September 2023 - Today</time>
                    <div className="text-lg font-black">MASTER Expert Informatique et Système d'Information</div>
                    I am currently doing my master's degree in IT and Information Systems at NEU-JKF Delta NEU.
                </div>
            </li>
        </ul>
    )
}

export default Timeline;