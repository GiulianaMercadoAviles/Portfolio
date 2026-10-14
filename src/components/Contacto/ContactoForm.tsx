'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_fcl9xip', 
                'template_mza3dc8', 
                form.current, 
                'rgBFV13vNrO3AdMVs'
            )
            .then((result) => {
                console.log('Email enviado', result.text);
                alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
                form.current?.reset();
            }, (error) => {
                console.log('Error al enviar el email', error.text);
                alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
            });
        }
    }

return (
    <div className="contacto-form-container">
        <h3>Enviar Mensaje</h3>
        <p className="contacto-sub">Completa el formulario y te responderé a la brevedad.</p>
            
        <form className="contacto-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group-row">
                <input type="text" name="name" placeholder="Nombre" className="form-input" required />
                <input type="text" name="lastname" placeholder="Apellido" className="form-input" required />
            </div>
            <input type="email" name="email" placeholder="Email o teléfono" className="form-input" required />
            <textarea name="message" placeholder="Escribe tu mensaje aquí..." rows={4} className="form-input" required></textarea>
            <button type="submit" className="btn-primary pill form-submit">Enviar Mensaje</button>
        </form>
    </div>
);
}