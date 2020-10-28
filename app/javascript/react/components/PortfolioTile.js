import React from 'react'

const PortfolioContainer = props => {
  let name = props.name
  let description = props.description
  let url = props.url

  return(
    <ul className='textbox3'>
      <ul>
        <h3>
          <a href={url}>{name}</a>
        </h3>
      </ul>
      <ul>
        <strong>{description}</strong>
      </ul>
    </ul>
  )
}

export default PortfolioContainer
