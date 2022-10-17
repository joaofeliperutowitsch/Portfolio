import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    background-color: rgba(0, 0, 0 , 0.9);
}
`;
export const ContainerAboutt = styled.section`
    display: flex;
    flex-direction: column;
    
`


export const ContainerAbout = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    @media(max-width: 580px){
        flex-direction: column;
        align-items: center;

        img{
            height: 20vh;
            margin-left: 2vw;
        }
    }
    
`

export const imgAbout = styled.img`
    height: 40vh;
    width: 20vw;
    border-radius: 50%;
    margin-top: 5vh;
    transform: translateY(0px);
    border: solid #fca311;
`

export const textAbout = styled.div`
    margin-top: 4vh ;
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    align-items: center;
    text-align: center;

        figure{
           
            img{
                width: 50px;
                height: 50px;
            }
        }
`

export const h2About = styled.h2`


&::after{
        
        content: "";
        width: 70px;
        height: 3px;
        background-color: #fca311;
        position: absolute;
        display: flex;
        transition: width 0.5s;
    }

    &:hover::after{
        
    }
`

export const PAboutt = styled.p`
    margin-top: 3vh;
    border-radius: 10px;
    padding: 2rem;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.2);
    animation: bordercolorabout 20S normal  infinite;

    @keyframes bordercolorabout{
        0%{
            border: solid #fca311 0.5px;
        }
        50%{
            border: solid transparent 0.5px;
        }

        100%{
            border: solid #fca311 0.5px;
        }
    }
`

export const containerAbility = styled.div`
    display: flex;
    margin-top: 20px;
    
    figure{
    background-color: #141414;
    display: flex;
    width: 40%;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    justify-content: space-around;
    margin-left: 30px;

    img{
        width: 50px;
    }
    }
`

