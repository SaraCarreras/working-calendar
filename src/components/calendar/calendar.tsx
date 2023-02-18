import React from 'react';
import calendar from './calendar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export function Calendar() {
  //-> iniciar lógica . seguir header mes y instalar fontawesome para isBreakOrContinueStatement,
  //luego mirar lógica crear días y ve rsi los creo directly o en otro el

  return (
    <div className={calendar.container}>
      <div className={calendar.calendar}>
        <div className={calendar.header}>
          <p>Enero 2023</p>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className={calendar.calendarBody}>
          <ul className={calendar.weekDays}>
            <li>Lun</li>
            <li>Mar</li>
            <li>Mié</li>
            <li>Jue</li>
            <li>Vie</li>
            <li>Sab</li>
            <li>Dom</li>
          </ul>
          <ul className="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
