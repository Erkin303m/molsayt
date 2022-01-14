import React from 'react'
import ComponentsW from '../../styleW/componentsW'
import { AiFillInstagram, AiFillYoutube, AiFillHome, AiOutlineMail } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';









const Footer = () => {
    return (
        <ComponentsW>
            <div className="footerSection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12" id="kontakt">
                            <p>КОНТАКТЫ</p>

                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <IoIosCall className='footerIco' />
                                    <p>+998994442844</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <IoIosCall className='footerIco'/>
                                    <p>+998994442940</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <AiFillHome className='footerIco' />
                                    <p>100057 , Тошкент , Уста ширин , 114</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <AiOutlineMail className='footerIco' />
                                    <p>vetcobiotek2022@gmail.com</p>
                                </div>
                            </div>
                             <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <BiTimeFive className='footerIco' />
                                    <p>09:00 - 18:00</p>
                                </div>
                            </div>
                            
                           
                            
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <p> Мессенджер</p>
                            <p>
                                <a href="https://www.instagram.com/vetcobiotek/">
                                    <AiFillInstagram className='footerIco'/> Instagram
                                </a>
                            </p>

                            <p>
                                <a href="https://t.me/VetcoBiotek_uz">
                                    <FaTelegram className='footerIco'/> Telegram
                                </a>
                            </p>

                            <p>
                                <a href="https://www.facebook.com/profile.php?id=100077049813028">
                                    <BsFacebook className='footerIco'/> Facebook
                                </a>
                            </p>

                            <p>
                                <a href="https://youtube.com/channel/UCMNlJE5VeSXdmsvlftdBohQ">
                                    <AiFillYoutube className='footerIco'/> YouTube
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
