import React from 'react'
import { cat2, cat3, cat4, cat5, cat6, cat7 } from '../assets'

export default function Catagory() {
  return (
    <div className='catagory'>
      <span><b>What's on your mind?</b></span>
      <ul className="container">
        <li>
            <img src={cat2}/>
            <h3>Biriyano</h3>
        </li>
        <li>
            <img src={cat3}/>
            <h3>Burger</h3>
        </li>
        <li>
            <img src={cat4}/>
            <h3>Roll</h3>
        </li>
        <li>
            <img src={cat5}/>
            <h3>Sandwich</h3>
        </li>
        <li>
            <img src={cat6}/>
            <h3>Chinees</h3>
        </li>
        <li>
            <img src={cat7}/>
            <h3>North</h3>
        </li>
      </ul>
    </div>
  )
}