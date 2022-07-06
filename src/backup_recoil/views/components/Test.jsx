import React, { useEffect, useState } from 'react';
// import { useStore, useSelector, useDispatch } from 'react-redux';

// ------------------------------------------------------------

// const initialState = {
//   text: false,
// }

// export function testAction(value) {
//   return async (dispatch, getState) => {
//     const { text } = getState();
//     dispatch({ type: 'SET_TEST', value: value });
//   }
// }

// export function testReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_TEST':
//       return {
//         ...state,
//         text: action.value,
//       }
//     default:
//       return state;
//   }
// }

// export default function Test() {
//   const { text } = useSelector(state => state.test);
//   return (
//     <div>
//       <h1>{text}</h1>
//     </div>
//   )
// }

// ------------------------------------------------------------

// export const Test = {
//   state: {
//     text: 'ready',
//   },
//   reducer: (state = Test.state, action) => {
//     switch (action.type) {
//       case 'SET_TEXT':
//         return {
//           ...state,
//           text: action.value,
//         }
//       default:
//         return state;
//     }
//   },
//   testAction: (value) => {
//     return async (dispatch, getState) => {
//       const { text } = getState();
//       dispatch({ type: 'SET_TEXT', value: value });
//     }
//   },
//   elem: () => {
//     const { text } = useSelector(state => state.test);
//     return (
//       <div>
//         <h1>{text}</h1>
//       </div>
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

export const Test = {
  state: atom({
    key: 'text',
    default: 'ready',
  }),
  elem: () => {
    const [text, setText] = useRecoilState(Test.state);
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}
