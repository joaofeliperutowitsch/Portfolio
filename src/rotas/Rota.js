import React, { useState } from 'react';

import Props from "./Props"

import Header from "../components/Header"
import Main from "../components/Main"


import * as S from "../styled/HeaderStyled"
import {BrowserRouter, Routes, Route } from "react-router-dom"

const Rota = () => {
    const [open, setOpen] =  useState(false)

    return(
        <BrowserRouter>
            <S.ContainerRota>
                <Header />
                {open && <Props link1="Home" link2="About" link3="Works"/>}
                <button onClick={() => { setOpen(!open)}}>
                    {open === true ? "x" : "≡"}
                </button>
            </S.ContainerRota>
            <Routes>
                <Route path='/'  />
                <Route path='/about'/>
                <Route path='/works'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rota