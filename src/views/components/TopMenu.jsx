import React, { Component } from 'react';

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="topmenu" className="menu top">
        <button 
          className="btn none"
          onClick={this.props.toggleMenu}
        ><i className="xi-bars"></i></button>
        <div className="title">슈퍼레어</div>
        <button className="btn none"><i className="xi-search"></i></button>
      </nav>
    )
  }
}