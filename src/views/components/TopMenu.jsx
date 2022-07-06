import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { SideMenu } from './';

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


const store = createSlice({
  name: 'topMenu',
  initialState : {},
  reducers: {}
});

export const TopMenu = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.topMenu);
  },
  elem: (props) => {
    const { 
      title = '슈퍼레어', 
      page = null,
      category = null,
      query = null,
    } = props;

    const dispatch = useDispatch();

    const ButtonLeft = () => {
      switch (page) {
        case 'home':
          return <ButtonTopMenu type='menu' onClick={()=>dispatch(SideMenu.toggle())} />
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