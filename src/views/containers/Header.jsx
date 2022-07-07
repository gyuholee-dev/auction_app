import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { 
  TopMenu,
  CatMenu,
} from '@components';

const store = createSlice({
  name: 'header',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const Header = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.home);
  },
  elem: (props) => {
    const { page } = props;
    const { category = null, query = null } = useParams();

    return (
      <header>
        <TopMenu.elem {...props} />
        {((page === 'search') && (category || query)) && <CatMenu.elem />}
      </header>
    )
  }
}