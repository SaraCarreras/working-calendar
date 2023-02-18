import React from 'react';
import { Calendar } from '../calendar/calendar';
import { Sidebar } from '../sidebar/sidebar';
import app from './App.module.scss';

function App() {
  return (
    <div className={app.container}>
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default App;
