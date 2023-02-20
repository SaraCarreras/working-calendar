import React from 'react';
import calendarBody from '../calendar/calendar.module.scss';
import { CalendarBodyProps } from '../../interfaces/calendarBody';
import { Day } from '../day/day';

export function CalendarBody({ date }: CalendarBodyProps) {
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'];

  //creating emptyCells to disabled days
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  //it needs to be -1 bcs first day of week is Sun = 0
  const firstDayOfWeek = firstDayOfMonth.getDay() - 1;
  const emptyCells = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const days = Array.from(
    { length: daysInMonth },
    (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1)
  );

  return (
    <div className={calendarBody.calendarBody}>
      <ul className={calendarBody.dayName}>
        {weekDays.map((weekDay) => (
          <li key={weekDay}>{weekDay}</li>
        ))}
      </ul>
      <div className={calendarBody.daysContainer}>
        {[
          ...Array(Math.ceil((emptyCells.length + daysInMonth) / 7)).keys(),
        ].map((rowIndex) => (
          <div key={rowIndex} className={calendarBody.row}>
            {[...Array(7).keys()].map((colIndex) => {
              const dayIndex = rowIndex * 7 + colIndex - emptyCells.length;
              const day = days[dayIndex];
              return day ? (
                <Day
                  key={day.toISOString()}
                  date={day}
                  isCurrentMonth={day.getMonth() === date.getMonth()}
                />
              ) : (
                <div
                  key={`empty-cell-${colIndex}`}
                  className={calendarBody.emptyCell}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* <li className={calendarBody.actualDay}>12</li>
        
        <li className={calendarBody.disabledDay}>1</li>*/
