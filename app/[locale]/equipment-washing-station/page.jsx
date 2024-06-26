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
        id: '370',
        title: 'Модульна рама для тримачів килимків (самоустановка)',
        code: 'STE-UCH-WYC',
        price: '1931.91',
        newPrice: '',
        size: 1,
        slug: 'goods15-1',
        img: '/equipmentWashing/1.jpg',
        imageShow: ['/equipmentWashing/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Елементи та обладнання мийної станції',
            slug: '/equipment-washing-station',
        },
        bread2: {
            slug: '/equipment-washing-station/mat-holder',
            title: 'Тримач килимка'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '371',
        title: 'Наклейка з прайс-листом на безконтактну мийку (біла)',
        code: 'NAL-CEN.IMP-W.V1',
        price: '7.13',
        newPrice: '',
        size: 1,
        slug: 'goods15-2',
        img: '/equipmentWashing/2.jpg',
        imageShow: ['/equipmentWashing/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Елементи та обладнання мийної станції',
            slug: '/equipment-washing-station',
        },
        bread2: {
            slug: '/equipment-washing-station/door-stickers',
            title: 'Наклейки на двері',
        },
        bread3: {
            slug: '/equipment-washing-station/door-stickers/domestic',
            title: 'Вітчизняний',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '372',
        title: 'Наклейка з прайс-листом на безконтактну мийку (чорна)',
        code: 'NAL-CEN.IMP-B.V1',
        price: '7.13',
        newPrice: '',
        size: 1,
        slug: 'goods15-3',
        img: '/equipmentWashing/3.jpg',
        imageShow: ['/equipmentWashing/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Елементи та обладнання мийної станції',
            slug: '/equipment-washing-station',
        },
        bread2: {
            slug: '/equipment-washing-station/door-stickers',
            title: 'Наклейки на двері',
        },
        bread3: {
            slug: '/equipment-washing-station/door-stickers/domestic',
            title: 'Вітчизняний',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '373',
        title: 'Наклейка з правилами безконтактної мийки (біла)',
        code: 'NAL-REG-W.V1',
        price: '16.26',
        newPrice: '',
        size: 1,
        slug: 'goods15-4',
        img: '/equipmentWashing/4.jpg',
        imageShow: ['/equipmentWashing/4.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Елементи та обладнання мийної станції',
            slug: '/equipment-washing-station',
        },
        bread2: {
            slug: '/equipment-washing-station/door-stickers',
            title: 'Наклейки на двері',
        },
        bread3: {
            slug: '/equipment-washing-station/door-stickers/domestic',
            title: 'Вітчизняний',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '374',
        title: 'Наклейка з правилами безконтактної мийки (чорна)',
        code: 'NAL-REG-B.V1',
        price: '16.26',
        newPrice: '',
        size: 1,
        slug: 'goods15-5',
        img: '/equipmentWashing/5.jpg',
        imageShow: ['/equipmentWashing/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Елементи та обладнання мийної станції',
            slug: '/equipment-washing-station',
        },
        bread2: {
            slug: '/equipment-washing-station/door-stickers',
            title: 'Наклейки на двері',
        },
        bread3: {
            slug: '/equipment-washing-station/door-stickers/domestic',
            title: 'Вітчизняний',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '375',
        title: 'Тримач склоочисника / килимка (нержавіюча сталь) ',
        code: 'UCH-WYC-STAL',
        price: '139.61',
        newPrice: '',
        size: 1,
        slug: 'goods15-6',
        img: '/equipmentWashing/6.jpg',
        imageShow: ['/equipmentWashing/6.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Елементи та обладнання мийної станції',
            slug: '/equipment-washing-station',
        },
        bread2: {
            slug: '/equipment-washing-station/mat-holder',
            title: 'Тримач килимка'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/equipment-washing-station/door-stickers',
        title: 'Наклейки на двері',
    },
    {
        slug: '/equipment-washing-station/door-stickers/domestic',
        title: 'Вітчизняний',
    },
    {
        slug: '/equipment-washing-station/mat-holder',
        title: 'Тримач килимка'
    },
]


function Electromagnetic() {

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

            <NavProduct2 child={arrChildCatalog} back={'/product'}/>

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
                                    <span> Елементи та обладнання мийної станції</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Елементи та обладнання мийної станції</h1>

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
                                        <p className={s.client_code}>Код виробника: <b> {item?.code}</b></p>
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

export default Electromagnetic;