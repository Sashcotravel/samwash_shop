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
        id: '352',
        title: 'AURA LP weep gun 3/8\'\' GW поворотний наконечник, 1/4\'\' GW (зелений)',
        code: 'PIS-AUR',
        price: '161.89',
        newPrice: '',
        size: 1,
        slug: 'goods18-22',
        img: '/weapons/22.jpg',
        imageShow: ['/weapons/22.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '353',
        title: 'Пістолет AURA з постійним плачем 0,6 л/хв (синій з поворотним наконечником) ',
        code: 'PIS-AUR-PW',
        price: '138.15',
        newPrice: '',
        size: 1,
        slug: 'goods18-23',
        img: '/weapons/23.jpg',
        imageShow: ['/weapons/23.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '354',
        title: 'Рушниця AURA з постійним плачем 1,1л/хв (синя з поворотним наконечником, зима)',
        code: 'PIS-AUR-PW-10.304',
        price: '169.56',
        newPrice: '',
        size: 1,
        slug: 'goods18-24',
        img: '/weapons/24.jpg',
        imageShow: ['/weapons/24.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '355',
        title: 'Пістолет SamWash з поворотним наконечником',
        code: 'PIS-RM',
        price: '240.06',
        newPrice: '',
        size: 1,
        slug: 'goods18-25',
        img: '/weapons/25.jpg',
        imageShow: ['/weapons/25.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '356',
        title: 'Пістолет для пінопласту з блакитним логотипом SamWash (постійний плак, сопло 1,05 мм)',
        code: 'PIS-PIA-SamWash-NIEB',
        price: '516.11',
        newPrice: '',
        size: 1,
        slug: 'goods18-26',
        img: '/weapons/26.jpg',
        imageShow: ['/weapons/26.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '357',
        title: 'Пістолет для пінопласту з синім логотипом SamWash, без постійного плака, сопло 1,05 мм (500260012)',
        code: 'PIS-PIA-SamWash-NIEB-BPW',
        price: '610.45',
        newPrice: '',
        size: 1,
        slug: 'goods18-27',
        img: '/weapons/27.jpg',
        imageShow: ['/weapons/27.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '358',
        title: 'Пістолет зі списом і логотипом SamWash (без постійного плака)',
        code: 'PIS-LAN-RM-BPW',
        price: '423.51',
        newPrice: '',
        size: 1,
        slug: 'goods18-28',
        img: '/weapons/28.jpg',
        imageShow: ['/weapons/28.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '359',
        title: 'Рушниця з обертовим наконечником',
        code: 'PIS-RM-BLUE',
        price: '265.42',
        newPrice: '',
        size: 1,
        slug: 'goods18-29',
        img: '/weapons/29.jpg',
        imageShow: ['/weapons/29.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '364',
        title: 'Щітка низького тиску зі спицем і ручкою (RM, EasyTurn, R+M)',
        code: 'SZC-LAN-RM-UCH-TURN',
        price: '523.97',
        newPrice: '',
        size: 1,
        slug: 'goods18-34',
        img: '/weapons/34.jpg',
        imageShow: ['/weapons/34.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '365',
        title: 'Турбощітка з пістолетом і насадкою RM, Freeze Stop, EasyTurn, насадка 3/8" 1.05 з логотипом ' +
            'SamWash (510097003805)',
        code: 'SZC-LAN-RM-HP-BPW-TURN',
        price: '902.72',
        newPrice: '',
        size: 1,
        slug: 'goods18-35',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
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

            <NavProduct2 back={'/weapons-and-accessories'}/>

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
                                    <Link href='/weapons-and-accessories'> Зброя та аксесуари</Link>
                                </li>
                                <li>
                                    <span> Рушниці та щітки</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Рушниці та щітки</h1>
                    <div>
                        Важко уявити добре працюючу автомийку без додаткових аксесуарів, здатних ретельно очистити кожен
                        елемент кузова. У цій категорії ви знайдете щітки для мийок високого тиску та пістолетів (з
                        насадкою), які є основою обладнання мийки.
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
                            <p>
                                Пістолет для автомийки високого тиску є одним з основних аксесуарів автомийки, без якого
                                використання пристрою було б неможливим. Він складається з труби подачі води, форсунки і
                                труби подачі повітря. Труба подачі води підключається до шлангу і дозволяє наповнювати
                                його водою з будь-якого відповідного джерела, тому вам не доведеться турбуватися про
                                сумісність обладнання з вашою автомийкою.
                            </p> <br/>
                            <p>
                                Насадка - це спеціальна частина рушниці, яка направляє воду на ціль. Трубка подачі
                                повітря використовується для роботи самого пістолета шляхом підключення його до
                                зовнішнього джерела живлення - зазвичай електродвигуна або компресора.
                            </p> <br/>
                            <p>
                                Найпоширенішим типом пістолета для мийки високого тиску є електричний пістолет. Він має
                                ряд переваг перед аналогом з бензиновим двигуном: не викидає газів у повітря, не
                                потребує дозаправки та масла, має низьке енергоспоживання, а також рівень шуму нижче,
                                ніж у газових двигунів.
                            </p> <br/>
                            <p>
                                У нашій пропозиції є вироби з обертовим наконечником, який дуже зручний і значно
                                полегшує використання інструменту. Прикладом цього варіанту є пістолет AURA LP з
                                поворотним наконечником 3/8" GW, 1/4" GW (зелений), який має поворотний з’єднувач на
                                стороні шланга. Пістолет підходить для автомийок Ehrle та інших виробників, тому ви
                                можете легко встановити його на своїй автомийці.
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
                                <h2>Рушниця з фурманкою для шайби</h2> <br/>
                                <p>
                                    Окрім наконечників, наша пропозиція також включає рушниці зі списом. Це зручне
                                    рішення, яким користується більшість автомийок. Використовувати його, безумовно,
                                    простіше, тому його охочіше використовують люди, які не мають досвіду миття
                                    автомобілів. Якщо ви є власником автомийки і хочете полегшити обслуговування своїх
                                    клієнтів, вам обов'язково варто вибрати пістолет для мийки високого тиску з
                                    насадкою.
                                </p> <br/>
                                <p>
                                    Вибираючи пістолет для мийки високого тиску, можна звернути увагу на його
                                    конструкцію та форму. Вони виготовлені з різних матеріалів, і в нашій пропозиції є
                                    кілька варіантів. Форми цих пістолетів відрізняються залежно від виробника, але всі
                                    вони мають одну спільну рису: вони оснащені простими у використанні елементами
                                    керування, які дозволяють користувачам легко та швидко регулювати налаштування, щоб
                                    вони могли ефективно позбутися бруду, не пошкоджуючи поверхню автомобіля.
                                </p> <br/>
                                <p>
                                    Ціни на пістолети для миття під тиском з чавуном починаються від 460,16 злотих
                                    брутто, але ви також можете вибрати дорожчу модель. Все залежить від ваших
                                    фінансових можливостей і потреб вашого бізнесу.
                                </p> <br/>
                                <h2>Постійний плач - зручність для вашої мийки</h2> <br/>
                                <p>
                                    Одним із зручностей, які можна знайти в наших продуктах, є функція постійного плачу,
                                    модель, яка дозволяє воді текти як під низьким, так і під високим тиском. Це дуже
                                    корисна функція, оскільки вона дозволяє мити автомобіль навіть без тиску води.
                                </p> <br/>
                                <p>
                                    Постійний плач у мийному пістолеті високого тиску є цікавою інновацією, оскільки він
                                    дозволяє вам насолоджуватися мийкою автомобіля, не турбуючись про виконання
                                    будь-яких робіт з обслуговування пристроїв або водопровідних ліній.
                                </p> <br/>
                                <p>
                                    Існують моделі, які можуть працювати лише за мінімального тиску 1 бар із пристроєм
                                    аварійного зливу. Проблема цих моделей полягає в тому, що якщо тиску недостатньо,
                                    вони не працюватимуть. У більшості випадків це означає, що ретельно вимити машину
                                    низьким тиском просто неможливо, що може викликати розчарування у водіїв.
                                </p> <br/>
                                <p>
                                    Навпаки, наші моделі мають функцію постійного випуску води та можуть працювати
                                    навіть при дуже низькому тиску. Це дає змогу заощадити гроші – пістолети з функцією
                                    постійного плака є більш економними та не потребують високого тиску для повної
                                    роботи.
                                </p> <br/>
                                <p>
                                    Прикладом пістолета для мийки високого тиску з цією функцією є пістолет Foam Lance
                                    Gun із синім логотипом SamWash (постійне плавання, сопло 1,05 мм), який є в нашій
                                    пропозиції. Інструмент призначений для програм активної піни, що особливо
                                    сподобається вашим клієнтам, які, збираючись на автомийку, очікують найякіснішого
                                    обладнання.
                                </p> <br/>
                                <h2>Щітки мийки високого тиску</h2> <br/>
                                <p>
                                    Крім пістолетів, в цій категорії ви також знайдете щітки для мийок високого тиску,
                                    які дозволяють ретельно вимити автомобіль і видалити будь-який бруд, навіть
                                    засохлий. Що важливо, наші щітки абсолютно безпечні для кузова автомобіля.
                                </p> <br/>
                                <p>
                                    Щітки мийки високого тиску - це дуже важливе обладнання, яке дозволяє ретельно
                                    очистити автомобіль і видалити бруд навіть із самих важкодоступних місць, тому ваші
                                    клієнти зможуть вийти з мийки з повністю вимитим автомобілем.
                                </p> <br/>
                                <h2>Якою щіткою мити машину</h2> <br/>
                                <p>
                                    Якщо вам цікаво, яка щітка для миття автомобіля буде найкращою, ми пропонуємо вам
                                    спочатку розглянути, що ви насправді хочете запропонувати своїм клієнтам.
                                </p> <br/>
                                <p>
                                    Як правило, щітки мийки високого тиску не є обов'язковим елементом обладнання
                                    автомийки, але вони значно підвищують комфортність мийки. У часи величезної
                                    конкуренції може виявитися, що запропонувати лише пістолет недостатньо – водії
                                    обирають омивач, який їм найбільше подобається і який відповідає всім їхнім вимогам.
                                    З цієї причини вони можуть піти далі, якщо вони не повністю задоволені місцевою
                                    автомийкою.
                                </p> <br/>
                                <h2>Тож що вибрати? Просто мийний пістолет чи додаткова щітка?</h2> <br/>
                                <p>
                                    Якщо вам потрібно помити автомобіль у місцях, до яких неможливо дістатися, просто
                                    тримаючи пістолет, використовувати щітку зручніше, ніж використовувати лише воду та
                                    шампунь, навіть під високим тиском. З іншого боку, якщо ми говоримо про миття
                                    великих поверхонь з великою кількістю бруду, використовувати пістолет буде більш
                                    доречним - він має набагато більшу потужність, ніж щітка. Як бачите, обидва ці
                                    інструменти можуть працювати разом, щоб ретельно очистити ваш автомобіль, тому ми
                                    рекомендуємо поєднати обидва елементи та застосувати як пістолет, так і натискну
                                    щітку в пропозиції вашої автомийки. У цій категорії ви знайдете, наприклад,
                                    турбощітку з пістолетом і наконечником, яка використовує сучасну технологію
                                    турбопінного інжектора. Цей тип щітки задовольнить вимоги навіть найретельніших
                                    користувачів автомийки.
                                </p> <br/>
                                <p>
                                    Наостанок варто зазначити, що вся наша продукція надходить тільки від перевірених
                                    виробників. Ми є постачальником сучасних рішень для автомийок з багаторічним
                                    досвідом роботи в галузі. Наша широка пропозиція включає все необхідне обладнання
                                    для нормальної роботи автомийки. Ми раді допомогти вам підібрати мийні пістолети,
                                    щітки та інші інструменти. Ми запрошуємо вас ознайомитися з нашою пропозицією та,
                                    якщо необхідно, зв'язатися з нами.
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