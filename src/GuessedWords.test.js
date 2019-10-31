import React from "react";
import Enzyme, { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import GuessedWords from "./GuessedWords";
import { findByTestAtrr } from "./Test/testUtils";
import { exportAllDeclaration } from "@babel/types";

const defualtProps = {
  SecretWord: "",
  Success: false,
  guessedWords: [{ guessedWord: "foo", letterMatchCount: 2 }]
};

const setUp = props => {
  const setupProps = { ...defualtProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe("if there are not word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("render without error", () => {
    const component = findByTestAtrr(wrapper, "component-guess");
    expect(component.length).toBe(1);
  });
  test("render instruction to guess word ", () => {
    const instruction = findByTestAtrr(wrapper, "guess-instruction");
    expect(instruction.length).toBe(0);
  });
});
describe("there are word guessed", () => {
  let wrapper;
  beforeEach = () => {
    wrapper = etUp({ guessedWords: [] });
  };
  
  test("render without error", () => {});
  test("render guessed word  section'", () => {});
  test("correct number of guessed word", () => {});
});
//41
