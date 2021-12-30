import React, { useState } from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel } from 'react-bootstrap';
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'







const data4 = [
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
    { rasm: "mol1.jpg", text1: "salom", text2: "salom2" },
];
const dataPage = [
    { page: "page1", nomi: "Паразитларга қарши воситалар", rasm: "mol1.jpg" },
    { page: "page2", nomi: "Антибактериал ва яллиғланишга қарши воситалар", rasm: "mol1.jpg"  },
    { page: "page3", nomi: "Акушерликғ-гинекологик воситалар", rasm: "mol1.jpg"  },
    { page: "page4", nomi: "Витамин-минерал воситалар", rasm: "mol1.jpg" },
    { page: "page5", nomi: "Бошқа  фарм гурухлар ", rasm: "mol1.jpg" },
    { page: "page6", nomi: "Бошқа  фарм гурухлар 2 ", rasm: "mol1.jpg" }
];

const Home2 = () => {
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
                        <h1 className='text-center'>Katalog</h1>
                        <div className="row">
                            {dataPage.map((v, i) => {
                                return <div className="col-lg-4 col-md-6 col-sm-12" key={i+1}>
                                    <a onClick={() => NextPage(v)}>
                                        <div className='asosiy' data-aos="zoom-out-up" data-aos-delay={i*100}>
                                            <div className="oddiy">
                                                <img src={v.rasm} alt="mol" className='molAbsolut' />
                                            </div>

                                            <div className="absolut">
                                                <p className='doriCatalog'>{v.nomi}</p>
                                            </div>

                                        </div>
                                    </a>


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
