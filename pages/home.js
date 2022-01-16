import React from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel, Dropdown } from 'react-bootstrap';
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
    { page: "page1", nomi: "Паразитларга қарши воситалар", rasm: "bacteria.png" , rang:"rang1"},
    { page: "page2", nomi: "Антибактериал ва яллиғланишга қарши воситалар", rasm: "parazit.png", rang: "rang2" },
    { page: "page3", nomi: "Акушерликғ-гинекологик воситалар", rasm: "ginekolog.png", rang: "rang3"},
    { page: "page4", nomi: "Витамин-минерал воситалар", rasm: "vitamin.png", rang: "rang4" },
    { page: "page5", nomi: "Бошқа  фарм гурухлар ", rasm: "boshqa.png", rang: "rang5" }
];

const Home2 = () => {
    const Router = useRouter();


    const NextPage = (v,i) => {
        Router.push({
            pathname: "/page1",
            query: { doriTuri: v.page, nomi: v.nomi, }
        })
        // console.log(Router.query);
    }

    return (
        <HomeW>
            <All>
                <Head>
                    <title>Vetco</title>
                    <meta name="description" content="Vetco company zo'r" />
                    <link rel="icon" href="logof.jpg" />
                </Head>
                <div className='soat'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

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
                        <h1 className='text-center mb-5'>О НАС</h1>
                        <h5>NITA-FARM - ЛИДЕР В РАЗРАБОТКЕ И ПРОИЗВОДСТВЕ
                            ВЕТЕРИНАРНОЙ ФАРМАЦЕВТИКИ РОССИИ</h5>
                        <p className='bizP'>Мы обеспечиваем доступность лучших мировых достижений ветеринарной фармацевтики.
                            Каждый второй ветеринарный врач использует в своей практике продукцию компании NITA-FARM*</p>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className=" p-1">
                                    <p className='bizP '>Все препараты NITA‑FARM имеют регистрацию в России</p>
                                    <div className="d-flex justify-content-center">
                                        <img src="https://www.nita-farm.ru/local/templates/new_desing/frontend/build/images/about-block1.webp" alt="" className='rasm11' />
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div classname='p-1 kkk'>
                                    <p className='bizP'>Система производства соответствует международным стандартам качества и сертифицирована по ISO 9001 и GMP‑EU (ГОСТР 52249-2009)</p>
                                    <div className='d-flex justify-content-between'>
                                        <img src="https://www.nita-farm.ru/images/GMP.svg" alt="pechat vetco" className='rasm22' />
                                        <img src="https://www.nita-farm.ru/images/ISO.svg" alt="pechat vetco" className='rasm22'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className='p-1'>
                                    <Carousel>
                                        {data4.map((v, i) => {
                                            return <Carousel.Item key={i}>
                                                <div className="sliderCard">
                                                    <img
                                                        className="rasmSlider2"
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

                        </div>
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
                                            <div className="absolut2">
                                                <div className={`rang ${v.rang}`}></div>
                                                <div className='d-flex justify-content-center'>
                                                    <img src={v.rasm} alt="jkdfhg sdhfgh sdf" className='rasmbakteria' />
                                                </div>
                                                
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
