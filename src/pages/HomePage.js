import Hero from '../components/Hero/Hero';
import ReusableCard from '../ReusableComponents/ReusableCard';
import Button from '../ReusableComponents/Button';
import StrategyContent from '../components/HomePageContent/StrategyContent';
import DigitalModernEra from '../components/HomePageContent/DigitalModernEra';
import BookSession from '../components/HomePageContent/BookSession';
import ServicesWeOffer from '../components/HomePageContent/ServicesWeOffer';
import LastSection from '../components/HomePageContent/LastSection';

const HomePage = function () {
  return (
    <>
      <Hero />

      <ReusableCard>
        <h2>
          We design and develop <span>digital</span> stores to grow businesses
          and scale <span>brands</span> around the world.
        </h2>
        <Button>Get Started</Button>
      </ReusableCard>

      <StrategyContent />

      <DigitalModernEra />

      <BookSession />

      <ServicesWeOffer />

      <LastSection />
    </>
  );
};

export default HomePage;
