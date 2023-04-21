import { useSelector } from 'react-redux';

export const useCalendarData = function () {
  const { datePicked, timePicked, timeLengthPicked } = useSelector(
    ({ calendar: { datePicked, timePicked, timeLengthPicked } }) => {
      return { datePicked, timePicked, timeLengthPicked };
    }
  );

  return { datePicked, timePicked, timeLengthPicked };
};
