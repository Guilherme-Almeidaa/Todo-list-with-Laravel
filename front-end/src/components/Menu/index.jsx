import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <Navbar className="header-menu" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="link-header" to="/">
            <EventAvailableIcon></EventAvailableIcon> TodoApp
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="link-header" to="/">
            Tarefas
          </Link>
          <Link className="link-header" to="/about">
            Sobre
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
