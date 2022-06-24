import React, { Component } from 'react';

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    const toggleMenu = this.props.toggleMenu;
    const dimmClass = this.props.modal?'dimm show active':'dimm';
    const menuClass = this.props.open?'open':'close';

    return (
      <aside id="sidemenu">
        <div className={dimmClass} onClick={toggleMenu}></div>
        <nav id="homemenu" className={menuClass}>
          <div className="header">
            <div className="user"></div>
            <button className="btn none close" onClick={toggleMenu}>
              <i className="xi-close"></i>
            </button>
          </div>
        </nav>
      </aside>
    )
  }
}