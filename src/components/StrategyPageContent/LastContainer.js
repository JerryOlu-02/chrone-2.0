import './LastContainer.scss';
import ReusableCard from '../../ReusableComponents/ReusableCard';
import Button from '../../ReusableComponents/Button';

const LastContainer = function () {
  return (
    <section className="last-container">
      <ReusableCard>
        <h2>
          We’re a strategic <span>influitive</span> and innovation partner for
          brands and <span>agencies</span>.
        </h2>

        <Button>Explore our plans</Button>
      </ReusableCard>
    </section>
  );
};

export default LastContainer;
