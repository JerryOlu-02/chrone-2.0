import { time, timeLength } from '../../../helpers/helpers';
import { setTime, setTimeLength } from '../../../store';
import { setActiveTimeFrame, setActiveTimeLength } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import './ScheduleTime.scss';

const ScheduleTime = function () {
  const dispatch = useDispatch();

  const { activeTimeLength, activeTimeFrame } = useSelector(
    ({ calendar: { activeTimeLength, activeTimeFrame } }) => {
      return { activeTimeLength, activeTimeFrame };
    }
  );

  const handleTimeLengthClick = function (index, timelength) {
    dispatch(setActiveTimeLength(index));

    dispatch(setTimeLength(timelength));
  };

  const handleTimeClick = function (index, time) {
    dispatch(setActiveTimeFrame(index));

    dispatch(setTime(time));
  };

  const renderedTimeLength = timeLength.map((time, index) => {
    const classes = index === activeTimeLength ? 'active-timelength' : '';

    return (
      <div
        key={time}
        className={classes}
        onClick={() => handleTimeLengthClick(index, time)}
      >
        {time}
      </div>
    );
  });

  const renderedTime = time.map((frame, index) => {
    const classes = index === activeTimeFrame ? 'active-timeframe' : '';

    return (
      <div
        key={frame}
        className={classes}
        onClick={() => handleTimeClick(index, frame)}
      >
        {frame}
      </div>
    );
  });

  return (
    <div className="schedule-time">
      <div>
        <p>How long do you need?</p>

        <div className="timelength-list">{renderedTimeLength}</div>
      </div>

      <div className="schedule-time-two">
        <p>What time works best?</p>
        <p className="utc-time">UTC +01:00 West African Time *</p>

        <div className="timeframe-list">{renderedTime}</div>
      </div>
    </div>
  );
};

export default ScheduleTime;
