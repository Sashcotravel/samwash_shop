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
        id: '201',
        title: 'Пістолет для накачування шин з манометром без роз\'єму швидкого з\'єднання',
        code: 'PIS-KOM-001',
        price: '52.87',
        newPrice: '',
        size: 1,
        slug: 'goods7-15',
        img: '/accessories/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/15.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '202',
        title: 'Продувний пістолет з подовжувачем 10 см',
        code: 'PIS-KOM-004',
        price: '50.63',
        newPrice: '',
        size: 1,
        slug: 'goods7-16',
        img: '/accessories/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/16.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '203',
        title: 'Шланг компресорний гнучкий 12х8 15м, закінчений перехідником DN12',
        code: 'ПРЗ-КОМ-15М',
        price: '363.40',
        newPrice: '',
        size: 1,
        slug: 'goods7-17',
        img: '/accessories/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/17.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '208',
        title: 'Повітряний насос Moeller M22-DDL-S-X4/X5 і кнопка випуску повітря',
        code: 'PRZ-M22-DLL-S',
        price: '43.26',
        newPrice: '',
        size: 1,
        slug: 'goods7-18',
        img: '/accessories/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/18.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '205',
        title: 'Компресор безмасляний H 215-6 AIRPRESS (36943)',
        code: 'SPR-AIR-H215',
        price: '774.60',
        newPrice: '',
        size: 1,
        slug: 'goods7-20',
        img: '/accessories/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/20.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '206',
        title: 'Безмасляний компресор HLO 215/25 AIRPRESS',
        code: 'SPR-AIR',
        price: '1039.46',
        newPrice: '',
        size: 1,
        slug: 'goods7-21',
        img: '/accessories/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/21.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '217',
        title: 'Шланг спіральний для компресора 9м 10Х6,5',
        code: 'PRZ-KOM-1065-09',
        price: '116.87',
        newPrice: '',
        size: 1,
        slug: 'goods7-31',
        img: '/accessories/31.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/31.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '219',
        title: 'Ротор для безмасляного компресора HLO 215/25',
        code: 'WIR-SPR',
        price: '68.23',
        newPrice: '',
        size: 1,
        slug: 'goods7-33',
        img: '/accessories/33.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/33.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
]


