import './StrategyContent.scss';
import { Link } from 'react-router-dom';
import CoworkersImage from '../../images/cheerful-coworkers-looking-each-other-gadgets.png';
import WorkingLaptop from '../../images/working-laptop.png';
import { ReactComponent as CheckMark } from '../../images/check-mark.svg';

const StrategyContent = function () {
  return (
    <section className="strategy-content">
      <div className="strategy-content-top">
        <img src={CoworkersImage} alt="coworkwers__image" />

        <aside>
          <h3>
            Partner in <span>Strategy</span>
          </h3>

          <p>
            We are committed to providing you with the tools and resources you
            need to analyze your market, develop strategies that utilize the
            right channels to capture the attention of potential customers.
          </p>

          <Link>Let's grow together</Link>
        </aside>
      </div>

      <div className="strategy-content-bottom">
        <img src={WorkingLaptop} alt="working-laptop__image" />

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

          <Link>Strategy Session Call</Link>
        </aside>
      </div>
    </section>
  );
};

export default StrategyContent;
