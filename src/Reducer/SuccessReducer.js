let initialState = {
  success: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "CORRECT_GUESS":
      return {
        ...state,
        success: true
      };
    default:
      return state;
  }
};
