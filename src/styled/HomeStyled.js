import styled from "styled-components";
import Banner from "../image/banner.jpg"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    background-color: #191919;
}
`;

export const ContainerHome = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const banner = styled.section`
        display: flex;
        justify-content: space-between;
        height: 80vh;
        background:  rgba(0, 0, 0 , 0.9);
        opacity: 10;

        background: url(${Banner});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;

        &::after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            opacity: 0.95;
            height: 100%;
            background-color:  rgba(0, 0, 0 , 0.95);
        }

        @media(max-width: 580px){
            height: 84.5vh;
        }
`

export const textBanner = styled.div`
    margin-top: 20vh;
    margin-left:  4vw;
    font-size: 1.6rem;
    display: flex;
    opacity: 20;
    flex-direction: column;
    justify-content: space-evenly;
    width: 35%;
    height: 200px;
    flex-wrap: nowrap;
    z-index: 10;

    @media(max-width: 580px){
        width: 80%;
        font-size: 1rem;
    }

    button{
        border-radius: 5rem;
        border: transparent;
        width: 80px;
        height: 4vh;
        color: black;

        &:hover{
            background-color: #fca311;
            transition: 2s;
        }
    }

    h1{
        opacity: 10;
        color: #fca311;
    }

    h4{
        color: white;
    }

    p{
        color: white;
    }
`

export const containerPerfil = styled.div`
    background-color: #fca311;
    z-index: 10;
    border-radius: 50% 0% 0% 50%;
    height: 80vh;
    animation-name: breath-animation;
    animation-duration: 9s;
    animation-iteration-count: infinite;
    overflow: hidden;
    @keyframes perfil-animation {
        0% { height: 150px; width: 10px; opacity: 0.9; }
        50% {  width: 350px; opacity: 0.9; }
        100% { width: 10px; opacity: 0.3; }
    }

    @media(max-width: 580px){
        display: flex;
        border-radius: 50%;
        height: 80vh;
        margin-bottom: 30px;
        margin-left: 2px;
    

        @keyframes perfil-animation {
        0% { height: 0px; }
        50% {  height: 200px; opacity: 0.9;}
        100% {  height: 0px; opacity: 0.3; }
        }
    }
`

export const imagePerfil = styled.img`
   height: 80vh;
   border-radius: 50% 0% 0%;

   @media(max-width: 580px){
        border-radius: 50% 50% 0% 0%;
        height: 30vh;

    }
`

export const ContainerAbout = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    background-color: #191919;

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
    width: 50vw;
    margin-top: 5vh;
    transform: translateY(0px);
    animation-duration: 9s;
    animation-iteration-count: infinite;
    animation-name: float;

    @keyframes float{
        0% { transform: translateY(0px); }
        50% {  transform: translateY(-20px);}
        100% {  transform: translateY(0px);}
    }
`

export const textAbout = styled.div`
    margin-top: 4vh ;
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    align-items: center;
    text-align: center;
`

export const h2About = styled.h2`
color: white;


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

export const PAbout = styled.p`
    margin-top: 3vh;
    border-radius: 10px;
    padding: 2rem;
    color: white;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.3);
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

export const h2Ability = styled.h2`
color: white;

&::after{
        
        content: "";
        width: 70px;
        height: 3px;
        background-color: #fca311;
        position: absolute;
        display: flex;
        margin-top: 3px;
        transition: width 2s;
    }

    &:hover::after{
        width: 20px;
    }
`

export const containerAbility = styled.section`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

    @media(max-width: 580px){
        flex-direction: column-reverse;
        align-items: center;
        

        img{
            height: 200px;
            width: 200px;
            margin-left: 2vw;
        }
    }

    @media(min-width: 1500px){
        margin-left: 5%;
    }
`

export const cardsAbility = styled.div`
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

export const containerimgsAbility = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`

export const containerImgAbility = styled.figure`
    background-color: #141414;
    display: flex;
    width: 40%;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    justify-content: space-around;
    min-width: 236px;

    h4{
        color: white;
    }

    &:hover{
        cursor: pointer;
        transition: 5s;
        background-color: #fca311;
        
        H4{
            color: #121212;
            transition: 5.1s;
        }
    }

    @media(min-width: 500px){
        margin-left: 30px;

    }
`



