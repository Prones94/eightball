import React, { useState } from 'react';
import './EightBall.css'

const Eightball = ({answers}) => {
  const [message, setMessage] = useState("Think of a Question")
  const [color, setColor] = useState("black")
  const [counts, setCounts] = useState({ green: 0, goldenrod: 0, red: 0})

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * answers.length)
    const { msg, color } = answers[randomIdx]
    setMessage(msg)
    setColor(color)
    setCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1
    }))
  }

  const handleReset= () => {
    setMessage("Think of a Question")
    setColor("black")
    setCounts({green: 0, goldenrod: 0, red: 0})
  }

  return (
    <>
    <div
      className='EightBall'
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <p>{message}</p>
    </div>
    <button className="reset-btn" onClick={handleReset}>
      Reset
    </button>
    <div className="stats">
      <p>Green: {counts.green}</p>
      <p>Goldenrod: {counts.goldenrod}</p>
      <p>Red: {counts.red}</p>
    </div>
    </>
  )
}

export default Eightball