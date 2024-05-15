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
        id: '281',
        title: 'Гніздо реле Finder 95.05',
        code: 'GNI-FIN-001',
        price: '46.22',
        newPrice: '',
        size: 1,
        slug: 'goods13-12',
        img: '/electronic/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/12.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '283',
        title: 'Розетка JUMPFLEX з реле (24V DC 1p WAGO)(857-304)',
        code: 'POD-WAG-857-304',
        price: '76.86',
        newPrice: '',
        size: 1,
        slug: 'goods13-14',
        img: '/electronic/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/14.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '289',
        title: 'Світлодіодний модуль Finder (99.02.9.024.99)',
        code: 'MOD-FIN-001',
        price: '14.51',
        newPrice: '',
        size: 1,
        slug: 'goods13-20',
        img: '/electronic/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/20.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '290',
        title: 'Міст DILM 12-XSL',
        code: 'MOS-DIL',
        price: '170.86',
        newPrice: '',
        size: 1,
        slug: 'goods13-21',
        img: '/electronic/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/21.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '302',
        title: 'Реле Finder 40.61 (24V DC 16A)',
        code: 'PRZ-FIN-001',
        price: '42.47',
        newPrice: '',
        size: 1,
        slug: 'goods13-33',
        img: '/electronic/33.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/33.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '303',
        title: 'Реле монтажне Moeller Z-R23/16-10 (з діодом)',
        code: 'PRZ-MOE-ZR23',
        price: '113.70',
        newPrice: '',
        size: 1,
        slug: 'goods13-34',
        img: '/electronic/34.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/34.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '315',
        title: 'Контактор Moeller DILM9-01 (24VDC)',
        code: 'STY-DILM9',
        price: '178.26',
        newPrice: '',
        size: 1,
        slug: 'goods13-46',
        img: '/electronic/46.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/46.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '316',
        title: 'NC контакт Moeller M22-K01',
        code: 'STY-MOE-NC',
        price: '20.71',
        newPrice: '',
        size: 1,
        slug: 'goods13-47',
        img: '/electronic/47.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: '',
            slug: '/electrical-and-electronic-components/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/47.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
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

            <NavProduct2 back={'/electrical-and-electronic-components'}/>

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
                                    <Link href='/electrical-and-electronic-components'> Електричні та електронні
                                        компоненти</Link>
                                </li>
                                <li>
                                    <span> Реле та контактори</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Реле та контактори</h1>

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