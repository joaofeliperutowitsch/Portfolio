import React from "react"

import * as S from "../styled/AboutStyled"
import { GlobalStyle } from "../styled/AboutStyled"
import perfilMexendoComputador from "../image/pessoa-mexendo-computador.jpeg"
import perfilNoComputador from "../image/pessoa-no-computador.jpeg"
import perfilSorrindo from "../image/portfoliosorrindo.jpeg"
import Footer from "./Footer.js"


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
                    <S.PAboutt>My name is Felipe Rutowitsch, I'm 16 years old, I'm in the second year of high school. My dream is to travel and get to know the world, other cultures and their mysteries… My goal is to work with technology and be an entrepreneur in the sector. I love teaching and teamwork, and I always aim to work faster and more efficiently. Now I'm looking for a job in the front-end developer area, I'm looking for a vacancy in the job market to improve my knowledge more and more, thanks in advance for the opportunity. </S.PAboutt>
                </S.textAbout>
            </S.ContainerAbout>
            <S.ContainerAbout>
                <S.textAbout>
                    <S.h2About>Ability</S.h2About>
                    <S.PAboutt>I'm 16 years old, I'm in my second year of high school. In the moment I am dedicating myself to the area of Web Development. I have always excelled in business, sales, and technology. I love to teach and I work as a team and I always try to work in a more agile way and bring positive results in what I do.</S.PAboutt>
                </S.textAbout>
                <div>
                    <S.imgAbout src={perfilSorrindo} alt=""/>
                </div>
            </S.ContainerAbout>
            <S.ContainerAbout>
                    <div>
                        <S.imgAbout src={perfilMexendoComputador} alt=""/>
                    </div>
                <S.textAbout>
                    <S.h2About>My Story</S.h2About>
                    <S.PAboutt>Me lembro de quando eu tinha os meus 6 anos, e não tem tanto tempo assim, por curiosidade, comecei a mexer com dispositivos móveis e gostava de desmontar e montar meus brinquedos robóticos, aos 8 anos confeccionava e vendia pulseiras de miçangas e  biscoitinhos amanteigados na escola, vendia tanto que um dia chamaram a  minha mãe para uma conversa, disseram que eu parasse de negociar meus produtos, pois estava atrapalhando o faturamento da cantina.
Parei com as vendas, mas não por muito tempo, dando continuidade no bairro onde eu residia, oferecendo meus produtos para os vizinhos e com quem mais encontrasse pelo caminho.
Um dia, comecei a me interressar por jogos,  nesta época eu já estava  com os meus 10 anos, e com 13 já criava guildas, gravava vídeos no YouTube, chegando a rápidamente a 1000 seguidores e no universo dos  games fiquei conhecido como Pronos Abi.  
Um dia um amigo me apresentou e ensinou como vender dentro dos jogos virtuais, nesta epoca ja tinha meus 14 anos, trabalhava  associando pessoas para treinar com os times mais fortes, times renomados, os jogos eram realizados de segunda a sexta, 5 eventos por dia, muito solicitado, percebi que poderia dar inicio a minha própria empresa treinando jogadores.Meu negócio era apenas uma conta no Instagram, fiz vários contatos com  times e olheiros de jogos virtuais, meu investimento inicial era o tempo, convidei os melhores naradores e designer de banner e ficava 24 h no WhatsApp.
Eu tinha tudo isso, e estava mandando muito bem, em meio a pandemia da Covid, as pessoas ficavam o dia todo em casa jogando, comecei a ganhar dinheiro, pagar os profissionais e vao no agrado do público alvo.
Foram momentos incríveis, porém a carga horária era muito puxada  e em 2021 tive que focar nos estudos, então vendi minha empresa de treinos de jogos virtuais.</S.PAboutt>
                </S.textAbout>
            </S.ContainerAbout>
            <Footer />
        </S.ContainerAboutt>
    )
}

export default About