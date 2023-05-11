import Hero from '../components/Hero/Hero';
import ReusableCard from '../ReusableComponents/ReusableCard';
import Button from '../ReusableComponents/Button';
import StrategyContent from '../components/HomePageContent/StrategyContent';
import DigitalModernEra from '../components/HomePageContent/DigitalModernEra';
import BookSession from '../components/HomePageContent/BookSession';
import ServicesWeOffer from '../components/HomePageContent/ServicesWeOffer';
import LastSection from '../components/HomePageContent/LastSection';
import { Link } from 'react-router-dom';
import EventPopup from '../components/ExtraFeatures/EventPopup';
import { useEffect, useState } from 'react';

const HomePage = function () {
  const [eventContent, setEventContent] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEventContent(<EventPopup />);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {eventContent}

      <Hero />

      <ReusableCard>
        <h2>
          We design and develop <span>digital</span> stores to grow businesses
          and scale <span>brands</span> around the world.
        </h2>
        <Link to="/get-started">
          <Button>Get Started</Button>
        </Link>
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
