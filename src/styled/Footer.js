import styled from "styled-components";
import Footer from "../components/Footer";
import fundoFooter from "../image/fundoFooter.png"

export const containerFooter = styled.section`
    background-color: #121212;
    margin-top: 80px;
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

export const inputcontact = styled.input`
    font-size: 1.5rem;
    background-color: #191919;
    border-radius: 10px;
    
    border: solid #fca311 0.5px;
`

export const textareaContact = styled.textarea`
    font-size: 1.5rem;
    background-color: #191919;
    border-radius: 10px;
    
    border: solid #fca311 0.5px;
`
