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
    page = 'notfound',
    title = `404 NOT FOUND`, 
    message = `아직 안만들었습니다...` 
  } = props;

  const [sideMenu, setSideMenu] = useState(false);

  function toggleMenu() {
    const open = !sideMenu;
    setSideMenu(open);
  }

  return (
    <div id="page-notfound" className='slide'>
      <TopMenu title={title} page={page}/>
      <main>
        <section id="notfound">
          <p>{message}</p>
          <img src="images/cording_cat.gif" />
        </section>
      </main>
    </div>
  );
}