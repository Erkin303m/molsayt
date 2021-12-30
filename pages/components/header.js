import Link from 'next/link'
import React, { useEffect } from 'react'
import ComponentsW from '../../styleW/componentsW'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import Navbar from './navbar'
import { useRouter } from 'next/router'



const dataPage = [
    { page: "page1", nomi: "Паразитларга қарши воситалар", rasm: "mol1.jpg" },
    { page: "page2", nomi: "Антибактериал ва яллиғланишга қарши воситалар", rasm: "mol1.jpg" },
    { page: "page3", nomi: "Акушерликғ-гинекологик воситалар", rasm: "mol1.jpg" },
    { page: "page4", nomi: "Витамин-минерал воситалар", rasm: "mol1.jpg" },
    { page: "page5", nomi: "Бошқа  фарм гурухлар ", rasm: "mol1.jpg" }
];



const Header = () => {
    const Router = useRouter();


    const NextPage = (v) => {
        Router.push({
            pathname: "/page1",
            query: { doriTuri: v.page }
        })
        console.log(Router.query);
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <ComponentsW>
            <div className="headersection">
                <div className="container">
                    <div className='header1'>
                        <div className="headerChap">
                            <img src="logo.png" alt="" className='headerLogo' />
                        </div>

                        <div className="headerOng">
                            <ul className='headerUl'>
                                <li className="animate__animated animate__bounceInDown animate__delay-0">
                                    <Link href="/">
                                        <a className='headerMenu'>
                                            Asosiy
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-1s  catalogLi">
                                  Katalog
                                  <div className='catalogCard'>
                                        <ul>
                                            {dataPage.map((v,i)=>{
                                                return <li key={i}>
                                                    <a onClick={() => NextPage(v)}>
                                                        {v.nomi}
                                                    </a>
                                                </li>
                                            })}
                                            {/* <li>Паразитларга қарши воситалар</li>
                                            <li>Антибактериал ва яллиғланишга қарши воситалар</li>
                                            <li>dori 3</li>
                                            <li>dori 4</li>
                                            <li>dori 5</li>
                                            <li>dori 6</li> */}
                                           
                                        </ul>
                                  </div>
                                 
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-2s">
                                    <Link href="/page1">
                                        <a className='headerMenu'>
                                            Kontaktlar
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-3s">
                                    <Link href="/bizHaqimizda">
                                        <a className='headerMenu'>
                                            Biz haqimizda
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-4s">
                                    <Link href="/buy">
                                        <a className='headerMenu'>
                                            <button className='btn btn-light'>Buy</button>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                           
                            <Navbar className="navbar" />
                        </div>
                    </div>
                </div>
            </div>
           
        </ComponentsW>
    )
}

export default Header