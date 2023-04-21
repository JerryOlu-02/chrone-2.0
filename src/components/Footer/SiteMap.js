import { Link } from 'react-router-dom';

const SiteMap = function () {
  return (
    <section className="site-map">
      <h3>SITE MAP</h3>

      <ul className="site-map-list">
        <li>
          <Link>Homepage</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>

        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </section>
  );
};

export default SiteMap;
