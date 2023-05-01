import Button from '../../ReusableComponents/Button';
import { ReactComponent as CallIcon } from '../../images/call-icon.svg';
import FeaturesList from './FeaturesList';
import './sass/ExploreFeatures.scss';

const ExploreFeatures = function () {
  return (
    <section className="explore-features">
      <h3>Explore the full range of features available</h3>

      <FeaturesList />

      <div className="need-help">
        <p>Need help choosing a plan?</p>

        <Button>
          <CallIcon />
          +234 809 456 5859
        </Button>
      </div>
    </section>
  );
};

export default ExploreFeatures;
