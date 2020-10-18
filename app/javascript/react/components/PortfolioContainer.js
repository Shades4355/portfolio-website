import React from 'react'

const PortfolioContainer = props => {
  let name = props.name
  let description = props.description
  let url = props.url

  return(
    <ul className='textbox'>
      <li>
        <a href={url}>{name}</a>
      </li>
      <li>
        {description}
      </li>
    </ul>
  )
}

export default PortfolioContainer
