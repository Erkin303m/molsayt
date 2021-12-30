import React from 'react'
import emailjs from 'emailjs-com';
import swal from 'sweetalert'
import All from './components/all'
import HomeW from '../styleW/homeW'



const Buy = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1uwcenv', "template_z6tjqwn", e.target, "user_ea05P0DGJWw0r4OM5Y3bH").then(res => {
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
                  <div className="section4">
                <div className="container">
                    <h1 className="textLocation" >Registratsiya uchun  </h1>
                    <form onSubmit={sendEmail}>
                        <div className="row">

                            <div className="col-sm-12 col-lg-6">
                                <div className="inputCard" data-aos="zoom-in-right" data-aos-delay='100'>
                                    <label className="labelI" >FIO</label>
                                    <input type="text" className="form-control" id="FIO" name="FIO" />
                                </div>

                                <div className="inputCard " data-aos="zoom-in-right" data-aos-delay='100'>
                                    <label className="labelI" >Telefon raqam</label>
                                    <input type="text" className="form-control" id="NUM" name="NUM" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-6">
                                <div className="inputCard" data-aos="zoom-in-left" data-aos-delay='100'>
                                    <label className="labelI"  >Olmoqchi bo'lgan mahsulotlaringiz</label>
                                    <input type="text" className="form-control" id="namekurs" name="KURS" />
                                </div>
                                <div className="inputCard" data-aos="zoom-in-left" data-aos-delay='100'>
                                    <label className="labelI"  >Nimadir</label>
                                    <input type="text" className="form-control" id="nimadir" name='NIM' />
                                </div>

                            </div>

                            <div className='col-12'>
                                <div className='inputCard2' data-aos="zoom-out">
                                        <label className="labelI"  >Savollaringizni yo'llang !</label>
                                        <textarea className="form-control" aria-label="With textarea" name="TEXT"></textarea>
                                </div>
                                <div className='d-flex justify-content-center' data-aos="zoom-out">
                                    <button className='btn btn-primary mt-4'>Sotib olish</button>
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
