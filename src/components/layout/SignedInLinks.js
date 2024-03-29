import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignedInLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/"> Profile</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            test
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
