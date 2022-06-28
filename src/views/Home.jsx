import React, { useEffect, useState } from 'react';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  Main,
  BottomMenu,
} from './components';

export default function Home(props) {

  const {
    title = `슈퍼레어`,
  } = props;
  
  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const open = !sideMenu;
    setSideMenu(open);
  }

  return (
    <div id="page-home">
      <Dimmer dimm={sideMenu} toggle={toggleMenu}/>
      <SideMenu 
        sideMenu={sideMenu}
        toggleMenu={toggleMenu}
      />
      <TopMenu title={title} path={'home'} toggleMenu={toggleMenu}/>
      <Main />
      <BottomMenu />
    </div>
  )
}
