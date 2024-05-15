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
        id: '271',
        title: 'Модуль B&R X20 CS1020 RS232',
        code: 'B&R-X20-CS1020',
        price: '1155.22',
        newPrice: '',
        size: 1,
        slug: 'goods13-2',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: '',
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '272',
        title: 'B&R X20 DO8332 8 цифрових виходів 2A зовнішнє джерело живлення',
        code: 'B&R-X20-DO8332',
        price: '929.14',
        newPrice: '',
        size: 1,
        slug: 'goods13-3',
        img: '/electronic/3.jpg',
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
        imageShow: ['/electronic/3.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '273',
        title: 'B&R X20 DO9322 12 цифрових виходів 0,5 А',
        code: 'B&R-X20-DO9322',
        price: '868.87',
        newPrice: '',
        size: 1,
        slug: 'goods13-4',
        img: '/electronic/4.jpg',
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
        imageShow: ['/electronic/4.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '274',
        title: 'B&R X20 TB12 Термінал введення/виведення 12 контактів',
        code: 'B&R-X20-TB12',
        price: '77.93',
        newPrice: '',
        size: 1,
        slug: 'goods13-5',
        img: '/electronic/5.jpg',
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
        imageShow: ['/electronic/5.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '284',
        title: 'Compact Flash карта 512 Мб',
        code: 'B&R-CFC512MB',
        price: '452.80',
        newPrice: '',
        size: 1,
        slug: 'goods13-15',
        img: '/electronic/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/15.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '285',
        title: 'Ліцензія на програмне забезпечення для розширення автомийки',
        code: 'ROZ-MYJ-OPR',
        price: '0.00',
        newPrice: '',
        size: 1,
        slug: 'goods13-16',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Сортувальні машини та аксесуари',
            slug: '/electrical-and-electronic-components/sorting-machines',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: '',
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '287',
        title: 'Модуль (B&R X20 CM8281)',
        code: 'B&R-X20-CM8281',
        price: '1286.58',
        newPrice: '',
        size: 1,
        slug: 'goods13-18',
        img: '/electronic/18.jpg',
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
        imageShow: ['/electronic/18.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '288',
        title: 'Модуль 12 цифрових входів (B&R X20 DI9371)',
        code: 'B&R-X20-DI9371',
        price: '748.09',
        newPrice: '',
        size: 1,
        slug: 'goods13-19',
        img: '/electronic/19.jpg',
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
        imageShow: ['/electronic/19.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '292',
        title: 'Мережевий приймач X2X (B&R X20 BR9300)',
        code: 'B&R-X20-BR9300',
        price: '647.90',
        newPrice: '',
        size: 1,
        slug: 'goods13-23',
        img: '/electronic/23.jpg',
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
        imageShow: ['/electronic/23.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '297',
        title: 'Підставка для живлення (B&R X20 BM01)',
        code: 'B&R-X20-BM01',
        price: '101.73',
        newPrice: '',
        size: 1,
        slug: 'goods13-28',
        img: '/electronic/28.jpg',
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
        imageShow: ['/electronic/28.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '298',
        title: 'Стандартна підставка (B&R X20 BM11)',
        code: 'B&R-X20-BM11',
        price: '112.18',
        newPrice: '',
        size: 1,
        slug: 'goods13-29',
        img: '/electronic/29.jpg',
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
        imageShow: ['/electronic/29.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '299',
        title: 'Стандартна кодова база (B&R X20 BM15)',
        code: 'B&R-X20-BM15',
        price: '223.04',
        newPrice: '',
        size: 1,
        slug: 'goods13-30',
        img: '/electronic/30.jpg',
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
        imageShow: ['/electronic/30.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '314',
        title: 'Контролер Moeller EASY 821-DC-TC',
        code: 'STE-MOE-003',
        price: '1300.96',
        newPrice: '',
        size: 1,
        slug: 'goods13-45',
        img: '/electronic/45.jpg',
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
        imageShow: ['/electronic/45.jpg', ],
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
                                    <span> Контролери PLC та аксесуари</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Контролери PLC та аксесуари</h1>

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