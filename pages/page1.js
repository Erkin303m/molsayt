import React, { useEffect, useState } from 'react'
import All from './components/all'
import HomeW from '../styleW/homeW'
import { useRouter } from 'next/router'
import Data from '../malumotBazasi/dorilar'
import Head from 'next/head'




const Page1 = () => {
    const Router=useRouter();
    const Router2 = useRouter();

    const Data2 = [];

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].name == Router.query.doriTuri) {
            Data2.push(Data[i]);
        }
    }

    console.log("malumot rang", Router.query.rang);


    const NextPage2 = (v) => {
        Router2.push({
            pathname: "/page2",
            query: { ...v }
        })
        // console.log( "malunmot ketti" , Router2.query);
    }

 

    return (
        (Data2.length > 0) ? (
             
            <HomeW>
                <All>
                    <Head>
                        <title>Vetco</title>
                        <meta name="description" content="home page" />
                        <link rel="icon" href="logof.jpg" />
                    </Head>
                    <div className="section4">
                        <div className="container">
                            <h1 className='text-center'>{Data2[0].nomi} !</h1>
                            <div className="row">
                                <div className="col-lg-3 col-sm-12">
                                    <p>salom</p>
                                </div>
                                <div className="col-lg-9 col-sm-12">
                                    <div className="row">
                                        {Data2[0].kattab.map((v, i) => {
                                            return <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                                                <div className={`doriCard `}>
                                                    <div>
                                                        <p className="nomi">{v.nomi}</p>
                                                        <img src={v.rasm} alt="" className='doriRasm' onClick={() => NextPage2(v)} />
                                                    </div>
                                                    <div className={`absoluteP1 ${Data2[0].color}`}>
                                                        <div className='DoriButp'>
                                                            <p className="narxi text-center">{v.company}</p>
                                                            <div className="d-flex justify-content-center m-1">
                                                                <button className='btn btn-primary' onClick={() => NextPage2(v)}>
                                                                    Info
                                                                </button>
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                   

                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                             

                            </div>
                        </div>
                    </div>
                </All>
            </HomeW>
        ):(
            
                <HomeW>
                    <All>
                        <Head>
                            <title>Vetco</title>
                            <meta name="description" content="home page" />
                            <link rel="icon" href="logof.jpg" />
                        </Head>
                        <div className="section1">
                            <div className="container">
                                <div className="row">
                                  <h1>malumot yoq</h1>

                                </div>
                            </div>
                        </div>
                    </All>
                </HomeW>
        )
    )
}

export default Page1
