import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserStarred = ({ userAccount, getUserStarred }) => {
  let history = useHistory();
  const [starreds, setStarred] = useState([]);

  const handleGetStarred = async (userAccount) => {
    try {
      setStarred(await getUserStarred(userAccount));
    } catch (e) {
      history.push("/empty-search/not-find");
    }
  };

  useEffect(() => {
    handleGetStarred(userAccount).then();
  }, [userAccount]);

  return (
    <main className="repositories-content">
      <h2 className="main-title">Favoritos</h2>
      <div className="repositories__list">
        {starreds.map((starred) => (
          <article className="repositories__item">
            <h3 className="respotories__item-title">
              <a href={starred.html_url} target="_blank">
                {starred.full_name}
              </a>
            </h3>
            <p className="respotories__item-description">
              {starred.description}
            </p>
            <ul className="respotories__item-languages">
              <li className="respotories__item-languages-item">
                {starred.language}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
};

export default UserStarred;
