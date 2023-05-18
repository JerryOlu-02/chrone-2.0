import './StrategyContent.scss';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import CoworkersImage from '../../images/cheerful-coworkers-looking-each-other-gadgets-screen.jpg';
// import WorkingLaptop from '../../images/working-laptop.jpg';
import PlaceholderCoworkersImage from '../../images/cheerful-coworkers-looking-each-other-gadgets-screen.webp';
import PlaceHolderWorkingLaptop from '../../images/working-laptop.webp';
import { ReactComponent as CheckMark } from '../../images/check-mark.svg';

const StrategyContent = function () {
  return (
    <section className="strategy-content">
      <div className="strategy-content-top">
        <img src={PlaceholderCoworkersImage} alt="coworkwers__image" />
        {/* <LazyLoadImage
          src={CoworkersImage}
          placeholderSrc={PlaceholderCoworkersImage}
          alt="coworkwers__image"
        /> */}

        <aside>
          <h3>
            Partner in <span>Strategy</span>
          </h3>

          <p>
            We are committed to providing you with the tools and resources you
            need to analyze your market, develop strategies that utilize the
            right channels to capture the attention of potential customers.
          </p>

          <Link to="strategy">Let's grow together</Link>
        </aside>
      </div>

      <div className="strategy-content-bottom">
        <img src={PlaceHolderWorkingLaptop} alt="working-laptop__image" />
        {/* <LazyLoadImage
          src={WorkingLaptop}
          placeholderSrc={PlaceHolderWorkingLaptop}
          alt="working-laptop__image"
        /> */}

        <aside>
          <h3>
            Seriously improve your lead <span>conversion rate</span>
          </h3>

          <div>
            <p>
              <CheckMark /> Intuitive customer analytics
            </p>
            <p>
              <CheckMark /> Advertisement conversion events
            </p>
            <p>
              <CheckMark /> Automation of sales/marketing
            </p>
          </div>

          <Link to="strategy">Strategy Session Call</Link>
        </aside>
      </div>
    </section>
  );
};

export default StrategyContent;
