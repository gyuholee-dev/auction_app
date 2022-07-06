import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { 
  Dimmer,
  SideMenu,
} from '@components';
import { Header, Main, Footer } from '@containers';
import { App } from '@app';

const store = createSlice({
  name: 'home',
  initialState : {
    page: 'home',
    title: '슈퍼레어',
  },
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const Home = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.home);
  },
  elem: () => {
    const state = Home.getState();
    const { setSubTitle } = App.actions;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSubTitle(''));
    }, []);

    return (
      <div id='page-home' className='fade'>
        <Dimmer.elem />
        <SideMenu.elem />
        <Header.elem {...state} />
        <Main.elem {...state} />
        <Footer.elem {...state} />
      </div>
    )
  }
}
