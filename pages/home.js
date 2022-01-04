import React, { useState } from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel } from 'react-bootstrap';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ImLocation } from 'react-icons/im';







const data4 = [
    { rasm: "mol1.jpg", text1: "salom", text2: "Vetco1", info: "Sarlavha uchun so'zlar", info2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error commodi unde, dolor voluptatum laudantium, excepturi suscipit accusamus ut modi repellendus asperiores saepe? Qui harum nulla unde sequi delectus alias."},
    { rasm: "mol1.jpg", text1: "salom", text2: "Vetco2",info:"Sarlavha uchun so'zlar", info2: "Антибактериал ва яллиғланишга қарши воситалар2"},
    { rasm: "mol1.jpg", text1: "salom", text2: "Vetco3",info:"Sarlavha uchun so'zlar", info2: "Антибактериал ва яллиғланишга қарши воситалар3"},
    { rasm: "mol1.jpg", text1: "salom", text2: "Vetco4",info:"Sarlavha uchun so'zlar", info2: "Антибактериал ва яллиғланишга қарши воситалар4"},
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
                    <meta name="description" content="Vetco company" />
                    <link rel="icon" href="logof.jpg" />
                </Head>

                <div className="section2">
                    <div className="col-12 carouselRelative">
                        <Carousel>
                            {data4.map((v, i) => {
                                return <Carousel.Item key={i}>
                                    <div className="sliderCard">
                                        <img
                                            className="rasmSlider"
                                            src={v.rasm}
                                            alt={v.rasm}
                                        />
                                        <div className="carouselAbsolut">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-12 infoCard">
                                                        <div className='p-2'>
                                                            <h1>{v.info}</h1>
                                                            <p> {v.info2} </p>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                        </div>
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
                 
                    <h1 className='text-center'>Bizning manzil <ImLocation/></h1>
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
