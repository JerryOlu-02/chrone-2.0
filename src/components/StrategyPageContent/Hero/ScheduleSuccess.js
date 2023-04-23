import './ScheduleSuccess.scss';
import Button from '../../../ReusableComponents/Button';
import { useSelector, useDispatch } from 'react-redux';
import { resetFormContent } from '../../../store';

const ScheduleSuccess = function () {
  const dispatch = useDispatch();

  const { datePicked, timePicked } = useSelector(
    ({ calendar: { datePicked, timePicked } }) => {
      return {
        datePicked,
        timePicked,
      };
    }
  );

  const resetForm = function (params) {
    dispatch(resetFormContent());
  };

  return (
    <div className="schedule-success">
      <h3>Booking confirmed</h3>
      <p>You’re booked with the Chrone team.</p>
      <p>An invite would be emailed to you</p>

      <h4>{datePicked}</h4>
      <h4>{timePicked}</h4>

      <Button onClick={() => resetForm()}>
        Schedule a new strategy session
      </Button>
    </div>
  );
};

export default ScheduleSuccess;
