import React, { useEffect, useState } from 'react';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  BottomMenu,
} from './components';

export default function NotFound(props) {
  
  const { 
    page = 'notfound',
    pageId = 'page-notfound',
    title = `404 NOT FOUND`, 
    message = `아직 안만들었습니다...` 
  } = props;

  return (
    <div id={pageId} className='slide'>
      <header>
        <TopMenu title={title} page={page}/>
      </header>
      <main>
        <section id="notfound">
          <p>{message}</p>
          <img src="images/cording_cat.gif" />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}