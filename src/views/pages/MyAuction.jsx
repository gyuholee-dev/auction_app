import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { Header, Main, Footer } from '@containers';
import { HeadStore } from '/src/Head';

const store = createSlice({
  name: 'myauction',
  initialState : {
    page: 'myauction',
    title: '나의 경매',
    category: '0',
  },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload },
  }
});

export const MyAuctionStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.myauction);
  },
  actions: {
    ...store.actions,
  }
}

export default function MyAuction() {
  const state = MyAuctionStore.getState();
  const { page, title } = state;
  const { setSubTitle } = HeadStore.actions;
  const { setCategory } = MyAuctionStore.actions;
  const { category = null } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTitle(title));
  }, []);
  useEffect(() => {
    dispatch(setCategory(category));
  }, [category]);

  return (
    <div id='page-myauction' className='slide'>
      <Header {...state} />
      <Main {...state} />
      <Footer {...state} />
    </div>
  )
}