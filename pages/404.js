import React from 'react'
import HomeW from '../styleW/homeW'


const Error = () => {
    return (
        <HomeW>
            <h1 className="text-center">404 Error</h1>
            <div className="container errorSection">
                <img src="error.png" alt="Afsuski bunday bo'lim yo'q yoki sayt ishlamadi" className='errorImg' />
            </div>
        </HomeW>
    )
}

export default Error
