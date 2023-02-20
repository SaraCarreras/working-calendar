export interface iHolidays {
  day: string;
  type: string;
  description: string;
}
export interface HolidayListProps {
  holidaysList: iHolidays[];
}
