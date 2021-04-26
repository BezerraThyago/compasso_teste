import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { search } from "../../api/api";
const UserStarred = () => {
  const { userAccount } = useParams();
  const [starreds, setStarred] = useState([]);

  useEffect(() => {
    search(`users/${userAccount}/starred`, setStarred);
  }, []);

  return (
    <main className="repositories-content">
      <h2 className="main-title">Favoritos</h2>
      <div className="repositories__list">
        {starreds.map((starred) => (
          <article className="repositories__item">
            <h3 className="respotories__item-title"><a href={starred.html_url}>{starred.full_name}</a></h3>
            <p className="respotories__item-description">{starred.description}</p>
            <ul className="respotories__item-languages">
              <li className="respotories__item-languages-item">{starred.language}</li>
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
};

export default UserStarred;
