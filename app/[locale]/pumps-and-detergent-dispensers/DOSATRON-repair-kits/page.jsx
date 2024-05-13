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
        id: '40',
        title: 'Нижня втулка поршня',
        code: 'REK-TLO-DOL-644',
        price: '48.19',
        size: 1,
        slug: 'goods3-2',
        img: '/pump/2.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '47',
        title: 'Верхня і нижня гільзи поршня + термопластична пружина',
        code: 'REK-TLO-DOS',
        price: '133.73',
        newPrice: '',
        size: 1,
        slug: 'goods3-9',
        img: '/pump/7.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '48',
        title: 'Дозатрон верхня поршнева втулка',
        code: 'REK-DOS-643',
        price: '38.90',
        newPrice: '',
        size: 1,
        slug: 'goods3-10',
        img: '/pump/8.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '61',
        title: 'Кришка зворотного клапана дозатора Dosatron',
        code: 'NAK-ZAW-DOS',
        price: '17.88',
        newPrice: '',
        size: 1,
        slug: 'goods3-14',
        img: '/pump/12.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '63',
        title: 'Корпус дозатора Dosatron',
        code: 'OBU-DOZ-DOS-057',
        price: '306.28',
        newPrice: '',
        size: 1,
        slug: 'goods3-16',
        img: '/pump/14.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '70',
        title: 'Прокладка кришки дозатора Dosatron O-ring (JDI001)',
        code: 'ORI-DOS-001',
        price: '4.50',
        newPrice: '',
        size: 1,
        slug: 'goods3-23',
        img: '/pump/22.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '72',
        title: 'Кришка дозатора Dosatron (MPDI186)',
        code: 'ПОК-ДОЗ-ДОС-МП',
        price: '300.59',
        newPrice: '',
        size: 1,
        slug: 'goods3-25',
        img: '/pump/24.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '73',
        title: 'Кришка дозатора Dosatron (PDI685)',
        code: 'POK-DOZ-DOS',
        price: '280.83',
        newPrice: '',
        size: 1,
        slug: 'goods3-26',
        img: '/pump/25.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '76',
        title: 'Насос дозатора Dosatron (PCDI030HT)',
        code: 'ПОМ-ДОЗ-ДОС-030',
        price: '624.72',
        newPrice: '',
        size: 1,
        slug: 'goods3-30',
        img: '/pump/28.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '80',
        title: 'Фільтр для диспенсера Dosatron 8x12 (MPDI207)',
        code: 'SIT-DOS-MPDI207',
        price: '50.00',
        newPrice: '',
        size: 1,
        slug: 'goods3-34',
        img: '/pump/32.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '81',
        title: 'Ущільнювач важеля поршня - дозатрон (AF PJDI114AF)',
        code: 'USZ-DOS-DZW',
        price: '48.33',
        newPrice: '',
        size: 1,
        slug: 'goods3-35',
        img: '/pump/33.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '83',
        title: 'Дозатрон дозатор HT/AF зворотний клапан (PJDI115HTAF)',
        code: 'ZAW-HTAF-DOS',
        price: '140.49',
        newPrice: '',
        size: 1,
        slug: 'goods3-37',
        img: '/pump/35.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '84',
        title: 'Зворотний клапан диспенсера Dosatron VF (PJDI115VF)',
        code: 'ZAW-VF-DOS',
        price: '139.73',
        newPrice: '',
        size: 1,
        slug: 'goods3-38',
        img: '/pump/36.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '90',
        title: 'Ремкомплект дозатора Dosatron (PJDI116HTAF)',
        code: 'ZES-NAP-DOS-AF',
        price: '209.44',
        newPrice: '',
        size: 1,
        slug: 'goods3-44',
        img: '/pump/42.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '91',
        title: 'Ремкомплект дозатора Dosatron (PJDI116VF)',
        code: 'ZES-NAP-DOS-VF',
        price: '211.74',
        newPrice: '',
        size: 1,
        slug: 'goods3-45',
        img: '/pump/43.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '94',
        title: 'Комплект прокладок Dosatron (EMDI006HT)',
        code: 'USZ-MOT-DOS',
        price: '99.33',
        newPrice: '',
        size: 1,
        slug: 'goods3-48',
        img: '/pump/46.jpg',
        descriptionPrise: '',
        description: ''
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

            <NavProduct2 back={'/pumps-and-detergent-dispensers'}/>

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
                                    <Link href='/pumps-and-detergent-dispensers'> Насоси та дозатори миючих
                                        засобів</Link>
                                </li>
                                <li>
                                    <span> Ремкомплекти DOSATRON</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Ремкомплекти DOSATRON</h1>

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