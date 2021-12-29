import React, { useEffect, useState } from 'react'
import All from './components/all'
import HomeW from '../styleW/homeW'
import { useRouter } from 'next/router'
import Data from '../malumotBazasi/dorilar'
import { Button, Modal } from 'react-bootstrap';








const Page1 = () => {
    const Router=useRouter();
    const Data2 = [];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].name == Router.query.doriTuri) {
            Data2.push(Data[i]);
        }
    }
    console.log("malumot qoshildi", Data2);
 

    return (
        (Data2.length > 0) ? (
            <HomeW>
                <All>
                    <div className="section4">
                        <div className="container">
                            <h1 className='text-center'>Bizning dorilar !</h1>
                            <div className="row">
                                {Data2[0].kattab.map((v, i) => {
                                    return <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                                        <div className='doriCard'>
                                            <img src="dori11.jpg" alt="" className='doriRasm' />
                                            <p className="nomi">{v.nomi}</p>
                                            <div className='DoriBut'>
                                                <p className="narxi">{v.narxi}</p>
                                                <button className='btn btn-primary' onClick={handleShow}>
                                                    Info
                                                </button>
                                            </div>
                                           

                                            
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Dori malumotlari</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body> {v.malumot} </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Yopish
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                         
                                        </div>
                                    </div>
                                })}

                            </div>
                        </div>
                    </div>
                </All>
            </HomeW>
        ):(
                <HomeW>
                    <All>
                        <div className="section1">
                            <div className="container">
                                <div className="row">
                                  <h1>malumot yoq</h1>

                                </div>
                            </div>
                        </div>
                    </All>
                </HomeW>
        )
     
    )
}

export default Page1
