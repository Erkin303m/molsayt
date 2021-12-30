import Link from 'next/link'
import React, { useEffect } from 'react'
import ComponentsW from '../../styleW/componentsW'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import Navbar from './navbar'


const Header = () => {
    

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <ComponentsW>
            <div className="headersection">
                <div className="container">
                    <div className='header1'>
                        <div className="headerChap">
                            <img src="logo.png" alt="" className='headerLogo' />
                        </div>

                        <div className="headerOng">
                            <ul className='headerUl'>
                                <li class="animate__animated animate__bounceInDown animate__delay-0">
                                    <Link href="/">
                                        <a className='headerMenu'>
                                            Asosiy
                                        </a>
                                    </Link>
                                </li>
                                <li class="animate__animated animate__bounceInDown animate__delay-1s">
                                    <Link href="/page1">
                                        <a className='headerMenu'>
                                            Kontaktlar
                                        </a>
                                    </Link>
                                </li>
                                <li class="animate__animated animate__bounceInDown animate__delay-2s">
                                    <Link href="/page1">
                                        <a className='headerMenu'>
                                            Biz haqimizda
                                        </a>
                                    </Link>
                                </li>
                                <li class="animate__animated animate__bounceInDown animate__delay-3s">
                                    <Link href="/buy">
                                        <a className='headerMenu'>
                                            <button className='btn btn-light'>Buy</button>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                           
                            <Navbar className="navbar" />
                        </div>
                    </div>
                </div>
            </div>
           
        </ComponentsW>
    )
}

export default Header