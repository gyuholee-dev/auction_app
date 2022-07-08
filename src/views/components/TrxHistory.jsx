import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'trxHistory',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const TrxHistory = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.trxHistory);
  },
  elem: () => {

    const count = 5;
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <tr key={i}>
          <td>소장품명</td>
          <td>구분</td>
          <td>상태</td>
        </tr>
      )
    }
    return (
      <section id='trxhistory'>
        <div className='title'>내 최근 거래내역
          <button className='btn none'>더보기</button>
        </div>
        <table className='history'>
          <thead>
            <tr>
              <th>소장품명</th>
              <th>구분</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </section>
    )
  }
}