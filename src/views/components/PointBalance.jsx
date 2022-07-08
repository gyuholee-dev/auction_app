import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'pointBalance',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const PointBalance = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.pointBalance);
  },
  elem: () => {
    return (
      <section id='pointbalance'>
        <div className='title'>나의 슈퍼레어 포인트</div>
        <div className='point'>123456789 원</div>
        <div className='buttons'>
          <button className='btn inline blue'>충전</button>
        </div>
      </section>
    )
  }
}