import React, { useState } from 'react';
import "./infinity.css"



const InfinitySVG = () => (
    <svg
        className="infinity"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 187.3 93.7"
        preserveAspectRatio="xMidyMid"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        {[...Array(6)].map((_, index) => (
            <path
                key={index}
                className={`infinity__tracer infinity__tracer--${index + 1}`}
                d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            />
        ))}
    </svg>
);

const InfinityComponent = () => (
        <InfinitySVG />
);

export default InfinityComponent;
