import React from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { toggleSideMenu } from '/src/states';

export default function SideMenu(props) {

  // const {sideMenu, toggleMenu} = props;
  // const menuClass = sideMenu?'open':'close';

  const sideMenu = useSelector(state => state.sideMenu);
  const menuClass = sideMenu.open?'open':'close';

  const dispatch = useDispatch();
  function toggleMenu() {
    dispatch(toggleSideMenu());
  }

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