import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UserRepositories.scss";

const UserRepositories = ({ userAccount, getUserRepos }) => {
  let history = useHistory();
  const [repositories, setRepositories] = useState([]);

  const handleGetRepos = async (userAccount) => {
    try {
      setRepositories(await getUserRepos(userAccount));
    } catch (e) {
      history.push("/empty-search/not-find");
    }
  };

  useEffect(() => {
    handleGetRepos(userAccount).then();
  }, [userAccount, handleGetRepos]);

  return (
    <main className="repositories-content">
      <h2 className="main-title">Repositórios</h2>
      <div className="repositories__list">
        {repositories.map((repositorie) => (
          <article className="repositories__item">
            <h3 className="respotories__item-title">
              <a href={repositorie.html_url} target="_blank">
                {repositorie.name}
              </a>
            </h3>
            <p className="respotories__item-description">
              {repositorie.description}
            </p>
            <ul className="respotories__item-languages">
              <li className="respotories__item-languages-item">
                {repositorie.language}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
};

export default UserRepositories;
