import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { 
  BottomMenu,
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
    return useSelector(state => state.home);
  },
  elem: (props) => {
    const { page } = props;
    return (
      <footer>
        { page === 'home' && <BottomMenu.elem /> }
      </footer>
    )
  }
}
