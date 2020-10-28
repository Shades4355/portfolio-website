import React from 'react'

const PortfolioContainer = props => {
  let name = props.name
  let description = props.description
  let url = props.url

  return(
    <ul className='textbox2'>
      <li>
        <h3>
          <a href={url}>{name}</a>
        </h3>
      </li>
      <li>
        <strong>{description}</strong>
      </li>
    </ul>
  )
}

export default PortfolioContainer
