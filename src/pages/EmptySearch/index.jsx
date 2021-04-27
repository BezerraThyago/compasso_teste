import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import logoGithub from "../../assets/images/logo_github.svg";
import UserSearchInput from "../../components/UserSearchInput";
import "./EmptySearch.scss";

const EmptySearch = () => {
  return (
    <Container fluid className="empty-search-container" as="section">
      <Row className="justify-content-center">
        <Col md="8" lg="6" xl="4">
          <div className="empty-search__content">
            <div className="empty-search__content-search-box">
              <Image
                src={logoGithub}
                className="empty-search__content-git-logo"
                fluid
              />
              <UserSearchInput />
              <span className="empty-search__alert">
                Usuário não encontrado, tente novamente
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptySearch;
