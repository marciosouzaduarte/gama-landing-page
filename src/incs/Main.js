import React, { Component, useState } from 'react';
import { Alert } from '@material-ui/lab';
import '../assets/css/main.css';

export default function Main() {
    var enumKeys = [
        'Enter',
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'ArrowDown',
        'ArrowUp'
    ]
    var emailsValidos = [];
    const [email, setEmail] = useState('');
    const [infoMessage, setInfoMessage] = useState('hidden');
    const [successMessage, setSuccessMessage] = useState('hidden');

    function handleEmailInput(e) {
        setEmail(e.target.value);
        setInfoMessage('hidden');
        setSuccessMessage('hidden');
    }

    function handleEmailValid() {
        let re = /\S+@\S+\.\S+/;
        if (email == "ver emails") {
            let emailsValidos = localStorage.getItem('emailsvalidos');
            alert(emailsValidos);
        } else if (!re.test(email)) {
            setInfoMessage('visible');
        } else {
            let emailsValidosLS = localStorage.getItem('emailsvalidos');
            emailsValidos = JSON.parse(emailsValidosLS);
            emailsValidos.push(email);
            localStorage.setItem('emailsvalidos', JSON.stringify(emailsValidos));
            setSuccessMessage('visible');
            setEmail('');
        }
    }
    return (
        <main>
            <section className="volante">
                <div className="formulario">
                    <Alert className="alert-email" style={{ visibility: infoMessage }} severity="warning">Informe um email válido!</Alert>
                    <Alert className="alert-email" style={{ visibility: successMessage }} severity="success">Parabéns, seu email foi cadastrado com sucesso!</Alert>
                    <p style={{ 'margin-top': '30px' }}><h1>GANHE 10% OFF*</h1></p>
                    <p style={{ 'margin-top': '-40px' }}><h3>NESTE SUPER LANÇAMENTO</h3></p>
                    <p style={{ 'margin-top': '10px' }}>VOLANTE LOGITECH DRIVING FORCE G29</p>
                    <p>PARCELE EM ATÉ 12X NO CARTÃO DE CRÉDITO</p>

                    <p style={{ 'margin-top': '20px' }}>Cadastre seu email e garanta o desconto</p>
                    <input type="text" placeholder="email" onChange={e => handleEmailInput(e)} value={email} />
                    <button onClick={handleEmailValid}>CADASTRAR</button>

                    <p className="obs">* Desconto de 10% na primeira compra.</p>
                </div>
            </section>
        </main >
    );
}