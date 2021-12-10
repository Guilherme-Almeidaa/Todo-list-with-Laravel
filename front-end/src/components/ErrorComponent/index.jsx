import React from "react";
import "./style.css";

function ErrorComponent({ error, hidden }) {
  return (
    <p hidden={hidden} className="message-error-input">
      {error}
    </p>
  );
}

export default ErrorComponent;
