import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { 
  TopMenu,
  CategoryTab,
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
    return useSelector(state => state.header);
  },
  elem: (props) => {
    const { page } = props;
    const { category = null, query = null } = useParams();

    return (
      <header>
        <TopMenu.elem {...props} />
        {((page === 'search') && (category || query)) && <CategoryTab.elem page={page}/>}
        {(page === 'myauction') && <CategoryTab.elem page={page}/>}
      </header>
    )
  }
}
