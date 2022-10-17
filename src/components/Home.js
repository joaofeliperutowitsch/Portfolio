import React from "react"

import * as S from "../styled/HomeStyled"
import imgperfil from "../image/FelipeRutowitsch.png"
import imgExperiencia from "../image/experiencia.png"

import { GlobalStyle } from "../styled/HomeStyled"

const Main = () => {
    return(
        <S.ContainerHome>
            <GlobalStyle/>
            <S.banner>
                <S.textBanner>
                    <h4>Hi, I'm</h4>
                    <h1>Felipe Rutowitsch</h1>
                    <p>Front end developer</p>
                    <button>Linkedin</button>
                </S.textBanner>
                <S.containerPerfil>
                    <S.imagePerfil src={imgperfil} alt=""/>
                </S.containerPerfil>
            </S.banner>
            <S.ContainerAbout>
                    <div>
                        <S.imgAbout src={imgExperiencia} alt=""/>
                    </div>
                <S.textAbout>
                    <S.h2About>About</S.h2About>
                    <S.PAbout>I'm 16 years old, I'm in my second year of high school. In the moment I am dedicating myself to the area of Web Development. I have always excelled in business, sales, and technology. I love to teach and I work as a team and I always try to work in a more agile way and bring positive results in what I do.</S.PAbout>
                    <S.h2ability>Ability</S.h2ability>
                    <S.Pability>HTML5 CSS3  REACT JAVASCRIPT</S.Pability>
                </S.textAbout>
            </S.ContainerAbout>
        </S.ContainerHome>
    )
}

export default Main