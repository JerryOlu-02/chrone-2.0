import './sass/GetStartedForm.scss';
import Button from '../../ReusableComponents/Button';
import Modal from '../../ReusableComponents/Modal';
import { pricingPlans } from '../../helpers/helpers';
import PricingShow from '../PricingPageContent/PricingShow';
import { ReactComponent as SelectPlan } from '../../images/select-plan.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelectedPlan } from '../../hooks/use-selected-plan';
import PostFormData from '../../helpers/PostFormData';
import { useState } from 'react';

const GetStartedForm = function () {
  const [isLoading, setIsLoading] = useState();
  const [modalContent, setModalContent] = useState();

  // Hide Modal
  const handleClose = () => setModalContent(null);

  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    emailAddress: yup.string().email().required(),
    companyName: yup.string().required(),
    message: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { state, handlePlanClick, handleShowPlans } = useSelectedPlan();

  const renderedSelectedPlans = pricingPlans.map((pricing, index) => (
    <div
      className={`${state.selectedPlan === index ? 'active' : ''}`}
      onClick={() => handlePlanClick(index)}
      key={index}
    >
      <p>{pricing.plan}</p>
    </div>
  ));

  const onSubmit = async function (data) {
    try {
      const finalData = {
        ...data,
        selectedPlan: pricingPlans[state.selectedPlan].plan,
      };

      setIsLoading(true);

      const status = await PostFormData('xrbgpnpa', finalData);
      if (status === 200) {
        setIsLoading(false);

        // Show Modal
        setModalContent(
          <Modal
            success
            message="Your form has been submitted successfully"
            onClose={handleClose}
          />
        );

        reset();

        // Remove Modal after 10 seconds
        setTimeout(() => {
          setModalContent(null);
        }, 10000);
      }
    } catch (error) {
      setIsLoading(false);

      // Show Modal
      setModalContent(<Modal message={error.message} onClose={handleClose} />);

      // Clear form inputs
      reset();

      // Remove modal after 5 seconds
      setTimeout(() => {
        setModalContent(null);
      }, 10000);
    }
  };

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="get-started-form">
      {modalContent}
      <form>
        <div className="title-container">
          <p>Your Information</p>

          <div>
            <input
              {...register('firstName')}
              type="text"
              placeholder="First name"
            />
            {errors.firstName && <span>This field is required</span>}
          </div>

          <div>
            <input
              {...register('lastName')}
              type="text"
              placeholder="Last name"
            />
            {errors.lastName && <span>This field is required</span>}
          </div>

          <div>
            <input
              {...register('phoneNumber')}
              type="text"
              placeholder="Phone number"
            />
            {errors.phoneNumber && <span>This field is required</span>}
          </div>
        </div>

        <div className="title-container">
          <p>Company's Information</p>

          <div>
            <input
              {...register('companyName')}
              type="text"
              placeholder="Company name"
            />
            {errors.companyName && <span>This field is required</span>}
          </div>

          <div>
            <input
              {...register('emailAddress')}
              type="text"
              placeholder="Email address"
            />
            {errors.emailAddress && <span>This field is required</span>}
          </div>
        </div>

        <div className="title-container">
          <p>Plan Information</p>

          <div>
            <div className="select-plan" onClick={handleShowPlans}>
              <p>
                {state.selectedPlan === null
                  ? 'Select Plan'
                  : pricingPlans[state.selectedPlan].plan}
              </p>
              <SelectPlan />
            </div>

            <section
              className={`select-plan-list ${state.showPlans ? 'active' : ''}`}
            >
              {renderedSelectedPlans}
            </section>
          </div>

          <div>
            <textarea {...register('message')} placeholder="Message"></textarea>
          </div>
        </div>

        <Button loading={isLoading}>Submit</Button>
      </form>

      <PricingShow
        pricing={
          pricingPlans[state.selectedPlan === null ? 0 : state.selectedPlan]
        }
      />
    </div>
  );
};

export default GetStartedForm;
