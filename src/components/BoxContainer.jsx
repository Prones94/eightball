import React, { useState } from "react";
import Box from "./Box";
import "./BoxContainer.css";

const BoxContainer = ({ numBoxes = 16, colors = ["red", "blue", "green", "yellow", "purple", "orange", "teal", "pink"] }) => {
  const [boxColors, setBoxColors] = useState(
    Array.from({ length: numBoxes }, () => colors[Math.floor(Math.random() * colors.length)])
  );

  const [changedIndex, setChangedIndex] = useState(null);

  const changeRandomBoxColor = () => {
    const randomBoxIndex = Math.floor(Math.random() * numBoxes);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const updatedColors = [...boxColors];
    updatedColors[randomBoxIndex] = randomColor;

    setBoxColors(updatedColors);
    setChangedIndex(randomBoxIndex);
  };

  return (
    <div>
      <div className="BoxContainer">
        {boxColors.map((color, index) => (
          <Box key={index} color={color} isChanged={index === changedIndex} />
        ))}
      </div>
      <button className="change-btn" onClick={changeRandomBoxColor}>
        Change
      </button>
    </div>
  );
};

export default BoxContainer;
