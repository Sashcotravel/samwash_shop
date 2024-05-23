"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {useTranslations} from "next-intl";
import {useStore} from "@/store/store";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import {FaBasketShopping} from "react-icons/fa6";
import NavProduct2 from "@/app/component/navProduct2/navProduct2";
import TopButton from "@/app/component/topButton/topButton";

const arrGoods = [
    {
        id: '20',
        title: 'Котушка 24VDC для електромагнітного клапана Jaksa BS3IS',
        code: 'ZAW-JAK-NC-3/8-CEW',
        price: '531.83',
        newPrice: '',
        size: 1,
        slug: 'goods2-1',
        img: '/electromagnetic/1.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '21',
        title: 'Електромагнітний клапан латунний 255 1/4", ВІТОН + тефлонове ущільнення',
        code: 'ELE-BKF-267791',
        price: '628.99',
        newPrice: '',
        size: 1,
        slug: 'goods2-2',
        img: '/electromagnetic/2.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '22',
        title: 'Клапан електромагнітний 256 латунь 1/2"',
        code: 'ELE-BKF-56302',
        price: '817.58',
        newPrice: '',
        size: 1,
        slug: 'goods2-3',
        img: '/electromagnetic/3.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '23',
        title: 'Електромагнітний клапан 256 з нержавіючої сталі 1/2\'\', ущільнення з ВІТОНУ',
        code: 'ELE-BKF-267790',
        price: '1281.34',
        newPrice: '',
        size: 1,
        slug: 'goods2-4',
        img: '/electromagnetic/4.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '24',
        title: 'Латунний електромагнітний клапан 6213 1/2", ущільнювач VITON (без головки)',
        code: 'ELE-BKF-267793',
        price: '352.10',
        newPrice: '',
        size: 1,
        slug: 'goods2-5',
        img: '/electromagnetic/5.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '25',
        title: 'Клапан електромагнітний латунний 6213 3/4" (ущільнення BUNY, для холодної води)',
        code: 'ELE-BKF-267795',
        price: '475.67',
        newPrice: '',
        size: 1,
        slug: 'goods2-6',
        img: '/electromagnetic/6.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '26',
        title: 'Електромагнітний клапан 1/2\'\' з нержавіючої сталі 6213, ущільнення VITON',
        code: 'ELE-BKF-267936',
        price: '596.80',
        newPrice: '',
        size: 1,
        slug: 'goods2-7',
        img: '/electromagnetic/7.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '27',
        title: 'Подвійний електромагнітний клапан високого тиску з нержавіючої сталі 6240 3/8" [370320]',
        code: 'ELE-BKF-370320',
        price: '3119.60',
        newPrice: '',
        size: 1,
        slug: 'goods2-8',
        img: '/electromagnetic/8.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '28',
        title: 'Латунний електромагнітний клапан 6281 1/2", ущільнювач з ВІТОНУ',
        code: 'ELE-BKF-267792',
        price: '502.76',
        newPrice: '',
        size: 1,
        slug: 'goods2-9',
        img: '/electromagnetic/9.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '29',
        title: 'Електромагнітний клапан Jaksa BS3IS (DN8 G3/8 PK NC 24VDC)',
        code: 'ZAW-JAK-NC-3/8',
        price: '1488.53',
        newPrice: '',
        size: 1,
        slug: 'goods2-10',
        img: '/electromagnetic/10.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '30',
        title: 'Штекер кабелю для електромагнітних клапанів (792,793,795,936)',
        code: 'ELE-BKF-WTY',
        price: '18.19',
        newPrice: '',
        size: 1,
        slug: 'goods2-11',
        img: '/electromagnetic/11.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '31',
        title: 'Ремкомплект для клапана високого тиску Burkert 6240 [00333996]',
        code: 'ZES-NAP-BUR-6240-333996',
        price: '834.15',
        newPrice: '',
        size: 1,
        slug: 'goods2-12',
        img: '/electromagnetic/12.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '32',
        title: 'Ремкомплект VITON (на клапан 256)',
        code: 'РДЗ-256-ВІТ',
        price: '172.40',
        newPrice: '',
        size: 1,
        slug: 'goods2-13',
        img: '/electromagnetic/13.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '33',
        title: 'Ремкомплект VITON (на клапан 5281)',
        code: 'MEM-NOV-003',
        price: '129.81',
        newPrice: '',
        size: 1,
        slug: 'goods2-14',
        img: '/electromagnetic/14.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '34',
        title: 'Ремкомплект VITON (на клапан 6213) ',
        code: 'ZES-NAP-6213-VIT',
        price: '147.96',
        newPrice: '',
        size: 1,
        slug: 'goods2-15',
        img: '/electromagnetic/15.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '35',
        title: 'Ремкомплект VITON (на клапан 6281)',
        code: 'ZES-NAP-6281',
        price: '160.48',
        newPrice: '',
        size: 1,
        slug: 'goods2-16',
        img: '/electromagnetic/17.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '36',
        title: 'Ремкомплект VITON + TEFLON для клапана 255 (00015127)',
        code: 'ZES-NAP-255-VIT',
        price: '160.24',
        newPrice: '',
        size: 1,
        slug: 'goods2-17',
        img: '/electromagnetic/18.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '37',
        title: 'Ремкомплект VITON для вентиля з нержавіючої сталі 6213 (00151955) DN13',
        code: 'ZES-NAP-6213-VIT-ST',
        price: '430.99',
        newPrice: '',
        size: 1,
        slug: 'goods2-18',
        img: '/electromagnetic/19.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '38',
        title: 'Ремкомплект ВІТОН + ТЕФЛОН (на клапан 255)',
        code: 'РДЗ-НОВ-001',
        price: '203.21',
        newPrice: '',
        size: 1,
        slug: 'goods2-19',
        img: '/electromagnetic/20.jpg',
        descriptionPrise: '',
        description: ''
    },
]

