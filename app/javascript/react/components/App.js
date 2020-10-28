import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './LandingPage'
import PortfolioPage from './PortfolioPage'
import AboutMe from './AboutMe'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/portfolio' component={PortfolioPage} />
        <Route exact path='/about-me' component={AboutMe} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
