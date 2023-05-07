import './sass/GetStartedForm.scss';
import Button from '../../ReusableComponents/Button';
import { pricingPlans } from '../../helpers/helpers';
import PricingShow from '../PricingPageContent/PricingShow';
import { ReactComponent as SelectPlan } from '../../images/select-plan.svg';
import { useReducer } from 'react';

const reducer = function (state, action) {
  switch (action.type) {
    case 'set-show-plan':
      return {
        ...state,
        showPlans: action.payload,
      };

    case 'set-state':
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

const GetStartedForm = function () {
  const [state, dispatch] = useReducer(reducer, {
    showPlans: false,
    selectedPlan: null,
  });

  const handleShowPlans = function () {
    dispatch({
      type: 'set-show-plan',
      payload: !state.showPlans,
    });
  };

  const handlePlanClick = function (index) {
    dispatch({
      type: 'set-state',
      payload: {
        showPlans: false,
        selectedPlan: index,
      },
    });
  };

  const renderedSelectedPlans = pricingPlans.map((pricing, index) => (
    <div
      className={`${state.selectedPlan === index ? 'active' : ''}`}
      onClick={() => handlePlanClick(index)}
      key={index}
    >
      <p>{pricing.plan}</p>
    </div>
  ));

  return (
    <div className="get-started-form">
      <form>
        <div className="title-container">
          <p>Your Information</p>

          <div>
            <input type="text" placeholder="First name" />
            <span>error</span>
          </div>

          <div>
            <input type="text" placeholder="Last name" />
            <span>error</span>
          </div>

          <div>
            <input type="text" placeholder="Phone number" />
            <span>error</span>
          </div>
        </div>

        <div className="title-container">
          <p>Company's Information</p>

          <div>
            <input type="text" placeholder="Company name" />
            <span>error</span>
          </div>

          <div>
            <input type="text" placeholder="Email address" />
            <span>error</span>
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

            <span>error</span>
          </div>

          <div>
            <textarea placeholder="Message"></textarea>
          </div>
        </div>

        <Button>Submit</Button>
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
