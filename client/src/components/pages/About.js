import React from "react";
import PropTypes from "prop-types";

const Home = props => {
  return (
    <div>
      <h1>About this app</h1>
      <p className="my-1">This is fullstack React App for keeping contacts. </p>
      <p className="bg-dark p">
        <strong>Version: 1.0</strong>
      </p>
    </div>
  );
};

Home.propTypes = {};

export default Home;
