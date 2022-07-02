import React, { useEffect, useState } from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import { Test } from './Test';

export const TestButton = {
  state: {},
  reducer: (state = TestButton.state, action) => {},

  elem: () => {
    const dispatch = useDispatch();
    function setTest() {
      dispatch(Test.testAction('TEST OK'));
    }

    return (
      <button onClick={setTest}>TEST</button>
    )
  }
}