import Button from '../../../ReusableComponents/Button';
import Modal from '../../../ReusableComponents/Modal';
import './MarketingForm.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

const MarkertingForm = function () {
  // Modal Render
  const [content, setContent] = useState(null);

  const [loading, setLoading] = useState(false);

  // Hide Modal
  const handleClose = function () {
    setContent(null);
  };

  // Yup Validiation scheme
  const validationSchema = yup.object({
    fullName: yup.string().required(),
    businessName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    problemsFaced: yup.string(),
  });

  // React hook form (form control)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  // HANDLE submission request
  const onSubmit = async function (data) {
    try {
      setLoading(true);

      // POST data to formspree
      const response = await axios.post(
        'https://formspree.io/f/mknakdyk',
        data,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setLoading(false);

        // Show Modal
        setContent(
          <Modal
            success
            message="Your form has been submitted successfully"
            onClose={handleClose}
          />
        );

        reset();

        // Remove Modal after 5 seconds
        setTimeout(() => {
          setContent(null);
        }, 10000);
      }
    } catch (error) {
      setLoading(false);

      // Show Modal
      setContent(<Modal message={error.message} onClose={handleClose} />);

      // Clear form inputs
      reset();

      // Remove modal after 5 seconds
      setTimeout(() => {
        setContent(null);
      }, 10000);
    }
  };

  return (
    <section className="mini-marketing-plan">
      {content}
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

        <Button loading={loading}>Submit Form</Button>
      </form>
    </section>
  );
};

export default MarkertingForm;
