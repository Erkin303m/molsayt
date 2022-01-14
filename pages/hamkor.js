import React from 'react'
import All from './components/all'
import HomeW from '../styleW/homeW'
import Head from 'next/head'


const Data=[
    {
        nomi: "Brovafarma", rasmi: `./BROVAFAARMA/brova.png`, info1: "ТОВ «БРОВАФАРМА»", info2:`ТОВ «БРОВАФАРМА»
БРОВАФАРМА — НАЙБІЛЬШИЙ В УКРАЇНІ ВИРОБНИК ВЕТЕРИНАРНИХ ПРЕПАРАТІВ ДЛЯ ЛІКУВАННЯ І ПРОФІЛАКТИКИ ЗАХВОРЮВАНЬ ТВАРИН
Компанія БРОВАФАРМА створена у 1992 р. за участю німецьких інвесторів. Тридцятирічна історія успіху дає підстави пишатись здобутками підприємства та рівнем якості ветеринарних препаратів українського виробництва. Компанія впевнено лідирує за кількістю зареєстрованих засобів та географією експорту. Підприємство БРОВАФАРМА здобуло репутацію надійного виробника, який гарантує якість та безпеку ветеринарних препаратів, виготовлених відповідно до європейських стандартів GMP (Good Manufacturing Practice). Система управління якістю згідно з ДСТУ ISO 9001:2015.
Наша місія: «ЗДОРОВ’Я ТВАРИН — ТУРБОТА ПРО ЛЮДЕЙ»
` },

    {
        nomi: "Kanters", rasmi: "./Kanters/kanters.jpg", info1: "", info2:`Благодаря нашей специализации на жидких пищевых добавках для поддержания здоровья животных и сокращения использования антибиотиков мы повышаем прибыль вашего бизнеса. Мы разрабатываем, производим и поставляем пищевые добавки, моющие и дезинфицирующие средства, изоляционную бумагу, ингибиторы перегрева кормов и средства по уходу за копытами.

Наш деловой подход сосредоточен на гигиене питьевой воды и жидких пищевых добавках, которые в основном вводятся через питьевую воду или жидкие корма. Животные пьют минимум в два раза больше, чем едят. Если животное болеет или находится в состоянии стресса, оно будет потреблять меньше пищи, но продолжать пить. Это делает воду идеальной средой для поддержания здоровья животных с помощью пищевых добавок.

Также возможно добавление наших БАДов к основному рациону корма. Таким образом, мы оптимизируем ваши дневные рационы и защищаем кормовую смесь от перегрева.
`},
    {
        nomi: "Masterrinf", rasmi: "./masterrinf/master.jpg", info1: "", info2:`В ГЕРМАНИИ И В МИРЕ: ВАШ ПЕРВЫЙ ПАРТНЕР ДЛЯ КРС
Лидер рынка MASTERRIND – это современная компания, объединяющая три успешные кооперативные организации с большими традициями: SRV, WEU и MASTERRIND Hannover eG.

При поддержке плотной сети мотивированных и компетентных сотрудников MASTERRIND предлагает решения для животноводов из одних рук. Это означает максимальный успех для всех членов и клиентов в разведении, маркетинге, управлении воспроизводством и приобретении оборудования для успешного молочного и мясного животноводства.

Со штаб-квартирой в Вердене и региональными центрами в Мейсене и Бад-Цвишенане, MASTERRIND помогает более чем 8 500 фермерам, имеющим около 619 700 коров голштинской породы и почти 11 000 коров различных мясных пород.
`},
    {
        nomi: "Nitafarm", rasmi: "./NITAFARM/nita2.jpeg", info1: "", info2: `Лидер в разработке и производстве ветеринарной фармацевтики России
Каждый второй ветеринарный врач использует в своей практике продукцию компании NITA-FARM *
Мы – команда единомышленников, объединенных общими ценностями и амбициозной идеей построения фармацевтической компании мирового уровня.
Мы производим более 85 видов продукции, которые на 90% закрывают потребность в химио-терапевтических препаратах для решения ключевых ветеринарных проблем.
` },
];


const Hamkor = () => {
  

    return (
        <HomeW>
            <All>
                <Head>
                    <title>Vetco</title>
                    <meta name="description" content="home page" />
                    <link rel="icon" href="logof.jpg" />
                </Head>
                <div className="section4">
                    <div className="container">
                        <h1 className='text-center'>Company info</h1>
                        <div className="row">
                            {Data.map((v, i) => {
                                return <div className="col-12" key={i}>
                                    <div className='doriCard2'>
                                        <p className="nomi">{v.nomi}</p>

                                        <div className='d-flex justify-content-center'>
                                            <img src={v.rasmi} alt="" className='doriRasm2' />
                                        </div>
                                        <div className='DoriBut'>
                                            <p className="narxi">{v.info2}</p>
                                            
                                          
                                        </div>

                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </All>
        </HomeW>
    )
}

export default Hamkor