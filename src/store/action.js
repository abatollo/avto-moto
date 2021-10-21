const ActionType = {
  ON_IS_POPUP_OPENED_CHANGE: `ON_IS_POPUP_OPENED_CHANGE`,
  ON_CURRENT_SLIDE_SET: `ON_CURRENT_SLIDE_SET`,
  ON_CURRENT_TAB_SET: `ON_CURRENT_TAB_SET`,
  ON_REVIEW_ADD: `ON_REVIEW_ADD`
};

const ActionCreator = {
  onIsPopupOpenedChange: (payload) => ({
    type: ActionType.ON_IS_POPUP_OPENED_CHANGE,
    payload
  }),
  onCurrentSlideSet: (payload) => ({
    type: ActionType.ON_CURRENT_SLIDE_SET,
    payload
  }),
  onCurrentTabSet: (payload) => ({
    type: ActionType.ON_CURRENT_TAB_SET,
    payload
  }),
  onReviewAdd: (payload) => ({
    type: ActionType.ON_REVIEW_ADD,
    payload
  })
};

export {ActionType, ActionCreator};
