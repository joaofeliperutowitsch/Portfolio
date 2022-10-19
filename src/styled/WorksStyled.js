import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import bannerWoks from "../image/banner-woks.jpg"

export const GlobalStyle = createGlobalStyle`

body{
    background-color: #191919;
}
`;

export const containerWoks = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-color: #191919;


    h2{
        margin-top: 30px;
        font-size: 2rem;
        color: #fca311;
        text-align: center;
    }
`

export const containerProjetos = styled.div`
    display: flex;
    
    justify-content: space-around;
    flex-wrap: wrap;

    @media(max-width: 500px){
        width: 73%;
    }
`

export const containerProjeto = styled.section`
    border-radius: 10px;
    margin-top: 60px;
    display: flex;
    
    background-color: #121212;
    width: 400px;
    height: 550px;

    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }
`

export const textProjeto= styled.section`
    color: white;
    margin-top: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;

    p{
        border-radius: 10px;
        text-align: center;
        margin-top: 10px;
        padding-top: 15px;
        height: 200px;
        padding-left: 5px;
        text-align: left;
        background-color: #191919;
        border: solid #fca311 0.5px;

        @media(max-width: 490px){
            height: 250px;
        }
    }

    div{
        margin-top: 20px;
    }

    button{
        border-radius: 5px;
        font-size: 1.2rem;
        margin: auto 5px;
        border-radius: 5rem;
        border: transparent;
        background-color: #fca311;
        width: 110px;
        height: 4vh;
        color: white;
        cursor: pointer;

        &:hover{
            background-color: #fca311;
            transition: 2s;
            color: white;
            border: solid #fca311 0.5px;
            background-color: transparent;
        }
    }
    
`

export const containerEmbreve = styled.section`
    border-radius: 10px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    background-image: url(${bannerWoks});
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 550px;
    position: relative;

    &::after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            opacity: 0.95;
            height: 100%;
            border-radius: 10px;
            background-color:  rgba(0, 0, 0 , 0.70);
        }
`

export const textEmbreve = styled.div`
    background-color: #fca311;
    margin-top: 250px;
    width: 100%;
    height: 60px;
    z-index: 10;
`

export const h3Embreve= styled.h3`
    color: white;
    text-align: center;
    margin-top: 5%;
    font-size: 1.3rem;
    transition: 5s;

    &:hover{
        cursor: pointer;
        font-size: 1.6rem;
    }
`