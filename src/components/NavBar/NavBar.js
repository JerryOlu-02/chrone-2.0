import ChroneLogo from '../../images/chronelogo (1).png';
import CLogo from '../../images/C-chronelogo.png';
import './NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../ReusableComponents/Button';
import { useState, useRef, useEffect } from 'react';

const NavBar = function () {
  const navbarRef = useRef();

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = function () {
    setShowNav(!showNav);
  };

  useEffect(() => {
    // MenuBar
    const clickHandler = function (event) {
      if (!navbarRef.current) return;

      if (navbarRef.current.contains(event.target)) return;

      if (event.target.classList.contains('menu-bar-div')) return;

      setShowNav(false);
    };

    document.addEventListener('click', clickHandler, true);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  const activeNav = showNav ? 'active' : '';

  return (
    <nav ref={navbarRef} className={`navbar`}>
      <Link to="/">
        <div className="navbar-logo">
          {/* <img src={CLogo} alt="C-chrone__logo" /> */}
          <img src={ChroneLogo} alt="chrone__logo" />
        </div>
      </Link>

      <ul className={`nav-list ${activeNav}`}>
        <div>
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
        </div>

        <Link to="/strategy" className="button-link">
          <Button className="nav-button">Request a demo</Button>
        </Link>
      </ul>

      <div className={`menu-bar ${activeNav}`} onClick={handleShowNav}>
        <span className="menu-bar-div"></span>
        <span className="menu-bar-div"></span>
        <span className="menu-bar-div"></span>
      </div>
    </nav>
  );
};

export default NavBar;
