import './ReusableCard.scss';

const ReusableCard = function ({ children, ...rest }) {
  return (
    <div className="reusable-card" {...rest}>
      {children}
    </div>
  );
};

export default ReusableCard;
