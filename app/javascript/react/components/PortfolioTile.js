import React from 'react'

const PortfolioContainer = props => {
  let name = props.name
  let description = props.description
  let url = props.url

  return(
    <div className='textbox'
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="3000"
    >
      <ul>
        <h3>
          <a href={url}>{name}</a>
        </h3>
      </ul>
      <ul>
        <strong>{description}</strong>
      </ul>
    </div>
  )
}

export default PortfolioContainer
