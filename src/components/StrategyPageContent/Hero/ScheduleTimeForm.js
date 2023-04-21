import { Link } from 'react-router-dom';
import { useCalendarData } from '../../../hooks/use-calendar-data';
import Button from '../../../ReusableComponents/Button';
import { useForm } from 'react-hook-form';
import './ScheduleTimeForm.scss';

const ScheduleTimeForm = function () {
  const { timePicked, datePicked } = useCalendarData();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <div className="schedule-time-form">
      <div>
        <h4>Your information</h4>
        <p className="time-info">
          {datePicked} - {timePicked} <Link to="/strategy">Edit</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-div">
          <div>
            <label>First name *</label>
            <input type="text" {...register('firstName', { required: true })} />
            {errors.firstName && <span>This field is required</span>}
          </div>

          <div>
            <label>Last name</label>
            <input type="text" {...register('lastName')} />
          </div>
        </div>

        <div className="phone-email-div">
          <label>Phone number *</label>
          <input
            type="number"
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && <span>This field is required</span>}
        </div>

        <div className="phone-email-div">
          <label>Email address *</label>
          <input
            type="email"
            {...register('emailAddress', { required: true })}
          />
          {errors.emailAddress && <span>This field is required</span>}
        </div>

        <div className="data-privacy">
          <p className="data-privacy-header">Data privacy</p>

          <div className="data-privacy-div">
            <p>
              From time to time, we would like to contact you about our products
              and services, as well as other content that may be of interest to
              you. If you consent to us contacting you for this purpose, please
              tick below to say how you would like us to contact you:
            </p>

            <div>
              <input type="checkbox" />
              <p>
                From time to time, we would like to contact you about our
                products and services
              </p>
            </div>
          </div>
        </div>

        <div className="form-button-div">
          <Link to="/strategy">
            <Button>Back</Button>
          </Link>

          <Button>Confirm</Button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleTimeForm;
