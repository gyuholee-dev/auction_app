import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { App } from '/src/App';
import { SideMenu, toggleSideMenu } from './SideMenu';
import cn from 'classnames';

const ButtonTopMenu = (props) => {
  const {
    type = 'menu',
    onClick,
    link,
  } = props;
  const navigate = useNavigate();

  switch (type) {
    case 'menu':
      return (
        <button className="btn none" onClick={onClick}>
          <i className="xi-bars"></i>
        </button>
      );
    case 'search':
      return (
        <button className="btn none"
          onClick={()=>navigate('/search')}>
          <i className="xi-search"></i>
        </button>
      );
    case 'back':
      return (
        <button className="btn none"
          onClick={()=>navigate(link?link:-1)}>
          <i className="xi-angle-left"></i>
        </button>
      );
  }
}


export const TopMenu = {

  elem: (props) => {
    const { 
      category = null,
      query = null,
    } = props;

    const appState = useRecoilValue(App.state);
    const title = appState.title;
    const page = appState.page;

    // const [ sideMenu, setSideMenu ] = useRecoilState(SideMenu.state);

    // function toggleSideMenu() {
    //   setSideMenu();
    // }

    const ButtonLeft = () => {
      switch (page) {
        case 'home':
          return <ButtonTopMenu type='menu' onClick={toggleSideMenu} />
        default:
          return <ButtonTopMenu type='back' link={'/'}/>
      }
    }

    const ButtonRight = () => {
      switch (page) {
        case 'home':
          return <ButtonTopMenu type='search' />
      }
    }

    const CenterBlock = () => {
      switch (page) {
        case 'category':
        case 'search':
          return (
            <div className="seachbox">
              <input type="text" name="search" placeholder="검색어를 입력하세요" autoComplete="off" defaultValue={query}/>
            </div>
          );
        default:
          return <div className={cn('title', {'center':page=='home'})}>{title}</div>
      }
    }

    return (
      <nav id="topmenu" className="menu top">
        <ButtonLeft />
        <CenterBlock />
        <ButtonRight />
      </nav>
    )
  }
}