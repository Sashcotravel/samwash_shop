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
        id: '411',
        title: 'Сітчастий фільтр 3/4" GW (вода)',
        code: 'FIL-SIA-3/4',
        price: '42.04',
        newPrice: '',
        size: 1,
        slug: 'goods23-3',
        img: '/purification/3.jpg',
        imageShow: ['/purification/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
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
        id: '417',
        title: 'Ключ фільтра серії BB20',
        code: 'KLUCZ-BB20',
        price: '24.67',
        newPrice: '',
        size: 1,
        slug: 'goods23-9',
        img: '/purification/9.jpg',
        imageShow: ['/purification/9.jpg', ],
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
        id: '418',
        title: 'Фільтровий ключ серії FHPR 10"',
        code: 'KLUCZ-10',
        price: '10.04',
        newPrice: '',
        size: 1,
        slug: 'goods23-10',
        img: '/purification/10.jpg',
        imageShow: ['/purification/10.jpg', ],
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
        id: '428',
        title: 'Корпус фільтра 10" на 1" GW',
        code: 'OBU-FIL-10-1',
        price: '49.56',
        newPrice: '',
        size: 1,
        slug: 'goods23-20',
        img: '/purification/20.jpg',
        imageShow: ['/purification/20.jpg', ],
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
        id: '429',
        title: 'Корпус фільтра 10" на 1" GW, посилений 10 бар Aquafilter',
        code: 'OBU-FIL-10-1-WZM',
        price: '77.06',
        newPrice: '',
        size: 1,
        slug: 'goods23-21',
        img: '/purification/21.jpg',
        imageShow: ['/purification/21.jpg', ],
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
        id: '430',
        title: 'Корпус фільтра 10" до 1/2" GW Aquafilter',
        code: 'OBU-FIL-10-1/2',
        price: '42.23',
        newPrice: '',
        size: 1,
        slug: 'goods23-22',
        img: '/purification/22.jpg',
        imageShow: ['/purification/22.jpg', ],
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
        id: '431',
        title: 'Корпус фільтра 10" на 1/2" GW посилений 10 бар Aquafilter',
        code: 'OBU-FIL-10-1/2-WZM',
        price: '76.06',
        newPrice: '',
        size: 1,
        slug: 'goods23-23',
        img: '/purification/23.jpg',
        imageShow: ['/purification/23.jpg', ],
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
        id: '432',
        title: 'Корпус фільтра від 20" до 1" GW (Big Blue)',
        code:  'OBU-FIL-20/1',
        price: '367.62',
        newPrice: '',
        size: 1,
        slug: 'goods23-24',
        img: '/purification/24.jpg',
        imageShow: ['/purification/24.jpg', ],
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
        id: '433',
        title: '3-компонентний корпус фільтра 10" з підключенням GW 1" (Supreme)',
        code:  'OBU-FIL-SUP-10-1',
        price: '51.68',
        newPrice: '',
        size: 1,
        slug: 'goods23-25',
        img: '/purification/25.jpg',
        imageShow: ['/purification/25.jpg', ],
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
        id: '434',
        title: '3-компонентний корпус фільтра 10" з підключенням GW 1/2" (Supreme)',
        code:  'OBU-FIL-SUP-10-1/2',
        price: '44.58',
        newPrice: '',
        size: 1,
        slug: 'goods23-26',
        img: '/purification/26.jpg',
        imageShow: ['/purification/26.jpg', ],
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
        id: '447',
        title: 'ВВ20" поліпропіленовий фільтрувальний вкладиш - 5 мікрон',
        code:  'WKL-POL-20-5',
        price: '53.12',
        newPrice: '',
        size: 1,
        slug: 'goods23-39',
        img: '/purification/39.jpg',
        imageShow: ['/purification/39.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
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
        id: '448',
        title: 'ВВ20" поліпропіленовий фільтрувальний вкладиш - 50 мікрон',
        code:  'WKL-POL-20-50U',
        price: '53.12',
        newPrice: '',
        size: 1,
        slug: 'goods23-40',
        img: '/purification/40.jpg',
        imageShow: ['/purification/40.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },  // taken4
    {
        id: '449',
        title: 'Поліпропіленовий струнний фільтр-вкладиш 10" - 1 мікрон',
        code:  'WKL-SZN-10-1',
        price: '13.21',
        newPrice: '',
        size: 1,
        slug: 'goods23-41',
        img: '/purification/41.jpg',
        imageShow: ['/purification/41.jpg', ],
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
        id: '450',
        title: 'Сітка-вставка для фільтра 10" - 100 мкм',
        code:  'WKL-SIA-10-100',
        price: '21.53',
        newPrice: '',
        size: 1,
        slug: 'goods23-42',
        img: '/purification/42.png',
        imageShow: ['/purification/42.png', ],
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
        id: '451',
        title: 'Сітка-вставка для фільтра 10" - 50 мікрон',
        code:  'WKL-SIA-10-50',
        price: '28.13',
        newPrice: '',
        size: 1,
        slug: 'goods23-43',
        img: '/purification/43.jpg',
        imageShow: ['/purification/43.jpg', ],
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
        id: '452',
        title: 'Вставка струнного фільтра 10" - 5 мікрон',
        code:  'WKL-SZN-10-5',
        price: '13.48',
        newPrice: '',
        size: 1,
        slug: 'goods23-44',
        img: '/purification/44.jpg',
        imageShow: ['/purification/44.jpg', ],
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
        id: '453',
        title: '10" стрічковий фільтрувальний вкладиш - 50 мікрон',
        code:  'WKL-SZN-10-50',
        price: '14.01',
        newPrice: '',
        size: 1,
        slug: 'goods23-45',
        img: '/purification/45.jpg',
        imageShow: ['/purification/45.jpg', ],
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
        id: '454',
        title: 'Струняний фільтр-вставка 10" Supreme - 1 мкм [S-PS1]',
        code:  'WKL-SZN-SUP-10-1',
        price: '8.61',
        newPrice: '',
        size: 1,
        slug: 'goods23-46',
        img: '/purification/46.jpg',
        imageShow: ['/purification/46.jpg', ],
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
        id: '455',
        title: 'Струняний фільтр-вставка Supreme 10" - 50 мкм [S-PP50]',
        code:  'WKL-SZN-SUP-10-50',
        price: '8.81',
        newPrice: '',
        size: 1,
        slug: 'goods23-47',
        img: '/purification/47.jpg',
        imageShow: ['/purification/47.jpg', ],
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

            <TopButton index={4}/>

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
                                    <span> Фільтри та аксесуари</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Фільтри та аксесуари</h1>

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