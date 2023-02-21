import React from 'react';
import { HolidayListProps } from '../../interfaces/iHolidays';
import holidayList from './holidayList.module.scss';

export function HolidayList({ holidaysList }: HolidayListProps) {
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  return (
    <div className={holidayList.container}>
      <h2>Festivos 2023</h2>
      <ul>
        {holidaysList.map((holiday) => {
          const fecha = new Date(Date.parse(holiday.day));

          const monthName = meses[fecha.getMonth()];
          const dayNumber = fecha.getDate();
          let holidayTypeClass = '';
          if (holiday.type === 'national') {
            holidayTypeClass = holidayList.national;
          } else if (holiday.type === 'regional') {
            holidayTypeClass = holidayList.regional;
          } else if (holiday.type === 'local') {
            holidayTypeClass = holidayList.local;
          }

          return (
            <li key={holiday.day} className={holidayTypeClass}>
              <p className={holidayList.day}>
                {`${dayNumber} de ${monthName}-`}
                <span className={holidayList.description}>
                  {holiday.description}
                </span>
              </p>
              <p className={holidayList.type}>{holiday.type}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
