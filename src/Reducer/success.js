// let initialState = {
//   success: false
// };
export default (state = false, action) => {
  switch (action.type) {
    case "CORRECT_GUESS":
      return true;

    default:
      return state;
  }
};
