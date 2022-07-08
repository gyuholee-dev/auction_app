import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { Header, Main, Footer } from '@containers';
import { App } from '@app';

const store = createSlice({
  name: 'myservice',
  initialState : {
    page: 'myservice',
    title: '나의 슈퍼레어',
  },
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const MyService = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.myservice);
  },
  elem: () => {
    const state = MyService.getState();
    const { page, title } = state;
    const { setSubTitle } = App.actions;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSubTitle(title));
    }, []);

    return (
      <div id='page-myservice' className='slide'>
        <Header.elem {...state} />
        <Main.elem {...state} />
        <Footer.elem {...state} />
      </div>
    )
  }
}