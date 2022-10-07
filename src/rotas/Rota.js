import React, { useState } from 'react';

import Props from "./Props"

import Header from "../components/Header"
import Home from "../components/Home"


import * as S from "../styled/HeaderStyled"
import {BrowserRouter, Routes, Route } from "react-router-dom"

const Rota = () => {
    const [open, setOpen] =  useState(false)

    return(
        <BrowserRouter>
            <S.ContainerRota>
                <S.ContaineHeader>
                <Header />
                <S.h2Mobile>felipe rutowitsch</S.h2Mobile>
                {open && <Props link1="Home" link2="About" link3="Works"/>}
                <button onClick={() => { setOpen(!open)}}>
                    {open === true ? "x" : "≡"}
                </button>
                </S.ContaineHeader>
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/about'/>
                <Route path='/works'/>
            </Routes>
            </S.ContainerRota>

        </BrowserRouter>
    )
}

export default Rota