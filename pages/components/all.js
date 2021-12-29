import React from 'react'
import Footer from './footer'
import Header from './header'
import ComponentsW from '../../styleW/componentsW'


const All = ({children}) => {
    return (
        <ComponentsW>
            <Header/>
            <div className='children'>
                {children}
            </div>
            <Footer/>
        </ComponentsW>
    )
}

export default All
