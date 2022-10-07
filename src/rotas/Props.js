import React from "react";
import { Link } from "react-router-dom";


import * as S from "../styled/HeaderStyled"

const Props = ({ link1, link2, link3 }) => {
  return (
    <div>
      <S.NavProps>
        <S.ulMobile>
          <li>
            <S.navLink to="/">{link1}</S.navLink>
          </li>
          <li>
            <S.navLink to="/about">{link2}</S.navLink>
          </li>
          <li>
            <S.navLink to="/works">{link3}</S.navLink>
          </li>
        </S.ulMobile>
      </S.NavProps>
    </div>
  );
};

export default Props;