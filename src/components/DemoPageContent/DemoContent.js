import DemoForm from './DemoForm';
import './sass/DemoContent.scss';
import { ReactComponent as FeaturesMark } from '../../images/features-check-mark.svg';

const DemoContent = function () {
  return (
    <section className="demo-content">
      <aside className="demo-content-left">
        <h2>Request a demo</h2>

        <p>
          Chrone Influitive Company will help you attract the right audience,
          convert more visitors into customers, and run complete inbound
          marketing campaigns at scale — all on one powerful, easy-to-use
          platform.
        </p>

        <h4>Popular features</h4>

        <div className="features-div">
          <div>
            <h5>Attract</h5>
            <p>
              <FeaturesMark />
              Social media
            </p>
            <p>
              <FeaturesMark />
              SEO
            </p>
            <p>
              <FeaturesMark />
              Advertisements
            </p>
          </div>

          <div>
            <h5>Convert</h5>
            <p>
              <FeaturesMark />
              Email
            </p>
            <p>
              <FeaturesMark />
              Automation
            </p>
            <p>
              <FeaturesMark />
              Forms
            </p>
            <p>
              <FeaturesMark />
              Website
            </p>
          </div>
        </div>
      </aside>

      <aside>
        <DemoForm />
      </aside>
    </section>
  );
};

export default DemoContent;
