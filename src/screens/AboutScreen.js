import React, { Component } from 'react'
import './AboutScreen.css';
export default class AboutScreen extends Component {

    constructor(props){
        super(props);
        this.state={ name:'oussama'};
    }


  render() {
    return (
      <div>AboutScreen {this.state.name} <h1>{this.props.email}</h1>
      <button onClick={()=>{ this.setState({name:'azertrgf'}) }}>click</button>
      </div>
    )
  }
}
