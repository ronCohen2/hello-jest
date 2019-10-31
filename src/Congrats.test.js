import React from "react";
import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAtrr } from "./Test/testUtils";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
const defualtProps = { success: false };

const setUp = (props = {}) => {
  const setUpProps = { ...defualtProps, ...props };
  return shallow(<Congrats {...setUpProps} />);
};
test("renders without error", () => {
  const wrapper = setUp();
  const ComponentCongrats = findByTestAtrr(wrapper, "ComponentCongrats");
  expect(ComponentCongrats.length).toBe(1);
});
test("render no text when 'success' is false", () => {
  const wrapper = setUp({ success: false });
  const ComponentCongrats = findByTestAtrr(wrapper, "ComponentCongrats");
  expect(ComponentCongrats.text()).toBe("");
});
test("render non-empty congrats message when 'success' true ", () => {
  const wrapper = setUp({ success: true });
  const message = findByTestAtrr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
