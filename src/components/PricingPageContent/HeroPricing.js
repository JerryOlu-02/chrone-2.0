import PricingList from './PricingList';
import './sass/HeroPricing.scss';

const HeroPricing = function () {
  return (
    <section className="hero-pricing">
      <div className="hero-pricing-header">
        <h2>
          Discover the power of <br /> <span>digital marketing</span>
        </h2>
        <p>Find the perfect plan to elevate your business</p>
      </div>

      <PricingList />
    </section>
  );
};

export default HeroPricing;
