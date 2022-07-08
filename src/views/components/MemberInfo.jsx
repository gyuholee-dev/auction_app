import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'memberInfo',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const MemberInfo = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.memberInfo);
  },
  elem: () => {
    return (
      <section id='memberinfo'>
        <div className='member'>
          <div className='avatar'>
            <span className='default'>
              <img src='images/avatar.svg' className='img'/>
            </span>
          </div>
          <div className='info'>
            <div className='name'>수집가 이름</div>
            <div className='address'>부산 해운대구 중동</div>
          </div>
        </div>
        <button className='btn none'>
          <i className='xi-angle-right'></i>
        </button>
      </section>
    )
  }
}