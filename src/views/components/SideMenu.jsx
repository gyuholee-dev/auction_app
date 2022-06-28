import React from 'react';

export default function SideMenu(props) {

  const {sideMenu, toggleMenu} = props;
  const menuClass = sideMenu?'open':'close';

  return (
    <aside>
      <nav id="sidemenu" className={menuClass}>
        <div className="header">
          <div className="user"></div>
          <button className="btn none close" onClick={toggleMenu}>
            <i className="xi-close"></i>
          </button>
        </div>
      </nav>
    </aside>
  );
}