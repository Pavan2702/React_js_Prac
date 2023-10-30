import React, { useState } from "react";
import { Button } from "reactstrap";

export default function StatePro1() {
  let [index, setIndex] = useState(0);
  const colorArr = ["red", "green", "yellow", "blue", "lightcoral"];

  function indexChange() {
    setIndex(index+1)
    if (index === colorArr.length-1) {
        setIndex(0)
    }
  }

  return (
    <>
      <h1>StatePro1</h1>
      <h1>index is {index}</h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minWidth: "100px",
          minHeight: "100px",
          backgroundColor: colorArr[index % colorArr.length],
        }}
      >
        BOX
      </div>
      <br />

      <Button color="danger" onClick={() => indexChange()}>
        Change Color
      </Button>
    </>
  );
}
