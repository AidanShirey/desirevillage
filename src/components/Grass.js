import React, { Component } from 'react'
import Home from './Home'
import './Grass.css'
import Destination from './Destination'

export class Grass extends Component {
  render() {
    
    return (
      <div className='fullscreen sunny'>
          <Destination reflink='https://aidanshirey.github.io/' refname='Personal Website'/>
      </div>
    )
  }
}

export default Grass