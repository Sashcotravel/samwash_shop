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
        id: '188',
        title: 'Ватний фільтр',
        code: 'T0SO02860',
        price: '69.57',
        newPrice: '',
        size: 1,
        slug: 'goods7-2',
        img: '/accessories/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/2.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '189',
        title: 'Нейлоновий фільтр H=260',
        code: 'T0SO00312',
        price: '63.60',
        newPrice: '',
        size: 1,
        slug: 'goods7-3',
        img: '/accessories/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/3.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '190',
        title: 'Паперовий фільтр 29л',
        code: 'T0SO02741',
        price: '10.15',
        newPrice: '',
        size: 1,
        slug: 'goods7-4',
        img: '/accessories/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/4.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '191',
        title: 'Поліефірно-бавовняний фільтр',
        code: 'S0SO03241',
        price: '142.37',
        newPrice: '',
        size: 1,
        slug: 'goods7-5',
        img: '/accessories/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/5.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '192',
        title: 'Фільтр поліестер-ватний для набору - 3240, 3242 (FTDP00523)',
        code: 'T0SO02845',
        price: '101.12',
        newPrice: '',
        size: 1,
        slug: 'goods7-6',
        img: '/accessories/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/6.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '193',
        title: 'Поліефірно-бавовняний фільтр з каркасом',
        code: 'T0SO03240',
        price: '239.91',
        newPrice: '',
        size: 1,
        slug: 'goods7-7',
        img: '/accessories/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/7.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '194',
        title: 'Фільтр повітряний для 2-3 двигунів і турбінних пилососів (02852, 28620)',
        code: 'S0SO02852',
        price: '112.75',
        newPrice: '',
        size: 1,
        slug: 'goods7-8',
        img: '/accessories/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/8.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '211',
        title: 'Тримач фільтра',
        code: 'S0SO02855',
        price: '33.98',
        newPrice: '',
        size: 1,
        slug: 'goods7-25',
        img: '/accessories/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/25.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
]


function Dosatron() {

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

            <NavProduct2 back={'/accessories-for-vacuum'}/>

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
                                    <Link href='/accessories-for-vacuum'> Аксесуари для пилососа та компресора</Link>
                                </li>
                                <li>
                                    <span> Фільтри</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Фільтри</h1>

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

export default Dosatron;