import React, { useEffect, useState } from 'react';
import calendar from './calendar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { CalendarBody } from '../calendarBody/calendarBody';

export function Calendar() {
  //-> iniciar lógica . seguir header mes y instalar fontawesome para isBreakOrContinueStatement,
  //luego mirar lógica crear días y ve rsi los creo directly o en otro el
  const [month, setMonth] = useState('');
  const header = document.querySelector(`.${calendar.header}`);
  const headerMonth = header?.querySelector('p');
  console.log(headerMonth);
  //getting current month
  const date = new Date();
  const currentMonth = date.getMonth();
  console.log(currentMonth);

  //transforming currentMonth from number to Month's names
  const months: Array<string> = [
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

  useEffect(() => {
    currentMonth ? setMonth(months[currentMonth]) : '';
  }, []);

  return (
    <div className={calendar.container}>
      <div className={calendar.calendar}>
        <div className={calendar.header}>
          <p>{month} 2023</p>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <CalendarBody />
      </div>
    </div>
  );
}
