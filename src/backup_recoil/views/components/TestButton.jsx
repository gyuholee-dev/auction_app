import React, { useEffect, useState } from 'react';
// import { useStore, useSelector, useDispatch } from 'react-redux';
import { Test } from './Test';

// export const TestButton = {
//   state: {},
//   reducer: (state = TestButton.state, action) => {},

//   elem: () => {
//     const dispatch = useDispatch();
//     function setTest() {
//       dispatch(Test.testAction('TEST OK'));
//     }

//     return (
//       <button onClick={setTest}>TEST</button>
//     )
//   }
// }

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const TestButton = {
  elem: () => {
    const [text, setText] = useRecoilState(Test.state);
    function setTest() {
      setText('TEST OK');
    }
    return (
      <button onClick={setTest}>TEST</button>
    )
  }
}