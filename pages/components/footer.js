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
                                    <IoIosCall />
                                    <p>+998994442844</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <IoIosCall />
                                    <p>+998994442740</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <AiFillHome />
                                    <p>100057 , Тошкент , Уста ширин , 114</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <AiOutlineMail />
                                    <p>vetcobiotek2022@gmail.com</p>
                                </div>
                            </div>
                             <div className='d-flex justify-content-center'>
                                <div className='d-flex'>
                                    <BiTimeFive />
                                    <p>09:00 - 18:00</p>
                                </div>
                            </div>
                            
                           
                            
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
                                <a href="https://www.facebook.com/profile.php?id=100077049813028">
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
