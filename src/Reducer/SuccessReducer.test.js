import SuccessReducer from "./SuccessReducer";

describe("Sucess Reducer", () => {
  test("return false when no action is passsed", () => {
    const newState = SuccessReducer(undefined, {});
    expect(newState.success).toBe(false);
  });
  test("return true when action 'CORRECT_GUESS'", () => {
    const newState = SuccessReducer(undefined, { type: "CORRECT_GUESS" });
    expect(newState.success).toBe(true);
  });
});
