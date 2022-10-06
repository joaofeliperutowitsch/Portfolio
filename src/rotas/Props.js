import React from "react";
import { Link } from "react-router-dom";


import * as S from "../styled/HeaderStyled"

const Props = ({ link1, link2, link3 }) => {
  return (
    <S.NavHeader>
      <ul>
        <li>
          <S.navLink to="/">{link1}</S.navLink>
        </li>
        <li>
          <S.navLink to="/about">{link2}</S.navLink>
        </li>
        <li>
          <S.navLink to="/works">{link3}</S.navLink>
        </li>
      </ul>
    </S.NavHeader>
  );
};

export default Props;