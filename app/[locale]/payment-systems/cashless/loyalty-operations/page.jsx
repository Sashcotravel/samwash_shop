"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../../../chemical-means/catalog.module.css';
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
        id: '150',
        title: 'Червоне оргскло для дисплея COMESTERO',
        code: 'COM-PLE',
        price: '36.99',
        newPrice: '',
        size: 1,
        slug: 'goods5-1',
        img: '/system-payment/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems',
            title: '',
        },
        bread3: {
            slug: '/payment-systems',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/1.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '152',
        title: 'ПЕРСОНАЛІЗОВАНА КАРТКА MIFARE "SamWash"',
        code: 'КАР-КОМ',
        price: '21.29',
        newPrice: '',
        size: 1,
        slug: 'goods5-3',
        img: '/system-payment/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/loyalty-operations',
            title: 'Операції лояльності з карткою/ключем',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/3.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '158',
        title: 'Розводка кабелів для системи Eurokey Plus у версії MDB',
        code: 'KAB-MDB',
        price: '106.57',
        newPrice: '',
        size: 1,
        slug: 'goods5-9',
        img: '/system-payment/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/',
            title: '',
        },
        bread3: {
            slug: '/payment-systems/',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/9.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '167',
        title: 'Система безготівкових розрахунків EuroKey NEXT COMESTERO',
        code: 'SYS-COM-003',
        price: '1258.40',
        newPrice: '',
        size: 1,
        slug: 'goods5-18',
        img: '/system-payment/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/',
            title: '',
        },
        bread3: {
            slug: '/payment-systems/',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/18.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '171',
        title: 'Термінал поповнення ключів системи EUROKEY NEXT COMESTERO з блоком живлення (РАНІШНИЙ ПЛЮС)',
        code: 'TER-DOL-COM',
        price: '2501.32',
        newPrice: '',
        size: 1,
        slug: 'goods5-22',
        img: '/system-payment/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/',
            title: '',
        },
        bread3: {
            slug: '/payment-systems/',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/22.jpg', ],
        descriptionFull: `
        
        `
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

            <NavProduct2 back={'/payment-systems/cashless'}/>

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
                                    <Link href='/payment-systems'> Платіжні системи</Link>
                                </li>
                                <li>
                                    <Link href='/payment-systems/cashless'> Безготівковий</Link>
                                </li>
                                <li>
                                    <span> Операції лояльності з карткою/ключем</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Операції лояльності з карткою/ключем</h1>
                    <div>
                        Сучасні автомийки виправдовують очікування своїх клієнтів. Вони надають їм інноваційні, але
                        прості у використанні пристрої, які дозволяють ефективно та результативно мити автомобіль.
                        Дружній заклад повинен забезпечувати безпечні варіанти оплати послуги. Монети та банкноти
                        використовуються все рідше, а на зміну їм приходять платіжні термінали, де можна розрахуватися
                        карткою.
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
                            <h2>Система карт лояльності та ключів на вашій автомийці - дізнайтеся, що це таке</h2>
                            <p>
                                Вам цікаво, як працюють ці функції? Особливо добре працює система карт лояльності для
                                власників автопарків. Це дозволяє зручно здійснювати платежі та отримувати рахунки. Як
                                працює електронна картка? Вам потрібно лише періодично поповнювати баланс, щоб вільно
                                користуватися послугами автомийки. Це перевірений спосіб безготівкового розрахунку між
                                власником об’єкта та замовником. Це значно покращує користування автомийкою завдяки
                                швидким платежам. Вся необхідна інформація закодована на картці, а використання нею
                                просте та інтуїтивно зрозуміле. Цей продукт легко зберігати, оскільки він маленький і
                                зручний, тому ідеально поміститься в будь-якому гаманці поруч з документами та іншими
                                картками.
                            </p> <br/>
                            <p>
                                Ще одним популярним рішенням є безконтактний ключ для автомийки, який працює за тим же
                                принципом, що і система карт лояльності. Це зручний гаджет, його можна прикріпити до
                                ключів від машини і завжди мати при собі, коли він вам знадобиться. Це зручний, швидкий
                                і безпечний спосіб, який дозволяє скористатися послугами конкретної мийки. Ключ від
                                автомийки стає все більш популярним серед користувачів, тому власники із задоволенням
                                роблять таке рішення доступним для водіїв.
                            </p> <br/>
                            <p>
                                Для ефективної роботи системи карт лояльності та ключів необхідно встановити термінал
                                для поповнення рахунку. Не менш важливим є зчитувач, який дозволяє зчитувати дані з
                                конкретного носія. Варто вибирати прилади з низьким рівнем відмов, виготовлені з міцних
                                і міцних матеріалів. Завдяки цьому вони будуть обслуговувати клієнтів, а власник матиме
                                прибуток.
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
                                <h2>Що таке програма лояльності SamWash?</h2>
                                <br/>
                                <p>
                                    Автомийки SamWash можна оснастити обладнанням, що дозволяє розраховуватися карткою
                                    або
                                    ключем - це дозволить залучити нову групу клієнтів, які уникають використання
                                    готівки. Проте SamWash пропонує інноваційну програму лояльності автомийки, яка
                                    залучає
                                    нову групу клієнтів і значно полегшує ведення бізнесу власникам. Програма лояльності
                                    SamWash дозволяє здійснювати платежі через мобільний додаток. Це один із найновіших
                                    способів розрахунків за послуги, який ще завойовує коло вірних шанувальників.
                                    Додаток BE LOYAL дозволяє не тільки швидко здійснювати платежі, але й завдяки
                                    підключеній карті дозволяє визначити місцезнаходження найближчої автомийки BKF в
                                    районі. Це значно збільшить радіус дії. Крім того, він забезпечує автоматичне
                                    виставлення рахунків, що цінується власниками автопарків. Користувачеві буде
                                    доступний список рахунків-фактур, які автоматично формуються системою. Це також
                                    зручно для власника автомийки та персоналу, якому не доведеться витрачати на це
                                    дорогоцінний час.
                                </p> <br/>
                                <p>
                                    Ретельно розроблена програма лояльності допомагає побудувати імідж сучасної
                                    компанії, яка піклується про інтереси та комфорт своїх клієнтів. Їхні гроші в
                                    безпеці, а користуватися автомийкою ще приємніше! Вам цікаво, чи можна підключити
                                    вашу автомийку до мобільного додатку? На даний момент ми обладнаємо всі нові об’єкти
                                    SamWash доступом до цього функціоналу (якщо замовник не вимагає іншого) – це можна
                                    зробити під час встановлення автомийки на території замовника. Все, що вам потрібно,
                                    це щоб автомийка була підключена до Інтернету, мала зовнішню постійну IP-адресу, а
                                    також роутер з можливістю переадресації портів і один вільний LAN-роз’єм. Якщо ваша
                                    мийка старого покоління і ви хочете оснастити її інноваційною системою, вона повинна
                                    мати контролер PP65 або новішу модель.
                                </p> <br/>
                                <h2>Що ви отримаєте, пропонуючи своїм клієнтам привабливу систему лояльності
                                    автомийки?</h2>
                                <br/>
                                <p>
                                    Якщо ви бажаєте, щоб ваш заклад став конкурентоспроможним і виділявся серед подібних
                                    закладів – обирайте найбільш привабливу програму, яка допоможе вам отримати постійну
                                    групу одержувачів. Клієнт повинен мати відчуття, що всі функціональні можливості,
                                    які ви впроваджуєте в заклад, реалізовані з урахуванням його або її комфорту та
                                    безпеки. Тому пропонуйте йому методи оплати, які відповідають його очікуванням.
                                    Таким чином ви залучите нових водіїв, які цінують інноваційні рішення. Для багатьох
                                    можливість відмовитися від готівки означає зручність і комфорт користування
                                    послугами автомийки, навіть коли у клієнта немає при собі гаманця. Оплата за
                                    допомогою мобільного додатку на даний момент є одним із найпопулярніших способів.
                                    Тому варто подумати про вдосконалення вашої автомийки та підвищення задоволеності
                                    користувачів після відвідування закладу.
                                </p> <br/>
                                <p>
                                    Здобути визнання серед користувачів автомийок, пропонуючи їм сучасні рішення.
                                    Завдяки цьому вони можуть користуватися улюбленим закладом так часто, як їм це
                                    потрібно. Пам’ятайте, що дружні способи оплати важливі для переважної більшості
                                    водіїв. У той час, коли багато з них відмовляються від готівки, подумайте про
                                    технологічний розвиток, який може підвищити привабливість об'єкта і значно збільшити
                                    дохід. Незалежно від того, чи обираєте ви програму, ключ від автомийки чи електронну
                                    картку – переконайтеся, що конкретне рішення працює надійно та є гарантією безпеки
                                    та комфорту. Співпрацюючи з нашою компанією, ви побачите, що інноваційні та
                                    креативні програми лояльності допомагають розширити групу користувачів автомийок і
                                    таким чином максимізувати прибуток. Не чекайте і зв'яжіться з нами зараз!
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