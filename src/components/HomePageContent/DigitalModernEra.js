import { LazyLoadImage } from 'react-lazy-load-image-component';
import WebDesignImg from '../../images/web-design.jpg';
import ProgrammersImg from '../../images/programmers.jpg';
import PlaceholderWebDesignImg from '../../images/web-design.webp';
import PlaceholderProgrammersImg from '../../images/programmers.webp';
import './DigitalModernEra.scss';

const DigitalModernEra = function () {
  return (
    <section className="digital-modern-era">
      <div>
        <h2>
          Digital <span>design</span> for the modern era
        </h2>

        <p>
          A well-designed website can not only create a positive first
          impression but also serve as a powerful marketing tool, driving
          traffic, and generating leads. At our digital marketing agency, we
          specialize in creating bespoke website designs that are tailored to
          meet the unique needs of your business.
        </p>
      </div>

      <div>
        <aside>
          <LazyLoadImage
            src={WebDesignImg}
            placeholderSrc={PlaceholderWebDesignImg}
            alt="web-design-process"
          />
        </aside>
        <aside>
          <LazyLoadImage
            src={ProgrammersImg}
            placeholderSrc={PlaceholderProgrammersImg}
            alt="programmers-interaction"
          />
        </aside>
        {/* <img src={WebDesignImg} alt="web-design-process" /> */}
        {/* <img src={ProgrammersImg} alt="programmers-interaction" /> */}
      </div>
    </section>
  );
};

export default DigitalModernEra;
