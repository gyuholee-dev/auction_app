import React, { useEffect, useState } from 'react';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  CatMenu,
  Main,
  BottomMenu,
} from './components';

export default function Category(props) {

  const {
    page = 'category',
    title = '검색결과',
  } = props;
  
  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const open = !sideMenu;
    setSideMenu(open);
  }

  return (
    <div id="page-category">
      <Dimmer dimm={sideMenu} toggle={toggleMenu}/>
      <SideMenu 
        sideMenu={sideMenu}
        toggleMenu={toggleMenu}
      />
      <TopMenu title={title} page={page} toggleMenu={toggleMenu}/>
      <CatMenu title={title} page={page}/>  
      <Main page={page}/>
      {/* <BottomMenu /> */}
    </div>
  )
}
