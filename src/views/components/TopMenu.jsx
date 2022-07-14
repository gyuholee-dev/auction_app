import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { SideMenuStore } from './SideMenu';

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
        <button className="btn none"
          onClick={()=>navigate('/notify')}>
          <i className="xi-bell-o"></i>
        </button>
      )
    case 'setting':
      return (
        <button className="btn none"
          onClick={()=>navigate('/setting')}>
          <i className="xi-cog"></i>
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

export const TopMenuStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.topMenu);
  },
  actions: {
    ...store.actions,
  }
}

export default function TopMenu(props) {
  const { page, title } = props;
  const { category = null, query = null } = useParams();
  const { toggleOpen } = SideMenuStore.actions;
  const dispatch = useDispatch();

  const ButtonLeft = () => {
    switch (page) {
      case 'home':
        return <ButtonTopMenu type='menu' onClick={()=>dispatch(toggleOpen())} />
      case 'notfound':
        return <ButtonTopMenu type='back'/>
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
      case 'myservice':
        return <ButtonTopMenu type='setting' />
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