const ActionType = {
  CHANGE_IS_POPUP_OPENED: `CHANGE_IS_POPUP_OPENED`,
  SET_CURRENT_SLIDE: `SET_CURRENT_SLIDE`,
  SET_CURRENT_TAB: `SET_CURRENT_TAB`
};

const ActionCreator = {
  changeIsPopupOpened: (payload) => ({
    type: ActionType.CHANGE_IS_POPUP_OPENED,
    payload
  }),
  setCurrentSlide: (payload) => ({
    type: ActionType.SET_CURRENT_SLIDE,
    payload
  }),
  setCurrentTab: (payload) => ({
    type: ActionType.SET_CURRENT_TAB,
    payload
  })
};

export {ActionType, ActionCreator};