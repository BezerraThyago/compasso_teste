import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Route, useHistory, useParams, useRouteMatch, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { search } from "../../api/api";
import UserRepositories from "../../components/UserRepositories/UserRepositories";
import UserStarred from "../../components/UserStarred/UserStarred";

const User = () => {
  let history = useHistory();
  const {url} = useRouteMatch();
  const { userAccount } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    search(`/users/${userAccount}`, setUser).catch(() => {
      history.push("/404");
    });
  }, [userAccount]);

  return (
    <Container fluid as="section">
      <Row className="justify-content-center justify-content-md-between">
        <Col md="3">
          <article className="user-info p-4">
            <div className="user-info__header">
              <Image src={user.avatar_url} roundedCircle fluid />
              <h1 className="user-info__name">{user.name}</h1>
            </div>
            <nav className="user-info__nav">
              <Link to={`${url}/repos`} className="btn btn-primary">Repos</Link>
              <Link to={`${url}/starred`} className="btn btn-primary">Starred</Link>
            </nav>
          </article>
        </Col>
        <Col md="9">
          <Switch>
            <Route path="/:userAccount/repos">
              <UserRepositories />
            </Route>
            <Route path="/:userAccount/starred">
              <UserStarred />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
