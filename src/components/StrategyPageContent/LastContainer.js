import './LastContainer.scss';
import ReusableCard from '../../ReusableComponents/ReusableCard';
import Button from '../../ReusableComponents/Button';
import { Link } from 'react-router-dom';

const LastContainer = function () {
  return (
    <section className="last-container">
      <ReusableCard>
        <h2>
          We’re a strategic <span>influitive</span> and innovation partner for
          brands and <span>agencies</span>.
        </h2>

        <Link to="/pricing">
          <Button>Explore our plans</Button>
        </Link>
      </ReusableCard>
    </section>
  );
};

export default LastContainer;
