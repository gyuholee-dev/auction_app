import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { Header, Main, Footer } from '@containers';
import { HeadStore } from '/src/Head';

const store = createSlice({
  name: 'myservice',
  initialState : {
    page: 'myservice',
    title: '나의 슈퍼레어',
  },
  reducers: {}
});

export const MyServiceStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.myservice);
  },
  actions: {
    ...store.actions,
  }
}

export default function MyService() {
  const state = MyServiceStore.getState();
  const { page, title } = state;
  const { setSubTitle } = HeadStore.actions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTitle(title));
  }, []);

  return (
    <div id='page-myservice' className='slide'>
      <Header {...state} />
      <Main {...state} />
      <Footer {...state} />
    </div>
  )
}