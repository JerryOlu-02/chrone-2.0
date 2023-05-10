import { ReactComponent as Cross } from '../../images/cross.svg';
import Button from '../../ReusableComponents/Button';
import './sass/EventPopup.scss';
import { useEffect, useState, useRef } from 'react';

const EventPopup = function () {
  const [hideEvent, setHideEvent] = useState(false);
  const eventRef = useRef();

  const handleClick = function () {
    setHideEvent(true);
  };

  useEffect(() => {
    const closeModal = function (e) {
      if (!eventRef.current) return;

      if (e.target.classList.contains('event')) return;

      handleClick();
    };

    window.addEventListener('click', closeModal, true);

    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <section
      ref={eventRef}
      className={`event-container ${hideEvent ? 'hide' : ''}`}
    >
      <div className="event">
        <Cross onClick={handleClick} />
        <p className="event-paragraph">
          DIGITAL <span>MARKETING</span> SUMMIT 1.0
        </p>

        <h3>Driving Business Growth in an Evolving Era </h3>

        <p>Learn from experts and networks with like-minded professionals.</p>

        <div className="event-details-container">
          <div>
            <p>
              <span>JUNE 10TH, 2023 </span>
            </p>

            <p>10 AM (WAT)</p>
          </div>

          <div>
            <p>
              <span>BroadWalk Event Centre</span>
            </p>

            <p>VICTORIA ISLAND, LAGOS</p>
          </div>
        </div>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.eventbrite.com/e/digital-marketing-summit-10-tickets-632628879007"
        >
          <Button>Book a Seat</Button>
        </a>
      </div>
    </section>
  );
};

export default EventPopup;
