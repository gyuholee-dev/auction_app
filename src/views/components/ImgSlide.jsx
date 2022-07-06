import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'imgSlide',
  initialState : {},
  reducers: {}
});

const actions = {
  ...store.actions,
}

export const ImgSlide = {
  actions: actions,
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.imgSlide);
  },
  elem: () => {
    return (
      <section id="imgslide">
        <div className="imgs">
          <img src="/images/Eab45nOX0AAxAQm.jpeg" alt="PS5" />
        </div>
      </section>
    )
  }
}