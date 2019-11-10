import React, { Component } from "react";
import { connect } from "react-redux";
import { geussWord } from "./Action/guessesWordAction";

export class UnConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputBox = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
    this.inputBox.current.value = "";
  };
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-form">
        {success ? null : (
          <form>
            <input type="text" data-test="form-input" ref={this.inputBox} />
            <button
              data-test="form-submitButton"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ success }) => {
  return { success };
};
const mapDispatchToProps = dispatch => {
  return {
    guessWord: word => dispatch(geussWord(word))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnConnectedForm);
