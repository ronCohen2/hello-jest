import { correctGuess } from "./successAction";
describe("correctGuess", () => {
  test("return action with 'CORRECT_GUESS' ", () => {
    let Action = correctGuess();
    expect(Action).toEqual({ type: "CORRECT_GUESS" });
  });
  
});
