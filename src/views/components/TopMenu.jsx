import React, { useEffect, useState } from 'react';

import { useScroll } from '../customhooks';

export default function TopMenu(props) {

  const {toggleMenu} = props;

  const { scrollY, scrollDirection } = useScroll();
  const [menuClass, setMenuClass] = useState('menu top');

  function setClass() {
    if (scrollDirection === 'up') {
      if (scrollY < 56) {
        setMenuClass('menu top');
      } else {
        setMenuClass('menu top hide');
      }
    } else if (scrollDirection === 'down') {
      setMenuClass('menu top show');
    }
  }

  useEffect(() => {
    setClass();
  });

  return (
    <nav id="topmenu" className={menuClass}>
      <button className="btn none" onClick={toggleMenu}>
        <i className="xi-bars"></i>
      </button>
      <div className="title">슈퍼레어</div>
      <button className="btn none"><i className="xi-search"></i></button>
    </nav>
  );
}