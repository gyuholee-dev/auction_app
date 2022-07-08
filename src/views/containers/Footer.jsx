import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { 
  BottomMenu,
  NoticeSlide,
  InfoMenu,
} from '@components';
import { App } from '@app';

const store = createSlice({
  name: 'footer',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const Footer = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.footer);
  },
  elem: (props) => {
    const { page } = props;
    return (
      <footer>
        { page === 'home' && <BottomMenu.elem /> }
        { page === 'myservice' && <NoticeSlide.elem /> }
        { page === 'myservice' && <InfoMenu.elem /> }
      </footer>
    )
  }
}
