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
        id: '338',
        title: 'Редуктор тиску 1/2" CALEFFI 312 (DN15 Plus)',
        code: 'RED-CAL-1/2-312-PLUS',
        price: '170.31',
        newPrice: '',
        size: 1,
        slug: 'goods14-11',
        img: '/hydraulic/11.jpg',
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
        imageShow: ['/hydraulic/11.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '339',
        title: 'Редуктор тиску води Eurobrass 1" 0,5-6 бар',
        code: 'RED-CIS-EUR-1',
        price: '318.08',
        newPrice: '',
        size: 1,
        slug: 'goods14-12',
        img: '/hydraulic/12.jpg',
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
        imageShow: ['/hydraulic/12.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '343',
        title: 'Термостатичний змішувальний клапан Taconova NovaMix High Capacity',
        code: 'ZAW-TER-MIE-HC',
        price: '973.00',
        newPrice: '',
        size: 1,
        slug: 'goods14-17',
        img: '/hydraulic/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/17.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '344',
        title: 'Термостатичний змішувальний клапан Taconova NovaMix Value 70 FS DN 20',
        code: 'ZAW-TER-MIE',
        price: '549.27',
        newPrice: '',
        size: 1,
        slug: 'goods14-18',
        img: '/hydraulic/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/18.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '354',
        title: 'Клапан тонкого регулювання SERTO DN8 (внутрішня різьба G1/2)',
        code: 'ZAW-DOK-REG-SER',
        price: '306.26',
        newPrice: '',
        size: 1,
        slug: 'goods14-28',
        img: '/hydraulic/28.jpg',
        imageShow: ['/hydraulic/28.jpg', ],
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
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '355',
        title: 'ESBE VRG131 3-ходовий змішувальний клапан (1160 11 00)',
        code: 'ZAW-ESBE-131',
        price: '341.67',
        newPrice: '',
        size: 1,
        slug: 'goods14-29',
        img: '/hydraulic/29.jpg',
        imageShow: ['/hydraulic/29.jpg', ],
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
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '359',
        title: 'Клапан регулювання тиску Kranzle 14141K (ULH250K / 53331)',
        code: 'ZAW-KRA',
        price: '307.73',
        newPrice: '',
        size: 1,
        slug: 'goods14-33',
        img: '/hydraulic/33.jpg',
        imageShow: ['/hydraulic/33.jpg', ],
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
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '360',
        title: 'Клапан регулювання тиску з ручкою (VB9 unload. 3/8F)',
        code: 'ZAW-PA',
        price: '550.51',
        newPrice: '',
        size: 1,
        slug: 'goods14-34',
        img: '/hydraulic/34.jpg',
        imageShow: ['/hydraulic/34.jpg', ],
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
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '361',
        title: 'Клапан регулювання тиску з маховиком MG4000 (18.015)',
        code: 'ZAW-MTM-002',
        price: '286.06',
        newPrice: '',
        size: 1,
        slug: 'goods14-35',
        img: '/hydraulic/35.jpg',
        imageShow: ['/hydraulic/35.jpg', ],
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
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '365',
        title: 'Ремкомплект клапана регулювання тиску MG4000 (41.0209)',
        code: 'ZES-MTM-002',
        price: '43.86',
        newPrice: '',
        size: 1,
        slug: 'goods14-39',
        img: '/hydraulic/39.jpg',
        imageShow: ['/hydraulic/39.jpg', ],
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
                                    <span> Регулюючі клапани та редуктори</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Регулюючі клапани та редуктори</h1>

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