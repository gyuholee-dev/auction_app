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
    page = 'home',
    title = '슈퍼레어',
  } = props;
  
  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const open = !sideMenu;
    setSideMenu(open);
  }

  return (
    <div id="page-home" className='fade'>
      <Dimmer />
      <SideMenu />
      <TopMenu title={title} page={page}/>
      <Main page={page}/>
      <BottomMenu />
    </div>
  )
}
