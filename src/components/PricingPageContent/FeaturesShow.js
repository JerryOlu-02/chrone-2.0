import { ReactComponent as AvailableIcon } from '../../images/available-feature.svg';
import { ReactComponent as UnavailableIcon } from '../../images/unavailable-feature.svg';

const FeaturesShow = function ({ feature, showFeature }) {
  const classes = showFeature ? '' : 'hide-feature';

  return (
    <div className={`features-show ${classes}`}>
      <p>{feature.feature}</p>

      <div>{feature.starter ? <AvailableIcon /> : <UnavailableIcon />}</div>

      <div>
        {feature.professional ? <AvailableIcon /> : <UnavailableIcon />}
      </div>

      <div>{feature.enterprise ? <AvailableIcon /> : <UnavailableIcon />}</div>
    </div>
  );
};

export default FeaturesShow;
