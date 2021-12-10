import React from "react";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";

function PrivateRoute({ children, loggedIn }) {
  return loggedIn ? children : <Navigate to="/" />;
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
