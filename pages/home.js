import React from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel } from 'react-bootstrap';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ImLocation } from 'react-icons/im';
import Data from '../malumotBazasi/dorilar'
import Link from 'next/link';



const data4 = [
    { rasm: "mol1.jpg", text1: "salom", text2: "Vetco1", info: "Sarlavha uchun so'zlar", info2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error commodi unde, dolor voluptatum laudantium, excepturi suscipit accusamus ut modi repellendus asperiores saepe? Qui harum nulla unde sequi delectus alias."},
    { rasm: "https://agro-olam.uz/wp-content/uploads/2017/12/78123.jpg", text1: "salom", text2: "Vetco2", info: "Sarlavha uchun so'zlar", info2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error commodi unde, dolor voluptatum laudantium, excepturi suscipit accusamus ut modi repellendus asperiores saepe? Qui harum nulla unde sequi delectus alias."},
    { rasm: "https://apollo-olx.cdnvideo.ru/v1/files/295y784beyjh3-UZ/image;s=644x461", text1: "salom", text2: "Vetco3", info: "Sarlavha uchun so'zlar", info2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error commodi unde, dolor voluptatum laudantium, excepturi suscipit accusamus ut modi repellendus asperiores saepe? Qui harum nulla unde sequi delectus alias."},
    { rasm: "https://agronet.uz/wp-content/uploads/2018/12/sut-mahsuldorligi.jpg", text1: "salom", text2: "Vetco4", info: "Sarlavha uchun so'zlar", info2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error commodi unde, dolor voluptatum laudantium, excepturi suscipit accusamus ut modi repellendus asperiores saepe? Qui harum nulla unde sequi delectus alias."},
];
const dataPage = [
    { page: "page1", nomi: "Паразитларга қарши воситалар", rasm: "https://agro-olam.uz/wp-content/uploads/2017/12/78123.jpg" },
    { page: "page2", nomi: "Антибактериал ва яллиғланишга қарши воситалар", rasm: "https://api.agromart.uz/file/useful-material/main/main-042d1ed8-79a9-4036-b4ec-9da6d7881605.jpeg"  },
    { page: "page3", nomi: "Акушерликғ-гинекологик воситалар", rasm: "https://agronet.uz/wp-content/uploads/2018/12/sut-mahsuldorligi.jpg"  },
    { page: "page4", nomi: "Витамин-минерал воситалар", rasm: "http://storage.kun.uz/source/1/d_tFm5JVVF-u8LuDwCjTeg1zBOlnJiqb.jpg" },
    { page: "page5", nomi: "Бошқа  фарм гурухлар ", rasm: "https://i1.wp.com/pro-selhoz.ru/wp-content/uploads/2017/09/samye_bolshie_byki_v_mire_14_14074633.jpg" }
];

const Home2 = () => {
    const Router = useRouter();


    const NextPage = (v,i) => {
        Router.push({
            pathname: "/page1",
            query: { doriTuri: v.page, nomi: v.nomi }
        })
        // console.log(Router.query);
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
                        <h1 className='text-center'>КАТАЛОГ</h1>
                        <div className="row">
                            {dataPage.map((v, i) => {
                                return <div className="col-lg-4 col-md-6 col-sm-12" key={i+1}>
                                    <a onClick={() => NextPage(v,i)}>
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
                 
                    <h1 className='text-center'>НАШ АДРЕСС <ImLocation/></h1>
                    <div className="col-12">
                        <iframe
                            className="maps"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: 0, marginBottom: -6 }}
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbG6vGRHd9fMB_GhUei3T-1f1Km3QpvbQ&q=41.3554403,69.2620444&language=ru&maptype=satellite"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="section3">

                    <h1 className='text-center'>НАШИ ПАРТНЕРЫ </h1>
                  <div className="container mb-5 hamkorlarr">
                      <div className='row'>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/hamkor">
                                <a className="hamkorA">
                                    <div className="hamkorlar">
                                        <h3 className='text-center'>Nitafarm</h3>
                                        <img src="./NITAFARM/logo.jpg" alt="hamkorlar" className="hamkorlogo" />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/hamkor">
                                <a className="hamkorA">
                                    <div className="hamkorlar">
                                        <h3 className='text-center'>Brovafarm</h3>
                                        <img src="./blogo.png" alt="hamkorlar" className="hamkorlogo" />
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/hamkor">
                                <a className="hamkorA">
                                    <div className="hamkorlar">
                                        <h3 className='text-center'>Kanters</h3>
                                        <img src="./Kanters/kanters.png" alt="hamkorlar" className="hamkorlogo" />
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link href="/hamkor">
                                <a className="hamkorA">
                                    <div className="hamkorlar">
                                        <h3 className='text-center'>Masterrind </h3>
                                        <img src="./masterrinf/logo.jpg" alt="hamkorlar" className="hamkorlogo" />
                                    </div>
                                </a>
                            </Link> 
                        </div>                           
                      </div>

                  </div>
                </div>
              
            </All>
        </HomeW>
    )
}

export default Home2
