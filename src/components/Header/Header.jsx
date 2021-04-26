import React, {useState} from "react";
import {
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import './Header.scss'
import logoGithub from "../../assets/images/logo_github.svg";

const Header = () => {
  const [userName, setUserName] = useState();

  const getUserNameHandler = (event) => {
    setUserName(event.target.value)
  }
  return (
    <Container as="header" className="header-container" fluid>
      <Row>
        <Col md="3">
          <Link to="/" className="header__logo-link">
            <Image src={logoGithub}  fluid />
          </Link>
        </Col>
        <Col md="9">
          <InputGroup>
            <FormControl
              placeholder="Insira o nome do usuário"
              aria-label="Insira o nome do usuário"
              aria-describedby="user-name"
              value={userName}
              onChange={getUserNameHandler}
            />
            <InputGroup.Append>
              <Link to={`/${userName}`} className="btn btn-outline-secondary" >Buscar</Link>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
