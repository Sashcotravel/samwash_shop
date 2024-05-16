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
        id: '376',
        title: 'Ліцензія на програмне забезпечення для розширення автомийки',
        code: 'ROZ-MYJ-OPR',
        price: '0.00',
        newPrice: '',
        size: 1,
        slug: 'goods16-1',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '377',
        title: 'Ліцензія програмного забезпечення контролера PP65, сумісного з касовими апаратами Novitus SDF-3',
        code: 'KAS-FIS-OPR',
        price: '615.00',
        newPrice: '',
        size: 1,
        slug: 'goods16-2',
        img: '/fiscalization/2.jpg',
        imageShow: ['/fiscalization/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '378',
        title: 'Кріплення для каси Mod2013 Novitus SDF-3',
        code: 'ELE-BLA-2-417',
        price: '615.00',
        newPrice: '',
        size: 1,
        slug: 'goods16-3',
        img: '/fiscalization/3.jpg',
        imageShow: ['/fiscalization/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '379',
        title: 'Наклейка з QR-кодом для пристрою Novitus SDF3',
        code: 'KAS-FIS-NOV-NAL-QR-KPL',
        price: '32.37',
        newPrice: '',
        size: 1,
        slug: 'goods16-4',
        img: '/fiscalization/4.jpg',
        imageShow: ['/fiscalization/4.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '380',
        title: 'Кабель CCTalk 50 см для модуля і змінного автомата',
        code: 'PRZ-CCT-50',
        price: '41.76',
        newPrice: '',
        size: 1,
        slug: 'goods16-5',
        img: '/fiscalization/5.jpg',
        imageShow: ['/fiscalization/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '381',
        title: 'CCTalk кабель 70 см до робочого столу',
        code: 'PRZ-CCT-70',
        price: '43.67',
        newPrice: '',
        size: 1,
        slug: 'goods16-6',
        img: '/fiscalization/6.jpg',
        imageShow: ['/fiscalization/6.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '382',
        title: 'Кабель з роз\'ємом MOLEX 26pin, для пристрою Novitus SDF-3, довжина 150см',
        code: 'KAS-FIS-NOV-PRZ-MDB-150',
        price: '85.01',
        newPrice: '',
        size: 1,
        slug: 'goods16-7',
        img: '/fiscalization/7.jpg',
        imageShow: ['/fiscalization/7.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '383',
        title: 'Кабель PULSE, стрічка 10PIN, з роз\'ємами та розгалужувачем для самостійної збірки, для пристрою ' +
            'Novitus SDF-3, довжина 160см.',
        code: 'KAS-FIS-NOV-PRZ-PULSE-160',
        price: '73.89',
        newPrice: '',
        size: 1,
        slug: 'goods16-8',
        img: '/fiscalization/8.jpg',
        imageShow: ['/fiscalization/8.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '384',
        title: 'Роутер Teltonika RUT241',
        code: 'TELT-RUT-241',
        price: '825.02',
        newPrice: '',
        size: 1,
        slug: 'goods16-9',
        img: '/fiscalization/9.png',
        imageShow: ['/fiscalization/9.png', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '385',
        title: 'Новитус SDF-3 Базовий прилад (без блоку живлення) з дисплеєм',
        code: 'KAS-FIS-NOV-SDF3-BASIC',
        price: '1709.70',
        newPrice: '',
        size: 1,
        slug: 'goods16-10',
        img: '/fiscalization/10.jpg',
        imageShow: ['/fiscalization/10.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '386',
        title: 'Новитус СДФ-3 Світловий прилад (без живлення) з дисплеєм',
        code: 'KAS-FIS-NOV-SDF3-LIGHT',
        price: '1660.50',
        newPrice: '',
        size: 1,
        slug: 'goods16-11',
        img: '/fiscalization/11.jpg',
        imageShow: ['/fiscalization/11.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
    {
        id: '387',
        title: 'Блок живлення ESPE для Novitus SDF-3 (E2412W2E-2555-L)',
        code: 'KAS-FIS-NOV-ZAS-ESPE',
        price: '86.10',
        newPrice: '',
        size: 1,
        slug: 'goods16-12',
        img: '/fiscalization/12.jpg',
        imageShow: ['/fiscalization/12.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Фіскалізація',
            slug: '/fiscalization',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Тримачі</p><br/>
        `
    },
]


function Electromagnetic() {

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

            <NavProduct2 back={'/product'}/>

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
                                    <span> Фіскалізація</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Фіскалізація</h1>

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