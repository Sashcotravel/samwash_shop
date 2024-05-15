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
        id: '279',
        title: 'Білий світлодіод Moeller (M22-LED-W)',
        code: 'DIO-MOE-BIA',
        price: '28.13',
        newPrice: '',
        size: 1,
        slug: 'goods13-10',
        img: '/electronic/10.jpg',
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
        imageShow: ['/electronic/10.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '286',
        title: 'Захисна мембрана для кнопки (M22-TD)',
        code: 'MEM-M22-TD',
        price: '24.21',
        newPrice: '',
        size: 1,
        slug: 'goods13-17',
        img: '/electronic/17.jpg',
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
        imageShow: ['/electronic/17.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '293',
        title: 'Кришка кнопки автомийки (прозора гума)',
        code: 'OSL-LEN-004',
        price: '17.72',
        newPrice: '',
        size: 1,
        slug: 'goods13-24',
        img: '/electronic/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/24.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '300',
        title: 'Світлодіодне п\'єзоелектричне підсвічування кнопок "SamWash 1"',
        code: 'POD-PRZ-PIE',
        price: '12.42',
        newPrice: '',
        size: 1,
        slug: 'goods13-31',
        img: '/electronic/31.jpg',
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
        imageShow: ['/electronic/31.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '305',
        title: 'Кнопка автомийки біла з підсвічуванням (без лампочки "RM-E")',
        code: 'PRZ-IND-BZ',
        price: '27.44',
        newPrice: '',
        size: 1,
        slug: 'goods13-36',
        img: '/electronic/36.jpg',
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
        imageShow: ['/electronic/36.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '306',
        title: 'П\'єзокнопка з нержавіючої сталі',
        code: 'PRZ-PIE-NIE-APEM',
        price: '142.48',
        newPrice: '',
        size: 1,
        slug: 'goods13-37',
        img: '/electronic/37.jpg',
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
        imageShow: ['/electronic/37.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '307',
        title: 'П\'єзокнопка з нержавіючої сталі без підсвічування IP68 APEM [PBARZAFB263OP-10967]',
        code: 'PRZ-PIE-NIE-APEM-BPO',
        price: '114.92',
        newPrice: '',
        size: 1,
        slug: 'goods13-38',
        img: '/electronic/38.jpg',
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
        imageShow: ['/electronic/38.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '308',
        title: 'Повітряний насос Moeller M22-DDL-S-X4/X5 і кнопка випуску повітря',
        code: 'PRZ-M22-DLL-S',
        price: '43.26',
        newPrice: '',
        size: 1,
        slug: 'goods13-39',
        img: '/electronic/39.jpg',
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
        imageShow: ['/electronic/39.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '309',
        title: 'Moeller M22-DL-W біла кнопка самоповернення з підсвічуванням',
        code: 'PRZ-M22-DL-W',
        price: '45.57',
        newPrice: '',
        size: 1,
        slug: 'goods13-40',
        img: '/electronic/40.jpg',
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
        imageShow: ['/electronic/40.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '310',
        title: 'Червона кнопка STOP Moeller M22-DR',
        code: 'PRZ-MOE-004',
        price: '28.93',
        newPrice: '',
        size: 1,
        slug: 'goods13-41',
        img: '/electronic/41.jpg',
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
        imageShow: ['/electronic/41.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '311',
        title: 'Кнопковий плоский імпульсний вимикач GQ19-F/S (кислотний)',
        code: 'PRZ-ELE-GQ-19B',
        price: '38.49',
        newPrice: '',
        size: 1,
        slug: 'goods13-42',
        img: '/electronic/42.jpg',
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
        imageShow: ['/electronic/42.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '317',
        title: 'NO контакт Moeller M22-K10',
        code: 'STY-MOE-NO',
        price: '19.31',
        newPrice: '',
        size: 1,
        slug: 'goods13-48',
        img: '/electronic/48.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/48.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '326',
        title: 'Світлодіодна лампа (24V W5W T10)',
        code: 'ZAR-LED-24V-T10',
        price: '8.79',
        newPrice: '',
        size: 1,
        slug: 'goods13-57',
        img: '/electronic/57.jpg',
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
        imageShow: ['/electronic/57.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '327',
        title: 'Лампа LED 24V W5W T10 (червона)',
        code: 'ZAR-LED-24V-T10-RED',
        price: '8.79',
        newPrice: '',
        size: 1,
        slug: 'goods13-58',
        img: '/electronic/58.jpg',
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
        imageShow: ['/electronic/58.jpg', ],
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
                                    <span> Кнопки</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Кнопки</h1>

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