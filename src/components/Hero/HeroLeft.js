import { ReactComponent as ExploreArrow } from '../../images/explore-arrow-hero.svg';
import { ReactComponent as LineHorizontal } from '../../images/Line-horizontal.svg';
import { ReactComponent as LineVerical } from '../../images/Line-vertical.svg';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../../ReusableComponents/Button';
import './HeroLeft.scss';
import { Link } from 'react-router-dom';

const HeroLeft = function () {
  return (
    <aside className="hero-left">
      <div>
        <div className="hero-left-explore">
          <div className="hero-left-explore-div">
            <div>
              <LineHorizontal />
              <LineVerical />
            </div>

            <ExploreArrow />
          </div>

          <p>Explore our plans</p>
        </div>

        <h2>
          We deliver the <span>digital</span> results you desire.
        </h2>
      </div>

      <Link to="/get-started">
        <Button className="get-started-btn">
          Get Started
          <div>
            <BsArrowRight />
          </div>
        </Button>
      </Link>

      <p>
        Stay connected with us and get your digital marketing strategy in place
      </p>
    </aside>
  );
};

export default HeroLeft;
