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

export const HeaderStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.header);
  },
  actions: {
    ...store.actions,
  }
}

export default function Header(props) {
  const { page } = props;
  const { category = null, query = null } = useParams();

  return (
    <header>
      <TopMenu {...props} />
      {((page === 'search') && (category || query)) && <CategoryTab page={page}/>}
      {(page === 'myauction') && <CategoryTab page={page}/>}
    </header>
  )
}
