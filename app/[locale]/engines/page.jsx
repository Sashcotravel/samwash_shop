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
        id: '391',
        title: 'Амортизатор універсальний тип А 40х20 (з гвинтами М8 25 мм і 14 мм)',
        code: 'АМО-ГУМ-УНІ',
        price: '52.75',
        newPrice: '',
        size: 1,
        slug: 'goods20-1',
        img: '/engines/1.jpg',
        imageShow: ['/engines/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Двигуни',
            slug: '/engines',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Трос</p><br/>
        `
    },
    {
        id: '392',
        title: 'Електродвигун CELMA, потужність 3,6/0,9кВт, SLG 112M-8/4WB, RAL3000, S25-268-011',
        code: 'SIL-IND-CZE-3,6',
        price: '2027.45',
        newPrice: '',
        size: 1,
        slug: 'goods20-2',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Двигуни',
            slug: '/engines',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Трос</p><br/>
        `
    },
    {
        id: '393',
        title: 'Електродвигун SIEMENS, потужність 0,99/3,96 кВт, 112M-8/4, сірий RAL 7030, 1LE1011-1BR23-4NA4-ZR11+N02',
        code: 'SIL-IND-SZA-B34/C160-3,96',
        price: '2132.08',
        newPrice: '',
        size: 1,
        slug: 'goods20-3',
        img: '/engines/3.jpg',
        imageShow: ['/engines/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Двигуни',
            slug: '/engines',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Трос</p><br/>
        `
    },
    {
        id: '394',
        title: 'Електродвигун SIEMENS, потужність 3.6/0.9kW, 112M-8/4, сірий RAL7030, 1LE1011-1BR23-4NA4-ZY53',
        code: 'SIL-IND-SZA-B34/C160',
        price: '2028.82',
        newPrice: '',
        size: 1,
        slug: 'goods20-4',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Двигуни',
            slug: '/engines',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Трос</p><br/>
        `
    },
    {
        id: '395',
        title: 'Двигун Soga MM1 (80MC/4 0.75kW 230V/50 Hz 9C080080PE [123783])',
        code: 'SIL-NUE-002',
        price: '838.22',
        newPrice: '',
        size: 1,
        slug: 'goods20-5',
        img: '/engines/5.jpg',
        imageShow: ['/engines/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Двигуни',
            slug: '/engines',
        },
        bread2: '',
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Трос</p><br/>
        `
    },
]


function Electromagnetic() {

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

            <NavProduct2 back={'/product'}/>

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
                                    <span> Двигуни</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Двигуни</h1>
                    <div>
                        Магазин SamWash пропонує добротні та надійні електродвигуни для автомийок. Дізнайтеся,
                        як вибрати найкращу модель і забезпечити своїх клієнтів найвищою якістю.
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
                                        <p className={s.client_code}>Код виробника: <b> {item?.code}</b></p>
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
                        <Image src='/engines/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Електродвигуни для автомийок – як вони працюють і чим відрізняються?</h2>
                            <p>
                                Електродвигун - безпечний і енергозберігаючий пристрій, який використовується в багатьох
                                галузях промисловості. Слід знати, що електродвигуни впливають на ефективність прання.
                                Основні параметри, на які варто звернути увагу при виборі двигуна, це потужність і
                                обороти двигуна. Потужність двигуна впливає на максимальний тиск води, створюваний
                                насосом, а швидкість обертання впливає на витрату води. Ці параметри повинні бути
                                ретельно підібрані для вашого насоса, інакше система може працювати неправильно. Вибір
                                правильного продукту гарантує належну продуктивність, що дозволяє насосу працювати з
                                відповідними параметрами. Також не забудьте вибрати двигун, який відповідає параметрам
                                вашого джерела живлення - 1- або 3-фазний.
                            </p> <br/>
                            <p>
                                Електродвигуни для автомийок відповідають за працездатність всієї установки.
                                Тут ви знайдете моделі з різними технічними параметрами. Вони відрізняються
                                в першу чергу: <br/> <br/>

                                силою, <br/>
                                крутний момент, <br/>
                                швидкість обертання. <br/>
                            </p> <br/>
                            <p>
                                Електродвигуни мають різну конструкцію, на ефективність також впливає клас ефективності.
                                Слід вибрати таку модель, яка гарантуватиме сумісне підключення до насоса, встановленого
                                на автомийці. Виберіть електромотор для мийки, який має обладнання, яке відповідає вашим
                                очікуванням.
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
                                <br/>
                                <h2> Електродвигун для автомийки – на що звернути увагу перед покупкою? Що виділяє
                                    найкращі моделі?</h2>
                                <p>
                                    В асортименті нашого магазину тільки електродвигуни для автомийок від відомих
                                    виробників: Celma, Siemens, Soga. Ми ретельно відбираємо наш асортимент, щоб
                                    запропонувати нашим клієнтам найвищу якість за привабливою ціною. Найкраще
                                    обладнання відрізняється високою ефективністю роботи. Перш ніж купити конкретну
                                    модель, переконайтеся, що вона призначена для роботи навіть у складних умовах.
                                    Враховуйте, що в автомийках підвищена вологість. Не менш важливою є інформація про
                                    діапазон робочих температур навколишнього середовища двигуна - він повинен бути
                                    достатньо широким, щоб користувачі могли користуватися автомийкою незалежно від пори
                                    року.
                                </p> <br/>
                                <p>
                                    Кращі електродвигуни відрізняються тривалим терміном служби і розраховані на
                                    інтенсивну експлуатацію. Вони гарантують стабільну роботу та повторювані результати.
                                    Вони працюють тихо і мають низький рівень вібрації. Це високоефективні продукти, які
                                    дозволяють ефективно знизити енерговитрати на автомийці. Електродвигуни - це
                                    компактні малогабаритні пристрої, які відіграють важливу роль у якості, яку може
                                    запропонувати конкретна автомийка. Якщо ви хочете зробити правильний вибір і знайти
                                    модель з параметрами, які оптимально відповідають вашим очікуванням, зв'яжіться з
                                    нами, і ми покажемо вам найкращий електродвигун.
                                </p> <br/>
                                <p>
                                    Перевірте, яке ще обладнання для мийки та запчастини ви можете знайти в пропозиції
                                    магазину BKF. Зверніть увагу на довговічні та міцні товари та ефективну хімію для
                                    миття автомобіля. Значно розширте коло задоволених клієнтів, які користуються вашим
                                    закладом! Також ми гарантуємо повне обслуговування по всій країні. Зв'яжіться з нами
                                    та висловіть свої очікування, і ми підготуємо пропозицію спеціально для Вас!
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

export default Electromagnetic;