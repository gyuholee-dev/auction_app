import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const store = createSlice({
  name: 'noticeSlide',
  initialState : {},
  reducers: {}
});

export const NoticeSlideStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.noticeSlide);
  },
  actions: {
    ...store.actions,
  }
}

export default function NoticeSlide(props) {
  return (
    <div id='noticeslide'>
      <div className='title'>공지사항</div>
      <div className='items'>
        <Link className='item' to="/myservice">서버점검 안내</Link>
      </div>
    </div>
  )
}