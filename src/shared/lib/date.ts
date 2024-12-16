import dayjs, { Dayjs } from 'dayjs';

export function formatDate(date: string | Date | Dayjs) {
  return dayjs(date).format('DD MM, YYYY');
}
