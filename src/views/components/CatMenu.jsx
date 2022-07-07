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
          <li className={`item ${(category=='1')&&'active'}`}>
            <Link to={`/search/1${query?'/'+query:''}`}>게임</Link>
          </li>
          <li className={`item ${(category=='2')&&'active'}`}>
            <Link to={`/search/2${query?'/'+query:''}`}>만화</Link>
          </li>
          <li className={`item ${(category=='3')&&'active'}`}>
            <Link to={`/search/3${query?'/'+query:''}`}>도서</Link>
          </li>
          <li className={`item ${(category=='4')&&'active'}`}>
            <Link to={`/search/4${query?'/'+query:''}`}>음반</Link>
          </li>
        </ul>
      </nav>
    )
  }
}