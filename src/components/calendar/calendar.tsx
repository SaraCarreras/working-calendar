import React, { useEffect, useState } from 'react';
import calendar from './calendar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { CalendarBody } from '../calendarBody/calendarBody';
import { HolidayList } from '../holidayList/holidayList';

export function Calendar() {
  const actualDate: Date = new Date();
  const [date, setDate] = useState(actualDate);

  function prevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }
  console.log(date);

  function nextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  useEffect(() => {
    //console.log(date);
  }, [date]);

  return (
    <div className={calendar.container}>
      <div className={calendar.calendar}>
        <div className={calendar.header}>
          <button id="prev" onClick={prevMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <p>{date.toLocaleString('es', { month: 'long', year: 'numeric' })}</p>
          <button id="next" onClick={nextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <CalendarBody date={date} />
      </div>
      <div className={calendar.holiDayListContainer}>
        <HolidayList />
      </div>
    </div>
  );
}
