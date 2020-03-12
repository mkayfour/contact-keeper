import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = props => (
  <Fragment>
    <img
      src={spinner}
      alt="loading..."
      style={{ width: "200px", marging: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
