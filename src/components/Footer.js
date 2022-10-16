import React from "react"

import * as S from "../styled/Footer"
import emailjs from "@emailjs/browser"
import iconeTelefone from "../image/icone-telefone.png"
import iconeLocalizaçao from "../image/icone-localização.png"
import iconeEmail from "../image/icone-email.png"



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
                        <label>Name</label>
                        <S.inputcontact type="text" autoFocus className="form-control" required placeholder="Name" name="name"/>
                    </div>

                    <div>
                        <label>Email</label>
                        <S.inputcontact type="email" className="form-control" required placeholder="your email" name="email"/>
                    </div>

                    <div>
                        <label>message</label>
                        <S.textareaContact className="form-control" id="" cols="30" rows="8" required placeholder="Your message" name="message"></S.textareaContact>
                    </div>

                    <div>
                        <S.inputcontact type="submit" className="btn btn-info" value="Enviar mensagem"></S.inputcontact>
                    </div>
            </S.containerForm>
        </S.containerContact>
        </S.containerFooter>
    )
}

export default Footer