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
        id: '328',
        title: 'Коліно латунне 3/8" M (24.0289)(1204050128)',
        code: 'КОЛ-МТМ-3/8',
        price: '41.84',
        newPrice: '',
        size: 1,
        slug: 'goods14-1',
        img: '/hydraulic/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/1.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '329',
        title: 'Латунне коліно 3/8"M x 1/4"M',
        code: 'КОЛ-МТМ-3/8Х1/4',
        price: '77.49',
        newPrice: '',
        size: 1,
        slug: 'goods14-2',
        img: '/hydraulic/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/2.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '337',
        title: 'Ніпель високого тиску оцинкований 3/8"',
        code: 'NYP-HYD-3/8',
        price: '5.25',
        newPrice: '',
        size: 1,
        slug: 'goods14-10',
        img: '/hydraulic/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/10.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '345',
        title: 'Трійник 3х12мм ПУТ12',
        code: 'ТРО-НОВ-3Х12',
        price: '16.58',
        newPrice: '',
        size: 1,
        slug: 'goods14-19',
        img: '/hydraulic/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/19.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '346',
        title: 'Трійник 3х8мм (пластик)',
        code: 'ТРО-НОВ-001',
        price: '8.95',
        newPrice: '',
        size: 1,
        slug: 'goods14-20',
        img: '/hydraulic/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/20.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '347',
        title: 'Трійник високого тиску оцинкований 3/8" GW',
        code: 'ZLA-TRO-3/8',
        price: '61.50',
        newPrice: '',
        size: 1,
        slug: 'goods14-21',
        img: '/hydraulic/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/21.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '348',
        title: 'Трійник перехідний 12/8/12 (PUG 12-08)',
        code: 'ТРО-НОВ-12-8-12',
        price: '19.86',
        newPrice: '',
        size: 1,
        slug: 'goods14-22',
        img: '/hydraulic/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/22.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '366',
        title: 'З\'єднувач кутовий GW 3/8" GZ 3/8" (4500-06)',
        code: 'ZLA-KAT-NAS',
        price: '33.86',
        newPrice: '',
        size: 1,
        slug: 'goods14-40',
        img: '/hydraulic/40.jpg',
        imageShow: ['/hydraulic/40.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '367',
        title: 'Прямий з\'єднувач 12мм 1/2" M',
        code: 'ZLA-NOV-12-1/2',
        price: '16.46',
        newPrice: '',
        size: 1,
        slug: 'goods14-41',
        img: '/hydraulic/41.jpg',
        imageShow: ['/hydraulic/41.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '368',
        title: 'Прямий з\'єднувач 8мм 1/2" M',
        code: 'ZLA-NOV-8-1/2',
        price: '9.90',
        newPrice: '',
        size: 1,
        slug: 'goods14-42',
        img: '/hydraulic/42.jpg',
        imageShow: ['/hydraulic/42.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '369',
        title: 'Прямий з\'єднувач 8 мм 3/8" M',
        code: 'ZLA-NOV-8-3/8',
        price: '17.12',
        newPrice: '',
        size: 1,
        slug: 'goods14-43',
        img: '/hydraulic/43.jpg',
        imageShow: ['/hydraulic/43.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
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

            <NavProduct2 back={'/hydraulic-elements'}/>

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
                                    <Link href='/hydraulic-elements'> Гідравлічні елементи</Link>
                                </li>
                                <li>
                                    <span> Гідравлічні з'єднувачі</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Гідравлічні з'єднувачі</h1>

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