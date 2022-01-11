import React from 'react'
import emailjs from 'emailjs-com';
import swal from 'sweetalert'
import All from './components/all'
import HomeW from '../styleW/homeW'
import Head from 'next/head'




const Buy = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7acq8yl', "template_27qq4m9", e.target, "user_9nw3sdhwgEtvu8o1e5xJx").then(res => {
            console.log(res);
        }).catch(err => console.log(err))

        swal({
            title: "Ma'lumot yuklandi !",
            text: "Mahsulot muvaffaqiyatli qo'shildi!",
            icon: "success",
            button: "Yopish",
            timer: 2000
        });

        Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
    }
    return (
        <All>
            <HomeW>

                <Head>
                    <title>Vetco</title>
                    <meta name="description" content="Vetco company" />
                    <link rel="icon" href="logof.jpg" />
                </Head>
                
                <div className="section5">
                    <div className="container">
                        <h1 className="text-center mb-3" >Купите продукт, который вы хотите!</h1>
                        <form onSubmit={sendEmail}>
                            <div className="row">

                                <div className="col-sm-12 col-lg-6">
                                    <div className="inputCard" data-aos="zoom-in-right" data-aos-delay='100'>
                                        <label className="labelI" >ФИО</label>
                                        <input type="text" className="form-control" id="FIO" name="FIO" />
                                    </div>

                                    <div className="inputCard " data-aos="zoom-in-right" data-aos-delay='100'>
                                        <label className="labelI" >Телефонный номер</label>
                                        <input type="text" className="form-control" id="NUM" name="NUM" />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-6">
                                    <div className="inputCard" data-aos="zoom-in-left" data-aos-delay='100'>
                                        <label className="labelI"  >Название продукта, который вы хотите купить</label>
                                        <input type="text" className="form-control" id="namekurs" name="KURS" />
                                    </div>
                                    <div className="inputCard" data-aos="zoom-in-left" data-aos-delay='100'>
                                        <label className="labelI"  >Something</label>
                                        <input type="text" className="form-control" id="nimadir" name='NIM' />
                                    </div>

                                </div>

                                <div className='col-12'>
                                    <div className='inputCard2' data-aos="zoom-out">
                                        <label className="labelI"  >Вы можете отправить свои вопросы !</label>
                                            <textarea className="form-control" aria-label="With textarea" name="TEXT"></textarea>
                                    </div>
                                    <div className='d-flex justify-content-center' data-aos="zoom-out">
                                        <button className='btn btn-primary mt-4'>КУПИТЬ</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </HomeW>
          
            
        </All>
    )
}

export default Buy
