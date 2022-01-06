import React, { useEffect, useState } from 'react'
import All from './components/all'
import HomeW from '../styleW/homeW'
import { useRouter } from 'next/router'
import Head from 'next/head'









const Page2 = () => {
    const Router2 = useRouter();
    let data;
    data=Router2.query; 
    console.log(Router2.query);



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
                        <h1 className='text-center'> Dori haqida to'liq ma'lumot !</h1>
                        <div className="row page2Rang">

                            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-12">
                                <div className='rasmPage2'>
                                    <h2 className="text-center">{data.nomi}</h2>
                                    <p className="text-center">{data.company}</p>
                                    <img src="dori11.jpg" alt="" className='doriRasm' />


                                </div>

                            </div>

                            <div className="col-12">
                                <div>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr className="bg-primary">
                                                <th scope="col">Препарат номи</th>
                                                <th scope="col">Таъсир этувчи модда</th>
                                                <th scope="col">Касалликларга қарши</th>
                                                <th scope="col">Қадоқ шакли</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td rowspan={data.qadoqShakliSoni}>{data.nomi}</td>
                                                <td rowspan={data.qadoqShakliSoni}>{data.modda}</td>
                                                <td rowspan={data.qadoqShakliSoni}>{data.malumot}</td>
                                                <td>{data.qadoqShakli1}</td>

                                            </tr>
                                            <tr>
                                                <td>{data.qadoqShakli_2}</td>
                                            </tr>
                                            <tr>
                                                <td>{data.qadoqShakli_3}</td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>


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
