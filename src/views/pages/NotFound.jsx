import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { Header, Footer } from '@containers';
import { HeadStore } from '/src/Head';

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

export const NotFoundStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.notfound);
  },
  actions: {
    ...store.actions,
  }
}

export default function NotFound() {
  const state = NotFoundStore.getState();
  const { page, title, message } = state;
  const { setSubTitle } = HeadStore.actions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTitle(title));
  }, []);

  return (
    <div id='page-notfound' className='slide'>
      <Header {...state} />
      <main>
        <section id="notfound">
          <p>{message}</p>
          <img src="images/cording_cat.gif" />
        </section>
      </main>
      <Footer {...state} />
    </div>
  )
}