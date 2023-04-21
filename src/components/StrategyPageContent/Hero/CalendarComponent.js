import Calendar from 'react-calendar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../../store';

const CalendarComponent = function ({ handleClick }) {
  const dispatch = useDispatch();

  const data = useSelector(({ calendar: { datePicked } }) => {
    return datePicked;
  });

  const [value, onChange] = useState(data);

  const handleClickedDay = function (value) {
    // Toggle active calendar class
    handleClick();

    const newDate = `${value}`.slice(0, -46);

    // Update Picked date in store state
    dispatch(setDate(newDate));
  };

  return (
    <Calendar
      onChange={onChange}
      value={value}
      minDate={new Date()}
      onClickDay={(value) => handleClickedDay(value)}
    />
  );
};

export default CalendarComponent;
