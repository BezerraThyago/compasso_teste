import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import UserRepositories from "../../components/UserRepositories";
import UserStarred from "../../components/UserStarred";
import { getUserData, getUserRepos, getUserStarred } from "./User.service";
import "./User.scss";
import Header from "../../components/Header";

const User = () => {
  let history = useHistory();
  const { userAccount } = useParams();
  const [user, setUser] = useState({});
  const [component, setComponent] = useState("");

  const handleGetUser = async (userAccount) => {
    try {
      setUser(await getUserData(userAccount));
    } catch (e) {
      history.push("/empty-search/not-find");
    }
  };

  const handleSetComponent = (component) => setComponent(component);

  useEffect(() => {
    handleGetUser(userAccount).then();
  }, [userAccount]);

  return (
    <>
      <Header />
      <Container fluid as="section">
        <Row className="justify-content-center justify-content-md-between">
          <Col md="3" className="main-bg-gray">
            <article className="user-info p-4">
              <div className="user-info__header">
                <Image
                  src={user.avatar_url}
                  className="user-info__avatar"
                  roundedCircle
                />
                <h1 className="user-info__name">{user.name}</h1>
              </div>
              <nav className="user-info__nav">
                <button
                  className="btn w-100 main-btn main-btn--bg-blue mb-3"
                  onClick={() => handleSetComponent("repos")}
                >
                  Repos
                </button>
                <button
                  className="btn w-100 main-btn main-btn--bg-blue mb-3"
                  onClick={() => handleSetComponent("starred")}
                >
                  Starred
                </button>
              </nav>
            </article>
          </Col>
          <Col md="9">
            {component === "repos" && (
              <UserRepositories
                userAccount={userAccount}
                getUserRepos={getUserRepos}
              />
            )}
            {component === "starred" && (
              <UserStarred
                userAccount={userAccount}
                getUserStarred={getUserStarred}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
