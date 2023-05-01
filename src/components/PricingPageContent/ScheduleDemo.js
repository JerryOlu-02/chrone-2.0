import ReusableCard from '../../ReusableComponents/ReusableCard';
import Button from '../../ReusableComponents/Button';
import '../StrategyPageContent/LastContainer.scss';

const ScheduleDemo = function () {
  return (
    <section className="last-container">
      <ReusableCard>
        <h2>
          We're here to help! Ask us anything, or <span>schedule</span> a
          <span>customized</span> demo.
        </h2>

        <Button>Schedule demo</Button>
      </ReusableCard>
    </section>
  );
};

export default ScheduleDemo;
