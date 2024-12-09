import React, { useState } from "react";
import Box from "./Box";
import "./BoxContainer.css";

const BoxContainer = () => {
  const NUM_BOXES = 16;
  const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "teal", "pink"];

  const [boxColors, setBoxColors] = useState(
    Array.from({ length: NUM_BOXES }, () => COLORS[Math.floor(Math.random() * COLORS.length)])
  );

  const changeRandomBoxColor = () => {
    const randomBoxIndex = Math.floor(Math.random() * NUM_BOXES); 
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const updatedColors = [...boxColors];
    updatedColors[randomBoxIndex] = randomColor;
    setBoxColors(updatedColors);
  };

  return (
    <div>
      <div className="BoxContainer">
        {boxColors.map((color, index) => (
          <Box key={index} color={color} />
        ))}
      </div>
      <button className="change-btn" onClick={changeRandomBoxColor}>
        Change
      </button>
    </div>
  );
};

export default BoxContainer;
