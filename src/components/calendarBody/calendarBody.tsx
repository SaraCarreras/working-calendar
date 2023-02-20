import React from 'react';
import { useMonthDays } from '../../hooks/useMonthDays';
import calendarBody from '../calendar/calendar.module.scss';

export function CalendarBody() {
  const lastday = useMonthDays().lastDayOfMonth;
  const allDays = useMonthDays().days;
  //console.log(allDays);
  return (
    <div className={calendarBody.calendarBody}>
      <ul className={calendarBody.dayName}>
        <li>Lun</li>
        <li>Mar</li>
        <li>Mié</li>
        <li>Jue</li>
        <li>Vie</li>
        <li>Sab</li>
        <li>Dom</li>
      </ul>
      <ul className={calendarBody.dayNumber}>
        {allDays.map((day) => {
          return <li key={day}>{day}</li>;
        })}
      </ul>
    </div>
  );
}

/* <li className={calendarBody.actualDay}>12</li>
        
        <li className={calendarBody.disabledDay}>1</li>*/
