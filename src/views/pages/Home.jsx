import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { 
  Dimmer,
  SideMenu,
} from '@components';
import { Header, Main, Footer } from '@containers';
import { HeadStore } from '/src/Head';

const store = createSlice({
  name: 'home',
  initialState : {
    page: 'home',
    title: '슈퍼레어',
  },
  reducers: {}
});

export const HomeStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.home);
  },
  actions: {
    ...store.actions,
  }
}

export default function Home() {
  const state = HomeStore.getState();
  const { setSubTitle } = HeadStore.actions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTitle(''));
  }, []);

  return (
    <div id='page-home' className='fade'>
      <Dimmer />
      <SideMenu />
      <Header {...state} />
      <Main {...state} />
      <Footer {...state} />
    </div>
  )
}
