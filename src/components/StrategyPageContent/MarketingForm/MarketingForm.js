import Button from '../../../ReusableComponents/Button';
import './MarketingForm.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const MarkertingForm = function () {
  const validationSchema = yup.object({
    fullName: yup.string().required(),
    businessName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    problemsFaced: yup.string(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async function (data) {
    const response = await axios.post('https://formspree.io/f/mknakdyk', data, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.status === 200) {
    } else {
    }
  };

  return (
    <section className="mini-marketing-plan">
      <form className="marketing-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Mini Marketing plans</h2>

        <div className="details-container">
          <div>
            <aside>
              <input
                type="text"
                placeholder="Full Name"
                {...register('fullName')}
              />
              {errors.fullName && <span>This field is required</span>}
            </aside>

            <aside>
              <input
                type="text"
                placeholder="Business Name"
                {...register('businessName')}
              />
              {errors.businessName && <span>This field is required</span>}
            </aside>
          </div>

          <div>
            <aside>
              <input
                type="email"
                placeholder="Business Email"
                {...register('email')}
              />
              {errors.email && <span>This field is required</span>}
            </aside>
            <aside>
              <input
                type="number"
                placeholder="Phone Number"
                {...register('phoneNumber')}
              />
              {errors.phoneNumber && <span>This field is required</span>}
            </aside>
          </div>
        </div>

        <div className="checkbox-container">
          <p>What services are you looking for? Select all that apply.</p>

          <div>
            <span>
              <input type="checkbox" {...register('sponsoredAds')} />
              <p>Sponsored Ads (Facebook/ Instagram)</p>
            </span>

            <span>
              <input type="checkbox" {...register('webDesign')} />
              <p>Website Design & Development</p>
            </span>

            <span>
              <input type="checkbox" {...register('referrals')} />
              <p>Referrals</p>
            </span>

            <span>
              <input type="checkbox" {...register('wordOfMouth')} />
              <p>Word of mouth</p>
            </span>

            <span>
              <input type="checkbox" {...register('googkeAds')} />
              <p>Google Ads</p>
            </span>

            <span>
              <input type="checkbox" {...register('other')} />
              <p>Other</p>
            </span>
          </div>
        </div>

        <div className="textarea-container">
          <p>What problems are you facing?</p>

          <textarea
            placeholder="Write here..."
            {...register('problemsFaced')}
          ></textarea>
        </div>

        <Button>Submit Form</Button>
      </form>
    </section>
  );
};

export default MarkertingForm;
