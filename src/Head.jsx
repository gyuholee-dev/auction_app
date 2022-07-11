import React, { useEffect, useState, useRef } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import { appConfig } from '/configs/app.config';

const store = createSlice({
  name: 'head',
  initialState : {
    title: appConfig.title,
    subTitle: appConfig.subTitle,
    theme: appConfig.theme,
  },
  reducers: {
    setTitle: (state, action) => { state.title = action.payload },
    setSubTitle: (state, action) => { state.subTitle = action.payload },
    setTheme: (state, action) => { state.theme = action.payload },
  }
});

const actions = {
  ...store.actions,
  setSiteTitle: () => {
    return (dispatch, getState) => {
      const { title, subTitle } = getState().head;
      const siteTitle = `${title}${subTitle?' : '+subTitle:''}`;
      document.head.querySelector('title').innerText = siteTitle;
    }
  }
}

export const Head = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.head);
  },
  elem: () => {
    const { title, subTitle, theme } = Head.getState();
    const { setTitle, setSubTitle, setTheme, setSiteTitle } = Head.actions;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSiteTitle());
    }, [title, subTitle]);

    useEffect(() => {
      const themeClass = `theme-${theme}`;
      document.body.className = themeClass;
    }, [theme]);

    return;
  }
}

