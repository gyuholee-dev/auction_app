import React, { Component } from 'react';

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <aside id="sidemenu">
        <div className="dimm"></div>
        <nav id="homemenu"
          className={this.props.open ? 'open' : 'close'}
        >
          <div className="header">
            <div className="user"></div>
            <button className="btn none close"
              onClick={this.props.toggleMenu}
            ><i className="xi-close"></i></button>
          </div>
        </nav>
      </aside>
    )
  }
}