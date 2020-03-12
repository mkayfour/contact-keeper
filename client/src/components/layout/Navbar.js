import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    console.log("logout called");
    logout();
  };

  const authLinks = (
    <Fragment>
      <ul>
        <li>Hello {user && user.name} </li>

        <li>
          <a onClick={onLogout} href="/login">
            <i className="fas fa-sign-out-alt">
              <span className="hide-sm">Logout</span>
            </i>
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ul>
        <li>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          {" "}
          <i className={icon}> {title} </i>
        </Link>
      </h1>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Contact Book",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
