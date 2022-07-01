import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import { Outlet } from 'react-router-dom';

import { 
  TopMenu,
  Main,
} from './components';

export default function Search(props) {

  const {
    page = 'search',
    title = '검색결과',
  } = props;

  const {
    category = null,
    query = null,
  } = useParams();

  return (
    <div id="page-search" className='slide'>
      <TopMenu title={title} page={page} query={query}/>
      <Main page={page}/>
    </div>
  )
}
