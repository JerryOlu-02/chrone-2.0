import { BsArrowUp } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ReactComponent as SeoOrange } from '../../images/seo-orange-hero.svg';
import './HeroRight.scss';

const HeroRight = function () {
  return (
    <aside className="hero-right">
      <div className="hero-right-div">
        <div className="search-engine">
          <SeoOrange className="seo-orange" />

          <p>
            <span>
              <BsArrowUp />
            </span>
            174.6
          </p>

          <h2>Search engine optimization</h2>

          <div className="seo-last-div">
            <span>(+14.55) Today</span>

            <div>
              <span></span>
            </div>
          </div>
        </div>

        <div className="digital-presence">
          <div className="digital-presence-left">
            <div>
              <FaUserAlt />
            </div>

            <p>Digital presence</p>
          </div>

          <div className="digital-presence-right">
            <div>
              <BsArrowUp />
            </div>

            <p>174.6</p>
          </div>

          <div className="digital-presence-bottom-bar"></div>
        </div>
      </div>

      <div className="hero-right-div">
        <div className="b2b-market">
          <div>
            <p>B2B Market</p>
            <p>
              Massive <br /> conversion <br /> rate.
            </p>
          </div>
        </div>

        <div className="engagements">
          <p>Total engagements</p>

          <h2>+38.9%</h2>

          <div className="engagements-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="engagements-lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HeroRight;
