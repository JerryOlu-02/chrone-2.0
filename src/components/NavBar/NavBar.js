import ChroneLogo from '../../images/chronelogo (1).png';
import './NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../ReusableComponents/Button';

const NavBar = function () {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={ChroneLogo} alt="chrone__logo" />

      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="strategy"
            className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
          >
            Strategy Session
          </NavLink>
        </li>
      </ul>

      <Link className="button-link">
        <Button className="nav-button">Get Started</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
