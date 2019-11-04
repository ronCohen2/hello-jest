import success from "./success";

describe("Sucess Reducer", () => {
  test("return false when no action is passsed", () => {
    const newState = success(undefined, {});
    expect(newState).toBe(false);
  });
  test("return true when action 'CORRECT_GUESS'", () => {
    const newState = success(undefined, { type: "CORRECT_GUESS" });
    expect(newState).toBe(true);
  });
});
