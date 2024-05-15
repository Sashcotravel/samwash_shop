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
        id: '270',
        title: 'Сутінковий автомат F&F AZ-112 (з зондом)',
        code: 'AUT-ZM-FF-AZ112',
        price: '141.75',
        newPrice: '',
        size: 1,
        slug: 'goods13-1',
        img: '/electronic/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/1.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '276',
        title: 'Поплавковий датчик (MAC3 M04 20 м)',
        code: 'CZU-PLY-MAC',
        price: '242.38',
        newPrice: '',
        size: 1,
        slug: 'goods13-7',
        img: '/electronic/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/7.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '277',
        title: 'Датчик рівня (поплавковий) (поліпропіленовий з кабелем 10м)',
        code: 'CZU-POZ-PLY-ELO-PP',
        price: '176.52',
        newPrice: '',
        size: 1,
        slug: 'goods13-8',
        img: '/electronic/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/8.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '278',
        title: 'Датчик зовнішньої температури (PT-100 Czaki TP-952-1)',
        code: 'CZU-PT100-ZEWN',
        price: '160.98',
        newPrice: '',
        size: 1,
        slug: 'goods13-9',
        img: '/electronic/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/9.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '280',
        title: 'Електронний датчик тиску (0-250 бар)',
        code: 'ELE-CZU-CIS',
        price: '762.65',
        newPrice: '',
        size: 1,
        slug: 'goods13-11',
        img: '/electronic/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/11.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '301',
        title: 'Реле тиску латунне (G1/4, 1-10 БАР)',
        code: 'PRE-1/4-10B-MOS',
        price: '90.97',
        newPrice: '',
        size: 1,
        slug: 'goods13-32',
        img: '/electronic/32.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/32.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '312',
        title: 'Терморегулятор (КТО 011 0-60)',
        code: 'REG-TEM',
        price: '90.69',
        newPrice: '',
        size: 1,
        slug: 'goods13-43',
        img: '/electronic/43.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/43.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
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

            <NavProduct2 back={'/electrical-and-electronic-components'}/>

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
                                    <Link href='/electrical-and-electronic-components'> Електричні та електронні
                                        компоненти</Link>
                                </li>
                                <li>
                                    <span> Датчики</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Датчики</h1>

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