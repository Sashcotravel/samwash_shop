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
        id: '39',
        title: 'Диспенсер-циліндр MixRite',
        code: 'CYL-DEM',
        price: '114.27',
        size: 1,
        slug: 'goods3-1',
        img: '/pump/1.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '62',
        title: 'Кришка зворотного клапана диспенсера MixRite',
        code: 'NAK-ZAW-DEM',
        price: '147.60',
        newPrice: '',
        size: 1,
        slug: 'goods3-15',
        img: '/pump/13.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '64',
        title: 'Корпус дозатора MixRite',
        code: 'OBU-DOZ-DEM',
        price: '185.47',
        newPrice: '',
        size: 1,
        slug: 'goods3-17',
        img: '/pump/15.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '65',
        title: 'Ущільнювальне кільце для диспенсера MixRite (38021080048 viton demo)',
        code: 'ORI-004',
        price: '0.89',
        newPrice: '',
        size: 1,
        slug: 'goods3-18',
        img: '/pump/16.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '66',
        title: 'Ущільнювальне кільце для дозатора MixRite (38021090049 демо)',
        code: 'ORI-003',
        price: '0.90',
        newPrice: '',
        size: 1,
        slug: 'goods3-19',
        img: '/pump/17.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '67',
        title: 'Ущільнювальне кільце MixRite (38060211447 демонстрацій)',
        code: 'ORI-002',
        price: '1.44',
        newPrice: '',
        size: 1,
        slug: 'goods3-20',
        img: '/pump/18.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '68',
        title: 'Ущільнювальне кільце MixRite (38060221146 демонстрацій)',
        code: 'ORI-001',
        price: '2.66',
        newPrice: '',
        size: 1,
        slug: 'goods3-21',
        img: '/pump/20.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '69',
        title: 'Ущільнювальне кільце MixRite (38060222044 демонстрації)',
        code: 'ORI-005',
        price: '3.10',
        newPrice: '',
        size: 1,
        slug: 'goods3-22',
        img: '/pump/21.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '71',
        title: 'Ручка дозування хімікатів MixRite',
        code: 'POK-RET-DEM',
        price: '28.23',
        newPrice: '',
        size: 1,
        slug: 'goods3-24',
        img: '/pump/23.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '74',
        title: 'Нижня кришка диспенсера MixRite (1618-043532)',
        code: 'POK-DOL-DEM',
        price: '31.22',
        newPrice: '',
        size: 1,
        slug: 'goods3-27',
        img: '/pump/26.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '75',
        title: 'Кришка диспенсера MixRite (1618-043111)',
        code: 'POK-DOZ-DEM',
        price: '104.40',
        newPrice: '',
        size: 1,
        slug: 'goods3-28',
        img: '/pump/27.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '82',
        title: 'Шланг-голка для дозатора Mixrite 8 x 1,1',
        code: 'WAZ-IGI-8X1,1',
        price: '4.23',
        newPrice: '',
        size: 1,
        slug: 'goods3-36',
        img: '/pump/34.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '87',
        title: 'Односторонній клапан Mixrite (1618-043112)',
        code: 'ZAW-JED-GREN',
        price: '82.00',
        newPrice: '',
        size: 1,
        slug: 'goods3-41',
        img: '/pump/39.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '92',
        title: 'Набір для ремонту дозатора Mixrite',
        code: 'ЗЕС-НАП-КРА',
        price: '103.48',
        newPrice: '',
        size: 1,
        slug: 'goods3-46',
        img: '/pump/44.jpg',
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
                                    <Link href='/'>
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
                                    <span> Ремкомплекти MIXRITE</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Ремкомплекти MIXRITE</h1>

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