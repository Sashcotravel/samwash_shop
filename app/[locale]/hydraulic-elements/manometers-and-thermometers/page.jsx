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
        id: '330',
        title: 'Манометр 0-10 бар 1/2" (низ 80 мм без логотипу)',
        code: 'MAN-10-DOL-1/2-80-WEEK',
        price: '142.68',
        newPrice: '',
        size: 1,
        slug: 'goods14-3',
        img: '/hydraulic/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/3.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '331',
        title: 'Манометр 0-10 бар 1/4" (нижній 63 мм без логотипу)',
        code: 'MAN-10-DOL-1/4-63-WEEK',
        price: '37.07',
        newPrice: '',
        size: 1,
        slug: 'goods14-4',
        img: '/hydraulic/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/4.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '332',
        title: 'Манометр 0-10 бар 1/4" (задній 63 мм без логотипу)',
        code: 'MAN-10-TYL-1/4-63-WEEK',
        price: '20.42',
        newPrice: '',
        size: 1,
        slug: 'goods14-5',
        img: '/hydraulic/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/5.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '333',
        title: 'Гліцериновий манометр (0-160 бар, дно 1/4\'\', 63 мм, нержавіюча сталь)',
        code: 'MAN-160-DOL-1/4-63-GLI-WIKA-SamWash',
        price: '130.74',
        newPrice: '',
        size: 1,
        slug: 'goods14-6',
        img: '/hydraulic/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/6.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '334',
        title: 'Гліцериновий манометр 0-10 бар 1/4\'\' (задній 63 мм, нержавіюча сталь без логотипу) ',
        code: 'MAN-10-TYL-1/4-63-GLI-WIKA',
        price: '72.30',
        newPrice: '',
        size: 1,
        slug: 'goods14-7',
        img: '/hydraulic/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/7.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '335',
        title: 'Гліцериновий манометр 0-25 бар 1/4\'\' (дно 63 мм, нержавіюча сталь без логотипу)',
        code: 'MAN-25-DOL-1/4-63-GLI-WIKA',
        price: '62.62',
        newPrice: '',
        size: 1,
        slug: 'goods14-8',
        img: '/hydraulic/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/8.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '336',
        title: 'Манометр гліцериновий Wika 0-160 бар 1/4\'\' задній, 63 мм, нерж. з логотипом SamWash (30530415)',
        code: 'MAN-160-TYL-1/4-63-GLI-WIKA-SamWash',
        price: '106.99',
        newPrice: '',
        size: 1,
        slug: 'goods14-9',
        img: '/hydraulic/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/9.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '3412',
        title: 'Термоманометр Afriso TM 80, fi80 мм, 0÷10 бар, 20÷120°C, G1/4", ax, кл. 2,5 [63 343]',
        code: 'TER-MAN-10-TYL-1/2-80-AFR',
        price: '95.61',
        newPrice: '',
        size: 1,
        slug: 'goods14-15',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: null,
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '342',
        title: 'Термометр 1/2\'\' зовнішня різьба до 120°C (оцинкована сталь, діаметр 63 мм без логотипу)',
        code: 'TER-1/2-63-WIKA',
        price: '41.80',
        newPrice: '',
        size: 1,
        slug: 'goods14-16',
        img: '/hydraulic/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/16.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
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

            <NavProduct2 back={'/hydraulic-elements'}/>

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
                                    <Link href='/hydraulic-elements'> Гідравлічні елементи</Link>
                                </li>
                                <li>
                                    <span> Манометри і термометри</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Манометри і термометри</h1>

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