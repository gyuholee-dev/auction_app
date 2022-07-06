import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

const store = createSlice({
  name: 'catMenu',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const CatMenu = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.catMenu);
  },
  elem: (props) => {
    const { category, query } = useParams();
    return (
      <nav id="catmenu" className="menu top">
        <ul className="items">
          <li className={`item ${(category=='games')&&'active'}`}>
            <Link to={`/search/games${query?'/'+query:''}`}>게임</Link>
          </li>
          <li className={`item ${(category=='comics')&&'active'}`}>
            <Link to={`/search/comics${query?'/'+query:''}`}>만화</Link>
          </li>
          <li className={`item ${(category=='books')&&'active'}`}>
            <Link to={`/search/books${query?'/'+query:''}`}>도서</Link>
          </li>
          <li className={`item ${(category=='music')&&'active'}`}>
            <Link to={`/search/music${query?'/'+query:''}`}>음반</Link>
          </li>
        </ul>
      </nav>
    )
  }
}