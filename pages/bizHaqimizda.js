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
                        <h1 className='text-center mb-4'>«VETKO BIOTEK» MCHJ</h1>
                        <div className="row">
                            <div className="col-12">
                                <div className='bizCard'>
                                    <h4 className='text-center'> О НАС</h4>
                                    <p>«VETKO BIOTEK» MCHJ «Ветко Биотек» маьсуляти чекланган жамияти 2020 йил ташкил топган. Жамиятнинг асосий фаолият турларидан бири, чорвачилик ва паррандачиликда ишлатиладиган ветеринария препаратларининг улгуржи савдоси билан шуғилланиш хисобланади. Хозирда жамият, Россиянинг «Нита фарм», Украинанинг «Бровафарма» ва «Укрзооветпромпостач», Нидерландиянинг «Kanters» компанияларининг 100 дан ортиқ препаратларини, хамкорликдаги ветеринария аптекаларига ва фермаларга етказиб беради. Жамият нафақат,дори препаратлар савдоси билан шуғулланади, балки чорвачиликда сифатли озуқа тайёрлашда, силос ва сенаж учун ишлатиладиган биологик консервантлар савдоси ва уларни ишлатишда, Австриянинг «BIOMIN» компанияси билан хамкорликда ишлайди. Юқори малакали мутахассисларимаз, силос ва сенаж тайёрлаш жараёни бўйича маслаҳатлар беради. Бундан ташқари, Биомин компанияси билан бузоқлар учун “Сутстабил” номи билан бузоқлар учун табиий сутни нордонлаштирувчи ишлаб чиқаради. Германиянинг “Мастерринд” компанияси билан ҳамкорликда, наслчилик ва селекция ишларида Республикамиз фермаларида бевосита иштирок этмоқда ва четдан келтирилган наслли буқалар уруғларини фермаларга таклиф этиб, фермалар учун бириктирилган буқаларни танлаб беради.  Жамият Франциянинг «CEVA» компанияси билан ҳамкорликда,  гормонал препаратлар савдоси билан ҳам шуғулланади. Шулар жумласидан, Оврален, Энзапрост ва Прид дельта хозирда сотувда мавжуд ва уларнинг қўлланилиши бўйича маслахатлар беради. Сутчилик ва гўшт ишлаб чиқаришга ихтисослашган қорамолчилик фермалари учун оптимиллаштирилган рационлар тузиб бериш, “Корм оптима” дастури асосида ҳар бир ферма ва гуруҳ учун алоҳида тузиб беради. Қўшимча макро ва микроэлементлар, ҳамда витаминларга талабни қоплаш учун “Агропремикс” МЧЖ билан ҳамкорликда, “Рономикс” номи билан соғин сигирлар ва тиним даври учун премиксларни таклиф этади.  Чорвачилик фермаларида ветеринария даволаш ва профилактика тадбирларини ташкил этиш бўйича амалий ва маслахат бўйича ёрдам беради. Чорвачиликда консалтинг хизматлари Украиналик ва Республикамизнинг юқори малакали мутахасислар томонидан бериб борилади.</p>

                                </div>
                            </div>
                            <div className="col-12">
                                <div className='bizCard mb-4'>

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

                           
                        </div>
                    </div>
                </div>

            </All>
        </HomeW>
    )
}

export default BizHaqimizda
