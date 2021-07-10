
import React, { useReducer } from 'react';

const initialState = { count: 0, nama: 'Tamdia' }

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1, nama: state.nama }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      throw new Error('unknown actionn type')
  }
}


function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>UseReducer</h2>
      <p>Count { state.count }</p>
      <p>Name: {state.nama}</p>
      <button onClick={() => dispatch({type: 'decrement'})} data-testid="btn-decrement">-</button>
      <button onClick={() => dispatch({type: 'increment'})} data-testid="btn-increment">+</button>
    </div>
  );
}

export default UseReducer