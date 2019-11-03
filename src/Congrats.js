import React from "react";
import { Alert } from "reactstrap";
export default function Congrats(props) {
  const { success } = props;
  return (
    <div data-test="ComponentCongrats">
      {success ? (
        <Alert color="success" data-test="congrats-message">
          {" "}
          You guess the word
        </Alert>
      ) : null}
    </div>
  );
}
