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
        id: '410',
        title: 'Датчик потоку Suttner ST-5',
        code: 'CZU-PRZ-R+M-ST5',
        price: '204.54',
        newPrice: '',
        size: 1,
        slug: 'goods23-2',
        img: '/purification/2.jpg',
        imageShow: ['/purification/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
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
        id: '422',
        title: 'Набір гайок до ротаметра ПТМ 3/4" (з\'єднувачі ПВХ різьбові) - 2 шт.',
        code: 'NAK-ROT-3/4',
        price: '128.85',
        newPrice: '',
        size: 1,
        slug: 'goods23-14',
        img: '/purification/14.jpg',
        imageShow: ['/purification/14.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
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
        id: '426',
        title: 'Гайка для ротаметра PTM 1/2" (різьбові з\'єднувачі ПВХ)',
        code: 'NAK-ROT-1/2',
        price: '69.37',
        newPrice: '',
        size: 1,
        slug: 'goods23-18',
        img: '/purification/18.jpg',
        imageShow: ['/purification/18.jpg', ],
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
        id: '427',
        title: 'Ніпель латунний 1/2"',
        code: 'NYP-1/2',
        price: '9.10',
        newPrice: '',
        size: 1,
        slug: 'goods23-19',
        img: '/purification/19.jpg',
        imageShow: ['/purification/19.jpg', ],
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
        id: '436',
        title: 'Поліамідний кабель 14 мм х 12 мм (білий)',
        code:  'PRZ-POL-14',
        price: '22.15',
        newPrice: '',
        size: 1,
        slug: 'goods23-28',
        img: '/purification/28.jpg',
        imageShow: ['/purification/28.jpg', ],
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
        id: '437',
        title: 'Ротаметр ПТМ-01 (шкала 60-630 л/год води, 3/4" F BSP)',
        code:  'ROT-60-630',
        price: '740.92',
        newPrice: '',
        size: 1,
        slug: 'goods23-29',
        img: '/purification/29.jpg',
        imageShow: ['/purification/29.jpg', ],
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
        id: '438',
        title: 'Ротаметр PTM-01/TROGAMID (шкала 16-160 л/год води, 1/2")',
        code:  'ROT-16-160',
        price: '679.76',
        newPrice: '',
        size: 1,
        slug: 'goods23-30',
        img: '/purification/30.jpg',
        imageShow: ['/purification/30.jpg', ],
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
        id: '439',
        title: 'Ротаметр PTM-01/TROGAMID (шкала 40-400 л/год води, 3/4" BSP-PVC)',
        code:  'ROT-40-400',
        price: '745.27',
        newPrice: '',
        size: 1,
        slug: 'goods23-31',
        img: '/purification/31.jpg',
        imageShow: ['/purification/31.jpg', ],
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
        id: '461',
        title: 'З\'єднувач прямий 14 мм-1/2 шт. (Camozzi S6510 14-1/2)',
        code:  'ZLA-PRO-14',
        price: '26.27',
        newPrice: '',
        size: 1,
        slug: 'goods23-53',
        img: '/purification/53.jpg',
        imageShow: ['/purification/53.jpg', ],
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

            <NavProduct2 back={'/water-purification'}/>

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
                                    <span> Гідравліка водопідготовки</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Гідравліка водопідготовки</h1>

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