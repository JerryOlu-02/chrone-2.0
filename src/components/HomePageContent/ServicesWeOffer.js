import Button from '../../ReusableComponents/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as CheckMark } from '../../images/check-mark.svg';
import './ServicesWeOffer.scss';

const ServicesWeOffer = function () {
  return (
    <section className="services-we-offer">
      <h2>
        <span>Services</span> we offer
      </h2>

      <div className="services-we-offer-container">
        <div className="services-we-offer-div">
          <h4>Marketing Strategy</h4>

          <p>
            Helpful for larger businesses or those that are looking to scale
            their business.
          </p>

          <Link to="/pricing">
            <Button>View plans</Button>
          </Link>

          <div>
            <p>
              <CheckMark />
              Content Calender
            </p>
            <p>
              <CheckMark />
              Marketing Plan & Strategy
            </p>
            <p>
              <CheckMark />
              Community Management
            </p>
            <p>
              <CheckMark />
              Consultancy
            </p>
            <p>
              <CheckMark />
              Creative Strategy
            </p>
          </div>
        </div>

        <div className="services-we-offer-div">
          <h4>Digital Marketing</h4>

          <p>
            Helpful for larger businesses or those that are looking to scale
            their business.
          </p>

          <Link to="/pricing">
            <Button>View plans</Button>
          </Link>

          <div>
            <p>
              <CheckMark />
              Social Media Advertisement
            </p>
            <p>
              <CheckMark />
              Search Engine Optimization
            </p>
            <p>
              <CheckMark />
              Content Creation
            </p>
            <p>
              <CheckMark />
              Email Marketing
            </p>
            <p>
              <CheckMark />
              Pay Per Click Advertisement
            </p>
            <p>
              <CheckMark />
              SMS Marketing
            </p>
          </div>
        </div>

        <div className="services-we-offer-div">
          <h4>Design & Development</h4>

          <p>
            Helpful for larger businesses or those that are looking to scale
            their business.
          </p>

          <Link to="/pricing">
            <Button>View plans</Button>
          </Link>

          <div>
            <p>
              <CheckMark />
              Website Development
            </p>
            <p>
              <CheckMark />
              Website Design
            </p>
            <p>
              <CheckMark />
              E-commerce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
