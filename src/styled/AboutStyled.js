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
    height: 300px;
    width: 250px;
    border-radius: 50%;
    margin-top: 5vh;
    transform: translateY(0px);
    border: solid #fca311;
    margin-right: 10px;
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

export const containerAbility = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    @media(max-width: 580px){
        flex-direction: column-reverse;
        align-items: center;
        

        img{
            height: 200px;
            width: 200px;
            margin-left: 2vw;
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

