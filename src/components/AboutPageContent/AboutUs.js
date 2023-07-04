import './AboutUs.scss';
import AboutImg from '../../images/aboutusman.png';
import { ReactComponent as CallIcon } from '../../images/call.svg';
import { ReactComponent as Mail } from '../../images/mail.svg';
import { ReactComponent as Location } from '../../images/location.svg';

const AboutUs = function () {
  return (
    <section className="aboutus">
      <div className="aboutus-header">
        <h2>About Us</h2>
        <p>What is Chrone Influitive Company?</p>
      </div>

      <div className="aboutus-content">
        <aside>
          <h3>Chrone Influitive Company</h3>
          <p>
            Founded in April 2019 and headquarted in Alagomeji, Lagos. Chrone
            Influitive Company is a full digital marketing agency and
            advertising brand. We develop, strengthen and promote our clients
            business by implementing innovative, data-driven project that helps
            their brand and business thrive and generate measurable and tangible
            leads. Whether you need a one-time project or promotional agency
            partner, Chrone Influitive Company is here to provide useful
            insights to help push the limit to achieve results you seek.
          </p>
        </aside>

        <img
          src={AboutImg}
          alt="portrait-handsome-african-black-young-business-man-working-laptop-office-desk"
        />
      </div>

      <div className="aboutus-contact">
        <h3>How to Contact Us</h3>

        <p>
          <CallIcon />
          +234 806 516 8999
        </p>
        <p>
          <Mail />
          admin@chronecompany.com
        </p>
        <p>
          <Location />
          364 Borno way, Alagomeji, Yaba, Lagos Nigeria
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
