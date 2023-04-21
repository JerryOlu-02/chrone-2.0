import '../sass/Button.scss';

const Button = function ({ children, className, ...rest }) {
  return (
    <button className={`reusable-button ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
