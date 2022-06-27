import React, { useEffect, useState } from 'react';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  // Main,
  BottomMenu,
} from './components';

export default function NotFound(props) {
  
  const { 
    title = `😢 404 NOT FOUND 😢`, 
    message = `아직 안만들었습니다...` 
  } = props;

  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const open = !sideMenu;
    setSideMenu(open);
  }

  return (
    <div id="page-notfound">
      <Dimmer dimm={sideMenu} toggle={toggleMenu}/>
      <SideMenu 
        sideMenu={sideMenu}
        toggleMenu={toggleMenu}
      />
      <TopMenu toggleMenu={toggleMenu}/>
      <main>
        <section id="notfound">
          <h1 className="title">{title}</h1>
          <p>{message}</p>
          <img src="images/cording_cat.gif" />
        </section>
      </main>
      <BottomMenu />
    </div>
  );
}