import Button from '../../ReusableComponents/Button';
import Modal from '../../ReusableComponents/Modal';
import './sass/DemoForm.scss';
import PostFormData from '../../helpers/PostFormData';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const DemoForm = function () {
  // Modal Render
  const [content, setContent] = useState(null);

  const [loading, setLoading] = useState(false);

  // Hide Modal
  const handleClose = function () {
    setContent(null);
  };

  // Yup Validiation scheme
  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    website: yup.string().url().required(),
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
      const status = await PostFormData('xnnqpepo', data);

      if (status === 200) {
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
    <>
      {content}

      <form onSubmit={handleSubmit(onSubmit)} className="demo-form">
        <div className="text-input-div">
          <aside>
            <label>First name</label>
            <input {...register('firstName')} type="text" />
            {errors.firstName && <span>This field is required</span>}
          </aside>

          <aside>
            <label>Last name</label>
            <input {...register('lastName')} type="text" />
            {errors.lastName && <span>This field is required</span>}
          </aside>
        </div>

        <div className="text-input-div">
          <aside>
            <label>Email</label>
            <input {...register('email')} type="email" />
            {errors.email && <span>This field is required</span>}
          </aside>

          <aside>
            <label>Phone Number</label>
            <input {...register('phoneNumber')} type="text" />
            {errors.phoneNumber && <span>This field is required</span>}
          </aside>
        </div>

        <div className="text-input-div">
          <aside>
            <label>Company name</label>
            <input {...register('companyName')} type="text" />
            {errors.companyName && <span>This field is required</span>}
          </aside>

          <aside>
            <label>Website URL</label>
            <input {...register('website')} type="text" />
            {errors.website && <span>Incorrect Website URL</span>}
          </aside>
        </div>

        <div className="checkbox-div">
          <input {...register('subscribe')} type="checkbox" />
          <p>Subscribe to Chrone marketing blog (optional)</p>
        </div>

        <div>
          <p>
            We're committed to your privacy. HubSpot uses the information you
            provide to us to contact you about our relevant content, products,
            and services. You may unsubscribe from these communications at any
            time. For more information.
          </p>
        </div>

        <Button loading={loading}>Get a free demo</Button>
      </form>
    </>
  );
};

export default DemoForm;
