import React from 'react'
import Form from "../components/form.jsx"
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaSquareWhatsapp } from 'react-icons/fa6'

function contact() {
    return (
        <div className='contacto' id='contact'>
            <h2 className='cTitle'>CONTACTAME</h2>
            <div className="contactoBox">
                <div className="cInfo">
                    <p className="cTexto">Pongamos en contacto y hagamos un gran proyecto juntos.</p>
                    <div className='linkBox'>
                        <button className="btnC">
                            <a href=""> <FaSquareWhatsapp size={40} /></a>
                        </button>
                        <button className="btnC">
                            <a href=""> <BsFillTelephoneFill size={40} />
                            </a>
                        </button>
                        <button className="btnC">
                            <a href=""> <BsEnvelopeFill size={40} /></a>
                        </button>
                        <button className="btnC">
                            <a href=""> <AiFillLinkedin size={40} /></a>
                        </button>
                    </div>
                </div>
                <div className="form">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default contact