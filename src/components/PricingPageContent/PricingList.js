import PricingShow from './PricingShow';
import { pricingPlans } from '../../helpers/helpers';
import './sass/PricingList.scss';
import { useState, useRef, useEffect } from 'react';

const PricingList = function () {
  const pricingListRef = useRef();

  const [activePlan, setActivePlan] = useState(1);

  useEffect(() => {
    const target = pricingListRef.current;

    if (!target) return;

    const scrollTo =
      pricingListRef.current.children[activePlan].getBoundingClientRect().left;

    target.scrollLeft += scrollTo - 27;
  }, [activePlan]);

  const handlePlanClick = function (index) {
    setActivePlan(index);
  };

  const renderedPricingPlans = pricingPlans.map((pricing) => {
    return (
      <PricingShow
        pricingListRef={pricingListRef.current}
        key={pricing.plan}
        pricing={pricing}
      />
    );
  });

  return (
    <div className="pricing-section">
      <div ref={pricingListRef} className="pricing-list">
        {renderedPricingPlans}
      </div>

      <div className="pricing-scroll">
        {pricingPlans.map((pricing, index) => (
          <span
            onClick={() => handlePlanClick(index)}
            className={activePlan === index ? 'active' : ''}
            key={pricing.plan}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
