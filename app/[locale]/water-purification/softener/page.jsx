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
        id: '416',
        title: 'Іоніт HCR-S/S',
        code: 'IONIT',
        price: '490.54',
        newPrice: '',
        size: 1,
        slug: 'goods23-8',
        img: '/purification/8.png',
        imageShow: ['/purification/8.png', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            title: '',
            slug: '/water-purification/',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '458',
        title: 'Туалетний напірний бак 14 x 65 дюймів з отвором 2,5 дюйма до 330',
        code:  'ZBI-CIS-330',
        price: '738.00',
        newPrice: '',
        size: 1,
        slug: 'goods23-50',
        img: '/purification/50.jpg',
        imageShow: ['/purification/50.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            title: '',
            slug: '/water-purification/',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '462',
        title: 'Зернистість 2 - 3,15 мм',
        code:  'ZWIR',
        price: '52.57',
        newPrice: '',
        size: 1,
        slug: 'goods23-54',
        img: '/purification/54.jpg',
        imageShow: ['/purification/54.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            title: '',
            slug: '/water-purification/',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/water-purification/softener/cylinders',
        title: 'Циліндри'
    },
    {
        slug: '/water-purification/softener/filtering-layer',
        title: 'Фільтруючий шар'
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

            <TopButton index={4}/>

            <NavProduct2 child={arrChildCatalog} back={'/water-purification'}/>

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
                                    <Link href='/water-purification'> Очищення води</Link>
                                </li>
                                <li>
                                    <span> Пляшки з пом'якшувачем і аксесуари</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Пляшки з пом'якшувачем і аксесуари</h1>

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