import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import '../assets/css/main.css';
import VolanteG29 from '../assets/img/volante-logitech-g29.jpg';

export default function Main() {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState('hidden');

    function emailInput(v) {
        setEmail(v);
        setAlert('hidden');
    }

    function emailValid() {
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            setAlert('visible');
        }
    }
    return (
        <main>
            <section className="volante">
                <div className="formulario">
                    <Alert className="alert-email" style={{ visibility: alert }} severity="warning">Informe um email válido!</Alert>
                    <p style={{ 'margin-top': '30px' }}><h1>GANHE 10% OFF*</h1></p>
                    <p style={{ 'margin-top': '-40px' }}><h3>NESTE SUPER LANÇAMENTO</h3></p>
                    <p style={{ 'margin-top': '10px' }}>VOLANTE LOGITECH DRIVING FORCE G29</p>
                    <p>PARCELE EM ATÉ 12X NO CARTÃO DE CRÉDITO</p>

                    <p style={{ 'margin-top': '20px' }}>Cadastre seu email e garanta o desconto</p>
                    <input type="text" placeholder="email" onKeyUp={e => emailInput(e.target.value)} />
                    <button onClick={emailValid}>CADASTRAR</button>

                    <p className="obs">* Desconto de 10% na primeira compra.</p>
                </div>
            </section>
        </main >
    );
}