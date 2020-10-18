import React from 'react'

const PortfolioContainer = props => {
  let name = props.name

  return(
    <ul className='textbox'>
      <li>
        {name}
      </li>
      <li>
        Description Goes Here
      </li>
    </ul>
  )
}

export default PortfolioContainer
