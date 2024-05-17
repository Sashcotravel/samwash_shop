"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../../../chemical-means/catalog.module.css';
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
        id: '341',
        title: 'Набір для розширення щітки з повітряним інжектором',
        code: 'SZC-INJ-KOM',
        price: '348.29',
        newPrice: '',
        size: 1,
        slug: 'goods18-11',
        img: '/weapons/11.jpg',
        imageShow: ['/weapons/11.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: {
            slug: '/weapons-and-accessories/equipment/accessories-for-brushes',
            title: 'Аксесуари для щіток',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '342',
        title: 'Зливна пробка для контейнера для щіток MOSMATIC',
        code: 'KOR-MOS-903.251',
        price: '297.12',
        newPrice: '',
        size: 1,
        slug: 'goods18-12',
        img: '/weapons/12.jpg',
        imageShow: ['/weapons/12.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: {
            slug: '/weapons-and-accessories/equipment/accessories-for-brushes',
            title: 'Аксесуари для щіток',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '351',
        title: 'Чохол для рамки щітки (020001540)',
        code: 'OSL-RAM-WLO',
        price: '66.37',
        newPrice: '',
        size: 1,
        slug: 'goods18-21',
        img: '/weapons/21.jpg',
        imageShow: ['/weapons/21.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: {
            slug: '/weapons-and-accessories/equipment/accessories-for-brushes',
            title: 'Аксесуари для щіток',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '361',
        title: 'Контейнер для щіток з нержавіючої сталі, призначений для щіток EASYWASH365+',
        code: 'POJ-SZC',
        price: '1871.29',
        newPrice: '',
        size: 1,
        slug: 'goods18-31',
        img: '/weapons/31.jpg',
        imageShow: ['/weapons/31.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '362',
        title: 'Щетинний каркас для пензля 1/4" GW (пластик)',
        code: 'RAM-WLO',
        price: '44.39',
        newPrice: '',
        size: 1,
        slug: 'goods18-32',
        img: '/weapons/32.jpg',
        imageShow: ['/weapons/32.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '363',
        title: 'Щетинний каркас для пензля 1/4" GW (нерж. сталь)',
        code: 'RAM-WLO-STAL',
        price: '192.99',
        newPrice: '',
        size: 1,
        slug: 'goods18-33',
        img: '/weapons/33.jpg',
        imageShow: ['/weapons/33.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '368',
        title: 'Щетина для щітки L60',
        code: 'WLO-SZC-001',
        price: '154.27',
        newPrice: '',
        size: 1,
        slug: 'goods18-38',
        img: '/weapons/38.jpg',
        imageShow: ['/weapons/38.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '369',
        title: 'Щетина для щітки L90',
        code: 'WLO-SZC-002',
        price: '173.02',
        newPrice: '',
        size: 1,
        slug: 'goods18-39',
        img: '/weapons/39.jpg',
        imageShow: ['/weapons/39.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            slug: '/weapons-and-accessories/equipment',
            title: 'Обладнання',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
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

            <NavProduct2 back={'/weapons-and-accessories/equipment'}/>

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
                                    <Link href='/weapons-and-accessories'> Зброя та аксесуари</Link>
                                </li>
                                <li>
                                    <Link href='/weapons-and-accessories/equipment'> Обладнання</Link>
                                </li>
                                <li>
                                    <span> Аксесуари для щіток</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Аксесуари для щіток</h1>

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