import React, { useState } from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel } from 'react-bootstrap';
import Head from 'next/head'
import Link from 'next/link';





const data4 = [
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
];
const dataPage = [
    { page: "page1", nomi: "dori 1", rasm: "mol1.jpg" },
    { page: "page2", nomi: "dori 2", rasm: "mol1.jpg"  },
    { page: "page3", nomi: "dori 3", rasm: "mol1.jpg"  },
    { page: "page4", nomi: "dori 4", rasm: "mol1.jpg"  },
];

const Home2 = () => {
    const [number, setNumber] = useState(0);

    return (
        <HomeW>
            <All>
                <Head>
                    <title>Home app</title>
                    <meta name="description" content="home page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="section2">
                    <div className="col-12">
                        <Carousel onSlide={(e) => setNumber(e)}>
                            {data4.map((v, i) => {
                                return <Carousel.Item key={i}>
                                    <div className="sliderCard">
                                        <img
                                            className="rasmSlider"
                                            src={v.rasm}
                                            alt={v.rasm}
                                        />
                                    </div>
                                    <Carousel.Caption>
                                        <h3>{v.text}</h3>
                                        <p>{v.text2}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })}

                        </Carousel>

                    </div>
                </div>

                <div className="section1">
                    <div className="container">
                        <div className="row">
                            {dataPage.map((v, i) => {
                                return <div className="col-lg-4 col-md-6 col-sm-12" key={i+1}>
                                    <Link href={`/${v.page}`}>
                                        <a>
                                            <div className='asosiy'>
                                                <div className="oddiy">
                                                    <img src={v.rasm} alt="mol" className='molAbsolut' />
                                                </div>

                                                <div className="absolut">
                                                    <h1>{v.nomi}</h1>
                                                </div>

                                            </div>
                                        </a>

                                    </Link>

                                </div>
                            })}
                          
                        </div>
                    </div>

                  
                </div>


                <div className="section3">
                    <h1 className='text-center'>Bizning manzil</h1>
                    <div className="col-12">
                        <iframe
                            className="maps"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: 0, marginBottom: -6 }}
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbG6vGRHd9fMB_GhUei3T-1f1Km3QpvbQ&q=41.3401699,69.2944457&language=ru&maptype=satellite"
                            allowFullScreen
                        />
                    </div>
                </div>
              
            </All>
        </HomeW>
    )
}

export default Home2
