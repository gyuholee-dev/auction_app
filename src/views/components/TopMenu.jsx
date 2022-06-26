import React from 'react';

export default function TopMenu(props) {

  const {toggleMenu} = props;

  return (
    <nav id="topmenu" className="menu top">
      <button className="btn none" onClick={toggleMenu}>
        <i className="xi-bars"></i>
      </button>
      <div className="title">슈퍼레어</div>
      <button className="btn none"><i className="xi-search"></i></button>
    </nav>
  );
}