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
        id: '60',
        title: 'Гайка для насосів серії EVO / Kompact',
        code: 'ПОМ-ТЕК-НАК',
        price: '24.62',
        newPrice: '',
        size: 1,
        slug: 'goods3-13',
        img: '/pump/11.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '77',
        title: 'Насос-дозатор SEKO Tekna EVO APG603 з логотипом SamWash для кислотної хімії (червоний)',
        code: 'DOS-POM-TEK-APG603-FPM',
        price: '1141.34',
        newPrice: '',
        size: 1,
        slug: 'goods3-31',
        img: '/pump/29.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '78',
        title: 'Дозуючий насос SEKO Tekna EVO APG603 з логотипом SamWash для лужної хімії (червоний)',
        code: 'DOS-POM-TEK-APG603-EPDM',
        price: '1141.34',
        newPrice: '',
        size: 1,
        slug: 'goods3-32',
        img: '/pump/30.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '79',
        title: 'Дозуючий насос SEKO Tekna EVO APG800 NHH1000 (синій) ущільнення EPDM - лужна хімія',
        code: 'DOS-POM-TEK-APG800-BL',
        price: '1867.37',
        newPrice: '',
        size: 1,
        slug: 'goods3-33',
        img: '/pump/31.jpg',
        descriptionPrise: '',
        description: ''
    },
]


function Dosatron() {

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

            <NavProduct2 back={'/pumps-and-detergent-dispensers'}/>

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
                                    <Link href='/pumps-and-detergent-dispensers'> Насоси та дозатори миючих
                                        засобів</Link>
                                </li>
                                <li>
                                    <span> Насоси SEKO серії EVO</span>
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

                    <h1>Насоси SEKO серії EVO</h1>

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

export default Dosatron;