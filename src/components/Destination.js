import React, { Component } from 'react'
import Home from './Home'
import './Destination.css'

export class Destination extends Component {
    constructor(props){
        super(props);
        this.reflink = React.createRef();
        this.refname = this.props.refname;
    }
  
    render() {
    return (
      <a className='destination' href={this.reflink} target="_blank" rel="noopener noreferrer"><Home/><div className='destinationname'>{this.refname}</div></a>
    )
  }
}

export default Destination