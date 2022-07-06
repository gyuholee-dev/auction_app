import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

const store = createSlice({
  name: 'orderSelect',
  initialState : {},
  reducers: {}
});

export const OrderSelect = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.orderSelect);
  },
  elem: () => {
    return (
      <div className="order">
        <select name="">
          <option value="1">입찰수</option>
        </select>
        <select name="">
          <option value="1">마감일</option>
        </select>
        <select name="">
          <option value="1">직거래</option>
        </select>
      </div>
    )
  }
}