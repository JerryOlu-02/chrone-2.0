import '../sass/Button.scss';
import { ImSpinner2 } from 'react-icons/im';

const Button = function ({ children, className, loading, ...rest }) {
  return (
    <button className={`reusable-button ${className}`} {...rest}>
      {loading ? <ImSpinner2 className="spinner" /> : children}
    </button>
  );
};

export default Button;
