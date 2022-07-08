import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const store = createSlice({
  name: 'infoMenu',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const InfoMenu = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.infoMenu);
  },
  elem: () => {
    return (
      <nav id="infomenu" className="menu bottom">
        <Link to="/myservice">이용약관</Link>
        <span className="sep">|</span>
        <Link to="/myservice">수수료 안내</Link>
        <span className="sep">|</span>
        <Link to="/myservice">개인정보취급방침</Link>
      </nav>
    )
  }
}