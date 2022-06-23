import React, { Component } from 'react';

import SideMenu from './_sidemenu.jsx';
import TopMenu from './_topmenu.jsx';
import Main from './_main.jsx';
import BottomMenu from './_bottommenu.jsx';

export default function Home() {
  // const pages = [];
  // pages.push(<SideMenu />);
  // pages.push(<TopMenu />);
  // pages.push(<Main />);
  // pages.push(<BottomMenu />);
  // return pages;
  return [
    <SideMenu key={0}/>,
    <TopMenu key={1}/>,
    <Main key={2}/>,
    <BottomMenu key={3}/>
  ]
}