import './footer.scss';
import ContactUs from './ContactUs';
import GetInTouch from './GetInTouch';
import SiteMap from './SiteMap';

const Footer = function () {
  return (
    <footer className="footer">
      <ContactUs />
      <SiteMap />
      <GetInTouch />
    </footer>
  );
};

export default Footer;
