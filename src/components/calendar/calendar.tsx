import React, { useEffect, useState } from 'react';
import calendar from './calendar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { CalendarBody } from '../calendarBody/calendarBody';

export function Calendar() {
  const [date, setDate] = useState(new Date());

  function prevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  function nextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className={calendar.container}>
      <div className={calendar.calendar}>
        <div className={calendar.header}>
          <button id="prev" onClick={prevMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <p>
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>
          <button id="next" onClick={nextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <CalendarBody />
      </div>
    </div>
  );
}
