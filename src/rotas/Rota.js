import React, { useState } from 'react';

import Props from "./Props"

import Header from "../components/Header"
import Home from "../components/Home"
import Woks from '../components/Woks';
import About from "../components/About"
import Footer from '../components/Footer';


import * as S from "../styled/HeaderStyled"
import {BrowserRouter, Routes, Route } from "react-router-dom"

const Rota = () => {
    const [open, setOpen] =  useState(false)

    return(
        <BrowserRouter>
            <S.ContainerRota>
                <S.ContaineHeader>
                <Header />
                <S.h2Mobile>Port<span>Folio</span></S.h2Mobile>
                {open && <Props link1="Home" link2="About" link3="Works"/>}
                <button onClick={() => { setOpen(!open)}}>
                    {open === true ? "x" : "≡"}
                </button>
                </S.ContaineHeader>
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/works' element={<Woks />}/>
            </Routes>
            </S.ContainerRota>
            <Footer/>

        </BrowserRouter>
    )
}

export default Rota