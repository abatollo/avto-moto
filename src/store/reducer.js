import {ActionType} from './action';

const initialState = {
  isPopupOpened: false,
  currentSlide: 1,
  currentTab: `product-tab-specifications`,
  reviews: [
    {
      name: `Борис Иванов`,
      advantages: `мощность, внешний вид`,
      disadvantages: `Слабые тормозные колодки (пришлось заменить)`,
      rating: 3,
      comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`
    },
    {
      name: `Марсель Исмагилов`,
      advantages: `Cтиль, комфорт, управляемость`,
      disadvantages: `Дорогой ремонт и обслуживание`,
      rating: 3,
      comment: `Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.`
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_IS_POPUP_OPENED: {
      return {
        ...state,
        isPopupOpened: action.payload,
      };
    }
    case ActionType.SET_CURRENT_SLIDE: {
      return {
        ...state,
        currentSlide: action.payload,
      };
    }
    case ActionType.SET_CURRENT_TAB: {
      return {
        ...state,
        currentTab: action.payload,
      };
    }
    case ActionType.ADD_REVIEW: {
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export {reducer};
