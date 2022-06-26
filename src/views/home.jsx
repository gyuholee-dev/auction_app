import React, { useState } from 'react';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  Main,
  BottomMenu,
} from './components';

export default function Home(props) {

  // const {sideMenu} = props;
  
  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const open = !sideMenu;
    setSideMenu(open);
  }

  return (
    <>
      <Dimmer dimm={sideMenu} toggle={toggleMenu}/>
      <SideMenu 
        sideMenu={sideMenu}
        toggleMenu={toggleMenu}
      />
      <TopMenu toggleMenu={toggleMenu}/>
      <Main />
      <BottomMenu />
    </>
  )
}
