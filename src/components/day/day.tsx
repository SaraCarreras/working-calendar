import React from 'react';
import { DayProps } from '../../interfaces/typeProps';
import day from './day.module.scss';

export function Day({ date, holidaysList }: DayProps) {
  //conditional compares actual date with date shown on calendar
  const isToday =
    date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === new Date().getDate();

  //I need to compare actual date with shown date but since I'm using data from 2021 transformed
  //I need to transform it again substracting 2 years to the comparisson date to get true
  const isoDate = date.toISOString();
  const year = parseInt(isoDate.split('-')[0]);

  const newDate = new Date(date);
  //console.log(date);
  newDate.setFullYear(year - 2);
  const newIsoDate = newDate.toISOString().split('T')[0];

  const holiday = holidaysList.find((holiday) => holiday.day === newIsoDate);

  const typeClass = holiday ? day[holiday.type] : '';

  return (
    <div className={day.dayContainer}>
      <div className={`${day.day} ${isToday ? day.today : ''} ${typeClass}`}>
        {date.getDate()}
      </div>
    </div>
  );
}
