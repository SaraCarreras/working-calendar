import React, { useState } from 'react';
import calendar from './calendar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { CalendarBody } from '../calendarBody/calendarBody';
import { HolidayList } from '../holidayList/holidayList';
import { getHolidays } from '../../services/services';
import { iHolidays } from '../../interfaces/iHolidays';
import { CalendarProps } from '../../interfaces/typeProps';

export function Calendar({ showSideBar }: CalendarProps) {
  const containerMargins = showSideBar
    ? { marginLeft: '23%' }
    : { marginLeft: 0 };

  const actualDate: Date = new Date();
  const [date, setDate] = useState(actualDate);
  const [holidaysList, setHolidaysList] = useState<Array<iHolidays>>([
    {
      day: '',
      type: '',
      description: '',
    },
  ]);

  getHolidays().then(setHolidaysList);

  function prevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  function nextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  return (
    <div
      className={`${calendar.container} ${
        showSideBar ? calendar.sidebarExpanded : calendar.container
      }`}
      style={containerMargins}
    >
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
        <CalendarBody date={date} holidaysList={holidaysList} />
      </div>
      <div className={calendar.holiDayListContainer}>
        <HolidayList holidaysList={holidaysList} />
      </div>
    </div>
  );
}
