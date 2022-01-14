import React from 'react'
import All from './components/all'
import HomeW from '../styleW/homeW'
import Head from 'next/head'





const Filial = () => {


    return (
        <HomeW>
            <All>
                <Head>
                    <title>Vetco</title>
                    <meta name="description" content="home page" />
                    <link rel="icon" href="logof.jpg" />
                </Head>
                <div className="section4">
                    <div className="container">
                        <h1 className='text-center mt-3 mb-5'>ФИЛИАЛ</h1>
                        <div className="row">     
                            <div className="col-12" >
                                <div className='doriCard2'>
                                    <p className="nomi">filiallar</p>

                                    <div className='DoriBut'>
                                        <p className="narxi">qisqacha ma'lumot</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </All>
        </HomeW>
    )
}

export default Filial
