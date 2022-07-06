import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { App } from '../App';
import { TopMenu } from './components';

const store = createSlice({
  name: 'notfound',
  initialState : {},
  reducers: {}
});

export const NotFound = {
  actions: store.actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.notfound);
  },
  elem: (props) => {
    const { 
      page = 'notfound',
      title = `404 NOT FOUND`, 
      message = `아직 안만들었습니다...` 
    } = props;
    const { setPage, setTitle } = App.actions;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setPage(page));
      dispatch(setTitle(title));
    }, []);

    return (
      <div id={`page-${page}`} className='slide'>
        <header>
          <TopMenu.elem title={title} page={page}/>
        </header>
        <main>
          <section id="notfound">
            <p>{message}</p>
            <img src="images/cording_cat.gif" />
          </section>
        </main>
        <footer></footer>
      </div>
    )
  }
}