const arrChildCatalog = [
    {
        slug: '/electromagnetic-valves-and-repair-kits/electromagnetic-valves',
        title: 'Електромагнітні клапани'
    },
    {
        slug: '/electromagnetic-valves-and-repair-kits/repair-kits-of-electromagnetic-valves',
        title: 'Ремкомплекти електромагнітних клапанів'
    },
]


function Electromagnetic() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [priseTo, setPriseTo] = useState('')
    const [priseFrom, setPriseFrom] = useState('')
    const [goods, setGoods] = useState([])

    const addOrderStore = useStore(store => store.addOrder)
    const addCurrentsGoods = useStore(store => store.setCurrentsGoods)
    const newCurrentsGoods = useStore(store => store.newCurrentsGoods)
    const setNewCurrentsGoods = useStore(store => store.setNewCurrentsGoods)
    const filterPriceTo = useStore(store => store.filterPriceTo)
    const filterPriceFrom = useStore(store => store.filterPriceFrom)
    const setFilterPriceTo = useStore(store => store.setFilterPriceTo)
    const setFilterPriceFrom = useStore(store => store.setFilterPriceFrom)

    useEffect(() => {
        setGoods(arrGoods)
        addCurrentsGoods(arrGoods)

        return (
            setNewCurrentsGoods([]),
                setFilterPriceTo(''),
                setFilterPriceFrom('')
        )
    }, []);

    useEffect(() => {
        if(newCurrentsGoods.length === 0){
            setGoods(arrGoods)
        }
        else {
            setGoods(newCurrentsGoods)
        }
    }, [newCurrentsGoods]);

    useEffect(() => {
        if(filterPriceTo === 'no'){
            setPriseTo('')
        } else {
            setPriseTo(filterPriceTo)
        }
    }, [filterPriceTo]);

    useEffect(() => {
        if(filterPriceFrom === 'no') {
            setPriseFrom('')
        } else {
            setPriseFrom(filterPriceFrom)
        }
    }, [filterPriceFrom]);


    const style = {
        cursor: 'default',
        color: '#DDDDDD',
        background: '#f4f4f4'
    }

    const addCol = (item) => {
        goods.map((goods) => {
            if (goods.id === item.id) {
                setGoods(prev => {
                    return prev.map(good => {
                        if (good.id === item.id) {
                            return {...good, size: good.size + 1};
                        } else {
                            return good;
                        }
                    });
                });
            }
        })
    }

    const minesCol = (item) => {
        goods.map((goods) => {
            if (goods.id === item.id) {
                setGoods(prev => {
                    return prev.map(good => {
                        if (good.id === item.id) {
                            return {...good, size: good.size !== 1 ? good.size - 1 : good.size};
                        } else {
                            return good;
                        }
                    });
                });
            }
        })
    }

    const addOrder = (item) => {
        addOrderStore(item)
        goods.map((goods) => {
            if (goods.id === item.id) {
                setGoods(prev => {
                    return prev.map(good => {
                        if (good.id === item.id) {
                            return {...good, size: 1};
                        } else {
                            return good;
                        }
                    });
                });
            }
        })
        setOpen(true)
    }

    const removeFilter = (type) => {
        if(type === 'priseFrom'){
            setFilterPriceFrom('no')
        }
        else if(type === 'priseTo'){
            setFilterPriceTo('no')
        }
    }



    return (
        <div className={s.mainDiv}>

            <TopButton index={4} />

            <NavProduct2 child={arrChildCatalog} back={'/product'}/>

            {/*    <h2 className='loadingMainDiv'>Товарів не знайдено</h2>*/}

            <div className={s.divProduct}>
                <div className={s.wrapper}>

                    <div className={s.breadcrumbs}>
                        <div className={s.crumbs}>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <AiOutlineHome/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/product'> Продукти</Link>
                                </li>
                                <li>
                                    <span> Електромагнітні клапани та ремкомплекти</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {
                        <div className={s.filterDiv}>
                            {priseFrom !== '' && priseFrom !== 'no' ? <button onClick={() => removeFilter('priseFrom')}>
                                <AiOutlineClose /> Ціна від { priseFrom }
                            </button> : ''}
                            {priseTo !== '' && priseTo !== 'no' ? <button onClick={() => removeFilter('priseTo')}>
                                <AiOutlineClose /> Ціна до {priseTo}</button> : ''}
                        </div>
                    }

                    <h1>Електромагнітні клапани та ремкомплекти</h1>
                    <div>
                        Ви шукаєте базове обладнання для автомийки? Ми пропонуємо Вам міцні та надійні електромагнітні
                        клапани та ремкомплекти для автомийок.
                    </div>

                    <ul className={s.ulCategory}>
                        {
                            goods?.map((item, index) => {
                                return <div className={s.goods_wrapper} key={item.id}>
                                    <Link href={`/goods?goods=${item.slug}`}></Link>
                                    <div>
                                        <div className={s.imageGoods}>
                                            {
                                                item.img.length === 0 ?
                                                    <img src='/other/noImage.jpg' alt='no image'/>
                                                    : <img src={item.img} alt={item.title}/>
                                            }
                                        </div>
                                        <p className={s.goodsTitle}>{item.title}</p>
                                        <p className={s.client_code}>Код виробника: <b> {item?.code}</b></p>
                                        <p className={s.description}>{item?.description}</p>
                                    </div>
                                    <div className={s.div_price}>
                                        {item.newPrice && <span className={s.oldPrise}><del>{item.price} доларів</del></span>}
                                        {!item.newPrice && <span>{item.price} доларів</span>}
                                        {item.newPrice && <span>{item.newPrice} доларів</span>}
                                        <div className={s.divPrice}>
                                            <span className={s.client_code}>{item?.descriptionPrise}</span>
                                        </div>
                                    </div>
                                    <div className={s.add}>
                                        <div className={s.div_col + ' ' + s.div_col2}>
                                            <div className={s.div_col}>
                                                <button onClick={() => minesCol(item)}
                                                        disabled={item.size === 1}
                                                        style={item.size === 1 ? style : undefined}
                                                >-
                                                </button>
                                                <p>{item.size}</p>
                                                <button onClick={() => addCol(item)}>+</button>
                                                <span>шт.</span>
                                            </div>
                                        </div>
                                        <button className={s.add_but} onClick={() => addOrder(item)}>
                                            <Image src='/header/basket-gray.png' alt='search' width={30}
                                                   height={30}/>
                                            Додати до<br/> Кошика
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </ul>

                    <div className={s.descDiv}>
                        <Image src='/electromagnetic/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Електромагнітні клапани для автомийок – як вони працюють і яку роль відіграють?</h2>
                            <p>
                                Електромагнітний клапан автомийки, а точніше електромагнітний клапан, є одним з основних
                                елементів обладнання автомийок. Використовується для відкриття потоку води із змішувачів
                                мікропорошку, воску та ополіскувача. Електромагнітний клапан управляється електричним
                                струмом. Правильно підібрана модель гарантує ефективний і ефективний контроль потоку
                                рідини, що важливо для довговічності і функціонування всього об'єкта. Електромагнітні
                                клапани для автомийок можуть відрізнятися загальними характеристиками і якістю
                                виготовлення. Тому переконайтеся, що ви вибираєте товар від перевіреного виробника.
                            </p> <br/> <br/>
                            <p>
                                Всі електромагнітні клапани автомийки BKF, які ви знайдете в нашій пропозиції,
                                виготовлені з міцних, міцних і безпечних матеріалів. Деякі моделі мають латунний
                                сердечник, інші виготовлені з нержавіючої сталі, що гарантує їх високу стійкість. Всі
                                моделі успішно пройшли процес перевірки відповідності параметрів вимогам, зазначеним у
                                директивах ЄС. Це підтверджено сертифікатом CE, який ми отримали після проведення
                                ретельних випробувань виробленої продукції. Отримання декларації відповідності означало,
                                що кожен продукт міг бути відзначений відповідним сертифікатом. Завдяки цьому кожен
                                електромагнітний клапан води для автомийки може ефективно автоматично контролювати потік
                                води.
                            </p> <br/>
                            <p>
                                Ремкомплект електромагніту - широкий вибір якісних товарів за привабливими цінами
                            </p> <br/>
                            <p>
                                У нашому інтернет-магазині також представлено безліч ремкомплектів для електромагнітних
                                клапанів. Ви повинні ретельно перевірити, чи купуєте ви продукт, призначений для
                                конкретної моделі електромагнітного клапана. Крім того, переконайтеся, що ви вибрали
                                саме ті аксесуари, які вам потрібні. Перевірте, що містить конкретний ремонтний комплект
                                соленоїда, перш ніж замовляти його в магазині. Наша пропозиція включає, серед
                                іншого:<br/> <br/>
                                - ядро, <br/>
                                - пружини, <br/>
                                - горіхи, <br/>
                                - ущільнювальні кільця.
                            </p> <br/>
                            <p>
                                В магазині SamWash Group ми пропонуємо тільки оригінальну продукцію з високоякісних
                                матеріалів. Завдяки їм ви підвищите функціональність автомийки і забезпечите надійну
                                роботу пристроїв.
                            </p> <br/>
                            <p>
                                Чому варто купувати запасні частини для електромагнітних клапанів? Це важливо з
                                економічних причин. Заміна окремих елементів, що природно зношуються, в результаті
                                штатного використання дозволяє зберегти стабільну роботу всієї системи та збільшити
                                термін служби обладнання. При цьому немає необхідності купувати новий електромагнітний
                                клапан. Власник може замінити окремі елементи самостійно (при наявності знань і досвіду)
                                або довірити це завдання фахівцям. Ми рекомендуємо друге рішення особливо тим, хто
                                сумнівається, оскільки неправильна заміна може призвести до серйозних наслідків.
                            </p> <br/>
                            <p onClick={() => setOpen2(prev => !prev)}
                               style={{cursor: 'pointer'}}>
                                читати далі
                                <Image alt="arrow up" loading="lazy" width={16} height={16}
                                       className={s.imgArrowManu}
                                       style={open2 ? {transform: 'rotate(180deg)'} : undefined}
                                       src="/header/flug/arrow-down.svg"/>
                            </p>
                            <div className={s.readMore} style={open2 ? {display: 'block'} : undefined}>
                                <h2>Електромагнітний клапан для автомийки – як правильно вибрати?</h2> <br/>
                                <p>
                                    Електромагнітні клапани води для автомийки працюють надійно та безперервно, навіть
                                    якщо вони піддаються інтенсивній експлуатації. Однак таку впевненість можна
                                    отримати, лише якщо конкретну модель встановлено належним чином. Варто знати, що
                                    неправильно підібраний продукт може призвести до неефективного контролю потоку. Це,
                                    в свою чергу, може призвести до збоїв у роботі всієї системи і, як наслідок, до
                                    збою. Тому, якщо на етапі покупки виникнуть будь-які сумніви, ми рекомендуємо вам
                                    звернутися до нашої команди консультантів, які з радістю дадуть відповідь на всі
                                    ваші запитання. Ми вкажемо на відмінності між конкретними продуктами, і, знаючи
                                    очікування клієнта та технічні параметри нашої продукції, допоможемо підібрати
                                    ідеальне обладнання для автомийок.
                                </p> <br/>
                                <p>
                                    У нашому магазині ми пропонуємо не тільки електромагнітні клапани автомийки та
                                    ремкомплекти, а й широкий вибір запчастин з міцних і міцних матеріалів. Ми також
                                    продаємо ефективну та ефективну хімію для автомийки та надаємо повне обслуговування.
                                    Пропонуємо Вам уважніше ознайомитися з переліком наших товарів і послуг. Співпраця з
                                    BKF - це гарантія найвищої якості та доступу до інноваційних технологічних рішень.
                                    Зв'яжіться з нами та дізнайтеся всі деталі!
                                </p> <br/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open && <div className={s.divPopUp}>
                <div className={s.popUpBlock}>
                    <button onClick={() => setOpen(false)} className={s.butClose}>
                        <AiOutlineClose/>
                    </button>
                    <div className={s.firstDiv}>
                        <AiOutlineCheck/>
                        <span>Додано в кошик</span>
                    </div>
                    <div className={s.secondDiv}>
                        <Link href='/basket' className={s.firstLink}>
                            <FaBasketShopping/>
                            Перейти до кошика
                        </Link>
                        <button onClick={() => setOpen(false)} className={s.secondLink}>
                            Залишайтеся на сайті
                        </button>
                        <label className={s.labelDiv}>
                            <input type="checkbox" id="checkbox"/>
                            <span className={s.spanDiv}>Запам'ятай мій вибір</span>
                        </label>
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default Electromagnetic;