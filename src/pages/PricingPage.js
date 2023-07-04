import Footer from '../components/Footer/Footer';
import ExploreFeatures from '../components/PricingPageContent/ExploreFeatures';
import FaqList from '../components/PricingPageContent/FaqList';
import HeroPricing from '../components/PricingPageContent/HeroPricing';
import OnlinePresence from '../components/PricingPageContent/OnlinePresence';
import ScheduleDemo from '../components/PricingPageContent/ScheduleDemo';

const PricingPage = function () {
  return (
    <>
      <HeroPricing />

      <ExploreFeatures />

      <ScheduleDemo />

      <FaqList />

      <OnlinePresence />

      <Footer />
    </>
  );
};

export default PricingPage;
