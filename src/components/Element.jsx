import React from 'react'
import "./element.css"

const Element = (props) => {
  return (
    <div className='cont'>
      <div className="img"><img src={props.img} alt="lost" /></div>
      <div className="head">{props.title}</div>
      <div className="sum">{props.desc}</div>
    </div>
  )
}

export default Element
