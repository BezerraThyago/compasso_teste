import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { search } from "../../api/api";
const UserRepositories = () => {
  const { userAccount } = useParams();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    search(`users/${userAccount}/repos`, setRepositories);
  }, []);

  return (
    <main className="repositories-content">
      <h2 className="main-title">Repositórios</h2>
      <div className="repositories__list">
        {repositories.map((repositorie) => (
          <article className="repositories__item">
            <h3 className="respotories__item-title">
              <a href={repositorie.html_url}>{repositorie.name}</a>
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
