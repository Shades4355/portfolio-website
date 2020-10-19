import React from 'react'

import Image from '../images/shades.png'

export const LandingPage = (props) => {
  return (
    <div className='body'>
      <h2 className='center-text'>
        Hello and Welcome!
      </h2>
      <img
<<<<<<< HEAD
        src={Image}
=======
        src="./assets/shades.png"
>>>>>>> 1ca678b1d53b2040089d0e6573d54a6562876df7
        alt='Patrick "Shades", sitting in a car, smiling'
        className="center"
      />
      <div className="textbox">
        <p>
          My name is Patrick Wetzel-Meyers, but having grown up in a town and school system with many other Patricks my own age, I prefer to go by "Shades". I am a full-stack developer trained in the JavaScript and Ruby languages.
        </p>
        <p>
          I started my coding journey with Learn Ruby the Hard Way, before signing up for Launch Academy's Coding Bootcamp.
        </p>
        <p>
          Launch Academy's Coding Bootcamp course was a wonderful learning experience for me. I learned more about Ruby, I learned JavaScript, and I learned both the Rails and React frameworks. I also learned about Object Oriented Programming, and Pair Programming. Most of this was learned while working remotely, due to the COVID pandemic shutting down in-person classes after only one week together. Most importantly, Launch taught me how to think about code, not just how to write it.
        </p>
      </div>
    </div>
  )
}

export default LandingPage
