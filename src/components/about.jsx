import React from 'react'
import yo from '../img/yo2.png'
import cvPdf from '../img/GuillermoGirauCV.pdf'
import TypewriterWithAuthor from "../components/TypewriterWithAuthor"

function about() {
    return (
        <div className='about' id='about'>
            <h2 className='cTitle'>SOBRE MI</h2>
            <div className="aboutInfo">
                <div className='sobreMi'>
                    <p>Me forme para diseñar la imagen de empresas, crear logotipos, folletos, packaging, entre otras. También cuento con las herramientas necesarias para desarrollar aplicaciones y sitios web respondiendo a los intereses de los clientes.</p>
                    <button className="btnCV">
                        <a href={cvPdf}>DESCARGA MI CV</a>
                    </button>
                </div>
                <img className='foto' src={yo} alt="Guillermo Lucas Girau" />
            </div>
            <div className='App'>
            <TypewriterWithAuthor text="ELIGE UN TRABAJO QUE TE APASIONE Y NO TENDRÁS QUE TRABAJAR NI UN DÍA DE TU VIDA" author="Confucio" />
            </div>
        </div>
    )
}

export default about