import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

import {
  ImgSlide,
  ItemList,
  SearchHistory,
} from '../components';

// ------------------------------------------------------------

export default function Main(props) {

  const {
    page = 'home',
    title = '슈퍼레어',
  } = props;

  // return (
  //   <main>
  //     {page=='home'&&<ImgSlide />}
  //     {page=='category'&&<Condition />}
  //     {(page=='home'||page=='category')&&<ItemList />}
  //     {page=='search'&&<SearchHistory />}
  //   </main>
  // );
  if (page=='home') {
    return (
      <main>
        <ImgSlide />
        <ItemList />
      </main>
    );
  } else if (page=='category') {
    return (
      <main>
        <ItemList order={true}/>
      </main>
    ); 
  } else if (page=='search') {
    return (
      <main>
        <Routes>
          <Route path=":query" element={<ItemList order={true}/>} />
          <Route path="*" element={<SearchHistory />} />
        </Routes>
      </main>
    );
  }
}