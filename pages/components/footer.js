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
                        <div className="col-lg-4 col-sm-12">
                            <p>Contacts</p>
                            <p>+998948998989</p>
                            <p>+998948900989</p>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <p>Messengerlar</p>
                            <p>
                                <a href="">
                                    <AiFillInstagram /> Instagram
                                </a>
                            </p>

                            <p>
                                <a href="">
                                    <FaTelegram /> Telegram
                                </a>
                            </p>

                            <p>
                                <a href="">
                                    <BsFacebook /> Telegram
                                </a>
                            </p>

                            <p>
                                <a href="">
                                    <AiFillYoutube /> YouTube
                                </a>
                            </p>
                            
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <p>Company name</p>
                            <img src="logok.jpg" alt="mol" className='logoFooter' />
                        </div>
                    </div>
                </div>
            </div>
        </ComponentsW>
    )
}

export default Footer
