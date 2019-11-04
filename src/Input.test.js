import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { findByTestAtrr, storeFactory } from "./Test/testUtils";
import Input from "./Input.js";

const defaultProps = {};

const setUp = (SuccessReducer = {}) => {
  const store = storeFactory(SuccessReducer);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

describe("render", () => {
  describe("word has not be guessed", () => {
    test("render without error", () => {
      // const wrapper = setUp({ initialState: {} });
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
describe("update State", () => {});
