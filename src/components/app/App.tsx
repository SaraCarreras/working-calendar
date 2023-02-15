import React from 'react';
import { Sidebar } from '../sidebar/sidebar';
import app from './App.module.scss';

function App() {
  return (
    <div className={app.container}>
      <Sidebar />
    </div>
  );
}

export default App;
