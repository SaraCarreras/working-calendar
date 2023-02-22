import React, { useState } from 'react';
import { Calendar } from '../calendar/calendar';
import { Sidebar } from '../sidebar/sidebar';
import app from './App.module.scss';

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  const handleSidebarToggle = () => {
    setShowSideBar((prevState) => !prevState);
  };

  return (
    <div className={app.container}>
      <Sidebar showSideBar={showSideBar} />
      <div
        className={`${app.toggleBtn} ${
          showSideBar ? app.toggleBtnExpanded : ''
        }`}
        onClick={handleSidebarToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Calendar showSideBar={showSideBar} />
    </div>
  );
}

export default App;
