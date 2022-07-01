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


  switch (page) {
    case 'home':
      return (
        <main>
          <ImgSlide />
          <ItemList />
        </main>
      )
    case 'search':
      return (
        <main>
          <SearchHistory />
        </main>
      )
    case 'category':
      return (
        <main>
          <ItemList order={true} />
        </main>
      )
  }
}