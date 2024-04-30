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

const arrGoods = [
    {
        id: '20',
        title: 'Котушка 24VDC для електромагнітного клапана Jaksa BS3IS',
        code: 'ZAW-JAK-NC-3/8-CEW',
        price: '531.83',
        newPrice: '',
        size: 1,
        slug: 'goods2-1',
        img: '/electromagnetic/1.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '30',
        title: 'Штекер кабелю для електромагнітних клапанів (792,793,795,936)',
        code: 'ELE-BKF-WTY',
        price: '18.19',
        newPrice: '',
        size: 1,
        slug: 'goods2-11',
        img: '/electromagnetic/11.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '31',
        title: 'Ремкомплект для клапана високого тиску Burkert 6240 [00333996]',
        code: 'ZES-NAP-BUR-6240-333996',
        price: '834.15',
        newPrice: '',
        size: 1,
        slug: 'goods2-12',
        img: '/electromagnetic/12.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '32',
        title: 'Ремкомплект VITON (на клапан 256)',
        code: 'РДЗ-256-ВІТ',
        price: '172.40',
        newPrice: '',
        size: 1,
        slug: 'goods2-13',
        img: '/electromagnetic/13.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '33',
        title: 'Ремкомплект VITON (на клапан 5281)',
        code: 'MEM-NOV-003',
        price: '129.81',
        newPrice: '',
        size: 1,
        slug: 'goods2-14',
        img: '/electromagnetic/14.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '34',
        title: 'Ремкомплект VITON (на клапан 6213) ',
        code: 'ZES-NAP-6213-VIT',
        price: '147.96',
        newPrice: '',
        size: 1,
        slug: 'goods2-15',
        img: '/electromagnetic/15.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '35',
        title: 'Ремкомплект VITON (на клапан 6281)',
        code: 'ZES-NAP-6281',
        price: '160.48',
        newPrice: '',
        size: 1,
        slug: 'goods2-16',
        img: '/electromagnetic/17.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '36',
        title: 'Ремкомплект VITON + TEFLON для клапана 255 (00015127)',
        code: 'ZES-NAP-255-VIT',
        price: '160.24',
        newPrice: '',
        size: 1,
        slug: 'goods2-17',
        img: '/electromagnetic/18.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '37',
        title: 'Ремкомплект VITON для вентиля з нержавіючої сталі 6213 (00151955) DN13',
        code: 'ZES-NAP-6213-VIT-ST',
        price: '430.99',
        newPrice: '',
        size: 1,
        slug: 'goods2-18',
        img: '/electromagnetic/19.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '38',
        title: 'Ремкомплект ВІТОН + ТЕФЛОН (на клапан 255)',
        code: 'РДЗ-НОВ-001',
        price: '203.21',
        newPrice: '',
        size: 1,
        slug: 'goods2-19',
        img: '/electromagnetic/20.jpg',
        descriptionPrise: '',
        description: ''
    },
]


function RepairKitsOfElectromagneticValves() {

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

            <NavProduct2 back={'/electromagnetic-valves-and-repair-kits'}/>

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
                                    <Link href='/electromagnetic-valves-and-repair-kits'>  Електромагнітні
                                        клапани та ремкомплекти</Link>
                                </li>
                                <li>
                                    <span> Ремкомплекти електромагнітних клапанів</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Ремкомплекти електромагнітних клапанів</h1>

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

export default RepairKitsOfElectromagneticValves;