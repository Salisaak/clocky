import React, { useEffect, useState } from 'react';
import './fibonClock.css';

const FibonClock = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateRotation = () => {
      const date = new Date(); //'2023-07-16T13:30:00' Use the current date and time
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const totalMinutes = hour * 60 + minute + second / 60; // Calculate the total minutes
      const rotationAngle = (totalMinutes / 720) * 360; // Calculate the rotation angle based on the total minutes (720 minutes in 12 hours)

      setRotation(rotationAngle);
      requestAnimationFrame(updateRotation); // Request the next animation frame
    };

    requestAnimationFrame(updateRotation); // Start the animation loop
  }, []);

  return (
    <div className="fibon-clock">
      <div className="background-rectangle"></div>
      <div id="golden-ratio" style={{ transform: `rotate(${rotation}deg)` }}>
        {/* <div id="d1"></div> */}
        {/* <div id="d2"></div> */}
        <div id="d3"></div>
        <div id="d4"></div>
        <div id="d5"></div>
        <div id="d6"></div>
        <div id="d7"></div>
        <div id="d8"></div>
        <div id="d9"></div>
        <div id="d10"></div>
      </div>
    </div>
  )
}

export default FibonClock