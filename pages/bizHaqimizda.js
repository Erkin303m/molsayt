import React, { useState } from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel } from 'react-bootstrap';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'



const BizHaqimizda = () => {
    const [number, setNumber] = useState(0);
    const Router = useRouter();



    const NextPage = (v) => {
        Router.push({
            pathname: "/page1",
            query: { doriTuri: v.page }
        })
        console.log(Router.query);
    }

    return (
        <HomeW>
            <All>
                <Head>
                    <title>Vetco</title>
                    <meta name="description" content="Biz haqimizda" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="sectionBiz">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <p>rasm</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div>
                                    <p>yozuv</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </All>
        </HomeW>
    )
}

export default BizHaqimizda
