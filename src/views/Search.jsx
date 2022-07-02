import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import { Outlet } from 'react-router-dom';

import { 
  TopMenu,
  CatMenu,
  ItemList,
  SearchHistory,
} from './components';

export default function Search(props) {

  const {
    page = 'search',
    pageId = 'page-search',
    title = '검색결과',
  } = props;

  const {
    category = null,
    query = null,
  } = useParams();

  if (!category && !query) {
    return (
      <div id="page-search" className='slide'>
        <header>
          <TopMenu title={title} page={page} query={query}/>
        </header>
        <main>
          <SearchHistory />
        </main>
        <footer></footer>
      </div>
    )
  } else {
    return (
      <div id="page-search-result" className='slide'>
        <header>
          <TopMenu title={title} page={page} query={query}/>
          <CatMenu title={title} page={page} category={category}/>
        </header>
        <main>
          <ItemList order={true} category={category} query={query} />
        </main>
        <footer></footer>
      </div>
    )
  }
}
