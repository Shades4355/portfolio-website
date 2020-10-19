import React, { useEffect, useState } from 'react'

import PortfolioContainer from './PortfolioContainer'

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
    debugger
    let portfolioContainer = getPortfolio.map(project => {
      return(
        <PortfolioContainer
          key={project['id']}
          name={project["name"]}
          description={project['description']}
          url={project['url']}
        />
      )
    })

    return (
      <div>
        {portfolioContainer}
      </div>
    )
  } else {
      return(
        <div>
          We apologize; the github API seems to not be responding at the moment
        </div>
      )
    }
}

export default PortfolioPage
