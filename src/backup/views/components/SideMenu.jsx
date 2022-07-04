import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export function toggleSideMenu() {
  const [sideMenu, setSideMenu] = useRecoilState(SideMenu.state);
  setSideMenu({...sideMenu, open: !sideMenu.open});
}

export const SideMenu = {
  state: atom({
    key: 'sideMenuState',
    default: {
      open: false,
    }
  }),
  toggle: () => {
    const [sideMenu, setSideMenu] = useRecoilState(SideMenu.state);
    setSideMenu({...sideMenu, open: !sideMenu.open});
  },
  elem: () => {
    const sideMenu = useRecoilValue(SideMenu.state);
    const menuClass = sideMenu.open?'open':'close';
    return (
      <aside>
        <nav id="sidemenu" className={menuClass}>
          <div className="header">
            <div className="user"></div>
            <button className="btn none close" onClick={SideMenu.toggle}>
              <i className="xi-close"></i>
            </button>
          </div>
        </nav>
      </aside>
    )
  }
}