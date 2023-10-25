import React, { Fragment, useState } from 'react'
import education from '../data/education.json'

function portfolio() {
    const [activeSection, setActiveSection] = useState('education');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className='portfolio' id='portfolio'>
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
                        Skills
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
                    </div>
                )}
            </div>
        </div>
    )
}

export default portfolio

