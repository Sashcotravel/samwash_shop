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
        id: '95',
        title: 'Адаптер насоса Grundfos для Ebara JEXM 80',
        code: 'ELE-BLA-99-83',
        price: '35.10',
        size: 1,
        slug: 'goods4-1',
        img: '/water-pumps/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '96',
        title: 'Адаптер насоса NU.ER.T IEC80 B14',
        code: 'ADA-NUE-004',
        price: '43.28',
        size: 1,
        slug: 'goods4-2',
        img: '/water-pumps/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '124',
        title: 'Моноблочний насос EBARA AISI 304 (CDX/I90/10IE3)',
        code: 'POM-EBA-CDX',
        price: '1817.67',
        newPrice: '',
        size: 1,
        slug: 'goods4-30',
        img: '/water-pumps/30.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '125',
        title: 'Насос Nuert PRG 10 латунний з байпасом, 1/2\' GW, 1080 л/год, 1450 об/хв [PRG 10AS]',
        code: 'POM-NUE-001',
        price: '479.82',
        newPrice: '',
        size: 1,
        slug: 'goods4-31',
        img: '/water-pumps/31.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '126',
        title: 'Циркуляційний насос Grundfos Alpha1 L 25-60 180 мм (99160584)',
        code: 'POM-GRU-ALP1',
        price: '1077.64',
        newPrice: '798.89',
        size: 1,
        slug: 'goods4-32',
        img: '/water-pumps/32.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 798,89 доларів',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '127',
        title: 'Редукційний 1 1/4" M - 1" GW (кільце)',
        code: 'RED-11/4-GZ-1-GW',
        price: '23.92',
        newPrice: '',
        size: 1,
        slug: 'goods4-33',
        img: '/water-pumps/33.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '128',
        title: 'Муфта для насоса CAT 340-350 SPIDEX (709641) 28мм/20мм',
        code: 'SPR-POM-340-002',
        price: '164.68',
        newPrice: '',
        size: 1,
        slug: 'goods4-34',
        img: '/water-pumps/34.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
]

const arrChildCatalog = [
    {
        slug: '/accessories-for-pumps',
        title: 'Аксесуари для насосів',
    },
    {
        slug: '/low-pumps',
        title: 'Насоси',
    },
]


function LowPressurePumps() {

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

            <NavProduct2 child={arrChildCatalog} back={'/water-pumps-and-accessories'}/>

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
                                    <Link href='/water-pumps-and-accessories'> Водяні насоси та аксесуари</Link>
                                </li>
                                <li>
                                    <span> Насоси низького тиску</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Насоси низького тиску</h1>
                    <div>
                        Інтернет-магазин SamWash пропонує комплексне обладнання для автомийки. Наш асортимент
                        адресований як власникам об’єктів, так і технікам з обслуговування, які шукають перевірені
                        рішення. До важливих елементів відноситься насос низького тиску для автомийки.
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
                            <h2>Насоси низького тиску – як працює обладнання цієї категорії?</h2>
                            <p>
                                Насос низького тиску використовується для транспортування чистої води на автомийках. Це
                                популярні пристрої, що відрізняються високою ефективністю роботи. У цій категорії ви
                                знайдете пристрої, оснащені деталями, які сприяють довгому терміну служби пристроїв,
                                зокрема: <br/> <br/>
                                керамічний ролик, <br/>
                                робоче колесо з нержавіючої сталі, <br/>
                                вуглецевий підшипник. <br/>
                            </p> <br/>
                            <p>
                                Насоси низького тиску гарантують економічне, безпечне та ефективне очищення. Вони
                                призначені для використання на професійних автомийках. Низький тиск використовується під
                                час чищення великою кількістю води та під час полоскання. Цей тип обладнання допомагає
                                ретельно видалити всі сліди бруду та чистячих засобів. Вони прості у використанні і не
                                викликають труднощів при обслуговуванні. Вони гарантують високу продуктивність при
                                низькому енергоспоживанні. Насос низького тиску гарантує ефективне та економічне прання.
                                Низьке значення тиску дозволяє проводити мінімально інвазивне очищення та ефективно
                                запобігає пошкодженню делікатних і чутливих елементів.
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
                                <h2>Насос низького тиску – дізнайтеся, як вибрати найкращу модель</h2> <br/>
                                <p>
                                    Вам цікаво, чим відрізняються насоси низького тиску в інтернет-магазині SamWash?
                                    Зверніть увагу на прилади, оснащені суцільними корпусами з міцних матеріалів з
                                    високою корозійною стійкістю. Найкращі моделі надійно працюють навіть у складних,
                                    вимогливих умовах. Це важлива особливість, тому що автомийки мають високий рівень
                                    вологості, а присутність води може скоротити термін служби обладнання. Тому SamWash
                                    пропонує Вам тільки найякісніші рішення.
                                </p> <br/>
                                <p>
                                    Перш ніж купити конкретний насос, переконайтеся, що виробник гарантує вам доступ до
                                    змінних частин, які зношуються внаслідок природного використання. Регулярне
                                    обслуговування насоса важливо для безперебійної роботи всієї системи. При покупці
                                    запчастин уважно перевіряйте маркування і відповідність конкретних елементів типу
                                    насоса, тому що тільки правильний підбір гарантує стабільну роботу пристроїв. Якщо
                                    вас цікавить насос низького тиску для автомийки з конкретними параметрами,
                                    зв'яжіться з нами і ми підберемо ідеальний продукт для вас.
                                </p> <br/>
                                <p>
                                    Шукаєте магазин, де можна знайти широкий вибір різноманітного обладнання для
                                    автомийок? Ознайомтеся з пропозицією SamWash ближче - тут ви знайдете різні моделі
                                    двигунів, насосів і електромагнітних клапанів, що відрізняються за конструкцією і
                                    технічними параметрами. Ми також пропонуємо ремонтні комплекти та широку категорію
                                    додаткових аксесуарів, які дозволяють нам запропонувати водіям автомийку відповідно
                                    до їхніх потреб. Також тут ви знайдете дієві та ефективні хімікати для миття
                                    автомобіля. Переконайтеся самі, що SamWash, як досвідчений виробник, може надати вам
                                    надійне обладнання за привабливими цінами. Пропонуємо уважніше ознайомитись з нашим
                                    асортиментом та оформити замовлення. Зробіть свою безконтактну мийку попереду
                                    конкурентів у цьому регіоні! Це стане можливим, якщо ви запропонуєте своїм клієнтам
                                    інноваційні рішення, які скоротять час перебування на автомийці, дозволять ефективно
                                    помити автомобіль і легко оплатити послугу.
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

export default LowPressurePumps;