import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const store = createSlice({
  name: 'noticeSlide',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const NoticeSlide = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.noticeSlide);
  },
  elem: () => {
    return (
      <div id='noticeslide'>
        <div className='title'>공지사항</div>
        <div className='items'>
          <Link className='item' to="/myservice">서버점검 안내</Link>
        </div>
      </div>
    )
  }
}