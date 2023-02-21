import { iHolidays } from './iHolidays';

export type CalendarBodyProps = {
  date: Date;
  holidaysList: iHolidays[];
};

export type DayProps = {
  date: Date;
  isCurrentMonth: boolean;
  holidaysList: iHolidays[];
};

export interface CalendarProps {
  showSideBar: boolean;
}
