import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {

  render() {
    return (
      <div className='home'>
          <div className='homeroof'></div>
          <div className='homewindowleft'></div>
          <div className='homewindowright'></div>
          <div className='homedoor'></div>
          <div className='homechimney'></div>
          <div className='homesmoke'></div>
      </div>
    )
  }
}

export default Home;