import React from 'react'
import proyects from '../data/proyects.json'

const projects = () => {
    return (
        <div className='projects' id='projects'>
            <h2>PROYECTOS</h2>
            <div className="projects">
                {proyects.map((item) => (
                    <div key={item.id} className='cardProyect'>
                        
                        {item.name}
                        {item.description}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default projects