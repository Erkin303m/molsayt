import React, { useEffect, useState } from 'react'
import All from './components/all'
import HomeW from '../styleW/homeW'
import { useRouter } from 'next/router'
import Data from '../malumotBazasi/dorilar'








const Page2 = () => {
    const Router2 = useRouter();
    let data;
    data=Router2.query; 
    // console.log(Router2.query);    



    return (
    
        <HomeW>
            <All>
                <div className="section4">
                    <div className="container">
                        <h1 className='text-center'> Dori haqida to'liq ma'lumot !</h1>
                        <div className="row">

                            <div className="col-lg-6 col-sm-12">
                                <div>
                                    <img src="dori11.jpg" alt="" className='doriRasm' />

                                </div>

                            </div>

                            <div className="col-lg-6 col-sm-12">
                                <div>
                                    <p className="nomi">{data.nomi}</p>
                                    <p className="narxi">{data.narxi}</p>
                                    <p className="nomi">{data.malumot}</p>


                                </div>

                            </div>
                            

                        </div>
                    </div>
                </div>
            </All>
        </HomeW>

    )
}

export default Page2
