import styled from "styled-components";
import { Link } from "react-router-dom";
import fogo from "../image/fogo.gif"


export const  ContainerRota = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const NavProps = styled.nav`
    width: 40%;
    display: none;
    justify-content: space-evenly;

    @media(max-width: 580px){
        display: inline;
    }

    ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        position: relative;
    }
`

export const navHeader = styled.nav`
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
    display: none;

    @media(max-width: 580px){
        display: inline;
    }


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
        width: 45px;
    }
`

export const h2Mobile = styled.h2`
    color: #fca311;
    margin-top: 20px;
    width: 40%;
    margin-left: 20px;
    text-transform: uppercase;
    display: none;
        &:hover{
            background-image: url(${fogo});
            -webkit-background-clip: text;
            color: rgba(0,0,0,0);
        }

        @media(max-width: 580px){
        display: inline;
    }
`

export const ulMobile = styled.ul`
   
   li{
    margin-left: 50px;
    z-index: 50;
   }
`


export const  ContaineHeader = styled.div`
        display: flex;
        justify-content: space-between;;
        align-items: center;
        background-color:  #121212;
        height: 15vh;

        @media(max-width: 580px){
           
    }

    button{
        display: none;
        height: 100%;
        width: 70px;
        background-color: #fca311;
        @media(max-width: 580px){
        display: inline;
    }
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        list-style: none;
        position: absolute;
        background-color: #fca311;
        z-index: 30;
        width: 30.7%;
        left: -10;
        height: 84.5vh;
        margin-top: 63px;
        margin-left: 20px;
        opacity: 0.5;
    }
`

export const HeaderEmulador = styled.section`
    width: 100%;
    margin-left: 2vw;
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const h2Header = styled.h2`
    color: #fca311;
    margin-top: 20px;
    width: 50%;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 2rem;

        &:hover{
            background-image: url(${fogo});
            -webkit-background-clip: text;
            color: rgba(0,0,0,0);
        }

        @media(max-width: 580px){
        display: none;
    }
`

export const ulHeader = styled.section`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    position: relative;

    @media(max-width: 580px){
        display: none;
    }
`

export const navEmulador = styled(Link)`
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
    width: 45px;
}
`