import React from "react"
import * as S from "../styled/WorksStyled.js"
import Hogwarts from "../image/hogwarts.png"
import PATV from "../image/PATV.png"
import { GlobalStyle } from "../styled/WorksStyled"
import OnuODS from "../image/ONU-ODS.png"



const Woks = () => {
    return(
        <S.containerWoks>
            <GlobalStyle />
            <div>
                <h2>my <span>works</span></h2>
            </div>
            <S.containerProjetos>
                <S.containerProjeto>
                    <div>
                        <img src={OnuODS} alt=""/>
                    </div>
                    <S.textProjeto>
                        <h4>ODS Rio de Janeiro</h4>
                        <p>The site talks about Sustainable Development Goals, with the cards addressing real problems in the state of Rio de Janeiro where he lives.</p>
                        <div>
                            <a href="https://github.com/joaofeliperutowitsch/ODS-do-RIo-de-Janeiro" ><button>Repository</button></a>
                            <a href="https://ods-rio-de-janeiro.netlify.app/" ><button>Page</button></a>
                        </div>    
                    </S.textProjeto>
                </S.containerProjeto>
                <S.containerProjeto>
                    <div>
                        <img src={Hogwarts} alt=""/>
                    </div>
                    <S.textProjeto>
                        <h4>Hogwarts</h4>
                        <p>The idea of ​​the project is to show the website's consumers a bit of what it's like to be a Hogwarts student, what you can learn at school and which house you can stay in during the school process. Hogwarts is a boarding school for wizards aged between eleven and seventeen. Founded 100 years B.C. the School of Witchcraft and Wizardry has been training many witches, and now through the internet.</p>
                        <div>
                            <a href="https://github.com/joaofeliperutowitsch/Hogwarts-ApiHarryPotter" ><button>Repository</button></a>
                            <a href="https://txnxtn-3000.preview.csb.app/" ><button>Page</button></a>
                        </div>    
                    </S.textProjeto>
                </S.containerProjeto>
                <S.containerProjeto>
                    <div>
                        <img src={PATV} alt=""/>
                    </div>
                    <S.textProjeto>
                        <h4>PATV</h4>
                        <p>The project was made to train HTML5 CSS3, after completing module 1 of the Vai na Web course. The idea of the project is to pass an IPTV sales website to consumers. IPTV is a method of transmitting television signals over IP networks.</p>
                        <div>
                            <a href="https://github.com/joaofeliperutowitsch/PATV" ><button>Repository</button></a>
                            <a href="https://joaofeliperutowitsch.github.io/PATV/" ><button>Page</button></a>
                        </div>    
                    </S.textProjeto>
                </S.containerProjeto>
                <S.containerEmbreve>
                    <S.textEmbreve>
                        <S.h3Embreve>Em breve</S.h3Embreve>
                    </S.textEmbreve>
                </S.containerEmbreve>
                <S.containerEmbreve>
                    <S.textEmbreve>
                        <S.h3Embreve>Em breve</S.h3Embreve>
                    </S.textEmbreve>
                </S.containerEmbreve>
                <S.containerEmbreve>
                    <S.textEmbreve>
                        <S.h3Embreve>Em breve</S.h3Embreve>
                    </S.textEmbreve>
                </S.containerEmbreve>
                <S.containerEmbreve>
                    <S.textEmbreve>
                        <S.h3Embreve>Em breve</S.h3Embreve>
                    </S.textEmbreve>
                </S.containerEmbreve>
                <S.containerEmbreve>
                    <S.textEmbreve>
                        <S.h3Embreve>Em breve</S.h3Embreve>
                    </S.textEmbreve>
                </S.containerEmbreve>
            </S.containerProjetos>
        </S.containerWoks>
    )
}

export default Woks