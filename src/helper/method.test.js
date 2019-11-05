import { getLetterMatchCount } from "./method";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("return correct counet when no match ", () => {
    let lettersMatchCount = getLetterMatchCount("bones", secretWord);
    expect(lettersMatchCount).toBe(0);
  });
  test("return correct couent when 3 match ", () => {
    let lettersMatchCount = getLetterMatchCount("train", secretWord);
    expect(lettersMatchCount).toBe(3);
  });
  test("return correct count when duplicate letters in guessedWord", () => {
    let lettersMatchCount = getLetterMatchCount("parka", secretWord);
    expect(lettersMatchCount).toBe(3);
  });
});
