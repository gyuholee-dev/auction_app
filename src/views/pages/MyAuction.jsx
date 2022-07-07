import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { Header, Main, Footer } from '@containers';
import { App } from '@app';

const store = createSlice({
  name: 'myauction',
  initialState : {
    page: 'myauction',
    title: '나의 경매',
    category: '0',
  },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload },
  }
});

const actions = {
  ...store.actions,
}

export const MyAuction = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.myauction);
  },
  elem: () => {
    const state = MyAuction.getState();
    const { page, title } = state;
    const { setSubTitle } = App.actions;
    const { setCategory } = MyAuction.actions;
    const { category = null } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSubTitle(title));
    }, []);
    useEffect(() => {
      dispatch(setCategory(category));
    }, [category]);

    return (
      <div id='page-myauction' className='slide'>
        <Header.elem {...state} />
        <Main.elem {...state} />
        <Footer.elem {...state} />
      </div>
    )
  }
}