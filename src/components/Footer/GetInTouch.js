import { ReactComponent as SvgArrow } from '../../images/subscribe-arrow.svg';
import Button from '../../ReusableComponents/Button';

const GetInTouch = function () {
  return (
    <section className="get-in-touch">
      <h3>GET IN TOUCH</h3>
      <p>Subscribe to our newsletter and get updates from Chrone Company</p>

      <div className="email-div">
        <div>
          <label>EMAIL ADDRESS:</label>
          <input type="email" placeholder="Email address.." />
        </div>

        <Button>
          Subsribe <SvgArrow />
        </Button>
      </div>
    </section>
  );
};

export default GetInTouch;
