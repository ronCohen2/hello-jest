import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { findByTestAtrr, storeFactory } from "./Test/testUtils.js";
import Form from "./Form";

const defaultProps = {};

let setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Form store={store} />);
  return wrapper;
};

describe("render", () => {
  describe("word has not be guessed", () => {
    let wrapper;
    beforeEach = () => {
      const initialState = { success: false };
      wrapper = setUp(initialState);
    };
    test("render without error", () => {
      const div = findByTestAtrr(wrapper, "component-form");
      expect(div.length).toBe(1);
    });
    test("render input button ", () => {});
    test("render submit button ", () => {});
  });
  describe("word has be guessed", () => {
    test("render without error", () => {});
    test("does not render input button ", () => {});
    test("does notrender submit button ", () => {});
  });
});
// describe("update State", () => {});
