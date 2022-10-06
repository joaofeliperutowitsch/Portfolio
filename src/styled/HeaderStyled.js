import styled from "styled-components";
import { Link } from "react-router-dom";
import fogo from "../image/fogo.gif"


export const  ContainerRota = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    height: 15vh;

    @media(max-width: 580px){
        justify-content: space-between;
    }

    button{
        display: none;
        height: 100%;
        width: 10%;
        background-color: #fca311;

        @media(max-width: 580px){
        display: inline;
    }
    }

    h1{
        color: #fca311;

        &:hover{
            background-image: url(${fogo});
            -webkit-background-clip: text;
            color: rgba(0,0,0,0);
        }
    }
    
`

export const  NavHeader = styled.nav`
    width: 40%;

    ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        position: relative;
    }
`

export const navLink = styled(Link)`
    text-decoration: none;


    &::after{
        
        content: "";
        width: 0;
        height: 2px;
        background-color: #fca311;
        position: absolute;
        margin-top: 0.s;
        display: flex;
        transition: width 0.5s;
    }

    &:hover::after{
        width: 4.5vw;
    }
`