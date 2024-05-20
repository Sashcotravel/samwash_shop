"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../chemical-means/catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
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
        id: '396',
        title: 'Язичок трьохточечний з кришкою (JB-30024)',
        code: 'JEZ-TRZ',
        price: '9.74',
        newPrice: '',
        size: 1,
        slug: 'goods21-1',
        img: '/closing/1.jpg',
        imageShow: ['/closing/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '397',
        title: 'Монетниця з нержавіючої сталі для модуля і робочих столів',
        code: 'KAS-MOD-NIE',
        price: '430.50',
        newPrice: '',
        size: 1,
        slug: 'goods21-2',
        img: '/closing/2.jpg',
        imageShow: ['/closing/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: {
            slug: '/closing-systems/containers-for-coins',
            title: 'Грошові ящики, сейфи та контейнери для монет'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '398',
        title: 'Дверна ручка (RS100-9005)',
        code: 'KLA-DRZ',
        price: '34.08',
        newPrice: '',
        size: 1,
        slug: 'goods21-3',
        img: '/closing/3.jpg',
        imageShow: ['/closing/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '399',
        title: 'Дверна ручка (RS200-9005)',
        code: 'KLA-DRZ-RS200',
        price: '32.45',
        newPrice: '',
        size: 1,
        slug: 'goods21-4',
        img: '/closing/4.jpg',
        imageShow: ['/closing/4.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '400',
        title: 'Замкова тяга P38/U - 830мм (для модулів)',
        code: 'PRE-ZAM-P38/U-830',
        price: '15.30',
        newPrice: '',
        size: 1,
        slug: 'goods21-5',
        img: '/closing/5.jpg',
        imageShow: ['/closing/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '401',
        title: 'Напрямна штанга (fi 8 A20)',
        code: 'PRO-PRE',
        price: '2.16',
        newPrice: '',
        size: 1,
        slug: 'goods21-6',
        img: '/closing/6.jpg',
        imageShow: ['/closing/6.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '402',
        title: 'Тримач вудилища (fi 5.2)',
        code: 'UCH-PRE',
        price: '2.31',
        newPrice: '',
        size: 1,
        slug: 'goods21-7',
        img: '/closing/7.jpg',
        imageShow: ['/closing/7.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '403',
        title: 'Ущільнювач дверний (УТ-51/1011-05-Г)',
        code: 'USZ-DRZ-UT51',
        price: '10.31',
        newPrice: '',
        size: 1,
        slug: 'goods21-8',
        img: '/closing/8.jpg',
        imageShow: ['/closing/8.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '404',
        title: 'Вставка циліндра одностороння (31/9 SIMETAL латунь)',
        code: 'WKL-BEB-SIM-31-9',
        price: '58.94',
        newPrice: '',
        size: 1,
        slug: 'goods21-9',
        img: '/closing/9.jpg',
        imageShow: ['/closing/9.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: {
            slug: '/closing-systems/closing-system',
            title: 'Система закриття'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '405',
        title: 'Кулачковий замок для корпусу',
        code: 'ZAM-KRZ',
        price: '21.16',
        newPrice: '',
        size: 1,
        slug: 'goods21-10',
        img: '/closing/10.jpg',
        imageShow: ['/closing/10.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '406',
        title: 'Петлі внутрішні двері (Розточчя)',
        code: 'ZAW-DRZ-ROZ-ST4',
        price: '15.20',
        newPrice: '',
        size: 1,
        slug: 'goods21-11',
        img: '/closing/11.jpg',
        imageShow: ['/closing/11.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: {
            slug: '/closing-systems/hinges-and-stops',
            title: 'Петлі та упори'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
    {
        id: '407',
        title: 'Петля дверна (Розточчя) зовнішня',
        code: 'ZAW-DRZ-ROZ',
        price: '57.70',
        newPrice: '',
        size: 1,
        slug: 'goods21-12',
        img: '/closing/12.jpg',
        imageShow: ['/closing/12.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Системи закриття',
            slug: '/closing-systems',
        },
        bread2: {
            slug: '/closing-systems/hinges-and-stops',
            title: 'Петлі та упори'
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Двигун</p><br/>
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/closing-systems/containers-for-coins',
        title: 'Грошові ящики, сейфи та контейнери для монет'
    },
    {
        slug: '/closing-systems/closing-system',
        title: 'Система закриття'
    },
    {
        slug: '/closing-systems/hinges-and-stops',
        title: 'Петлі та упори'
    },
]


function ChemicalMeans() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
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

            <TopButton index={4} />

            <NavProduct2 child={arrChildCatalog} back={'/product'} />

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
                                    <span> Системи закриття</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Системи закриття</h1>

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
                                        <p className={s.client_code}>Код виробника:  <b> {item?.code}</b></p>
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