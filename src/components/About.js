import React from "react"

import * as S from "../styled/AboutStyled"
import { GlobalStyle } from "../styled/AboutStyled"
import perfilMexendoComputador from "../image/pessoa-mexendo-computador.jpeg"
import perfilNoComputador from "../image/pessoa-no-computador.jpeg"
import perfilSorrindo from "../image/portfoliosorrindo.jpeg"

import imgVScode from "../image/Vscode.png"
import imgGit from "../image/Git.png"
import imgReact from "../image/React.png"
import imgJavaScript from "../image/Java.png"
import imgHTML from "../image/HTML5.png"
import imgCSS from "../image/CSS3.png"




const About = () => {
    return(
        <S.ContainerAboutt>
            <GlobalStyle/>
            <S.ContainerAbout>
                    <div>
                        <S.imgAbout src={perfilNoComputador} alt=""/>
                    </div>
                <S.textAbout>
                    <S.h2About>presentation</S.h2About>
                    <S.PAboutt>My name is Felipe Rutowitsch, I'm 16 years old, I'm in the second year of high school. My dream is to travel and get to know the world, other cultures and their mysteries… My goal is to work with technology, I love to collaborate and learn with the team. I'm currently looking for a vacancy in the front-end developer area, thank you in advance for the opportunity.</S.PAboutt>
                </S.textAbout>
            </S.ContainerAbout>
            <S.containerAbility>
                <S.textAbout>
                    <S.h2About>Ability</S.h2About>
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
                </S.textAbout>
                <div>
                    <S.imgAbout src={perfilSorrindo} alt=""/>
                </div>
            </S.containerAbility>
            <S.ContainerAbout>
                    <div>
                        <S.imgAbout src={perfilMexendoComputador} alt=""/>
                    </div>
                <S.textAbout>
                    <S.h2About>My Story</S.h2About>
                    <S.PAboutt>At age 6, out of curiosity, I started playing with mobile devices and enjoyed disassembling and assembling my robotic toys. One day I started to get interested in games, at the time I was 10 years old and at 13 I was already recording videos on YouTube, quickly reaching 1000 followers, in the gaming universe I became known as Pronos Abi. Now I'm in 2022, 16 years old and looking for a vacancy in the front-end developer area in the job market to improve my knowledge more and more.</S.PAboutt>
                </S.textAbout>
            </S.ContainerAbout>
        </S.ContainerAboutt>
    )
}

export default About