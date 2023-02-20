import React from 'react';
import { HolidayListProps } from '../../interfaces/iHolidays';
import holidayList from './holidayList.module.scss';

export function HolidayList({ holidaysList }: HolidayListProps) {
  console.log(holidaysList);
  return (
    <div className={holidayList.container}>
      <h3>Days marked as holidays:</h3>
      <ol>
        {holidaysList.map((holiday) => (
          // console.log(holiday.date.getDay()),
          <li key={holiday.day}>
            <span>{holiday.description}</span>
            <span> Día: {holiday.day}</span>
            {/* <span> Mes: {holiday.date.getMonth() + 1}</span> */}
          </li>
        ))}
      </ol>
    </div>
  );
}
