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
        id: '159',
        title: 'Кришка зчитувача PEP (Saturn) - в комплекті з кріпленням',
        code: 'OSL-CZY-PEP',
        price: '260.43',
        newPrice: '',
        size: 1,
        slug: 'goods5-10',
        img: '/system-payment/10.jpg',
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
        imageShow: ['/system-payment/10.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '164',
        title: 'Пластина полікарбонатна для чохлів Saturn/Nayax (прозора 3мм)',
        code: 'PLY-POL-SAT-NX',
        price: '21.62',
        newPrice: '',
        size: 1,
        slug: 'goods5-15',
        img: '/system-payment/15.jpg',
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
        imageShow: ['/system-payment/15.jpg', ],
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

const arrChildCatalog = [
    {
        slug: '/payment-systems/cashless/transactions-with-payment-cards',
        title: 'Операції з платіжними картками'
    },
    {
        slug: '/payment-systems/cashless/loyalty-operations',
        title: 'Операції лояльності з карткою/ключем',
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

            <NavProduct2 child={arrChildCatalog} back={'/payment-systems'}/>

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
                                    <Link href='/payment-systems'> Платіжні системи</Link>
                                </li>
                                <li>
                                    <span> Безготівковий</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Безготівковий</h1>
                    <div>
                        Безготівковий розрахунок на автомийці, які ви пропонуєте своїм клієнтам? Ознайомтеся з
                        запчастинами за безготівковим розрахунком в нашому інтернет-магазині.
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
                            <h2>Безготівковий розрахунок банківською картою - зручність та безпека</h2>
                            <p>
                                Зараз найпопулярнішим безготівковим способом оплати є оплата банківською картою. чому
                                Безготівковий розрахунок - це: <br/> <br/>
                                швидко, <br/>
                                комфортно, <br/>
                                безпечний. <br/>
                            </p> <br/>
                            <p>
                                Ці три функції означають, що зчитувачі, які підтримують оплату банківською карткою, все
                                частіше зустрічаються на безконтактних автомийках! Завдяки цьому візит до закладу
                                проходить набагато ефективніше та викликає у водіїв позитивні емоції, а також не
                                викликає стресу, пов’язаного з відсутністю розрахункової готівки. Задоволеність клієнтів
                                перетворюється на прибуток, оскільки клієнти охоче повертаються туди ж. Враховуючи те,
                                що головна мета безконтактних мийок – це швидке обслуговування, безготівкові способи
                                оплати ідеально вписуються в цю ідею. Як карткові розрахунки, так і інші форми
                                безготівкових розрахунків дозволяють охопити нові групи одержувачів, які уникають оплати
                                прання готівкою. Крім того, це допомагає зберегти постійних клієнтів, які із
                                задоволенням повертатимуться в улюблений заклад. Однак оплата карткою – не єдиний
                                варіант, який ми маємо. Варто вивчити інші варіанти, які допоможуть вам створити імідж
                                сучасної, прогресивної компанії.
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
                                <h2>Електронні картки та ключі – популярні безготівкові розрахунки на автомийках</h2>
                                <br/>
                                <p>
                                    Система безготівкового розрахунку на автомийках дозволяє значно скоротити або
                                    повністю виключити готівкові операції. До популярних відносяться: картки лояльності.
                                    Просто поповніть його під час візиту на автомийку, і вся інформація про баланс
                                    автоматично збережеться там. Чому вони стають все більш популярними? Головним чином
                                    через його простоту та комфорт використання. Вони маленькі та зручні, ідеально
                                    поміщаються в гаманець, тому водій завжди може мати картку при собі та скористатися
                                    нею в будь-який момент під час візиту на автомийку. Безготівковий розрахунок за
                                    допомогою картки значно покращує користування закладом і означає, що час перебування
                                    там може бути ще коротшим. Немає необхідності поповнювати баланс на картці кожного
                                    разу, коли ви миєте автомобіль. Для комфортного користування послугами автомийки
                                    достатньо періодичного поповнення балансу.
                                </p> <br/>
                                <p>
                                    Система безготівкового розрахунку, крім карт лояльності, також використовує ключі.
                                    Працюють вони за принципом, схожим з картками, відмінністю є лише форма виробу.
                                    Електронні ключі - це невеликі гаджети, які можна прикріпити до ключів від
                                    автомобіля і завжди мати під рукою. Вони довговічні та прості у використанні. Вони
                                    не викликають ніяких труднощів, їх можна легко поповнити і використовувати в
                                    будь-який момент. Безготівковий розрахунок на автомийках за допомогою карток і
                                    ключів популярний серед багатьох клієнтів, і найчастіше ним користуються власники
                                    підприємств, які мають великий автопарк. Промова включає: про транспортні компанії,
                                    таксі і т. д. Вони легко розраховуються з власником автомийки, готівка йде
                                    безперебійно, а також є можливість виставити рахунок.
                                </p> <br/>
                                <p>
                                    Поповнення електронних карток і ключів здійснюється за допомогою зручних терміналів.
                                    Це невеликі портативні пристрої, які полегшують використання безконтактної мийки.
                                    Потрібно лише обладнати заклад зчитувачем, щоб кожен користувач міг легко оплачувати
                                    послугу.
                                </p> <br/>
                                <h2>Мобільні додатки як інноваційна система безготівкових платежів</h2>
                                <br/>
                                <p>
                                    Сучасна система безготівкового розрахунку значно збільшує кількість задоволених
                                    клієнтів. Формується імідж інноваційного та привабливого бренду, який дбає про
                                    комфорт користувачів. Мийка BKF пропонує таку можливість, надаючи водіям можливість
                                    оплати за допомогою мобільного додатку. Це найшвидший і зручний спосіб, яким власник
                                    може надати своїх клієнтів. BE LOYAL – це розрахункова платформа, яка дозволяє
                                    здійснювати безготівкові розрахунки на автомийках BKF. Він підтримує різні способи
                                    оплати та інтуїтивно зрозумілий. Чому варто обрати саме цю форму? Це, безумовно,
                                    заохотить нових клієнтів і прискорить процес оплати. Підключена до додатку карта
                                    автомийки BKF дозволить легше знаходити об’єкти на території. Також важливо мати
                                    можливість отримати рахунок за надану послугу. Це безпечне рішення, яке стає все
                                    більш популярним. Усі дані захищені належним чином, і клієнт, якому не потрібно
                                    носити з собою готівку, почувається комфортніше.
                                </p> <br/>
                                <p>
                                    Безготівковий розрахунок на автомийках – це категорія продуктів і можливостей, яка
                                    швидко розвивається. Їх головна мета – прискорити та полегшити розрахунки, а отже,
                                    скоротити час перебування на автомийці. Безготівкові способи оплати є абсолютно
                                    безпечними як для клієнтів, так і для власників закладів. Надання їх доступності
                                    користувачам значно підвищує привабливість автомийки в їхніх очах. Безпроблемне та
                                    ефективне обслуговування – одна з особливостей, яку водії шукають у безконтактних
                                    мийках. Тому варто звернути увагу на зручність використання встановленого
                                    обладнання. Крім того, найкраще вибирати пристрої, які легко і просто встановити -
                                    для них не потрібні складні інструменти або довгі кабелі.
                                </p> <br/>
                                <p>
                                    Якщо ви хочете отримати нових клієнтів і отримати їх визнання - оснастіть свою
                                    безконтактну автомийку безвідмовним обладнанням найвищої якості, ефективною та
                                    дієвою хімією, і дайте їм можливість зручно платити. Завдяки цьому ви зміцните свої
                                    позиції на ринку та виділитеся серед конкурентів. Обирайте співпрацю з BKF, яка
                                    завдяки багаторічному досвіду може запропонувати вам перевірені та корисні рішення,
                                    що сприяють збільшенню обороту. Ми постійно спостерігаємо за змінами тенденцій і
                                    допомагаємо нашим клієнтам адаптувати їхню пропозицію до потреб ринку. Переконайтеся
                                    самі, що найвища якість окупається!
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