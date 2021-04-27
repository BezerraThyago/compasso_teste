import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserSearchInput = () => {
  const [userName, setUserName] = useState();

  const getUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  return (
    <InputGroup className="my-auto">
      <FormControl
        placeholder="Insira o nome do usuário"
        aria-label="Insira o nome do usuário"
        aria-describedby="user-name"
        value={userName}
        onChange={getUserNameHandler}
      />
      <InputGroup.Append>
        <Link to={`/${userName}`} className="btn main-btn main-btn--bg-blue">
          Buscar
        </Link>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default UserSearchInput;
