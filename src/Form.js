import React, { Component } from "react";
import { connect } from "react-redux";
import { geussWord } from "./Action/guessesWordAction";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-form">
        {success ? null : (
          <form onSubmit={this.handleSubmit}>
            <input type="text" data-test="form-input" />
            <button data-test="form-submitButton">Submit</button>
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
    guessWord: () => dispatch(geussWord())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
