import React from 'react'
import { Link } from 'react-scroll'
import { BsHouseDoorFill, BsClipboardDataFill, BsFillPersonFill, BsChatSquareDotsFill } from 'react-icons/bs'

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
                <Link to='contact' activeClass='active' smooth={true} spy={true} className='link'>
                    <BsChatSquareDotsFill />
                </Link>
            </div>
        </nav>
    )
}