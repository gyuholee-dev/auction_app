import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
  name: 'imgSlide',
  initialState : {},
  reducers: {}
});

export const ImgSlideStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.imgSlide);
  },
  actions: {
    ...store.actions,
  }
}

export default function ImgSlide(props) {
  return (
    <section id="imgslide">
      <div className="imgs">
        <img src="/images/Eab45nOX0AAxAQm.jpeg" alt="PS5" />
      </div>
    </section>
  )
}