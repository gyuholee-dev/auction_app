import React, { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useStore, useSelector, useDispatch } from 'react-redux';

import { 
  BottomMenu,
  NoticeSlide,
  InfoMenu,
} from '@components';

const store = createSlice({
  name: 'footer',
  initialState : {},
  reducers: {}
});

export const FooterStore = {
  reducer: store.reducer,
  getState : () => {
    return useSelector(state => state.footer);
  },
  actions: {
    ...store.actions,
  }
}

export default function Footer(props) {
  const { page } = props;
  return (
    <footer>
      { page === 'home' && <BottomMenu.elem /> }
      { page === 'myservice' && <NoticeSlide.elem /> }
      { page === 'myservice' && <InfoMenu.elem /> }
    </footer>
  )
}
