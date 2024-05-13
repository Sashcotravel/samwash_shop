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
        id: '175',
        title: 'Перехідник MOSMATIC прямий 1/4" F - 1/4" M NPT (51.061)',
        code: 'ZLA-MOS-51.061',
        price: '76.80',
        newPrice: '',
        size: 1,
        slug: 'goods6-1',
        img: '/arrow/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/1.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '176',
        title: 'Перехідник MOSMATIC прямий M12x1-F G3/8"M (900.962)',
        code: 'ZLA-MOS-900.962',
        price: '24.62',
        newPrice: '',
        size: 1,
        slug: 'goods6-2',
        img: '/arrow/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/2.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '177',
        title: 'Ніпель латунний 1/4" (35.0070) (1200020311)',
        code: 'ZLA-MTM-006',
        price: '19.53',
        newPrice: '',
        size: 1,
        slug: 'goods6-3',
        img: '/arrow/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/3.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '178',
        title: 'Ніпель латунний перехідний 1/4"M x 3/8"M (35.0248)(1200020300)',
        code: 'ZLA-MTM-008',
        price: '12.50',
        newPrice: '',
        size: 1,
        slug: 'goods6-4',
        img: '/arrow/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/4.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '179',
        title: 'Пружина для штанги MOSMATIC',
        code: 'SPR-WYS-MOS',
        price: '136.96',
        newPrice: '',
        size: 1,
        slug: 'goods6-5',
        img: '/arrow/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/5.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '181',
        title: 'Ремкомплект кутового з\'єднувача 90 градусів WDG MOSMATIC',
        code: 'ZES-MOS-40.502',
        price: '32.67',
        newPrice: '',
        size: 1,
        slug: 'goods6-7',
        img: '/arrow/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/7.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '182',
        title: 'Ремкомплект прямого роз\'єму MOSMATIC (33.910)',
        code: 'ZES-NAP-DGS',
        price: '59.15',
        newPrice: '',
        size: 1,
        slug: 'goods6-8',
        img: '/arrow/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/8.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '183',
        title: 'Кутовий з\'єднувач MOSMATIC з нержавіючої сталі 1/4\' GW - 1/4 M',
        code: 'ZLA-MOS-40.009',
        price: '405.03',
        newPrice: '',
        size: 1,
        slug: 'goods6-9',
        img: '/arrow/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/9.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '184',
        title: 'Mosmatic прямий з\'єднувач з одним ущільненням',
        code: 'ZLA-MOS-32.957',
        price: '274.36',
        newPrice: '',
        size: 1,
        slug: 'goods6-10',
        img: '/arrow/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/10.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '185',
        title: 'З\'єднувач стріли - кутовий МТМ',
        code: 'ZLA-MTM-001',
        price: '147.40',
        newPrice: '',
        size: 1,
        slug: 'goods6-11',
        img: '/arrow/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/11.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
    {
        id: '186',
        title: 'З\'єднувач стріли - прямий МТМ',
        code: 'ZLA-MTM-002',
        price: '161.12',
        newPrice: '',
        size: 1,
        slug: 'goods6-12',
        img: '/arrow/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/arrows',
            title: 'Стріли',
        },
        bread2: {
            slug: '/arrows/repair-kits',
            title: 'Ремонтні комплекти',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/arrow/12.jpg', ],
        descriptionFull: `
        <p>dsfdfggd</p><br/>
        `
    },
]


function Waxes() {

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

            <NavProduct2 back={'/arrows'}/>

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
                                    <Link href='/arrows'> Стріли</Link>
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

export default Waxes;