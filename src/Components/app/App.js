import React from 'react';
import { Routes, Route } from 'react-router';
import { Homepage } from '../Homepage/Homepage';
import './App.scss';
// import { Counter } from '../features/counter/Counter';

const App = () => {
  return (
    <div className='App'>
      <h1>Coucou</h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      {/* <Counter /> */}
    </div>
  );
};
export default App;
