import React,{useState,useContext} from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import './App.css'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

const App = () => {

  return (
    <>

      <BrowserRouter>

      <Route render={({location})=>(
      <TransitionGroup>
      <CSSTransition 
        key={location.key}
        timeout={300}
        classNames='fade'
      >


        <Switch location={location}>
          <Route exact path='/' component={Page1}/>
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/page3' component={Page3}/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
    )}/>
      </BrowserRouter>
    </>
  )
}

export default App
