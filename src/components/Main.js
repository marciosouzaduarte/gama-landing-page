import React from 'react';
import '../assets/css/main.css';
import VolanteG29 from '../assets/img/volante-logitech-g29.jpg';

export default function Main() {
    return (
        <main>
            <section className="volante">
                <div className="formulario">
                    <p><h1>GANHE 10% OFF</h1></p>
                    <p><strong>NA COMPRA DESTE SUPER VOLANTE</strong></p>
                    <p>PARCELE EM ATÉ 12X</p>
                    <p style={{ 'margin-top': '50px' }}>Cadastre seu email e garanta o desconto</p>
                    <input type="text" placeholder="email" />
                </div>
            </section>
        </main >
    );
}