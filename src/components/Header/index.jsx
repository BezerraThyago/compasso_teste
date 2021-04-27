import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.scss";
import logoGithub from "../../assets/images/logo_github.svg";
import UserSearchInput from "../UserSearchInput";

const Header = () => {
  return (
    <Container as="header" className="header-container" fluid>
      <Row>
        <Col md="3">
          <Link to="/" className="header__logo-link">
            <Image src={logoGithub} fluid />
          </Link>
        </Col>
        <Col md="9">
          <UserSearchInput />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
