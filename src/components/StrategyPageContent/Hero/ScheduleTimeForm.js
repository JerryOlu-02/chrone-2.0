import { Link, useNavigate } from 'react-router-dom';
import { useCalendarData } from '../../../hooks/use-calendar-data';
import Button from '../../../ReusableComponents/Button';
import { useForm } from 'react-hook-form';
import { setFormContent, useCreateNewEventMutation } from '../../../store';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import './ScheduleTimeForm.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { eventBody } from '../../../helpers/helpers';
import { useSession } from '@supabase/auth-helpers-react';

const ScheduleTimeForm = function () {
  const [createEvent, results] = useCreateNewEventMutation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const session = useSession();

  const { timePicked, datePicked, firstName, lastName } = useCalendarData();

  // Change Start Date Format to Google Calendar Accepted Format
  const currentDate = new Date(`${datePicked} ${timePicked}`).toISOString();

  // Add 1 hour to Start date format
  const endTimePicked = `${
    parseFloat(timePicked.slice(0, 2)) + 1
  }:${timePicked.slice(3, 5)}`;

  // Change End Date Format to Google Calendar Accepted Format
  const endDate = new Date(`${datePicked} ${endTimePicked}`).toISOString();

  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string(),
    emailAddress: yup.string().email().required(),
    phoneNumber: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async function (formData) {
    dispatch(setFormContent(formData));
    navigate('/strategy/success');

    const event = eventBody(firstName, lastName, currentDate, endDate);

    // POST event to google calendar
    createEvent(event, session.provider_token);
    console.log(results);
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
            <input type="text" {...register('firstName')} />
            {errors.firstName && <span>This field is required</span>}
          </div>

          <div>
            <label>Last name</label>
            <input type="text" {...register('lastName')} />
          </div>
        </div>

        <div className="phone-email-div">
          <label>Phone number *</label>
          <input type="number" {...register('phoneNumber')} />
          {errors.phoneNumber && <span>This field is required</span>}
        </div>

        <div className="phone-email-div">
          <label>Email address *</label>
          <input type="email" {...register('emailAddress')} />
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
