import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var content;
    const { success } = this.props;
    // if (success) {
    //   content = <h1>Success</h1>;
    // } else {
    //   content = (
    //     <form>
    //       <input type="text" data-test="form-input" />
    //       <button data-test="form-submitButton">Submit</button>
    //     </form>
    //   );
    // }
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
