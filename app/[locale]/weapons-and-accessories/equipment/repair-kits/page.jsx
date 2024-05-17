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
        id: '399',
        title: 'Сталева губка для поролону',
        code: 'PIS-PIA-GAB',
        price: '34.77',
        newPrice: '',
        size: 1,
        slug: 'goods18-9',
        img: '/weapons/9.jpg',
        imageShow: ['/weapons/9.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '340',
        title: 'Піноутворювальна головка для пінопласту (чорна, без насадки)',
        code: 'PIS-PIA-GLO-ST75',
        price: '133.66',
        newPrice: '',
        size: 1,
        slug: 'goods18-10',
        img: '/weapons/10.jpg',
        imageShow: ['/weapons/10.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '367',
        title: 'Ущільнювач 10х2,2 для пістолета активної піни R+M',
        code: 'USZ-79025',
        price: '9.15',
        newPrice: '',
        size: 1,
        slug: 'goods18-37',
        img: '/weapons/37.jpg',
        imageShow: ['/weapons/37.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '370',
        title: 'Постійний клапан 0,6 л/хв MTM',
        code: 'ZAW-MTM-0213',
        price: '41.19',
        newPrice: '',
        size: 1,
        slug: 'goods18-40',
        img: '/weapons/40.jpg',
        imageShow: ['/weapons/40.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '371',
        title: 'Постійний клапан 1,1 л/хв MTM (10.0320)',
        code: 'ZAW-MTM-0320',
        price: '40.29',
        newPrice: '',
        size: 1,
        slug: 'goods18-41',
        img: '/weapons/41.jpg',
        imageShow: ['/weapons/41.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '372',
        title: 'Ремкомплект для пістолета MTM AURA',
        code: 'ZES-MTM-AURA',
        price: '47.83',
        newPrice: '',
        size: 1,
        slug: 'goods18-42',
        img: '/weapons/42.jpg',
        imageShow: ['/weapons/42.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '373',
        title: 'Ремкомплект пістолета R+M ST2600 (промивка, піна) з клапаном Permanent Weep',
        code: 'ZЕS-НАП-Р+М-ПІС',
        price: '64.56',
        newPrice: '',
        size: 1,
        slug: 'goods18-43',
        img: '/weapons/43.jpg',
        imageShow: ['/weapons/43.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '374',
        title: 'Ремкомплект R+M для пістолета ST-2600 (Freeze stop)',
        code: 'ZES-NAP-R+M',
        price: '123.30',
        newPrice: '',
        size: 1,
        slug: 'goods18-44',
        img: '/weapons/44.jpg',
        imageShow: ['/weapons/44.jpg', ],
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
            slug: '/weapons-and-accessories/equipment/repair-kits',
            title: 'Ремонтні комплекти',
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
                                    <span> Ремонтні комплекти</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Ремонтні комплекти</h1>

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