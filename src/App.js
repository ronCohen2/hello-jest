import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { connect } from "react-redux";
import { getSecretWord } from "./Action/guessesWordAction";
import Form from "./Form";

export class UnconnectedApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Form  />
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWord} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { secretWord, success, guessedWord } = state;

  return { secretWord, success, guessedWord };
};
const mapDispatchToProps = dispatch => {
  return {
    getSecretWord: () => dispatch(getSecretWord())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
