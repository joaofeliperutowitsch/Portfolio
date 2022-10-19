import React from "react"

import * as S from "../styled/FooterStyled"
import emailjs from "@emailjs/browser"
import iconeTelefone from "../image/icone-telefone.png"
import iconeLocalizaçao from "../image/icone-localização.png"
import iconeEmail from "../image/icone-email.png"


import iconeInstagram from "../image/icone-instagram.png"
import iconeLinkedin from "../image/icone-linkedin.png"
import iconeFacebook from "../image/icone-facebook.png"



const Footer = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_doou1jr', e.target, 'XcvYzXAsfSlwkIEjq')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <S.containerFooter>
            <S.h2Contact>Contact <span>Me</span></S.h2Contact>
        <S.containerContact>
            <S.containerInformaçao>
                <div>
                    <img src={iconeLocalizaçao} alt=""/>
                    <h3>R. Riodades, 145 - Fonseca, Niterói - RJ, 24130-247</h3>
                </div>

                <div>
                    <img src={iconeTelefone} alt=""/>
                    <h3>55+ 21 97229-0506</h3>
                </div>

                <div>
                    <img src={iconeEmail} alt=""/>
                    <h3>jfrutowitsch@gmail.com</h3>
                </div>
            </S.containerInformaçao>
            <S.containerForm onSubmit={sendEmail}>
                    <div>
                        <S.labelcontact>Name</S.labelcontact>
                        <S.inputcontact type="text" autoFocus className="form-control" required placeholder="Name" name="name"/>
                    </div>

                    <div>
                        <S.labelcontact>Email</S.labelcontact>
                        <S.inputcontact type="email" className="form-control" required placeholder="your email" name="email"/>
                    </div>

                    <div>
                        <S.labelcontact>message</S.labelcontact>
                        <S.textareaContact className="form-control" id="" cols="30" rows="8" required placeholder="Your message" name="message"></S.textareaContact>
                    </div>

                    <div>
                        <S.submit type="submit" className="btn btn-info" value="submit"></S.submit>
                    </div>
            </S.containerForm>
        </S.containerContact>
        <S.containerCopyright>
            <S.containerPlataformas>
                <figure>
                    <a href="https://www.instagram.com/feliperutowitsch/"><S.imgPlataforma src={iconeInstagram} alt=""/></a> 
                </figure>
                <figure>
                    <a href="https://www.linkedin.com/in/feliperutowitsch/"><S.imgPlataforma src={iconeLinkedin} alt=""/></a>
                </figure>
                <figure>
                    <a href="https://www.facebook.com/joaofelipe.rutowitsch"><S.imgPlataforma src={iconeFacebook} alt=""/></a> 
                </figure>
            </S.containerPlataformas>
            <S.textCopyright>
                <p>copyright © Felipe Rutowitsch</p>
            </S.textCopyright>
        </S.containerCopyright>
        </S.containerFooter>
    )
}

export default Footer