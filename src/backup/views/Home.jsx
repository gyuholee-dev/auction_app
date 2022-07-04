import React, { useEffect, useState } from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  ImgSlide,
  ItemList,
  BottomMenu,
} from './components';

import { App } from '../App';

export const Home = {
  elem: () => {
    const [ app, setApp ] = useRecoilState(App.state);

    return (
      <div id='page-home' className='fade'>
        <Dimmer.elem />
        <SideMenu.elem />
        <header>
          <TopMenu.elem />
        </header>
        <main>
          <ImgSlide.elem />
          <ItemList.elem />
        </main>
        <footer>
          <BottomMenu.elem />
        </footer>
      </div>
    ) 
  }
}
