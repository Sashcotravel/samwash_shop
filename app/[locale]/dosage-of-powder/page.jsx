"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../chemical-means/catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
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
        id: '259',
        title: 'Датчик рівня (поплавковий) (поліпропіленовий з кабелем 10м)',
        code: 'CZU-POZ-PLY-ELO-PP',
        price: '176.52',
        newPrice: '',
        size: 1,
        slug: 'goods12-1',
        img: '/dosagePowder/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/1.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '260',
        title: 'Зірочка для дозатора (BIG)',
        code: 'KOL-ZEB-DUZ',
        price: '244.04',
        newPrice: '',
        size: 1,
        slug: 'goods12-2',
        img: '/dosagePowder/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/2.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '261',
        title: 'Зірочка для дозатора (МАЛА)',
        code: 'KOL-ZEB-MAL',
        price: '169.11',
        newPrice: '',
        size: 1,
        slug: 'goods12-3',
        img: '/dosagePowder/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/3.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '262',
        title: 'Стрижень поліуретановий 8мм (для валика дозатора)(Вуса)',
        code: 'PRE-ELS-001',
        price: '72.35',
        newPrice: '',
        size: 1,
        slug: 'goods12-4',
        img: '/dosagePowder/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/4.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '263',
        title: 'Редуктор до дозатора (I 30 30/1 PAM 9/80)',
        code: 'RED-DOZ',
        price: '564.35',
        newPrice: '',
        size: 1,
        slug: 'goods12-5',
        img: '/dosagePowder/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/5.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '264',
        title: 'Електродвигун до дозатора (FC 56B-4 0.09KW 4P 9/80)',
        code: 'SIL-DOZ',
        price: '397.94',
        newPrice: '',
        size: 1,
        slug: 'goods12-6',
        img: '/dosagePowder/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/6.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '265',
        title: 'Гвинт з нержавіючої сталі для дозатора (хід 10,0 мм)',
        code: 'SLI-10MM-DOZ',
        price: '76.89',
        newPrice: '',
        size: 1,
        slug: 'goods12-7',
        img: '/dosagePowder/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/7.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '266',
        title: 'Пломба дозатора (14/28/7)',
        code: 'УСЗ-ДОЗ-14/28/7',
        price: '4.43',
        newPrice: '',
        size: 1,
        slug: 'goods12-8',
        img: '/dosagePowder/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/8.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '267',
        title: 'Ущільнювач дозатора (14/32/7)',
        code: 'УСЗ-ДОЗ-14/32/7',
        price: '3.84',
        newPrice: '',
        size: 1,
        slug: 'goods12-9',
        img: '/dosagePowder/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/9.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '268',
        title: 'Змішувальний вал для дозатора',
        code: 'WAL-MIE-DOZ',
        price: '125.02',
        newPrice: '',
        size: 1,
        slug: 'goods12-10',
        img: '/dosagePowder/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/10.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
    {
        id: '269',
        title: 'Привідний вал для дозатора',
        code: 'SHAFT-NAP-DOZ',
        price: '14.65',
        newPrice: '',
        size: 1,
        slug: 'goods12-11',
        img: '/dosagePowder/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Дозування порошку',
            slug: '/dosage-of-powder',
        },
        bread2: '',
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/dosagePowder/11.jpg', ],
        descriptionFull: `
        <p>sdfsfdsdf</p><br/>
        `
    },
]


function ChemicalMeans() {

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

            <NavProduct2 child={null} back={'/product'} />

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
                                    <span> Дозування порошку</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Дозування порошку</h1>

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
                                        <p className={s.client_code}>Код виробника:  <b> {item?.code}</b></p>
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

export default ChemicalMeans;