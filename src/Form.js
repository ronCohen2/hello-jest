import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { success } = this.props;
    return (
      <div data-test="component-form">
        {success ? null : (
          <form>
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
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
