"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../chemical-means/catalog.module.css';
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
        id: '535',
        title: 'Трос для стріли (C11C11 3/8" GW-GW 2SN DN6 1000 мм)',
        code: 'PRZ-WYS-1000',
        price: '95.61',
        newPrice: '',
        size: 1,
        slug: 'goods19-1',
        img: '/cables/1.jpg',
        imageShow: ['/cables/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/ropes-for-arrows',
            title: 'Троси для стріл'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '536',
        title: 'Трос до стріли (MOSMATIC BEL/BEL 12I 2SN DN 8 1660 мм)',
        code: 'PRZ-WYS-MOS-166',
        price: '70.54',
        newPrice: '',
        size: 1,
        slug: 'goods19-2',
        img: '/cables/2.jpg',
        imageShow: ['/cables/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/ropes-for-arrows',
            title: 'Троси для стріл'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '537',
        title: 'Трос до стріли (MOSMATIC BEL/BEL 12I 2SN DN 8 1750 мм)',
        code: 'PRZ-WYS-MOS-175',
        price: '109.85',
        newPrice: '',
        size: 1,
        slug: 'goods19-3',
        img: '/cables/3.jpg',
        imageShow: ['/cables/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/ropes-for-arrows',
            title: 'Троси для стріл'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '538',
        title: 'Пневматичний шланг (10 мм х 6,5 мм поліуретан, синій)',
        code: 'ПРЗ-ПНЕУМ-10ММ',
        price: '7.48',
        newPrice: '',
        size: 1,
        slug: 'goods19-4',
        img: '/cables/4.jpg',
        imageShow: ['/cables/4.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/other-cables',
            title: 'Інші кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '539',
        title: 'Шланг пневматичний (8 мм х 5,5 мм, поліуретан, синій)',
        code: 'ПРЗ-ПНЕУМ-8ММ',
        price: '11.93',
        newPrice: '',
        size: 1,
        slug: 'goods19-5',
        img: '/cables/5.jpg',
        imageShow: ['/cables/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/other-cables',
            title: 'Інші кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '540',
        title: 'Кабель поліуретановий (12 мм U-12090-BU синій)',
        code: 'ПРЗ-ПНЕУМ-12ММ',
        price: '9.91',
        newPrice: '',
        size: 1,
        slug: 'goods19-6',
        img: '/cables/6.jpg',
        imageShow: ['/cables/6.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/other-cables',
            title: 'Інші кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '541',
        title: 'Внутрішній кабель до штанги (MOSMATIC ECO2 904.438)',
        code: 'PRZ-WYS-MOS-904.438',
        price: '561.08',
        newPrice: '',
        size: 1,
        slug: 'goods19-7',
        img: '/cables/7.jpg',
        imageShow: ['/cables/7.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/ropes-for-arrows',
            title: 'Троси для стріл'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '542',
        title: 'Шланг для пістолета (Comfort 3/8 MZ GW 4300 мм червоний)',
        code: 'PRZ-PIS-4300-RM',
        price: '116.54',
        newPrice: '',
        size: 1,
        slug: 'goods19-8',
        img: '/cables/8.jpg',
        imageShow: ['/cables/8.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/cannon-cables',
            title: 'Гарматні кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '543',
        title: 'Шланг для пістолета (Comfort 3/8 MZ GW 4300 мм синій)',
        code: 'PRZ-PIS-4300-RM-NIE',
        price: '110.63',
        newPrice: '',
        size: 1,
        slug: 'goods19-9',
        img: '/cables/9.jpg',
        imageShow: ['/cables/9.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/cannon-cables',
            title: 'Гарматні кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '544',
        title: 'Шланг для пістолета (Comfort 3/8 MZ GW 5000 мм червоний)',
        code: 'PRZ-PIS-5000-RM',
        price: '120.28',
        newPrice: '',
        size: 1,
        slug: 'goods19-10',
        img: '/cables/10.jpg',
        imageShow: ['/cables/10.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/cannon-cables',
            title: 'Гарматні кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '545',
        title: 'Шланг для пістолета (Comfort 3/8 MZ GW 5000 мм синій)',
        code: 'PRZ-PIS-5000-RM-NIE',
        price: '130.21',
        newPrice: '',
        size: 1,
        slug: 'goods19-11',
        img: '/cables/11.jpg',
        imageShow: ['/cables/11.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/cannon-cables',
            title: 'Гарматні кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '546',
        title: 'Шланг для пістолета (Comfort 3/8 MZ GW 5500 мм червоний) ',
        code: 'PRZ-PIS-5500-RM',
        price: '154.96',
        newPrice: '',
        size: 1,
        slug: 'goods19-12',
        img: '/cables/12.jpg',
        imageShow: ['/cables/12.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/cannon-cables',
            title: 'Гарматні кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '547',
        title: 'Пістолетний шланг (Комфорт 3/8 MZ GW 6000 мм червоний)',
        code: 'PRZ-PIS-6000-RM',
        price: '172.72',
        newPrice: '',
        size: 1,
        slug: 'goods19-13',
        img: '/cables/13.jpg',
        imageShow: ['/cables/13.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/cannon-cables',
            title: 'Гарматні кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '548',
        title: 'Шланг для пістолета і турбощітки (Comfort 3/8 GZ GW 4300 мм жовтий)',
        code: 'PRZ-PIS-4300-RM-ZOL',
        price: '109.67',
        newPrice: '',
        size: 1,
        slug: 'goods19-14',
        img: '/cables/14.jpg',
        imageShow: ['/cables/14.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/brush-cables',
            title: 'Щіткові кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '549',
        title: 'Шланг для щітки (1/4"GW 3/8"GW DN6 - 4300 мм жовтий)',
        code: 'PRZ-SZC-4300-RM-ZOL',
        price: '111.27',
        newPrice: '',
        size: 1,
        slug: 'goods19-15',
        img: '/cables/15.jpg',
        imageShow: ['/cables/15.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/brush-cables',
            title: 'Щіткові кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
    {
        id: '550',
        title: 'Шланг-щітка (1/4"GW 3/8"GW DN6 - 5000 мм жовтий)',
        code: 'PRZ-SZC-5000-RM-ZOL',
        price: '122.46',
        newPrice: '',
        size: 1,
        slug: 'goods19-16',
        img: '/cables/16.jpg',
        imageShow: ['/cables/16.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Кабелі/Шланги',
            slug: '/cables-hoses',
        },
        bread2: {
            slug: '/cables-hoses/brush-cables',
            title: 'Щіткові кабелі'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Ремкомплект</p><br/>
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/cables-hoses/other-cables',
        title: 'Інші кабелі'
    },
    {
        slug: '/cables-hoses/cannon-cables',
        title: 'Гарматні кабелі'
    },
    {
        slug: '/cables-hoses/brush-cables',
        title: 'Щіткові кабелі'
    },
    {
        slug: '/cables-hoses/ropes-for-arrows',
        title: 'Троси для стріл'
    },
]


function ChemicalMeans() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [goods, setGoods] = useState([])

    const addOrderStore = useStore(store => store.addOrder)

    useEffect(() => {
        setGoods(arrGoods)
    }, []);

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


    return (
        <div className={s.mainDiv}>

            <TopButton index={4}/>

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
                                    <span> Кабелі/Шланги</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Кабелі/Шланги</h1>
                    <div>
                        <h2>Шланг напірний для автомийки високого тиску - напірні лінії</h2><br/>
                        Наша пропозиція кабелів і шлангів включає різні варіанти, адаптовані до конкретних потреб
                        автомийки. Ми пропонуємо шланги для пістолетів, щіток і стріл, щоб забезпечити максимальну
                        гнучкість і зручність при чищенні автомобілів.
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
                        <Image src='/cables/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Шланг автомийки - чому варто мати його на автомийці</h2>
                            <p>
                                Шланги для автомийки високого тиску є базовим елементом обладнання для мийки.
                                Високоякісні шланги гарантують не тільки ефективне видалення бруду та плям, але й
                                економію часу та коштів.
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
                                <br/>
                                <p>
                                    Однією з найважливіших переваг використання шлангів для мийки високого тиску є їх
                                    ефективність у видаленні навіть найсильнішого бруду з поверхонь автомобіля.
                                    Використовуючи відповідний тиск, шланги дозволяють видалити навіть найскладніші
                                    плями, відкладення та інші забруднення, такі як масло або жир. Це не тільки гарантує
                                    кращу якість прання, але й підвищує задоволеність клієнтів, які цінують ефективність
                                    наданих послуг. Задоволені клієнти частіше повертаються на автомийку, а ваш бізнес
                                    приносить реальну фінансову вигоду.
                                </p> <br/>
                                <p>
                                    Ще одна важлива перевага використання шлангів для мийки високого тиску – економія
                                    часу та коштів. Шланги мийки високого тиску (як випливає з назви) омивають кузов під
                                    тиском, що дозволяє набагато швидше та ретельніше очищати транспортні засоби.
                                    Завдяки цьому автомийка може обслуговувати більше клієнтів за більш короткий час, що
                                    означає збільшення прибутку.
                                </p> <br/>
                                <p>
                                    Крім того, використання високоякісних шлангів для мийки високого тиску також може
                                    призвести до фінансової економії для вас як власника автомийки. Завдяки більш
                                    ефективному прибиранню та економії часу можна скоротити витрати на оплату праці та
                                    обслуговування персоналу. Даний тип мийок ідеально підходить для автомийок
                                    самообслуговування, адже завдяки напірним шлангам навіть недосвідчені клієнти можуть
                                    без проблем помити автомобіль. Крім того, шланги мийки високого тиску часто оснащені
                                    спеціальними фільтрами, які допомагають економити воду. Це дозволяє скоротити
                                    витрати на водопостачання та використовувати природні ресурси більш екологічно.
                                </p> <br/>
                                <h2>Напірний шланг для мийки - який вибрати?</h2> <br/>
                                <p>
                                    Вибір правильного напірного шланга для мийки може бути важким завданням, особливо
                                    для людей, які тільки починають свою пригоду в галузі автомийок. Існує багато різних
                                    моделей і брендів, і кожна з них має свої унікальні особливості та параметри. Однак,
                                    щоб правильно вибрати напірний шланг для мийки, варто звернути увагу на кілька
                                    основних факторів.
                                </p> <br/>
                                <p>
                                    Перш за все, варто вибирати міцні і міцні шланги. Якісні шланги довговічні і стійкі
                                    до механічних пошкоджень. Завдяки цьому вони можуть використовуватися в умовах
                                    інтенсивного використання і забезпечують тривалий термін служби. Пам'ятайте, що
                                    шланги піддаються постійному механічному навантаженню та контакту з хімікатами та
                                    іншими речовинами, що може призвести до швидкого зносу та пошкодження шлангів. Тому
                                    варто інвестувати в шланги та кабелі, виготовлені з високоякісних матеріалів і від
                                    надійних постачальників.
                                </p> <br/>
                                <p>
                                    Також варто звернути увагу на довжину кабелю. Довжина шланга залежить в першу чергу
                                    від потреб і характеру робіт, що виконуються на автомийці. Для великих просторів
                                    рекомендується вибирати шланги більшої довжини, що дозволить вам вільно пересуватися
                                    по транспортному засобу. Наша пропозиція включає гарматні кабелі довжиною від 4300
                                    до 6000 мм.
                                </p> <br/>
                                <p>
                                    Ми щиро запрошуємо вас переглянути повну пропозицію та зв’язатися з нами, якщо у вас
                                    виникнуть запитання. Ми роками підтримуємо власників автомийок у прийнятті
                                    правильних бізнес-рішень, тому з радістю відповімо на будь-які запитання.
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

export default ChemicalMeans;