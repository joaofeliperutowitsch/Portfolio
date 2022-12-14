import styled from "styled-components";
import { Link } from "react-router-dom";


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
    color: white;

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

    span{
        color: white;
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
        color: white;
        margin-top: 63px;
        margin-left: 20px;
    }
`

export const HeaderEmulador = styled.section`
    width: 100%;
    margin-left: 2vw;
    align-items: center;
    color: white;
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

    span{
        color: white;
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
    color: white;

    @media(max-width: 580px){
        display: none;
    }
`

export const navEmulador = styled(Link)`
 text-decoration: none;
 color: white;


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