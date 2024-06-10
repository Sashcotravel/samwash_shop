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
        id: '112',
        title: 'Насос CAT 350',
        code: 'POM-CAT-350',
        price: '4031.90',
        size: 1,
        slug: 'goods4-18',
        img: '/water-pumps/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '113',
        title: 'Насос CAT 3CP 1140',
        code: 'POM-CAT-003',
        price: '3121.88',
        size: 1,
        slug: 'goods4-19',
        img: '/water-pumps/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '114',
        title: 'Насос CAT 5CP2150W',
        code: 'POM-CAT-BKF5CP2150W',
        price: '3818.00',
        size: 1,
        slug: 'goods4-20',
        img: '/water-pumps/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '115',
        title: 'Насос CAT BKF340D ПРАВИЙ червоний з логотипом SamWash (вихідний вал з правого боку)',
        code: 'POM-CAT-BKF340D',
        price: '3666.70',
        newPrice: '3556.65',
        size: 1,
        slug: 'goods4-21',
        img: '/water-pumps/21.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки : 3073,77 доларів',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '116',
        title: 'Насос CAT SamWash340DRS, ЛІВИЙ червоний, з логотипом SamWash (вихідний вал з лівого боку)',
        code: 'POM-CAT-BKF340F',
        price: '3802.93',
        newPrice: '',
        size: 1,
        slug: 'goods4-22',
        img: '/water-pumps/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '117',
        title: 'Насос HAWK NMT1220CWL (1.099-298.0) лівий',
        code: 'POM-HAWK-NMT-1220-CWL',
        price: '2014.44',
        newPrice: '',
        size: 1,
        slug: 'goods4-23',
        img: '/water-pumps/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '118',
        title: 'Насос Hawk NMT1220CWR',
        code: 'POM-HAWK-NMT-1220-CWR',
        price: '2263.76',
        newPrice: '',
        size: 1,
        slug: 'goods4-24',
        img: '/water-pumps/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '119',
        title: 'Насос повітряний HAWK NMT1520CWL (1.099-300.0)',
        code: 'POM-HAWK-NMT-1520-CWL',
        price: '2188.69',
        newPrice: '',
        size: 1,
        slug: 'goods4-25',
        img: '/water-pumps/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '120',
        title: 'Насос HAWK NMT1520CWR (1.099-301.0)',
        code: 'POM-HAWK-NMT-1520-CWR',
        price: '2215.75',
        newPrice: '',
        size: 1,
        slug: 'goods4-26',
        img: '/water-pumps/26.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '121',
        title: 'Насос HAWK NMT1520CWR (1.099-301.0)',
        code: 'POM-HAWK-NMT-2120-CWR',
        price: '2183.30',
        newPrice: '',
        size: 1,
        slug: 'goods4-27',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '122',
        title: 'Interpump VHT 4715 правий',
        code: 'POM-IP-VHT4715-0000',
        price: '4148.99',
        newPrice: '',
        size: 1,
        slug: 'goods4-28',
        img: '/water-pumps/28.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
    {
        id: '123',
        title: 'Насос Interpump VHT 4715S лівий',
        code: 'POM-IP-VHT4715S-0000',
        price: '4508.36',
        newPrice: '',
        size: 1,
        slug: 'goods4-29',
        img: '/water-pumps/29.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/high-pressure-pumps',
            title: 'Насоси високого тиску',
        },
        bread3: {
            slug: '/high-pumps',
            title: 'Насоси',
        },
    },
]


function LowPressurePumps() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [goods, setGoods] = useState([])
    const [priseTo, setPriseTo] = useState('')
    const [priseFrom, setPriseFrom] = useState('')

    const addOrderStore = useStore(store => store.addOrder)
    const addCurrentsGoods = useStore(store => store.setCurrentsGoods)
    const newCurrentsGoods = useStore(store => store.newCurrentsGoods)
    const setNewCurrentsGoods = useStore(store => store.setNewCurrentsGoods)
    const filterPriceTo = useStore(store => store.filterPriceTo)
    const filterPriceFrom = useStore(store => store.filterPriceFrom)
    const setFilterPriceTo = useStore(store => store.setFilterPriceTo)
    const setFilterPriceFrom = useStore(store => store.setFilterPriceFrom)

    useEffect(() => {
        setGoods(arrGoods)
        addCurrentsGoods(arrGoods)

        return (
            setNewCurrentsGoods([]),
                setFilterPriceTo(''),
                setFilterPriceFrom('')
        )
    }, []);

    useEffect(() => {
        if(newCurrentsGoods.length === 0){
            setGoods(arrGoods)
        }
        else {
            setGoods(newCurrentsGoods)
        }
    }, [newCurrentsGoods]);

    useEffect(() => {
        if(filterPriceTo === 'no'){
            setPriseTo('')
        } else {
            setPriseTo(filterPriceTo)
        }
    }, [filterPriceTo]);

    useEffect(() => {
        if(filterPriceFrom === 'no') {
            setPriseFrom('')
        } else {
            setPriseFrom(filterPriceFrom)
        }
    }, [filterPriceFrom]);

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

    const removeFilter = (type) => {
        if(type === 'priseFrom'){
            setFilterPriceFrom('no')
        }
        else if(type === 'priseTo'){
            setFilterPriceTo('no')
        }
    }


    return (
        <div className={s.mainDiv}>

            <TopButton index={4}/>

            <NavProduct2 back={'/high-pressure-pumps'}/>

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
                                    <Link href='/water-pumps-and-accessories'> Водяні насоси та аксесуари</Link>
                                </li>
                                <li>
                                    <Link href='/high-pressure-pumps'> Насоси високого тиску</Link>
                                </li>
                                <li>
                                    <span> Насоси</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {
                        <div className={s.filterDiv}>
                            {priseFrom !== '' && priseFrom !== 'no' ? <button onClick={() => removeFilter('priseFrom')}>
                                <AiOutlineClose /> Ціна від { priseFrom }
                            </button> : ''}
                            {priseTo !== '' && priseTo !== 'no' ? <button onClick={() => removeFilter('priseTo')}>
                                <AiOutlineClose /> Ціна до {priseTo}</button> : ''}
                        </div>
                    }

                    <h1>Насоси</h1>

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

export default LowPressurePumps;