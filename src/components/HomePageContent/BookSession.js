import Button from '../../ReusableComponents/Button';
import './BookSession.scss';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BookSession = function () {
  return (
    <section className="book-session">
      <div>
        <h2>
          Book your <span>strategy</span> session call with us
        </h2>
        <p>Find out how it is a risk-free guarantee</p>
      </div>

      <Link to="strategy">
        <Button>
          Start Now{' '}
          <div>
            <BsArrowRight />
          </div>
        </Button>
      </Link>
    </section>
  );
};

export default BookSession;
