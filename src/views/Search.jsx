import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { App } from '@app';
import { 
  TopMenu,
  CatMenu,
  ItemList,
  SearchHistory,
} from './components';

const store = createSlice({
  name: 'search',
  initialState : {
    category: 'all',
    query: null,
  },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload },
    setQuery: (state, action) => { state.query = action.payload },
  }
});

export const Search = {
  actions: store.actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.search);
  },
  elem: (props) => {
    const { page = 'search', title = '검색결과' } = props;
    const { setPage, setTitle } = App.actions;
    const { setCategory, setQuery } = Search.actions;
    const { category = 'all', query } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setPage(page));
      dispatch(setTitle(title));
    }, []);
    useEffect(() => {
      dispatch(setCategory(category));
      dispatch(setQuery(query));
    }, [category, query]);

    if (!category && !query) {
      return (
        <div id={`page-${page}`} className='slide'>
          <header>
            <TopMenu.elem title={title} page={page} query={query}/>
          </header>
          <main>
            <SearchHistory.elem />
          </main>
          <footer></footer>
        </div>
      )
    } else {
      return (
        <div id={`page-${page}-result`} className='slide'>
          <header>
            <TopMenu.elem title={title} page={page} query={query}/>
            <CatMenu.elem title={title} page={page} category={category}/>
          </header>
          <main>
            <ItemList.elem order={true} category={category} query={query} />
          </main>
          <footer></footer>
        </div>
      )
    }
  }
}