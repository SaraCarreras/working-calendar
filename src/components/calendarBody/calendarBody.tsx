import React from 'react';
import calendarBody from '../calendar/calendar.module.scss';
import { CalendarBodyProps } from '../../interfaces/typeProps';
import { Day } from '../day/day';

export function CalendarBody({ date, holidaysList }: CalendarBodyProps) {
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'];

  //calculating emptycells at begining month
  //it needs to be -1 bcs first day of week is Sun = 0
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay() - 1;

  //calculating emptyCells at the end of month
  const emptyCells = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  console.log(emptyCells);

  //calculating number days in a Month by getting the last the of actual month
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
        {
          //creating row's calendar
          [
            ...Array(Math.ceil((emptyCells.length + daysInMonth) / 7)).keys(),
          ].map((rowIndex) => (
            <div key={rowIndex} className={calendarBody.row}>
              {
                //creating cells on each row
                [...Array(7).keys()].map((colIndex) => {
                  //creating de number of the day to show on Day element
                  const dayIndex = rowIndex * 7 + colIndex - emptyCells.length;
                  const day = days[dayIndex];
                  return day ? (
                    <Day
                      key={day.toISOString()}
                      date={day}
                      holidaysList={holidaysList}
                    />
                  ) : (
                    <div
                      key={`empty-cell-${colIndex}`}
                      className={calendarBody.emptyCell}
                    />
                  );
                })
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
