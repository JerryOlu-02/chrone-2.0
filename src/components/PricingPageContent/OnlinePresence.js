import ReusableCard from '../../ReusableComponents/ReusableCard';
import Button from '../../ReusableComponents/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as CallIcon } from '../../images/call-icon.svg';
import '../StrategyPageContent/LastContainer.scss';
import './sass/OnlinePresence.scss';

const OnlinePresence = function () {
  return (
    <section className="last-container">
      <ReusableCard
        style={{ backgroundColor: '#141D3A', alignItems: 'center' }}
      >
        <h2
          style={{
            color: '#FFFFFF',
            backgroundColor: '#141D3A',
            textAlign: 'center',
          }}
        >
          Let's take your{' '}
          <span style={{ color: '#D75023', backgroundColor: '#141D3A' }}>
            online presence
          </span>{' '}
          to the next level!
        </h2>

        <Link to="/strategy">
          <Button style={{ backgroundColor: '#FFFFFF', color: '#141D3A' }}>
            Schedule demo
          </Button>
        </Link>
      </ReusableCard>

      <div className="online-presence">
        <h2 style={{ backgroundColor: '#ffffff', color: '#263238' }}>
          Still have questions about how Chrone company can help your business?
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <CallIcon style={{ backgroundColor: '#ffffff' }} />
          <p style={{ color: '#D75023', width: 'max-content' }}>
            +234 80 6516 8999
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlinePresence;
