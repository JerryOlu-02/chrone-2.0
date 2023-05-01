import FeaturesShow from './FeaturesShow';
import { ReactComponent as SeeFeatures } from '../../images/see-features.svg';
import { featureItems } from '../../helpers/helpers';
import './sass/FeaturesList.scss';
import { useState } from 'react';

const FeaturesList = function () {
  const [showFeature, setShowFeature] = useState(false);
  const [noOfDisplayedFeatures, setNoOfDisplayedFeatures] = useState(7);

  const newFeatureItems = featureItems.slice(0, noOfDisplayedFeatures);

  const renderedFeatures = newFeatureItems.map((feature) => {
    return (
      <FeaturesShow
        showFeature={showFeature}
        key={feature.feature}
        feature={feature}
      />
    );
  });

  const handleShowFeatures = function () {
    setShowFeature(!showFeature);
    setNoOfDisplayedFeatures((currentNumber) => {
      return currentNumber === featureItems.length ? 7 : featureItems.length;
    });
  };

  return (
    <div className="features-list">
      <div className="features-header">
        <h4>Features</h4>
        <p>Starter Pack</p>
        <p>Professional Pack</p>
        <p>Enterprise Pack</p>
      </div>

      <>{renderedFeatures}</>

      <div className="see-features">
        <p onClick={handleShowFeatures}>
          {showFeature ? 'See less features' : 'See all features'}
          <SeeFeatures />
        </p>
      </div>
    </div>
  );
};

export default FeaturesList;
