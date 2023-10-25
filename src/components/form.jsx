import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lwxmx9h', 'template_bpipvvm', form.current, 'FxwFAgdJ3u07V6CVL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <form ref={form} onSubmit={sendEmail} className='form'>
            <label className='formBox'>Name</label>
            <input className='imputBox'type="text" name="user_name" />
            <label className='formBox'>Email</label>
            <input className='imputBox' type="email" name="user_email" />
            <label className='formBox'>Message</label>
            <textarea name="message" className='textarea' />
            <input type="submit" value="SEND" />
        </form>
    )
}

export default form