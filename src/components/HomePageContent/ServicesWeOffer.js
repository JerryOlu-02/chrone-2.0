import './ServicesWeOffer.scss';

const ServicesWeOffer = function () {
  return (
    <section className="services-we-offer">
      <h2>
        <span>Services</span> we offer
      </h2>

      <div className="services-we-offer-container">
        <div className="services-we-offer-div">
          <h4>MARKETING STRATEGY</h4>

          <div>
            <p>Content Calender</p>
            <p>Marketing Plan & Strategy</p>
            <p>Community Management</p>
            <p>Consultancy</p>
            <p>Creative Strategy</p>
          </div>
        </div>

        <div className="services-we-offer-div">
          <h4>DIGITAL MARKETING</h4>

          <div>
            <p>Social Media Advertisement</p>
            <p>Search Engine Optimization</p>
            <p>Content Creation</p>
            <p>Email Marketing</p>
            <p>Pay Per Click Advertisement</p>
            <p>SMS Marketing</p>
          </div>
        </div>

        <div className="services-we-offer-div">
          <h4>DESIGN & DEVELOPMENT</h4>

          <div>
            <p>Website Development</p>
            <p>Website Design</p>
            <p>E-commerce </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
