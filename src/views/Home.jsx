import React, { useEffect, useState } from 'react';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  ImgSlide,
  ItemList,
  BottomMenu,
} from './components';

export default function Home(props) {

  const {
    page = 'home',
    pageId = 'page-home',
    title = '슈퍼레어',
  } = props;

  return (
    <div id={pageId} className='fade'>
      <Dimmer />
      <SideMenu />
      <header>
        <TopMenu title={title} page={page}/>
      </header>
      <main>
        <ImgSlide />
        <ItemList />
      </main>
      <footer>
        <BottomMenu />
      </footer>
    </div>
  )
}
