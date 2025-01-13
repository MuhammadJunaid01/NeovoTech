import {ICurrentMonthDate} from '../interfaces';

export const getCalendarMonth = (): ICurrentMonthDate[] => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const result: ICurrentMonthDate[] = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // Current month (0-indexed)

  const date = new Date(year, month, 1); // Start of the current month

  while (date.getMonth() === month) {
    result.push({
      date: date.getDate().toString().padStart(2, '0'), // Ensure 2-digit format
      day: daysOfWeek[date.getDay()],
    });
    date.setDate(date.getDate() + 1); // Move to the next day
  }

  return result;
};
export const getToDay = (): ICurrentMonthDate => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  return {
    date: today.getDate().toString().padStart(2, '0'), // Ensure 2-digit format
    day: daysOfWeek[today.getDay()], // Get the day abbreviation
  };
};
