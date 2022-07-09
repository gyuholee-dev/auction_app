import { createRoot } from 'react-dom/client';

import { combineReducers } from 'redux';
import { Provider } from "react-redux";
import { configureStore, createSlice } from '@reduxjs/toolkit';

function TestApp() {
  console.log('TestApp');
  return (
    <div>
      <h1>TestApp</h1>
    </div>
  )
}

const rootStore = configureStore({
  reducer: combineReducers({})
});

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={rootStore}>
    <TestApp />
  </Provider>
);