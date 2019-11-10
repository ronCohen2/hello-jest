import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter(), disableLifecycleMethods: true });
import App, { UnconnectedApp } from "./App";
import { storeFactory } from "./Test/testUtils";

const setUp = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};
describe("redux props", () => {
  test("has access to 'success' state", () => {
    const success = true;
    const wrapper = setUp({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(true);
  });
  test("had access to 'secretWors' state ", () => {
    const secretWord = "train";
    const wrapper = setUp({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });
  test("had access to 'guessedWord' state", () => {
    const guessedWord = [{ guessedWord: "train", lettersMatchCount: 5 }];
    const wrapper = setUp({ guessedWord });
    const guessedWordAction = wrapper.instance().props.guessedWord;
    expect(guessedWordAction).toEqual(guessedWord);
  });
  test("'getSecretWord' action access is on props", () => {
    const wrapper = setUp();
    const getSecretWord = wrapper.instance().props.getSecretWord;
    expect(getSecretWord).toBeInstanceOf(Function);
  });
});
test("'getSecretWord' run on app mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  // set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
