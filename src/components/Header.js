import React from "react"

import {Link} from "react-router-dom"
import * as S from "../styled/HeaderStyled"

const Header = () => {
    return(
        <S.HeaderEmulador>
            <S.h2Header>Port<span>Folio</span></S.h2Header>
            <S.navHeader>
                <S.ulHeader>
                    <li>
                        <S.navEmulador to="/">Home</S.navEmulador>
                    </li>
                    <li>
                        <S.navEmulador to="/about">About</S.navEmulador>
                    </li>
                    <li>
                    <S.navEmulador to="/works">Woks</S.navEmulador>
                    </li>
                </S.ulHeader>
            </S.navHeader>
        </S.HeaderEmulador>
    )
}

export default Header
