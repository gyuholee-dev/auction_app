import React, { useEffect, useState } from 'react';

import { 
  TopMenu,
  CatMenu,
  Main,
} from './components';

export default function Category(props) {

  const {
    page = 'category',
    title = '검색결과',
    query = null,
  } = props;

  return (
    <div id="page-category" className='slide'>
      <TopMenu 
        title={title} page={page} query={query}
      />
      <CatMenu title={title} page={page}/>  
      <Main page={page}/>
    </div>
  )
}
