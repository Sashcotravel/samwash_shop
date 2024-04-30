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

const arrGoods = [
    {
        id: '21',
        title: 'Електромагнітний клапан латунний 255 1/4", ВІТОН + тефлонове ущільнення',
        code: 'ELE-BKF-267791',
        price: '628.99',
        newPrice: '',
        size: 1,
        slug: 'goods2-2',
        img: '/electromagnetic/2.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '22',
        title: 'Клапан електромагнітний 256 латунь 1/2"',
        code: 'ELE-BKF-56302',
        price: '817.58',
        newPrice: '',
        size: 1,
        slug: 'goods2-3',
        img: '/electromagnetic/3.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '23',
        title: 'Електромагнітний клапан 256 з нержавіючої сталі 1/2\'\', ущільнення з ВІТОНУ',
        code: 'ELE-BKF-267790',
        price: '1281.34',
        newPrice: '',
        size: 1,
        slug: 'goods2-4',
        img: '/electromagnetic/4.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '24',
        title: 'Латунний електромагнітний клапан 6213 1/2", ущільнювач VITON (без головки)',
        code: 'ELE-BKF-267793',
        price: '352.10',
        newPrice: '',
        size: 1,
        slug: 'goods2-5',
        img: '/electromagnetic/5.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '25',
        title: 'Клапан електромагнітний латунний 6213 3/4" (ущільнення BUNY, для холодної води)',
        code: 'ELE-BKF-267795',
        price: '475.67',
        newPrice: '',
        size: 1,
        slug: 'goods2-6',
        img: '/electromagnetic/6.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '26',
        title: 'Електромагнітний клапан 1/2\'\' з нержавіючої сталі 6213, ущільнення VITON',
        code: 'ELE-BKF-267936',
        price: '596.80',
        newPrice: '',
        size: 1,
        slug: 'goods2-7',
        img: '/electromagnetic/7.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '27',
        title: 'Подвійний електромагнітний клапан високого тиску з нержавіючої сталі 6240 3/8" [370320]',
        code: 'ELE-BKF-370320',
        price: '3119.60',
        newPrice: '',
        size: 1,
        slug: 'goods2-8',
        img: '/electromagnetic/8.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '28',
        title: 'Латунний електромагнітний клапан 6281 1/2", ущільнювач з ВІТОНУ',
        code: 'ELE-BKF-267792',
        price: '502.76',
        newPrice: '',
        size: 1,
        slug: 'goods2-9',
        img: '/electromagnetic/9.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '29',
        title: 'Електромагнітний клапан Jaksa BS3IS (DN8 G3/8 PK NC 24VDC)',
        code: 'ZAW-JAK-NC-3/8',
        price: '1488.53',
        newPrice: '',
        size: 1,
        slug: 'goods2-10',
        img: '/electromagnetic/10.jpg',
        descriptionPrise: '',
        description: ''
    },
]


function ElectromagneticValves() {

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

            <NavProduct2 back={'/electromagnetic-valves-and-repair-kits'}/>

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
                                    <Link href='/electromagnetic-valves-and-repair-kits'>  Електромагнітні
                                        клапани та ремкомплекти</Link>
                                </li>
                                <li>
                                    <span>  Електромагнітні клапани</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Електромагнітні клапани</h1>

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

export default ElectromagneticValves;