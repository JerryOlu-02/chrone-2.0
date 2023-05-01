import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-has';

const SiteMap = function () {
  return (
    <section className="site-map">
      <h3>SITE MAP</h3>

      <ul className="site-map-list">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="pricing">Pricing</Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </section>
  );
};

export default SiteMap;
