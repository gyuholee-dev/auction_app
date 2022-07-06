import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { 
  ImgSlide,
  ItemList,
  SearchHistory,
} from '@components';
import { App } from '@app';

const store = createSlice({
  name: 'main',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const Main = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.home);
  },
  elem: (props) => {
    const { page } = props;
    const { category = null, query = null } = useParams();

    return (
      <main>
        {(page==='home')&&<ImgSlide.elem />}
        {((page === 'search') && (!category && !query)) 
          ? <SearchHistory.elem />
          : <ItemList.elem order={(page=='search')}/>}
      </main>
    )
  }
}
