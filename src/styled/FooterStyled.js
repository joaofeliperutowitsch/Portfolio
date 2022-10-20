import styled from "styled-components";
import fundoFooter from "../image/fundoFooter.png"

export const containerFooter = styled.section`
    background-color: #121212;
    margin-top: 80px;
    color: white;
    width: 100%;
        
`

export const h2Contact = styled.h2`
 text-align: center;
 font-size: 2rem;

    span{
        color: #fca311;
    }
`

export const containerContact = styled.section`
background-color: #121212;
display: flex;
justify-content: space-around;
background-image: url(${fundoFooter});
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
            opacity: 0.91;
            height: 100%;
            background-color: #121212;
        }
`

export const containerInformaçao = styled.section`
display: flex;
flex-direction: column;
z-index: 10;

    div{
        display: flex;
        flex-direction: column;
    }

    h3{
        margin-top: 20px;
        font-size: 0.8rem;
        letter-spacing: 2px;
    }

    img{
        border-radius: 50%;
        margin-top: 50px;
        width: 30px;
        height: 30px;
        background-color: white;
        border: solid #fca311 0.5px;
    }
`

export const containerForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 20px;
margin-top: 20px;
color: black;
z-index: 10;

    div{
        display: flex;
        margin-top: 20px;
        flex-direction: column;
    }
`

export const labelcontact =styled.label`
    color: white;
`

export const inputcontact = styled.input`
    font-size: 1.5rem;
    background-color: #191919;
    border-radius: 10px;
    border: solid #fca311 0.5px;
    color: white;
    


    @media(max-width: 420px){
        width: 80vw;
    }
`

export const textareaContact = styled.textarea`
    font-size: 1.5rem;
    background-color: #191919;
    border-radius: 10px;
    border: solid #fca311 0.5px;
    color: white;

    @media(max-width: 420px){
        width: 80vw;
    }
`
export const submit = styled.input`
    border-radius: 5px;
        font-size: 1.2rem;
        margin: auto 5px;
        border-radius: 5rem;
        border: transparent;
        background-color: #fca311;
        width: 110px;
        height: 4vh;
        color: black;
        cursor: pointer;

        &:hover{
            background-color: #fca311;
            transition: 2s;
            color: white;
            border: solid #fca311 0.5px;
            background-color: transparent;
        }
`

export const containerCopyright = styled.section`
    background-color: #121212;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
`

export const containerPlataformas = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const textCopyright = styled.div`
    font-size: 1.2rem;

    p{
      
    }
`

export const imgPlataforma = styled.img`
    margin-left: 20px;
    width: 50px;
    background-color: white;
    border-radius: 50%;
    border: solid #fca311 0.5px;

    &:hover{
        cursor: pointer;
        background-color: #fca311;
        transition: 2s;
       
            
    }
`


