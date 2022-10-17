import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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

export const containerP = styled.div`
    display: flex;
    width: 73%;
    justify-content: space-between;
    flex-wrap: wrap;




`

export const containerProjeto = styled.section`
    border-radius: 10px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
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
        background-color: #191919;
        border: solid #fca311 0.5px;
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

export const containerEmbreve = styled.div`
    background-color: #fca311;
    margin-top: 50%;
    width: 100%;
    height: 60px;
`

export const textEmbreve= styled.h3`
    color: white;
    text-align: center;
    margin-top: 5%;
    font-size: 1.3rem;

    &:hover{
        cursor: pointer;
        font-size: 1.6rem;
    }
`