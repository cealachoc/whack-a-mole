import React, { useEffect, useState } from "react"
import './Styles/Holes.css'

const Holes = () => {
  const holeCount = 6;

  return (
    <div className="holes-container">
      {Array.from({ length: holeCount }).map((_, index) => (
        <div key={index} className="hole"></div>
      ))}
    </div>
  );
}

export default Holes;
