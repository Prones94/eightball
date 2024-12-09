import React from 'react'
import './Box.css'

const Box = ({ color, isChanged }) => {
  return (
    <div className='Box' style={{ backgroundColor: color}}>
    {isChanged && <span className='changed-text'>changed!</span>}
    </div>
  )
}

export default Box