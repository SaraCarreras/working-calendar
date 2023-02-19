import React from 'react';
import calendarBody from '../calendar/calendar.module.scss';

export function CalendarBody() {
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
        <li className={calendarBody.disabledDay}>28</li>
        <li className={calendarBody.disabledDay}>29</li>
        <li className={calendarBody.disabledDay}>30</li>
        <li>31</li>
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
        <li className={calendarBody.actualDay}>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li className={calendarBody.disabledDay}>1</li>
      </ul>
    </div>
  );
}
