import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

import { findByTestAtrr, storeFactory } from "./Test/testUtils";
import Form, { UnConnectedForm } from "./Form";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  let wrapper = shallow(<Form store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not be guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setUp(initialState);
    });
    test("render without error", () => {
      const component = findByTestAtrr(wrapper, "component-form");
      expect(component.length).toBe(1);
    });
    test("render input button ", () => {
      const input = findByTestAtrr(wrapper, "form-input");
      expect(input.length).toBe(1);
    });
    test("render submit button ", () => {
      const submitButton = findByTestAtrr(wrapper, "form-submitButton");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has be guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setUp(initialState);
    });
    test("render without error", () => {
      const component = findByTestAtrr(wrapper, "component-form");
      expect(component.length).toBe(1);
    });
    test("does not render input button ", () => {
      const input = findByTestAtrr(wrapper, "form-input");
      expect(input.length).toBe(0);
    });
    test("does not render submit button ", () => {
      const submitButton = findByTestAtrr(wrapper, "form-submitButton");
      expect(submitButton.length).toBe(0);
    });
  });
});
describe("redux props ", () => {
  test("has success in props ", () => {
    const success = true;
    const wrapper = setUp({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });
  test("geussWord action is function props", () => {
    const wrapper = setUp();
    const guessWordProps = wrapper.instance().props.guessWord;
    expect(guessWordProps).toBeInstanceOf(Function);
  });
});
describe("", () => {
  let wrapper;
  let guessWorMock;
  const guessWord = "train";
  beforeEach(() => {
    guessWorMock = jest.fn();
    const props = {
      guessWord: guessWorMock
    };
    wrapper = shallow(<UnConnectedForm {...props} />);
    wrapper.instance().inputBox.current = { value: guessWord };
    const SubmitButton = findByTestAtrr(wrapper, "form-submitButton");
    SubmitButton.simulate("click", { preventDefault() {} });
  });

  test("call guessWord whan button click", () => {
    const guessWordCallCount = guessWorMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test(" call 'guessWord' with input value as argument", () => {
    const guessWordArg = guessWorMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessWord);
  });
  test("input box clear on submit", () => {
    expect(wrapper.instance().inputBox.current.value).toBe("");
  });
});
