import dayjs, { type Dayjs } from "dayjs";

import CustomParseFormat from "dayjs/plugin/customParseFormat";

export const parseDate = (date: Date | null): Dayjs => {
  dayjs.extend(CustomParseFormat);
  return dayjs(date, "YYYY-MM-DD");
};

export const parseTime = (time: Date | null): Dayjs => {
  dayjs.extend(CustomParseFormat);
  return dayjs(time, "HH:mm:ss");
};

export const convertDateToString = (
  startDate: Date | null,
  endDate: Date | null,
): string => {
  dayjs.extend(CustomParseFormat);
  const startDateDayjs = parseDate(startDate);
  const endDateDayjs = parseDate(endDate);
  if (!startDateDayjs.isSame(endDateDayjs, "year"))
    return (
      startDateDayjs.format("DD MMMM YYYY") +
      " - " +
      endDateDayjs.format("DD MMMM YYYY")
    );
  else if (!startDateDayjs.isSame(endDateDayjs, "month"))
    return (
      startDateDayjs.format("DD MMMM") +
      " - " +
      endDateDayjs.format("DD MMMM YYYY")
    );
  else if (!startDateDayjs.isSame(endDateDayjs, "day"))
    return (
      startDateDayjs.format("DD") + " - " + endDateDayjs.format("DD MMMM YYYY")
    );
  else return endDateDayjs.format("DD MMMM YYYY");
};

export const convertTimeToString = (
  startTime: Date | null,
  endTime: Date | null,
): string => {
  dayjs.extend(CustomParseFormat);
  const startTimeDayjs = parseTime(startTime);
  const endTimeDayjs = parseTime(endTime);
  return startTimeDayjs.format("HH:mm") + " - " + endTimeDayjs.format("HH:mm");
};
