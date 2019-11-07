import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { findByTestAtrr, storeFactory } from "./Test/testUtils";
import Form from "./Form";

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
