import React from "react";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";

function GuestToken({ children, loggedIn }) {
  return !loggedIn ? children : <Navigate to="/todo" />;
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(GuestToken);
