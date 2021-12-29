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
                                <li>menu 1</li>
                                <li>menu 2</li>
                                <li>menu 3</li>
                            </ul>
                            <button className='btn btn-danger'>vndfj</button>
                            <p>korzina</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </ComponentsW>
    )
}

export default Header
