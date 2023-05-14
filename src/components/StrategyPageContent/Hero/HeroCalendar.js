import './HeroCalendar.scss';
import ScheduleTime from './ScheduleTime';
import CalendarComponent from './CalendarComponent';
import CalendarLogo from '../../../images/calendarlogo.png';
import { useCalendarData } from '../../../hooks/use-calendar-data';
import { useNavigate } from 'react-router-dom';
import Button from '../../../ReusableComponents/Button';
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const HeroCalendar = function () {
  const [showScheduleTime, setShowScheduleTime] = useState(false);

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase
  const { isLoading } = useSessionContext();

  const navigate = useNavigate();
  // GET data from stor with use-calendar hook
  const { datePicked, timePicked, timeLengthPicked } = useCalendarData();

  const googleSignIn = async function () {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
      },
    });

    if (error) {
      alert('Error Looging in to Google Provider with SupaBase');
      console.log(error);
    }
  };

  const signOut = async function () {
    await supabase.auth.signOut();
  };

  const showForm = function (params) {
    // CHECK IF ALL DATE, TIME AND TIME LENGTH HAVE BEEN SELECTED
    if (datePicked && timePicked && timeLengthPicked) {
      // THEN NAVIGATE TO NEXT PAGE
      navigate('form');
    }
  };

  const toggleCalendarClass = function () {
    setShowScheduleTime(!showScheduleTime);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="hero-calendar-container">
      <div className="hero-calendar">
        <div
          className={`hero-calendar-left ${
            showScheduleTime ? 'hide-calendar' : ''
          }`}
        >
          <img src={CalendarLogo} alt="Calendar__logo" />

          <p>Meet with the Chrone Team</p>

          <CalendarComponent handleClick={toggleCalendarClass} />
        </div>

        <div
          className={`hero-calendar-right ${
            showScheduleTime ? 'show-scheduleTime' : ''
          }`}
        >
          {session ? (
            <ScheduleTime />
          ) : (
            <Button className="signin-button" onClick={() => googleSignIn()}>
              <div>
                <FcGoogle />
              </div>{' '}
              Sign In With Google
            </Button>
          )}
        </div>
      </div>

      <div className="hero-calendar-bottom">
        {session ? (
          <>
            <Button onClick={() => signOut()}>Sign Out</Button>
            <Button onClick={showForm}>Next</Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HeroCalendar;
