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

export const useSelectedPlan = function () {
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

  return { state, handleShowPlans, handlePlanClick };
};
