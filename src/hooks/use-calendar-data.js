import { useSelector } from 'react-redux';

export const useCalendarData = function () {
  const { datePicked, timePicked, timeLengthPicked, firstName, lastName } =
    useSelector(
      ({
        calendar: {
          datePicked,
          timePicked,
          timeLengthPicked,
          firstName,
          lastName,
        },
      }) => {
        return {
          datePicked,
          timePicked,
          timeLengthPicked,
          firstName,
          lastName,
        };
      }
    );

  return { datePicked, timePicked, timeLengthPicked, firstName, lastName };
};
