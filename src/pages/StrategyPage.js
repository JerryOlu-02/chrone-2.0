import { Outlet } from 'react-router-dom';
import HeroStrategy from '../components/StrategyPageContent/Hero/Hero';
import LastContainer from '../components/StrategyPageContent/LastContainer';
import MarkertingForm from '../components/StrategyPageContent/MarketingForm/MarketingForm';
import PartnerUs from '../components/StrategyPageContent/PartnerUs';
import Button from '../ReusableComponents/Button';
import ReusableCard from '../ReusableComponents/ReusableCard';

const StrategyPage = function () {
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

        <Button>Learn more</Button>
      </ReusableCard>

      <MarkertingForm />

      <PartnerUs />

      <LastContainer />
    </>
  );
};

export default StrategyPage;
