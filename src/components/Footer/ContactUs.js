import { Link } from 'react-router-dom';
import { FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const ContactUs = function () {
  return (
    <section className="contact-us">
      <h3>CONTACT US</h3>

      <div className="contact-us-div">
        <p>admin@chronecompany.com</p>

        <p>+234 809 456 5859</p>

        <p>
          364, Borno Way, Alagomeji,
          <br />
          Yaba. Lagos, Nigeria.
        </p>

        <div className="footer-links">
          <Link href="https://twitter.com/ChroneCompany?s=20&t=NT3KIimij5V9FdcfCYSehQ">
            <FaTwitterSquare />
          </Link>

          <Link href="https://www.instagram.com/chronecompany/">
            <FaInstagramSquare />
          </Link>

          <Link href="https://www.linkedin.com/in/chrone-company-78b85824b">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
