import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector } from './redux/store';
import { useDispatch } from 'react-redux';
import { decrease, increase } from './redux/counterSlice';

const App: React.FC = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase(1))}>
        Up
      </button>
      <button onClick={() => dispatch(decrease(1))}>
        Down
      </button>
    </div>
  )
}

export default App;
