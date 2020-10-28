import React from 'react'

import Image from '../images/shades.png'

export const LandingPage = (props) => {
  return (
    <div className='body'>
      <h2 className='center-text'>
        Hello and Welcome!
      </h2>
      <img
        src={Image}
        alt='Patrick "Shades", sitting in a car, smiling'
        className="center"
      />
      <div className="textbox">
        <p>
          My name is Patrick Wetzel-Meyers, but having grown up in a town and school system with many other Patricks my own age, I prefer to go by "Shades". I am a full-stack developer trained in the JavaScript and Ruby languages.
        </p>
        <br />
        <p>
          My specialties are: Ruby, JavaScript, SCSS, and HTML
        </p>
        <p>
          With a special interest in: Ruby and Python
        </p>
      </div>
    </div>
  )
}

export default LandingPage
