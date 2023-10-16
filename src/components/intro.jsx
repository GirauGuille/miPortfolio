import logoGLG from "../img/marcaGLG3D.svg"
import { Link } from 'react-scroll'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'

const Intro = () => {
    return (
        <div className="i" id="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hola, mi nombre es</h2>
                    <h1 className="i-name">Guillermo Lucas Girau</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Diseñador Gráfico</div>
                            <div className="i-title-item">Desarrollador web</div>
                            <div className="i-title-item">Desarrollador mobile</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Si estas buscando crear tu marca, hacer publicidad, packagin, tu sitio web o tu aplicación mobile estás en el sitio indicado. Conoce un poco sobre mi con el siguiente enlace y pongamonos en contacto.
                    </p>
                    <Link to='about' activeClass='active' smooth={true} spy={true} className='btnSobreMi'>
                        SOBRE MI
                        <BsFillArrowDownSquareFill />
                    </Link>
                </div>
            </div>
            <div className="i-right">
                <img className="i-img" src={logoGLG} alt="" />
            </div>
        </div>
    );
};

export default Intro;