import { Link } from 'react-router-dom';
import './LastSection.scss';
import WomanImage from '../../images/african-american-business-woman.png';
import Button from '../../ReusableComponents/Button';

const LastSection = function () {
  return (
    <section className="last-section">
      <div className="last-section-one">
        <div className="last-section-one-div">
          <h2>
            Create <span>loyal customers</span> that love your{' '}
            <span>brand</span>
          </h2>

          <p>
            We are a full-service digital solution that helps businesses adapt,
            scale, and grow online. By understanding buyers’ behavior, we create
            seamless digital experiences and continue to nurture interest to
            purchase, persistently
          </p>

          <Link>Strategy Session Call</Link>
        </div>

        <div className="last-section-one-div">
          <img src={WomanImage} alt="woman__image" />
        </div>
      </div>

      <div className="last-section-two">
        <h2>
          We’re a strategic <span>influitive</span> and innovation partner for
          brands and <span>agencies</span>.
        </h2>

        <Link>
          <Button>Explore our plans</Button>
        </Link>
      </div>
    </section>
  );
};

export default LastSection;
