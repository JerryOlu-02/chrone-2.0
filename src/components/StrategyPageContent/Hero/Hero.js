import Button from '../../../ReusableComponents/Button';
import { BsArrowRight } from 'react-icons/bs';
import './Hero.scss';
import { useCalendarData } from '../../../hooks/use-calendar-data';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroStrategy = function ({ children }) {
  const { datePicked, timeLengthPicked, timePicked } = useCalendarData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!datePicked && !timeLengthPicked && !timePicked) {
      navigate('/strategy');
    }
  }, [datePicked, timeLengthPicked, timePicked, navigate]);

  return (
    <section className="hero-strategy">
      <aside className="hero-strategy-left">
        <h2>
          Schedule a free <span>strategy session</span> today!
        </h2>

        <p>Everything you need to get the attention of your audience</p>

        <Button>
          Request a mini marketing plan
          <div>
            <BsArrowRight />
          </div>
        </Button>
      </aside>

      <div className="hero-strategy-right">{children}</div>
    </section>
  );
};

export default HeroStrategy;
