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
        id: '294',
        title: 'Червона прозора пластина з оргскла (дисплейне скло)',
        code: 'PLY-PLEX-WYS-4SEK',
        price: '15.74',
        newPrice: '',
        size: 1,
        slug: 'goods13-25',
        img: '/electronic/25.jpg',
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
        imageShow: ['/electronic/25.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '295',
        title: 'Плата SamWash-CAN-IO - 4-значний РК-дисплей (v.2.6.x) - не запрограмований',
        code: 'PLY-SamWash-CAN-IO-V2.6.X-LCD',
        price: '1543.21',
        newPrice: '680.47',
        size: 1,
        slug: 'goods13-26',
        img: '/electronic/26.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки : 1543,21 злотих',
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
        imageShow: ['/electronic/26.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '296',
        title: 'Плата SamWash-CAN-IO - 4-значний світлодіодний дисплей (v.2.6.x) - незапрограмований',
        code: 'PLY-SamWash-CAN-IO-V2.6.X-LED',
        price: '1408.11',
        newPrice: '620.89',
        size: 1,
        slug: 'goods13-27',
        img: '/electronic/27.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки : 1408,11 злотих',
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
        imageShow: ['/electronic/27.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '319',
        title: '4-значний дисплей (v1.06.0) - не запрограмований',
        code: 'PLY-BKF-CAN-IO-V4',
        price: '1226.38',
        newPrice: '',
        size: 1,
        slug: 'goods13-50',
        img: '/electronic/50.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/50.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '320',
        title: '4-значний дисплей для системи eurokey COMESTERO',
        code: 'COM-WYS-RM924/G',
        price: '337.09',
        newPrice: '',
        size: 1,
        slug: 'goods13-51',
        img: '/electronic/51.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/51.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '321',
        title: '4-значний дисплей для системи eurokey COMESTERO, НЕКОМПЛЕКТ (без проводки)',
        code: 'COM-WYS-RM924/G-NK',
        price: '279.54',
        newPrice: '',
        size: 1,
        slug: 'goods13-52',
        img: '/electronic/52.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/52.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '322',
        title: 'LED дисплей автомийки (1-секційний)',
        code: 'WYS-LED-V2.2',
        price: '506.46',
        newPrice: '',
        size: 1,
        slug: 'goods13-53',
        img: '/electronic/53.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/53.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
]


function MixriteDispenser() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
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
                                    <span> Дисплеї (LCD, LED)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Дисплеї (LCD, LED)</h1>
                    <div>
                        Ми представляємо привабливі LED та LCD дисплеї для автомийок. Який з них варто вибрати?
                        Дізнайтеся більше про асортимент товарів в інтернет-магазині SamWash Group.
                    </div>

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

                    <div className={s.descDiv}>
                        <div className={s.descDesc}>
                            <h2>LED і LCD дисплеї – як вони працюють і в чому відмінності?</h2>
                            <p>
                                І РК-, і світлодіодні екрани забезпечують чітке представлення числових даних і
                                використовуються на професійних автомийках. Світлодіодні дисплеї для автомийок
                                встановлені на столах на кожній автомийці, але вони також використовуються в пилососах.
                                Вони значно полегшують ваш візит на автомийку. Варто звернути увагу на розмір цифрового
                                дисплея. Виберіть такий, який забезпечить відмінну видимість з необхідної відстані.
                                Круглі світяться точки найчастіше відображаються червоним кольором, що ще більше
                                підвищує їх привабливість. Вони виглядають естетично і можуть працювати безвідмовно
                                протягом тривалого часу.
                            </p> <br/>
                            <p>
                                РК-дисплеї для автомийок мають іншу техніку роботи та структуру - це рідкокристалічні
                                екрани. Вони використовують технологію рідких кристалів, молекули яких рухаються одна
                                відносно одної та формуються певним чином у певних діапазонах температур. Так вони
                                створюють кристалічну мережу. Їх внутрішня структура значно більша, ніж у випадку зі
                                світлодіодними екранами. Завдяки цьому РК-дисплей автомийки дає користувачам можливість
                                отримувати інформацію в більш широкому діапазоні в порівнянні з діодами, розміщеними в
                                світлодіодних екранах. Однак те, скільки і яку інформацію можна відображати на дисплеї,
                                залежить від того, наскільки складним є конкретне додаток.
                            </p> <br/>
                            <p onClick={() => setOpen2(prev => !prev)}
                               style={{cursor: 'pointer'}}>
                                читати далі
                                <Image alt="arrow up" loading="lazy" width={16} height={16}
                                       className={s.imgArrowManu}
                                       style={open2 ? {transform: 'rotate(180deg)'} : undefined}
                                       src="/header/flug/arrow-down.svg"/>
                            </p>
                            <div className={s.readMore} style={open2 ? {display: 'block'} : undefined}>
                                <h2>Які особливості кращих LCD і LED дисплеїв для автомийок?</h2> <br/>
                                <p>
                                    Незалежно від того, купуєте ви світлодіодні дисплеї для автомийки чи обираєте
                                    технологію LCD, переконайтеся, що ви зробили правильний вибір. Враховуючи функцію,
                                    яку виконують сітки на автомийках, вони повинні працювати надійно в будь-який час і
                                    забезпечувати безперебійне використання. Пристрої, представлені в цій категорії, є
                                    безпечними та довговічними моделями, які обслуговують споживачів відповідно до свого
                                    призначення. Вони працюють без збоїв і роблять миття та пилососіння автомобіля
                                    ефективними. Продукція, яку ми пропонуємо в BKF, відрізняється високою якістю
                                    виконання, виготовлена з міцних матеріалів, високостійких до вологи та інших
                                    шкідливих зовнішніх факторів. Ми надаємо велике значення деталям, тому представляємо
                                    вашій увазі моделі, сконструйовані ретельно та точно.
                                </p> <br/>
                                <p>
                                    Хоча дисплеї, які ви бачите в нашій пропозиції, міцні та надійні, варто оснастити їх
                                    додатковим захистом. Мова йде про захисне скло дисплея, яке продовжить термін
                                    служби. Він забезпечить екран стійким до подряпин шаром, завдяки чому він буде
                                    виглядати естетично навіть після тривалого і частого використання. Обирайте
                                    продукцію з пропозиції магазину BKF, адже ми завжди гарантуємо найвищу якість
                                    товарів та професійне обслуговування під час покупок. Переконайтеся самі, що у нас
                                    варто замовляти!
                                </p> <br/>
                            </div>
                        </div>
                    </div>
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