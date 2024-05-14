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
        id: '252',
        title: 'SamWash Special 10 літрів ADR для миття підлоги від забруднень на основі нафтопродуктів (з низьким піноутворенням)',
        code: 'SPECIAL10',
        price: '134.48',
        newPrice: '',
        size: 1,
        slug: 'goods11-1',
        img: '/maintenance/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/1.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
    },
    {
        id: '253',
        title: 'Clean Up Car Wash 10L ADR Препарат для очищення конструкцій безконтактних мийок',
        code: 'A45/010',
        price: '138.82',
        newPrice: '',
        size: 1,
        slug: 'goods11-2',
        img: '/maintenance/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/2.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
    },
    {
        id: '254',
        title: 'Очищення бруківки 2 1л ADR Мастила, масла, пальне',
        code: 'DS08/001',
        price: '26.60',
        newPrice: '',
        size: 1,
        slug: 'goods11-3',
        img: '/maintenance/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/3.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
    },
    {
        id: '255',
        title: 'Серветка з мікрофібри червона 40х40см 2604SamWash',
        code: 'T0SE2692',
        price: '5.22',
        newPrice: '',
        size: 1,
        slug: 'goods11-4',
        img: '/maintenance/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/4.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
    },
    {
        id: '256',
        title: 'Серветка з мікрофібри блакитна 40x40 2690SamWash',
        code: 'T0SE2690',
        price: '5.22',
        newPrice: '',
        size: 1,
        slug: 'goods11-5',
        img: '/maintenance/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/5.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
    },
    {
        id: '257',
        title: 'Жовта серветка з мікрофібри 40х40см 2605SamWash',
        code: 'T0SE2691',
        price: '6.92',
        newPrice: '',
        size: 1,
        slug: 'goods11-6',
        img: '/maintenance/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/6.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
    },
    {
        id: '258',
        title: 'Засіб для чищення нержавіючої сталі Tenzi Steel Strong 600 мл',
        code: 'W78/600',
        price: '12.20',
        newPrice: '',
        size: 1,
        slug: 'goods11-7',
        img: '/maintenance/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення та обслуговування',
            slug: '/cleaning-and-maintenance',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/maintenance/7.jpg', ],
        descriptionFull: `
        <p>Пропонуємо</p><br/>
        `
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

            <NavProduct2 child={null} back={'/product'} />

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
                                    <span> Очищення та обслуговування</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Очищення та обслуговування</h1>

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