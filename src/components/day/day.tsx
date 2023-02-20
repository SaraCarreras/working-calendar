import React from 'react';
import { DayProps } from '../../interfaces/calendarBody';
import day from './day.module.scss';

export function Day({ date, isCurrentMonth }: DayProps) {
  //conditional compares actual date with date shown on calendar
  const isToday =
    date.getFullYear() === new Date().getFullYear() &&
    date.getMonth() === new Date().getMonth() &&
    date.getDate() === new Date().getDate();
  //console.log(new Date().getDate());

  return (
    <div className={day.dayContainer}>
      <div
        className={`${day.day} ${isCurrentMonth ? '' : day.disabledDay} ${
          isToday ? day.today : ''
        }`}
      >
        {date.getDate()}
      </div>
    </div>
  );
}
