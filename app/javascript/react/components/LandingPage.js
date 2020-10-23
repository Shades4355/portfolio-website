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
        <p>
          I started my coding journey with Learn Ruby the Hard Way, before signing up for Launch Academy's Coding Bootcamp.
        </p>
        <p>
          Launch Academy's Coding Bootcamp course was a wonderful learning experience for me. I learned more about Ruby, I learned JavaScript, and I learned both the Rails and React frameworks. I also learned about Object Oriented Programming, and Pair Programming. Most of this was learned while working remotely, due to the COVID pandemic shutting down in-person classes after only one week together. Most importantly, Launch taught me how to think about code, not just how to write it.
        </p>
        <p>
          My specialties are: Ruby, JavaScript, SCSS, and HTML
        </p>
        <p>
          With a special interest in: Ruby and Python
        </p>
        <p>
          My projects can be seen on my <a href='/portfolio'>Portfolio</a> page.
        </p>
        <br />
        <p>
          <a href='https://game-grades.herokuapp.com/'>‘Game Grades’</a> - a Group Assignment from Launch - was, first and foremost, an exercise in working on a team; where managers had to approve all Pull Requests; and where our teammates were working on separate aspects of our project, thus requiring clear communication during our meetings.
        </p>
        <p>
          <a href='https://habit-hero.herokuapp.com/'>‘Habit Quest’</a> - my Breakable Toy for Launch; my Senior Project, if you will - was my first solo full-stack project. Whereas the the group project assignment specified it had to be a review site, I had free reign to decide what my Breakable Toy would be.
        </p>
        <p>
          ‘Habit Quest’ allows logged-in users to create and edit habits they want to track; assigning each habit a score from -5 to 5, where a negative score represents a habit you wish to break, and a positive score represents a habit you wish to form or maintain. Once created, you can track your daily habits simply by clicking on said habit’s name. Once tracked, you can see your score for this month through the past 3 months as a line graph on your user profile page.
        </p>
      </div>
    </div>
  )
}

export default LandingPage
