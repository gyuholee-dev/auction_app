import React from 'react';
import { createRoot } from 'react-dom/client';
// import { combineReducers } from 'redux';
// import { Provider } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit';
// import ReduxThunk from 'redux-thunk';

import { RecoilRoot } from 'recoil';

import { Test } from './views/components/Test';
import { TestButton } from './views/components/TestButton';

// const store = configureStore({
//   reducer: combineReducers({
//     test: Test.reducer,
//   }),
//   middleware: [ReduxThunk]
// });

// console.log(store.getState());
// const listener = () => {
//   const state = store.getState();
//   console.log(state);
// };
// store.subscribe(listener);

const root = createRoot(document.getElementById('app-root'));
// root.render(
//   <Provider store={store}>
//     <Test.elem />
//     <TestButton.elem />
//   </Provider>
// );
root.render(
  <RecoilRoot>
    <Test.elem />
    <TestButton.elem />
  </RecoilRoot>
);