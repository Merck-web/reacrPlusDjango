import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div >
      <Spinner
        animation='grow'
        role='status'
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      />
      <Spinner
        animation='grow'
        role='status'
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      />
      <Spinner
        animation='grow'
        role='status'
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
}

export default Loading;
