import React from 'react'
import { slide1, slide2, slide3 } from '../assets'

export default function Home() {
  return (
    <div className='home'>
      <div className="home-img">
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
      </div>
    </div>
  )
}