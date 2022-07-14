import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { Header, Main, Footer } from '@containers';
import { HeadStore } from '/src/Head';

const store = createSlice({
  name: 'search',
  initialState : {
    page: 'search',
    title: '검색결과',
    category: '0',
    query: null,
  },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload },
    setQuery: (state, action) => { state.query = action.payload },
  }
});

export const SearchStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.search);
  },
  actions: {
    ...store.actions,
  }
}

export default function Search() {
  const state = SearchStore.getState();
  const { page, title } = state;
  const { setSubTitle } = HeadStore.actions;
  const { setCategory, setQuery } = SearchStore.actions;
  const { category = null, query = null } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTitle(title));
  }, []);
  useEffect(() => {
    dispatch(setCategory(category));
    dispatch(setQuery(query));
  }, [category, query]);

  const pageId = (!category && !query)?'page-search':'page-search-result';
  return (
    <div id={pageId} className='slide'>
      <Header.elem {...state} />
      <Main.elem {...state} />
      <Footer.elem {...state} />
    </div>
  )
}