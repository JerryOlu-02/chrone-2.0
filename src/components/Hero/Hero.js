import './Hero.scss';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = function () {
  return (
    <section className="hero">
      <HeroLeft />

      <HeroRight />
    </section>
  );
};

export default Hero;
