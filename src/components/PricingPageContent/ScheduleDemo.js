import ReusableCard from '../../ReusableComponents/ReusableCard';
import Button from '../../ReusableComponents/Button';
import '../StrategyPageContent/LastContainer.scss';
import { Link } from 'react-router-dom';

const ScheduleDemo = function () {
  return (
    <section className="last-container">
      <ReusableCard>
        <h2>
          We're here to help! Ask us anything, or <span>schedule</span> a
          <span> customized</span> demo.
        </h2>

        <Link to="/strategy">
          <Button>Schedule demo</Button>
        </Link>
      </ReusableCard>
    </section>
  );
};

export default ScheduleDemo;
