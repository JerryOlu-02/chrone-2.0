import Button from '../../../ReusableComponents/Button';
import './MarketingForm.scss';

const MarkertingForm = function () {
  return (
    <section className="mini-marketing-plan">
      <form className="marketing-form">
        <h2>Mini Marketing plans</h2>

        <div className="details-container">
          <div>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Business Name" />
          </div>

          <div>
            <input type="email" placeholder="Business Email" />
            <input type="number" placeholder="Phone Number" />
          </div>
        </div>

        <div className="checkbox-container">
          <p>What services are you looking for? Select all that apply.</p>

          <div>
            <span>
              <input type="checkbox" />
              <p>Sponsored Ads (Facebook/ Instagram)</p>
            </span>

            <span>
              <input type="checkbox" />
              <p>Website Design & Development</p>
            </span>

            <span>
              <input type="checkbox" />
              <p>Referrals</p>
            </span>

            <span>
              <input type="checkbox" />
              <p>Word of mouth</p>
            </span>

            <span>
              <input type="checkbox" />
              <p>Google Ads</p>
            </span>

            <span>
              <input type="checkbox" />
              <p>Other</p>
            </span>
          </div>
        </div>

        <div className="textarea-container">
          <p>What problems are you facing?</p>

          <textarea placeholder="Write here..."></textarea>
        </div>

        <Button>Submit Form</Button>
      </form>
    </section>
  );
};

export default MarkertingForm;
