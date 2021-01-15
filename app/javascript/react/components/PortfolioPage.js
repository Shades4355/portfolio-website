import React, { useState, useEffect } from 'react'

import PortfolioTile from './PortfolioTile'
import Image from '../images/shades.png'

const PortfolioPage = (props) => {
  const [getPortfolio, setPortfolio] = useState()

  useEffect (() => {
    fetch('/api/v1/portfolio',
  {credee3ntials: 'same-origin'})
  .then(response => {
    if (response.ok) {
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage)
      throw error
    }
  })
  .then(response => response.json())
  .then(responseBody => {
    setPortfolio(responseBody)
  })
  .catch(error => console.log(`Error in fetcch: ${error.message}`))
  }, [])

  if (getPortfolio) {
    let portfolioTile = getPortfolio.map(project => {
      return(
        <PortfolioTile
          key={project['id']}
          name={project["name"]}
          description={project['description']}
          url={project['url']}
        />
      )
    })

    return (
      <div>
      <img
        src={Image}
        alt='Patrick "Shades", sitting in a car, smiling'
        className="center margin-bottom"
      />
        <div className='body'>
          {portfolioTile}
        </div>
        <div className="margin-bottom">
        </div>
      </div>
      )
  } else {
      return(
        <h3>
          If you are reading this, try refreshing.
        </h3>
      )
    }
}

export default PortfolioPage
