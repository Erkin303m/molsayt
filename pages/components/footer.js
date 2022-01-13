import React from 'react'
import ComponentsW from '../../styleW/componentsW'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';





const Footer = () => {
    return (
        <ComponentsW>
            <div className="footerSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12" id="kontakt">
                            <p>КОНТАКТЫ</p>
                            <p>+998994442844</p>
                            <p>+998994442740</p>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <p> Мессенджер</p>
                            <p>
                                <a href="https://www.instagram.com/vetcobiotek/">
                                    <AiFillInstagram /> Instagram
                                </a>
                            </p>

                            <p>
                                <a href="#">
                                    <FaTelegram /> Telegram
                                </a>
                            </p>

                            <p>
                                <a href="https://www.instagram.com/vetcobiotek/">
                                    <BsFacebook /> Facebook
                                </a>
                            </p>

                            <p>
                                <a href="https://youtube.com/channel/UCMNlJE5VeSXdmsvlftdBohQ">
                                    <AiFillYoutube /> YouTube
                                </a>
                            </p>
                            
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <p>Компания</p>
                            <div className="logoFooterCard">
                            <img src="logof.jpg" alt="mol" className='logoFooter' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentsW>
    )
}

export default Footer