function Dosatron() {

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

            <NavProduct2 back={'/accessories-for-vacuum'}/>

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
                                    <Link href='/accessories-for-vacuum'> Аксесуари для пилососа та компресора</Link>
                                </li>
                                <li>
                                    <span> Аксесуари для компресорів</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Аксесуари для компресорів</h1>
                    <div>
                        Аксесуари для компресорів є обов’язковим елементом обладнання власників автомийок і майстрів
                        сервісного обслуговування, які хочуть підтримувати свої інструменти в ідеальному стані. Завдяки
                        їм можна підвищити ефективність і довговічність компресора, а також підвищити якість роботи
                        машини, що виражається в задоволенні клієнтів. У цій категорії ви знайдете все, що може
                        поліпшити роботу компресора і продовжити термін його служби.
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
                            <h2>З чого складається компресор?</h2>
                            <p>
                                Пропозиція нашої компанії включає в себе багато різних компресорних виробів і
                                аксесуарів. Всі вони відрізняються високою якістю і забезпечують не тільки ефективність,
                                але і безпеку використання. Однак варто знати, з чого складаються компресорні аксесуари,
                                щоб мати можливість доповнити обладнання, яке використовується на автомийці.
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
                                <p>
                                    Основним додатковим обладнанням компресора є гармати. Наша пропозиція включає, серед
                                    іншого: пістолет для накачування шин або продувки. Ці види продукції дозволяють
                                    легко і швидко накачати шини і видалити бруд з різних поверхонь.
                                </p> <br/>
                                <p>
                                    Ще одним продуктом з нашої пропозиції є гнучкі компресорні шланги. Ці лінії
                                    необхідні для передачі стисненого повітря від компресора до пневматичних
                                    інструментів. Ми пропонуємо зменшені шланги, які покращують роботу всієї мийки.
                                </p> <br/>
                                <p>
                                    Крім того, ми також включаємо безмасляні компресори в категорію приладдя для
                                    компресорів. Це пристрої без масла в камері стиснення, що робить їх екологічно
                                    чистими і не потребують частого обслуговування. Ми пропонуємо широкий вибір
                                    безмасляних компресорів, які задовольнять вимоги як професіоналів, так і домашніх
                                    користувачів.
                                </p> <br/>
                                <p>
                                    Повні аксесуари для компресорів також включають ротори компресора, кнопки для
                                    накачування та випуску повітря та спіральні шланги для компресорів. Вся продукція
                                    нашого магазину має найвищу якість, тому користувачі можуть розраховувати на її
                                    надійність і довговічність. Варто відзначити, що аксесуари для компресорів також
                                    зручні у використанні і дозволяють економити час і енергію при роботі з таким типом
                                    обладнання. Власникам автомийок, сервісним технікам або всім, хто щодня використовує
                                    компресори і потребує ефективних і надійних інструментів для своєї роботи,
                                    обов'язково варто оснастити себе додатковим обладнанням.
                                </p> <br/> <br/>
                                <h2>Чому варто доглядати за деталями компресора?</h2> <br/>
                                <p>
                                    Використання аксесуарів для компресорів може принести багато переваг вашій
                                    автомийці. Тому варто знати, що їх щоденне використання є важливим і підтримує ваш
                                    бізнес. Ці типи аксесуарів дозволяють, перш за все, швидше та ефективніше виконувати
                                    багато робіт, пов'язаних з очищенням та обслуговуванням транспортних засобів.
                                    Наприклад, пістолети для накачування шин дозволяють легко та швидко накачати шини,
                                    що особливо важливо для великих автомобілів або вантажівок. Варто зазначити, що в
                                    нашій пропозиції є пістолет з манометром, який дозволяє перевіряти тиск у шинах.
                                </p> <br/>
                                <p>
                                    Використання аксесуарів для компресорів також дозволяє заощадити час і гроші.
                                    Завдяки ефективним і надійним аксесуарам можна скоротити час роботи пристроїв, а
                                    значить, збільшити ефективність і прибуток автомийки. Наприклад, використовуючи
                                    якісні гнучкі кабелі, можна уникнути непотрібних простоїв і виходу обладнання з
                                    ладу, що, в свою чергу, забезпечує безперервну роботу та підвищує ефективність
                                    роботи та економить бюджет на незапланованих витратах на ремонт або заміну
                                    обладнання.
                                </p> <br/>
                                <p>
                                    Ще однією перевагою використання змінних деталей компресора є те, що вони дозволяють
                                    підвищити якість роботи. Використовуючи професійні та надійні аксесуари, ви можете
                                    досягти кращих кінцевих результатів і задоволення клієнтів. Власники автомийок також
                                    можуть запропонувати своїм клієнтам більш розширені послуги, наприклад, прибирання
                                    салонів автомобіля. Чим більше додаткових опцій має ваша автомийка, тим більше
                                    шансів, що водії охочіше нею скористаються. Це особливо важливо у великих містах, де
                                    висока конкуренція і автомийкам необхідно виділятися з натовпу.
                                </p> <br/>
                                <h2>Комплектуючі для компресорів від автомийки SamWash</h2> <br/>
                                <p>
                                    Аксесуари для компресорів є необхідним обладнанням для кожної автомийки. Однак,
                                    вибираючи відповідні продукти, варто враховувати не лише ціну, але (перш за все)
                                    якість виготовлених деталей. Як правило, вони покликані підтримувати і продовжувати
                                    час роботи компресора. Якщо їх робити неправильно, вони можуть швидше зашкодити
                                    йому, ніж допомогти. З цієї причини варто вибирати продукцію в перевірених
                                    магазинах.
                                </p> <br/>
                                <p>
                                    SamWash Group – лідер з багаторічним досвідом продажу товарів для автомийок. Ми
                                    пропонуємо лише перевірені та надійні продукти, які забезпечать бездоганну роботу
                                    вашої мийки. Приємних покупок!
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

export default Dosatron;