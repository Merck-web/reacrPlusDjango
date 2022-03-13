import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Spinner
        animation='grow'
        role='status'
        style={{
          height: "100px",
          width: "100px",
          margin: "10px",
          display: "block",
        }}
      />
      <Spinner
        animation='grow'
        role='status'
        style={{
          height: "100px",
          width: "100px",
          margin: "10px",
          display: "block",
        }}
      />
      <Spinner
        animation='grow'
        role='status'
        style={{
          height: "100px",
          width: "100px",
          margin: "10px",
          display: "block",
        }}
      />
    </div>
  );
}

export default Loading;
