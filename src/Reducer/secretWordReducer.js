export default (state = null, action) => {
  switch (action.type) {
    case "SET_SECRET_WORD":
      return action.payload;

    default:
      return state;
  }
  return state;
};
