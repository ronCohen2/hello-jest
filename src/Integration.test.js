import { storeFactory } from "./Test/testUtils";
import { geussWord } from "./Action/guessesWordAction";

describe("guessWord action dispatcher", () => {
  describe("no guessed word", () => {
    const secretWord = "party";
    const unSuccessWord = "train";
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(geussWord(unSuccessWord));
      const expectState = {
        ...initialState,
        success: false,
        guessedWord: [{ guessedWord: unSuccessWord, letterMatchCount: 3 }]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(geussWord(secretWord));
      const expectedState = {
        secretWord,
        success: true,
        guessedWord: [{ guessedWord: secretWord, letterMatchCount: 5 }]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });
  describe("guessed word", () => {
    let store;
    const secretWord = "party";
    const unSuccessWord = "train";
    const guessedWord = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWord, secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(geussWord(unSuccessWord));
      const expectState = {
        secretWord,
        success: false,
        guessedWord: [
          ...guessedWord,
          { guessedWord: unSuccessWord, letterMatchCount: 3 }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(geussWord(secretWord));
      const expectState = {
        secretWord,
        success: true,
        guessedWord: [
          ...guessedWord,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectState);
    });
  });
});
