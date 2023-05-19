import { ReactComponent as PricingImage } from '../../images/pricing-image.svg';
import { ReactComponent as PricingPlanMark } from '../../images/pricing-plan-mark.svg';
import Button from '../../ReusableComponents/Button';
import { Link } from 'react-router-dom';

const PricingShow = function ({ pricing }) {
  const availablePlans = pricing.planPackages.map((plans) => {
    return (
      <div className="available-plans" key={plans}>
        <PricingPlanMark />
        <p>{plans}</p>
      </div>
    );
  });

  return (
    <div className="pricing-show">
      <div className="pricing-show-header">
        <PricingImage />
        <h4>{pricing.plan}</h4>
      </div>

      <p className="pricing-show-description">{pricing.planDescription}</p>

      <div className="pricing-show-prices">
        <p>Starts at</p>
        <h3>{pricing.planPrice}</h3>
        <p>billed monthly</p>
      </div>

      <Link to="/demo">
        <Button>Buy now</Button>
      </Link>

      <p>Includes:</p>

      <div className="available-plans-div">{availablePlans}</div>
    </div>
  );
};

export default PricingShow;
