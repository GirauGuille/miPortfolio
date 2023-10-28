import React from 'react'
import proyects from '../data/proyects.json'
import { BsGithub } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'

const projects = () => {
    return (
        <div className='projects' id='projects'>
            <h2 className='cTitle'>PROYECTOS</h2>
            <div className="cardsContainer">
                {proyects.map((item) => (
                    <div key={item.id} className='cardProyect'>
                        <img className='imgPoyects' src={`../src/img/projects/${item.img}`} alt={item.name} />
                        <div className="description">
                            <h3 className='title'>{item.name}</h3>
                            <div className="links">
                                <button className="btnL">
                                    <a href=""> <BsGithub size={30} /></a>
                                </button>
                                <button className="btnL">
                                    <a href=""> <TbWorld size={30} /></a>
                                </button>
                            </div>
                            <p className="text">{item.description}</p>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default projects