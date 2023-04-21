import WebDesignImg from '../../images/web-design.png';
import ProgrammersImg from '../../images/programmers.png';
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
        <img src={WebDesignImg} alt="web-design-process" />
        <img src={ProgrammersImg} alt="programmers-interaction" />
      </div>
    </section>
  );
};

export default DigitalModernEra;
