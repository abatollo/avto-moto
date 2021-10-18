import {ActionType} from './action';

const initialState = {
  isPopupOpened: true,
  currentSlide: 1,
  currentTab: `product-tab-specifications`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_IS_POPUP_OPENED:
      return {
        ...state,
        isPopupOpened: action.payload,
      };
    case ActionType.SET_CURRENT_SLIDE:
      return {
        ...state,
        currentSlide: action.payload,
      };
    case ActionType.SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
