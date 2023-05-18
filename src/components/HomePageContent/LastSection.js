import { Link } from 'react-router-dom';
import './LastSection.scss';
// import WomanImage from '../../images/african-american-business-woman.jpg';
import PlaceholderWomanImage from '../../images/african-american-business-woman.webp';
import Button from '../../ReusableComponents/Button';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

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

          <Link to="strategy">Strategy Session Call</Link>
        </div>

        <div className="last-section-one-div">
          {/* <LazyLoadImage
            src={WomanImage}
            placeholderSrc={PlaceholderWomanImage}
            alt="woman__image"
          /> */}
          <img src={PlaceholderWomanImage} alt="woman__image" />

          <div className="creativity">Creativity</div>
          <div className="strategy">Strategy</div>
          <div className="results">Positive Results</div>
        </div>
      </div>

      <div className="last-section-two">
        <h2>
          We’re a strategic <span>influitive</span> and innovation partner for
          brands and <span>agencies</span>.
        </h2>

        <Link to="pricing">
          <Button>Explore our plans</Button>
        </Link>
      </div>
    </section>
  );
};

export default LastSection;
