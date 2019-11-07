import moxios from "moxios";
import { getSecretWord } from "./guessesWordAction";
import { storeFactory } from "../Test/testUtils";
import { exportAllDeclaration } from "@babel/types";
describe("getSecretword action", () => {
  beforeEach(() => {
    moxios.install();
  });
  aftherEach(() => {
    moxios.uninstall();
  });
  test("add respone word to state", () => {
    const secretWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        respondWith: 200,
        response: secretWord
      });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      exportAllDeclaration(newState.secretWord).toBe(secretWord);
    });
  });
});
