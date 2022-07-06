import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const store = createSlice({
  name: 'bottomMenu',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const BottomMenu = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.bottomMenu);
  },
  elem: () => {
    const navigate = useNavigate();
    return (
      <nav id="bottommenu" className="menu bottom">
        <button className="btn none"
          onClick={() => navigate('/')}>
          <i className="xi-home-o"></i>
          <span>홈</span>
        </button>
        <button className="btn none"
          onClick={() => navigate('/search/games')}>
          <i className="xi-document"></i>
          <span>카테고리</span>
        </button>
        <button className="btn none"
          onClick={() => navigate('/auction')}>
          <i className="xi-gift-o"></i>
          <span>나의 경매</span>
        </button>
        <button className="btn none"
          onClick={() => navigate('/mypage')}>
          <i className="xi-user-o"></i>
          <span>나의 슈퍼레어</span>
        </button>
      </nav>
    )
  }
}