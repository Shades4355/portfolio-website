import React, { useState, useEffect } from 'react'

import PortfolioTile from './PortfolioTile'

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
      <div className='body'>
        {portfolioTile}
      </div>
    )
  } else {
      return(
        <h3>
          We apologize; the github API seems to not be responding at the moment. Please try again later.
        </h3>
      )
    }
}

export default PortfolioPage
