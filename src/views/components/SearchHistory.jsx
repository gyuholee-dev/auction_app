import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const BestQuery = (props) => {
  return (
    <section id="bestquery">
      <ul className="items">
        <li className="item active">
          <Link to="/search/0/추천검색어">추천검색어</Link>
        </li>
        <li className="item">
          <Link to="/search/0/추천검색어">추천검색어</Link>
        </li>
        <li className="item">
          <Link to="/search/0/추천검색어">추천검색어</Link>
        </li>
        <li className="item">
          <Link to="/search/0/추천검색어">추천검색어</Link>
        </li>
      </ul>
    </section>
  )
}

const History = (props)=> {
  const count = 10;
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <tr key={i}>
        <td>
          <Link to="/search/0/검색어">검색어</Link>
          <button className='btn none inline'><i className='xi-close-thin'></i></button>
        </td>
        <td>
          <Link to="/search/0/검색어">검색어</Link>
          <button className='btn none inline'><i className='xi-close-thin'></i></button>
        </td>
      </tr>
    );
  }
  return (
    <section id="searchhistory">
      <div className="header">
       <span>최근 검색어</span>
       <span>모두 지우기</span>
      </div>
      <table>
        <tbody>
          {items}
        </tbody>
      </table>
    </section>
  )
}


const store = createSlice({
  name: 'searchHistory',
  initialState : {},
  reducers: {}
});

export const SearchHistoryStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.searchHistory);
  },
  actions: {
    ...store.actions,
  }
}

export default function SearchHistory(props) {
  return (
    <>
      <BestQuery />
      <History />
    </>
  )
}