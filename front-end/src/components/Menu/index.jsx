import React, { Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Link } from "react-router-dom";
import cookie from "js-cookie";
import { setLogout } from "../../actions/authLogin";
import "./styles.css";
import { connect } from "react-redux";

function Menu({ slogout, loggedIn }) {
  const logout = (e) => {
    e.preventDefault();
    cookie.remove("token");
    slogout();
  };
  return (
    <Navbar className="header-menu" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="link-header" to="/">
            <EventAvailableIcon></EventAvailableIcon> TodoApp
          </Link>
        </Navbar.Brand>
        {loggedIn ? (
          <Fragment>
            {" "}
            <Nav className="me-auto">
              <Link className="link-header" to="/">
                Tarefas
              </Link>
              <Link className="link-header" to="/about">
                Sobre
              </Link>
            </Nav>
            <Nav className="me-auto">
              <Link className="link-header logout" to="/profile">
                Perfil
              </Link>
              <Link onClick={logout} className="link-header logout" to="/">
                Sair
              </Link>
            </Nav>
          </Fragment>
        ) : null}
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loggedIn: state.auth.loggedIn,
});

const mapDistachToProps = (dispatch) => ({
  slogout: () => dispatch(setLogout()),
});

export default connect(mapStateToProps, mapDistachToProps)(Menu);
