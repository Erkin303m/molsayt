import React from 'react'
import HomeW from '../styleW/homeW'
import All from './components/all'
import { Carousel } from 'react-bootstrap';
import Head from 'next/head'




const BizHaqimizda = () => {


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
                                <div className='bizCard'>

                                    <Carousel>
                                        <Carousel.Item >
                                            <div className="sliderCard">
                                                <img
                                                    className="rasmSlider"
                                                    src="https://cdnimg.rg.ru/img/content/131/66/49/1_d_850.jpg"
                                                    alt="bizni kollektiv"
                                                />
                                            </div>
                                            <Carousel.Caption>
                                                <h3>asdfsdgfdsg</h3>
                                                <p>sgsdgadv</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>



                                        <Carousel.Item >
                                            <div className="sliderCard">
                                                <img
                                                    className="rasmSlider"
                                                    src="https://cdnimg.rg.ru/img/content/131/66/49/1_d_850.jpg"
                                                    alt="bizni kollektiv"
                                                />
                                            </div>
                                            <Carousel.Caption>
                                                <h3>asdfsdgfdsg</h3>
                                                <p>sgsdgadv</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>


                                        <Carousel.Item >
                                            <div className="sliderCard">
                                                <img
                                                    className="rasmSlider"
                                                    src="https://cdnimg.rg.ru/img/content/131/66/49/1_d_850.jpg"
                                                    alt="bizni kollektiv"
                                                />
                                            </div>
                                            <Carousel.Caption>
                                                <h3>asdfsdgfdsg</h3>
                                                <p>sgsdgadv</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>

                                        
                                    </Carousel>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className='bizCard'>
                                    <h2 className='text-center'>Vetco Company</h2>
                                    <h4 className='text-center'>Biz haqimizda</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias vel quam corrupti tenetur, aperiam hic veniam dignissimos ab aliquam expedita animi quos cumque unde laudantium officiis explicabo illum nostrum!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias vel quam corrupti tenetur, aperiam hic veniam dignissimos ab aliquam expedita animi quos cumque unde laudantium officiis explicabo illum nostrum!</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae molestias vel quam corrupti tenetur, aperiam hic veniam dignissimos ab aliquam expedita animi quos cumque unde laudantium officiis explicabo illum nostrum!</p>
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
