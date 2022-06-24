import React, { Component } from 'react';

import { 
  SideMenu, 
  TopMenu,
  Main,
  BottomMenu,
} from './components';

export default function Home() {
  return (
    <>
      <SideMenu />
      <TopMenu />
      <Main />
      <BottomMenu />
    </>
  )
}