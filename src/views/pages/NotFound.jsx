import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { Header, Footer } from '@containers';
import { App } from '@app';

const store = createSlice({
  name: 'notfound',
  initialState : {
    page: 'notfound',
    title: `404 NOT FOUND`, 
    message: `아직 안만들었습니다...` 
  },
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const NotFound = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.notfound);
  },
  elem: () => {
    const state = NotFound.getState();
    const { page, title, message } = state;
    const { setSubTitle } = App.actions;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSubTitle(title));
    }, []);

    return (
      <div id='page-notfound' className='slide'>
        <Header.elem {...state} />
        <main>
          <section id="notfound">
            <p>{message}</p>
            <img src="images/cording_cat.gif" />
          </section>
        </main>
        <Footer.elem {...state} />
      </div>
    )
  }
}