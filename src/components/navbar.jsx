import React from 'react'
import { Link } from 'react-scroll'
import { BsHouseDoorFill, BsClipboardDataFill, BsFillPersonFill, BsChatSquareDotsFill, BsFillEasel3Fill } from 'react-icons/bs'
import LanguageSwitch from './languageSwitch'

export default function navbar() {
    return (
        <nav className='nav'>
            <div className='navBox'>
                <Link to='intro' activeClass='active' smooth={true} spy={true} className='link'>
                    <BsHouseDoorFill />
                </Link>
                <Link to='about' activeClass='active' smooth={true} spy={true} className='link'>
                    <BsFillPersonFill/>
                </Link>
                <Link to='portfolio' activeClass='active' smooth={true} spy={true} className='link'>
                    <BsClipboardDataFill />
                </Link>
                <Link to='projects' activeClass='active' smooth={true} spy={true} className='link'>
                    <BsFillEasel3Fill />
                </Link>
                <Link to='contact' activeClass='active' smooth={true} spy={true} className='link'>
                    <BsChatSquareDotsFill />
                </Link>
                < LanguageSwitch />
            </div>
        </nav>
    )
}