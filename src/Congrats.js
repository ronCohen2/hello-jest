import React from "react";

export default function Congrats(props) {
  const { success } = props;
  return (
    <div data-test="ComponentCongrats">
      {success ? (
        <span data-test="congrats-message"> You guess the word</span>
      ) : null}
    </div>
  );
}
