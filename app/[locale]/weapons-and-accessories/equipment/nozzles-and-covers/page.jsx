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
        id: '391',
        title: 'Насадка 1/4" GZ 40 05 (62150)',
        code: 'DYS-RM-40-05',
        price: '31.43',
        newPrice: '',
        size: 1,
        slug: 'goods18-1',
        img: '/weapons/1.jpg',
        imageShow: ['/weapons/1.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '392',
        title: 'Насадка 1/4" GZ 40 06 (62170)',
        code: 'DYS-RM-40-06',
        price: '32.53',
        newPrice: '',
        size: 1,
        slug: 'goods18-2',
        img: '/weapons/2.jpg',
        imageShow: ['/weapons/2.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '393',
        title: 'Насадка 1/4" GZ 65 04 (62540)',
        code: 'DYS-RM-65-04',
        price: '32.74',
        newPrice: '',
        size: 1,
        slug: 'goods18-3',
        img: '/weapons/3.jpg',
        imageShow: ['/weapons/3.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '394',
        title: 'Насадка фурма 1/4" GZ 65 05 (62560)',
        code: 'DYS-RM-65-05',
        price: '31.93',
        newPrice: '',
        size: 1,
        slug: 'goods18-4',
        img: '/weapons/4.jpg',
        imageShow: ['/weapons/4.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '395',
        title: 'Насадка 1/4" GZ 65 06',
        code: 'DYS-RM-65-06',
        price: '29.52',
        newPrice: '',
        size: 1,
        slug: 'goods18-5',
        img: '/weapons/5.jpg',
        imageShow: ['/weapons/5.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '396',
        title: 'Пінна насадка - розмір 04 - 1,2 мм [200 075 403]',
        code: 'DYS-PIA-1.2',
        price: '44.34',
        newPrice: '',
        size: 1,
        slug: 'goods18-6',
        img: '/weapons/6.jpg',
        imageShow: ['/weapons/6.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '397',
        title: 'Пінна насадка 200075401 - 1,05 мм',
        code: 'DYS-PIA-1.05',
        price: '44.35',
        newPrice: '',
        size: 1,
        slug: 'goods18-7',
        img: '',
        imageShow: null,
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '398',
        title: 'Керамічне сопло високого тиску з меншим потоком',
        code: 'DYS-WIT-003',
        price: '221.46',
        newPrice: '',
        size: 1,
        slug: 'goods18-8',
        img: '/weapons/8.jpg',
        imageShow: ['/weapons/8.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '348',
        title: 'Кришка насадки',
        code: 'OSL-DYS-RM',
        price: '30.82',
        newPrice: '',
        size: 1,
        slug: 'goods18-18',
        img: '/weapons/18.jpg',
        imageShow: ['/weapons/18.jpg', ],
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
        id: '349',
        title: 'Кришка насадки (чорна)',
        code: 'OSL-DYS-PA',
        price: '20.47',
        newPrice: '',
        size: 1,
        slug: 'goods18-19',
        img: '/weapons/19.jpg',
        imageShow: ['/weapons/19.jpg', ],
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
        id: '350',
        title: 'Кришка пістолета/списка',
        code: 'OSL-PIS-LAN-RM',
        price: '6.54',
        newPrice: '',
        size: 1,
        slug: 'goods18-20',
        img: '/weapons/20.jpg',
        imageShow: ['/weapons/20.jpg', ],
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
        id: '366',
        title: 'Тримач сопла 1/4GW Bsp - 1/4GW Npt',
        code: 'UCH-DYS-PA',
        price: '15.90',
        newPrice: '',
        size: 1,
        slug: 'goods18-36',
        img: '/weapons/36.jpg',
        imageShow: ['/weapons/36.jpg', ],
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
        bread3:  {
            slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
            title: 'Насадки і кришки',
        },
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
                                    <span> Насадки і кришки</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Насадки і кришки</h1>

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