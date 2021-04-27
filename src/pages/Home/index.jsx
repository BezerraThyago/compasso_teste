import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import logoGithub from "../../assets/images/logo_github.svg";
import UserSearchInput from "../../components/UserSearchInput";
import "./Home.scss";

const Home = () => {
  return (
    <Container fluid className="home-container" as="section">
      <Row className="justify-content-center">
        <Col md="8" lg="6" xl="4">
          <div className="home__content">
            <div className="home__content-search-box">
              <Image
                src={logoGithub}
                className="home__content-git-logo"
                fluid
              />
              <UserSearchInput />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
