import React, { Fragment, useState } from 'react'
import education from '../data/education.json'
/* import education from '../data/skills.json' */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function portfolio() {
    const [activeSection, setActiveSection] = useState('education');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <section className='portfolio' id='portfolio'>
            <h2 className='cTitle'>PORTFOLIO</h2>
            <nav>
                <ul>
                    <li
                        className={activeSection === 'education' ? 'active' : ''}
                        onClick={() => handleSectionChange('education')}>
                        Educación
                    </li>
                    <li
                        className={activeSection === 'skills' ? 'active' : ''}
                        onClick={() => handleSectionChange('skills')}>
                        Habilidades
                    </li>
                </ul>
            </nav>
            <div className='timeLine'>
                {activeSection === 'education' && (
                    <div className="education">
                        {education.map((item) => (
                            <div key={item.id} className='infoTimeline'>
                                <span className='date'>{item.year}</span>
                                <div className='line'>
                                    <span className='circle'></span>
                                </div>
                                
                                <div className="content">
                                    <img className='imgTitle' src={`../src/img/${item.img}`} alt={item.title} />
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="inst">
                                        {item.institucion}
                                    </div>
                                    <img className='imgTitle' src={`../src/img/school/${item.logoI}`} alt={item.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeSection === 'skills' && (
                    <div>
                        <h2>SKILLS</h2>
                        <div className='progress__box'>
                            <div className="progress__circle">
                                <CircularProgressbar strokeWidth={3}/>
                            </div>

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="m1.5 0l1.547 18l6.943 2l6.961-2.002L18.5 0h-17Zm13.773 4.272l-.097 1.119l-.043.496H6.99l.195 2.26h7.755l-.052.594l-.5 5.812l-.032.373L10 16.178l-.01.004l-4.36-1.256l-.297-3.467h2.136l.151 1.762l2.37.663h.002l2.374-.665l.247-2.863H5.237l-.523-6.084l-.05-.593h10.66l-.051.593Z"/></svg>
                    </div>
                )}
            </div>
        </section>
    )
}

export default portfolio

