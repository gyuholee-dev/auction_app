import React, { Component } from 'react';

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const toggleMenu = this.props.toggleMenu;

    return (
      <nav id="topmenu" className="menu top">
        <button className="btn none" onClick={toggleMenu}>
          <i className="xi-bars"></i>
        </button>
        <div className="title">슈퍼레어</div>
        <button className="btn none"><i className="xi-search"></i></button>
      </nav>
    )
  }
}