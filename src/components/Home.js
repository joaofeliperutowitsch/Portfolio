import React from "react"

import * as S from "../styled/HomeStyled"
import imgperfil from "../image/FelipeRutowitsch.png"
import imgExperiencia from "../image/experiencia.png"

import { GlobalStyle } from "../styled/HomeStyled"

import imgVScode from "../image/Vscode.png"
import imgGit from "../image/Git.png"
import imgReact from "../image/React.png"
import imgJavaScript from "../image/Java.png"
import imgHTML from "../image/HTML5.png"
import imgCSS from "../image/CSS3.png"

const Main = () => {
    return(
        <S.ContainerHome>
            <GlobalStyle/>
            <S.banner>
                <S.textBanner>
                    <h4>Hi, I'm</h4>
                    <h1>Felipe Rutowitsch</h1>
                    <p>Front end developer</p>
                    <a href="https://www.linkedin.com/in/feliperutowitsch/"><button>Linkedin</button></a>
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
                </S.textAbout>
            </S.ContainerAbout>
            <S.containerAbility>
                <S.cardsAbility>
                    <S.h2Ability>Ability</S.h2Ability>
                    <S.containerimgsAbility>
                    <S.containerImgAbility>
                        <img src={imgHTML} alt=""/>
                        <h4>HTML5</h4>
                    </S.containerImgAbility>

                    <S.containerImgAbility>
                        <img src={imgCSS} alt=""/>
                        <h4>CSS3</h4>
                    </S.containerImgAbility>

                    <S.containerImgAbility>
                        <img src={imgJavaScript} alt=""/>
                        <h4>JavaScript</h4>
                    </S.containerImgAbility>

                    <S.containerImgAbility>
                        <img src={imgReact} alt=""/>
                        <h4>React</h4>
                    </S.containerImgAbility>
                    <S.containerImgAbility>
                        <img src={imgVScode} alt=""/>
                        <h4>Vscode</h4>
                    </S.containerImgAbility>
                    <S.containerImgAbility>
                        <img src={imgGit} alt=""/>
                        <h4>Git/GitHub</h4>
                    </S.containerImgAbility>
                </S.containerimgsAbility>
                </S.cardsAbility>
            </S.containerAbility>
        </S.ContainerHome>
    )
}

export default Main