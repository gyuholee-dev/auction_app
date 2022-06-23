import React, { Component } from 'react';

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <aside id="sidemenu">
        <div className="dimm"></div>
        <nav id="homemenu">
          <div className="header">
            <div className="user"></div>
            <button className="btn none close"><i className="xi-close"></i></button>
          </div>
        </nav>
      </aside>
    )
  }
}