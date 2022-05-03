import React from 'react';
import { Routes, Route } from 'react-router';
import { Homepage } from '../Homepage/Homepage';
import { Dashboard } from '../Dashboard/Dashboard';
import './App.scss';
// import { Counter } from '../features/counter/Counter';

const App = () => {
  return (
    <div className='App'>
      <h1>Coucou</h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default App;
