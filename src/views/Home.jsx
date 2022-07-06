import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { App } from '@app';
import { 
  Dimmer,
  SideMenu, 
  TopMenu,
  ImgSlide,
  ItemList,
  BottomMenu,
} from './components';

const store = createSlice({
  name: 'home',
  initialState : {},
  reducers: {}
});

export const Home = {
  actions: store.actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.home);
  },
  elem: (props) => {
    const { page = 'home', title = '슈퍼레어' } = props;
    const { setPage, setTitle } = App.actions;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setPage(page));
      dispatch(setTitle(title));
    }, []);

    return (
      <div id={`page-${page}`} className='fade'>
        <Dimmer.elem />
        <SideMenu.elem />
        <header>
          <TopMenu.elem title={title} page={page}/>
        </header>
        <main>
          <ImgSlide.elem />
          <ItemList.elem />
        </main>
        <footer>
          <BottomMenu.elem />
        </footer>
      </div>
    )
  }
}
