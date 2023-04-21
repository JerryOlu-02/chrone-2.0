import './ScheduleSuccess.scss';
import Button from '../../../ReusableComponents/Button';

const ScheduleSuccess = function () {
  return (
    <div className="schedule-success">
      <h3>Booking confirmed</h3>
      <p>You’re booked with the Chrone team.</p>
      <p>An invite would be emailed to you</p>

      <h4>9 March 2023</h4>
      <h4>11:00</h4>

      <Button>Schedule a new strategy session</Button>
    </div>
  );
};

export default ScheduleSuccess;
