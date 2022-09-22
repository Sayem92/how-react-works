import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Watch = () => {
    const [steps,setSteps] = useState(0);

    const increaseSteps = () =>{
        const newSteps= steps + 1;
        setSteps(newSteps)
    }

    useEffect(()=>{
        console.log(steps)
    },[steps]);

    return (
        <div>
            <h1>This is my smart watch for count steps.</h1>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour..........</button>
        </div>
    );
};

export default Watch;