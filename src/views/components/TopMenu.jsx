import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { SideMenu } from '@components';
import { App } from '@app';

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
      )
    case 'search':
      return (
        <button className="btn none"
          onClick={()=>navigate('/search')}>
          <i className="xi-search"></i>
        </button>
      )
    case 'notify':
      return (
        // onClick={()=>navigate('/notify')}
        <button className="btn none">
          <i className="xi-bell-o"></i>
        </button>
      )
    case 'back':
      return (
        <button className="btn none"
          onClick={()=>navigate(link?link:-1)}>
          <i className="xi-angle-left"></i>
        </button>
      )
  }
}

// ------------------------------------------------------------

const store = createSlice({
  name: 'topMenu',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const TopMenu = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.topMenu);
  },
  elem: (props) => {
    const { page, title } = props;
    const { category = null, query = null } = useParams();
    const { toggleOpen } = SideMenu.actions;
    const dispatch = useDispatch();

    const ButtonLeft = () => {
      switch (page) {
        case 'home':
          return <ButtonTopMenu type='menu' onClick={()=>dispatch(toggleOpen())} />
        default:
          return <ButtonTopMenu type='back' link={'/'}/>
      }
    }
    const CenterBlock = () => {
      switch (page) {
        case 'search':
          return (
            <div className="seachbox">
              <input type="text" name="search" placeholder="검색어를 입력하세요" autoComplete="off" defaultValue={query}/>
            </div>
          );
        default:
          return <div className={`title ${(page==='home')?'center':''}`}>{title}</div>
      }
    }
    const ButtonRight = () => {
      switch (page) {
        case 'home':
          return <ButtonTopMenu type='search' />
        case 'myauction':
          return <ButtonTopMenu type='notify' />
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