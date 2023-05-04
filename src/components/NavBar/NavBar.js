import ChroneLogo from '../../images/chronelogo.png';
import CLogo from '../../images/C-chronelogo.png';

import './NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../ReusableComponents/Button';
import { useState, useRef, useEffect } from 'react';
import { IO } from '../../helpers/observer';

const NavBar = function () {
  const navbarRef = useRef();
  const intersectionObserverRef = useRef(null);

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = function () {
    setShowNav(!showNav);
  };

  useEffect(() => {
    // NavBar
    // const item = navbarRef.current;
    // if (intersectionObserverRef.current) return;

    // intersectionObserverRef.current = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (!entry.isIntersecting) {
    //         item.classList.add('fixed');
    //       } else {
    //         item.classList.remove('fixed');
    //       }
    //     });
    //   },
    //   {
    //     root: null,
    //     threshold: 0,
    //   }
    // );

    // intersectionObserverRef.current.observe(item);

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
      // intersectionObserverRef.current.unobserve(item);
    };
  }, []);

  const activeNav = showNav ? 'active' : '';

  return (
    <nav ref={navbarRef} className={`navbar`}>
      <Link to="/">
        <div className="navbar-logo">
          <img src={CLogo} alt="C-chrone__logo" />
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
