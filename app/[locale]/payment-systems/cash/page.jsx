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
        id: '151',
        title: 'Зчитувач банкнот ICT XBA з касетою для банкнот на 400 штук (імпульсний кабель 12 В постійного струму, кабель MDB 34 В постійного струму)',
        code: 'CZY-BAN-XBA',
        price: '2362.37',
        newPrice: '',
        size: 1,
        slug: 'goods5-2',
        img: '/system-payment/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/2.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '153',
        title: 'Касета для зчитування банкнот ICT XBA на 400 банкнот',
        code: 'KAS-CZY-BAN-ICT-XBA-400',
        price: '227.91',
        newPrice: '',
        size: 1,
        slug: 'goods5-4',
        img: '/system-payment/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/4.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '154',
        title: 'Касета для зчитування банкнот ICT XBA на 600 банкнот',
        code: 'KAS-CZY-BAN-ICT-XBA-600',
        price: '292.86',
        newPrice: '',
        size: 1,
        slug: 'goods5-5',
        img: '/system-payment/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/5.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '155',
        title: 'Монетниця з нержавіючої сталі для модуля і робочих столів',
        code: 'KAS-MOD-NIE',
        price: '430.50',
        newPrice: '',
        size: 1,
        slug: 'goods5-6',
        img: '/system-payment/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/6.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '156',
        title: 'Повне кріплення зчитувача банкнот (оргскло в комплекті)',
        code: 'MOC-CZY-BAN',
        price: '237.22',
        newPrice: '',
        size: 1,
        slug: 'goods5-7',
        img: '/system-payment/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/7.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '157',
        title: 'Кріплення монетоприймача та коместеро (без дисплея)(14-4-1)',
        code: 'MOC-WRZ-COM',
        price: '55.89',
        newPrice: '',
        size: 1,
        slug: 'goods5-8',
        img: '/system-payment/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/8.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '160',
        title: 'Дійсна кришка механізму та двері comestero (клапан з нержавіючої сталі + оргскло)',
        code: 'MOD-BKF-OSL-WRZ',
        price: '235.67',
        newPrice: '',
        size: 1,
        slug: 'goods5-11',
        img: '/system-payment/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/11.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '161',
        title: 'Кришка монетоприймача з оргскла',
        code: 'KLA-MTM-001',
        price: '78.41',
        newPrice: '',
        size: 1,
        slug: 'goods5-12',
        img: '/system-payment/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/12.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '162',
        title: 'Полікарбонатна пластина для клепаних монет валідатора і кришки comestero (прозора 3мм)',
        code: 'PLY-POL-WRZ-3MM',
        price: '24.33',
        newPrice: '',
        size: 1,
        slug: 'goods5-13',
        img: '/system-payment/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/13.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '163',
        title: 'Полікарбонатна пластина для кришки монетоприймача і коместеро (прозора 2 мм)',
        code: 'PLY-POL-WRZ',
        price: '26.94',
        newPrice: '',
        size: 1,
        slug: 'goods5-14',
        img: '/system-payment/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/14.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '165',
        title: 'Кабель CCTalk 50 см для модуля і змінного автомата',
        code: 'PRZ-CCT-50',
        price: '41.76',
        newPrice: '',
        size: 1,
        slug: 'goods5-16',
        img: '/system-payment/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/16.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '166',
        title: 'CCTalk кабель 70 см до робочого столу',
        code: 'PRZ-CCT-70',
        price: '43.67',
        newPrice: '',
        size: 1,
        slug: 'goods5-17',
        img: '/system-payment/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/17.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '168',
        title: 'Стрічка для 10-контактного монетника (35см)',
        code: 'TAS-10PIN-35',
        price: '58.28',
        newPrice: '',
        size: 1,
        slug: 'goods5-19',
        img: '/system-payment/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/19.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '169',
        title: 'Стрічка для 10-контактного монетника (60см)',
        code: 'TAS-10PIN-60',
        price: '48.77',
        newPrice: '',
        size: 1,
        slug: 'goods5-20',
        img: '/system-payment/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/20.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '170',
        title: 'Стрічка для 10-контактного монетника (70см)',
        code: 'TAS-10PIN-70',
        price: '76.83',
        newPrice: '',
        size: 1,
        slug: 'goods5-21',
        img: '/system-payment/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/21.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '172',
        title: 'Електронний монетоприймач (EMP 800.00) (1 секція, 10 PIN TAPE)',
        code: 'WRZ-WH-005',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-23',
        img: '/system-payment/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/23.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '173',
        title: 'Електронний валідатор монет (EMP 800.00) (4 секції, 10 PIN TAPE)',
        code: 'WRZ-WH-004',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-24',
        img: '/system-payment/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/24.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '174',
        title: 'Електронний монетоприймач (EMP 800.13) (WH v6 /E2/I/T 4 секції, кабель CC TALK)',
        code: 'WRZ-WH-003',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-25',
        img: '/system-payment/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/25.jpg', ],
        descriptionFull: `
        
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/payment-systems/cash/banknote-readers-and-accessories',
        title: 'Зчитувачі банкнот і аксесуари',
    },
    {
        slug: '/payment-systems/cash/coin-validators',
        title: 'Валідатори монет',
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

            <NavProduct2 child={arrChildCatalog} back={'/payment-systems'}/>

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
                                    <Link href='/payment-systems'> Платіжні системи</Link>
                                </li>
                                <li>
                                    <span> Готівка</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Готівка</h1>

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