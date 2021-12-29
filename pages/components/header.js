import Link from 'next/link'
import React from 'react'
import ComponentsW from '../../styleW/componentsW'

const Header = () => {
    return (
        <ComponentsW>
            <div className="headersection">
                <div className="container">
                    <div className='header1'>
                        <div className="headerChap">
                            <img src="logo.png" alt="" className='headerLogo' />
                        </div>

                        <div className="headerOng">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a className='headerMenu'>
                                            Asosiy
                                        </a>
                                    </Link>
                                </li>
                                <li>Katalog</li>
                                <li>Biz haqimizda</li>
                            </ul>
                            <button className='btn btn-light'>online</button>
                            <p>korzina</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </ComponentsW>
    )
}

export default Header
