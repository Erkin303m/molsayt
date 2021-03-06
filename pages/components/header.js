import Link from 'next/link'
import React, { useEffect } from 'react'
import ComponentsW from '../../styleW/componentsW'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import Navbar from './navbar'
import { useRouter } from 'next/router' 
import { AiOutlineShoppingCart } from 'react-icons/ai';





const dataPage = [
    { page: "page1", nomi: "1 Паразитларга қарши воситалар", rasm: "mol1.jpg" },
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
                            <Link href="/">
                                <a>
                                    <img src="logo/logo.png" alt="" className='headerLogo' />
                                </a>
                            </Link>
                        </div>

                        <div className="headerOng">
                            <ul className='headerUl'>
                                <li className="animate__animated animate__bounceInDown animate__delay-0">
                                    <Link href="/">
                                        <a className='headerMenu'>
                                            ГЛАВНАЯ
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-3s">
                                    <Link href="/bizHaqimizda">
                                        <a className='headerMenu'>
                                            О НАС
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-1s  catalogLi">
                                    КАТАЛОГ
                                  <div className='catalogCard'>
                                        <ul>
                                            {dataPage.map((v,i)=>{
                                                return <li key={i}>
                                                    <a onClick={() => NextPage(v)} >
                                                        <div className="katalogH">
                                                            {v.nomi}
                                                        </div>
                                                    </a>
                                                   
                                                </li>
                                            })}
                                           
                                        </ul>
                                  </div>
                                 
                                </li>
                                
                                <li className="animate__animated animate__bounceInDown animate__delay-3s">
                                    <Link href="/filial">
                                        <a className='headerMenu'>
                                            servis
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-3s">
                                    <Link href="/filial">
                                        <a className='headerMenu'>
                                            media
                                        </a>
                                    </Link>
                                </li>
                                <li className="animate__animated animate__bounceInDown animate__delay-2s">
                                    <Link href="/filial">
                                        <a className='headerMenu'>
                                            КОНТАКТЫ
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