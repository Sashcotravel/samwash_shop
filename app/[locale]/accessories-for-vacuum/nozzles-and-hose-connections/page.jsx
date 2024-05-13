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
        id: '187',
        title: 'Гнучка присоска для пилососа (264 019 1)',
        code: 'ELA-KON-SSA-ODK',
        price: '86.43',
        newPrice: '',
        size: 1,
        slug: 'goods7-1',
        img: '/accessories/1.jpg',
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
        imageShow: ['/accessories/1.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '195',
        title: 'Гніздо для всмоктувального шланга діаметром 36 і діаметром 38',
        code: 'S0SO02653NE',
        price: '26.76',
        newPrice: '',
        size: 1,
        slug: 'goods7-9',
        img: '/accessories/9.jpg',
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
        imageShow: ['/accessories/9.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '196',
        title: 'Муфта під шланг 50 мм',
        code: 'S0SO02782',
        price: '26.54',
        newPrice: '',
        size: 1,
        slug: 'goods7-10',
        img: '/accessories/10.jpg',
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
        imageShow: ['/accessories/10.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '197',
        title: 'Задній кінець шланга fi 50 (MPVR41815)',
        code: 'T0SO02773',
        price: '24.92',
        newPrice: '',
        size: 1,
        slug: 'goods7-11',
        img: '/accessories/11.jpg',
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
        imageShow: ['/accessories/11.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '198',
        title: 'Передній поворотний наконечник для шланга 38 мм',
        code: 'T0SO03928',
        price: '21.03',
        newPrice: '',
        size: 1,
        slug: 'goods7-12',
        img: '/accessories/12.jpg',
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
        imageShow: ['/accessories/12.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '199',
        title: 'Задній кінець шланга fi 38',
        code: 'T0SO00084',
        price: '13.55',
        newPrice: '',
        size: 1,
        slug: 'goods7-13',
        img: '/accessories/13.jpg',
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
        imageShow: ['/accessories/13.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '200',
        title: 'З\'єднувач для шлангів fi 38 (MPVR72230)',
        code: 'T0SO00047',
        price: '40.93',
        newPrice: '',
        size: 1,
        slug: 'goods7-14',
        img: '/accessories/14.jpg',
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
        imageShow: ['/accessories/14.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '207',
        title: 'Щілинна насадка fi 38 (SPPV00156) Dakota 303E, 423W, Nevada 503, 633W, Power+, Amsterdam 440MS, Storm',
        code: 'T0SO00003',
        price: '17.00',
        newPrice: '',
        size: 1,
        slug: 'goods7-22',
        img: '/accessories/22.jpg',
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
        imageShow: ['/accessories/22.jpg', ],
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
                                    <span> Форсунки і з'єднання шлангів</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Форсунки і з'єднання шлангів</h1>

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