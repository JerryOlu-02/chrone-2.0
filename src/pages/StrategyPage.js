import { createRef } from 'react';
import { Outlet } from 'react-router-dom';
import HeroStrategy from '../components/StrategyPageContent/Hero/Hero';
import LastContainer from '../components/StrategyPageContent/LastContainer';
import MarkertingForm from '../components/StrategyPageContent/MarketingForm/MarketingForm';
import PartnerUs from '../components/StrategyPageContent/PartnerUs';
import Button from '../ReusableComponents/Button';
import ReusableCard from '../ReusableComponents/ReusableCard';

const StrategyPage = function () {
  const partnerUsRef = createRef();

  const handleScroll = function () {
    partnerUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroStrategy>
        <Outlet />
      </HeroStrategy>

      <ReusableCard>
        <h2>
          Through our company analysis and consulting, we <span>design</span>{' '}
          and execute high-impact <span>strategies</span> to create{' '}
          <span>growth</span> in your company.
        </h2>

        <Button onClick={handleScroll}>Learn more</Button>
      </ReusableCard>

      <MarkertingForm />

      <PartnerUs ref={partnerUsRef} />

      <LastContainer />
    </>
  );
};

export default StrategyPage;
