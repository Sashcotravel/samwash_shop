"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../../chemical-means/catalog.module.css';
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
        id: '226',
        title: 'Електрод іонізації пальника BG2000 S25-100, для котлів D25 D55 HM60 HM100 (537DX010) (53437009)',
        code: 'ELE-ACV-537DX010',
        price: '223.86',
        newPrice: '',
        size: 1,
        slug: 'goods9-3',
        img: '/fittings/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/3.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '227',
        title: 'Електрод пальника BG2000 S100, для котла HM100 (537DX028)',
        code: 'ELE-ACV-537DX028',
        price: '223.86',
        newPrice: '',
        size: 1,
        slug: 'goods9-4',
        img: '/fittings/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/4.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '228',
        title: 'Електрод пальника BG2000 S55-70, для котлів D55 HM60 (537DX029)',
        code: 'ELE-ACV-537DX029',
        price: '339.70',
        newPrice: '',
        size: 1,
        slug: 'goods9-5',
        img: '/fittings/5.png',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/5.png', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '229',
        title: 'Електрод пальника для котлів HM25TC HM35TC V14 (10800288)',
        code: 'ELE-ACV-10800288',
        price: '216.04',
        newPrice: '',
        size: 1,
        slug: 'goods9-6',
        img: '/fittings/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/6.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '230',
        title: 'Електрод пальника для котлів HM25TC HM35TC V15 (A1002510)',
        code: 'ELE-ACV-A1002510',
        price: '438.32',
        newPrice: '',
        size: 1,
        slug: 'goods9-7',
        img: '/fittings/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/7.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '231',
        title: 'Електрод пальника для котлів HM70TC HM85TC V14 і V15 (10800313)',
        code: 'ELE-ACV-10800313',
        price: '253.23',
        newPrice: '',
        size: 1,
        slug: 'goods9-8',
        img: '/fittings/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/8.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '233',
        title: 'Кабель запалювання ACV 257F1160',
        code: 'KAB-ZAP-ACV',
        price: '167.13',
        newPrice: '',
        size: 1,
        slug: 'goods9-10',
        img: '/fittings/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/10.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '241',
        title: 'Реле Alfa Sprint M/S BG',
        code: 'PRZ-ALF-SPR',
        price: '1123.10',
        newPrice: '',
        size: 1,
        slug: 'goods9-18',
        img: '/fittings/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/18.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '242',
        title: 'Контролер MCBA Prestige для котла 85TC',
        code: 'STE-85TC-ACV',
        price: '3977.82',
        newPrice: '',
        size: 1,
        slug: 'goods9-19',
        img: '/fittings/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/19.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '245',
        title: 'Вентилятор для HM 25-35 TC для V14 і старіших версій (537D3041)',
        code: 'WEN-ACV-RG-128',
        price: '1134.33',
        newPrice: '',
        size: 1,
        slug: 'goods9-22',
        img: '/fittings/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/22.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '246',
        title: 'Вентилятор для HM 25-35-45 TC для версії V15',
        code: 'WEN-TC-25-45',
        price: '1282.63',
        newPrice: '',
        size: 1,
        slug: 'goods9-23',
        img: '/fittings/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/23.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '247',
        title: 'Вентилятор для котлів ACV (HM70TC, HM85TC V15)',
        code: 'WEN-RG148-3633P75V14',
        price: '1992.96',
        newPrice: '',
        size: 1,
        slug: 'goods9-24',
        img: '/fittings/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/24.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '248',
        title: 'Вентилятор з двигуном DC/Sprint S для котлів ACV',
        code: 'WEN-SPR-148/1200-3612',
        price: '1377.60',
        newPrice: '',
        size: 1,
        slug: 'goods9-25',
        img: '/fittings/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/25.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '249',
        title: 'Вентилятор з двигуном для котлів ACV (HM 85TC V14)',
        code: 'WEN-SPR-85',
        price: '2066.94',
        newPrice: '',
        size: 1,
        slug: 'goods9-26',
        img: '/fittings/26.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/26.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '250',
        title: 'Дисплей MK4 для нової версії контролера ACV MAX (HM 35, HM 85)',
        code: 'WYS-ACV-35TC',
        price: '878.22',
        newPrice: '',
        size: 1,
        slug: 'goods9-27',
        img: '/fittings/27.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/27.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
]


function MixriteDispenser() {

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

            <NavProduct2 back={'/peating-fittings'}/>

            {/*    <h2 className='loadingMainDiv'>Товарів не знайдено</h2>*/}

            <div className={s.divProduct}>
                <div className={s.wrapper}>

                    <div className={s.breadcrumbs}>
                        <div className={s.crumbs}>
                            <ul>
                                <li>
                                    <Link href='/public'>
                                        <AiOutlineHome/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/product'> Продукти</Link>
                                </li>
                                <li>
                                    <Link href='/peating-fittings'> Опалювальна арматура</Link>
                                </li>
                                <li>
                                    <span> Пальники та аксесуари</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Пальники та аксесуари</h1>

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
                                        <p className={s.client_code}>Код виробника: {item?.code}</p>
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

export default MixriteDispenser;