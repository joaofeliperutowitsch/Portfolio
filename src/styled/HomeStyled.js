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
    @keyframes breath-animation {
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
    

        @keyframes breath-animation {
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
    width: 80%;
    background-color: rgba(0, 0, 0, 0.3);
    animation: bordercolorabout 20S normal  infinite;

    @keyframes bordercolorabout{
        0%{
            border: solid yellow 0.5px;
        }
        50%{
            border: solid red 0.5px;
        }

        100%{
            border: solid #49F2CD 0.5px;
        }
    }
`

export const h2ability = styled.h2`
    margin-top: 30px;

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

export const Pability = styled.p`
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 4vh ;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    align-items: center;
    text-align: center;
    transition: all 5s;

    &:hover{
    cursor: pointer;
    font-size: 1.2rem;
    animation-duration: 9s;
    transition: 5s;
    animation-iteration-count: infinite;
    animation-name: ability;

        @keyframes ability{
        0% {color: yellow;}
        50% {color: red; }
        100% {color: #49F2CD;}
        }
    }
`



