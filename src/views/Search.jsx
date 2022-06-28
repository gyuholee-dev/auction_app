import React, { useEffect, useState } from 'react';

import { 
  TopMenu,
  Main,
} from './components';

export default function Search(props) {

  const {
    page = 'search',
    title = '검색결과',
    query = null,
  } = props;

  return (
    <div id="page-search">
      <TopMenu 
        title={title} page={page} query={query}
      />
      <Main page={page}/>
    </div>
  )
}