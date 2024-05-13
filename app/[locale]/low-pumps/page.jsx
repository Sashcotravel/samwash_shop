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
        id: '124',
        title: 'Моноблочний насос EBARA AISI 304 (CDX/I90/10IE3)',
        code: 'POM-EBA-CDX',
        price: '1817.67',
        newPrice: '',
        size: 1,
        slug: 'goods4-30',
        img: '/water-pumps/30.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '125',
        title: 'Насос Nuert PRG 10 латунний з байпасом, 1/2\' GW, 1080 л/год, 1450 об/хв [PRG 10AS]',
        code: 'POM-NUE-001',
        price: '479.82',
        newPrice: '',
        size: 1,
        slug: 'goods4-31',
        img: '/water-pumps/31.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '126',
        title: 'Циркуляційний насос Grundfos Alpha1 L 25-60 180 мм (99160584)',
        code: 'POM-GRU-ALP1',
        price: '1077.64',
        newPrice: '798.89',
        size: 1,
        slug: 'goods4-32',
        img: '/water-pumps/32.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 798,89 доларів',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
]


function LowPressurePumps() {

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

            <NavProduct2 back={'/low-pressure-pumps'}/>

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
                                    <Link href='/water-pumps-and-accessories'> Водяні насоси та аксесуари</Link>
                                </li>
                                <li>
                                    <Link href='/low-pressure-pumps'> Насоси низького тиску</Link>
                                </li>
                                <li>
                                    <span> Насоси</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Насоси</h1>

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

export default LowPressurePumps;