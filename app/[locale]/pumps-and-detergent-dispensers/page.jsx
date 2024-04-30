"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
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
        id: '1',
        title: 'Активна піна для миття автомобіля Blue Foam (20л), синій колір',
        code: 'BLUE/020',
        price: '263.27',
        size: 1,
        slug: 'goods1',
        img: '/chemical-means/1.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '2',
        title: 'Активна піна для миття автомобіля Funky Foam (20 л), рожева',
        code: 'FUNKY/020',
        price: '295.51',
        size: 1,
        slug: 'goods2',
        img: '/chemical-means/2.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '3',
        title: 'Активна піна для миття автомобіля Green Alka Foam (20л), колір зелений',
        code: 'GREEN/020',
        price: '329.48',
        size: 1,
        slug: 'goods3',
        img: '/chemical-means/3.jpg',
        description: '',
        descriptionPrise: ''
    },
    {
        id: '4',
        title: 'Активна піна для миття автомобіля Snow Foam (20 л), біла',
        code: 'GREEN/020',
        price: '488.75',
        newPrice: '286.39',
        size: 1,
        slug: 'goods4',
        img: '/chemical-means/4.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 405,90 доларів',
        description: ''
    },
    {
        id: '5',
        title: 'Активна піна для миття автомобіля White Alka Foam (20 л), біла',
        code: 'WHITE/020',
        price: '309.16',
        size: 1,
        slug: 'goods5',
        img: '/chemical-means/5.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '6',
        title: 'Рідка хімія для мийки (набір)',
        code: 'ДОБРИСТАРТПЛИН',
        price: '1201.00',
        newPrice: '1100.39',
        size: 1,
        slug: 'goods6',
        img: '/chemical-means/6.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 1201,00 доларів',
        description: ''
    },
    {
        id: '7',
        title: 'Порошкова хімія для миття автомобіля (набір)',
        code: 'DOBRYSTARTPOWDER',
        price: '1487.21',
        newPrice: '1192.39',
        size: 1,
        slug: 'goods7',
        img: '/chemical-means/7.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 1192,00 доларів',
        description: ''
    },
    {
        id: '8',
        title: 'Шкімер De-Foam 10L - видалення піни',
        code: 'D03/010',
        price: '176.21',
        newPrice: '',
        size: 1,
        slug: 'goods8',
        img: '/chemical-means/8.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '9',
        title: 'Мийка дисків Alu Ultra (20л) ADR',
        code: 'ALU/020',
        price: '348.27',
        newPrice: '',
        size: 1,
        slug: 'goods9',
        img: '/chemical-means/4.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '11',
        title: 'Автомийний порошок Powder FF (25 кг), безфосфатний',
        code: 'PROFF/025',
        price: '366.63',
        newPrice: '298.78',
        size: 1,
        slug: 'goods11',
        img: '/chemical-means/9.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 319,92 доларів',
        description: ''
    },
    {
        id: '12',
        title: 'Порошок LF порошок мийний (25 кг), аромат',
        code: 'PROLF/025',
        price: '343.29',
        newPrice: '',
        size: 1,
        slug: 'goods12',
        img: '/chemical-means/10.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '13',
        title: 'Порошок ORANGE FF автомийний порошок (25 кг), без фосфатів, аромат',
        code: 'ORANGEFF/025',
        price: '402.21',
        newPrice: '',
        size: 1,
        slug: 'goods13',
        img: '/chemical-means/11.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '14',
        title: 'Автомийний порошок Powder Ultra (25 кг)',
        code: 'PROULT/025',
        price: '554.95',
        newPrice: '441.61',
        size: 1,
        slug: 'goods14',
        img: '/chemical-means/12.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 474,73 злотих',
        description: ''
    },
    {
        id: '15',
        title: 'Порошок Автомийний порошок Ultra Fresh (25 кг), аромат',
        code: 'PROFRESH/025',
        price: '562.15',
        newPrice: '',
        size: 1,
        slug: 'goods15',
        img: '/chemical-means/13.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '16',
        title: 'Сіль для пом\'якшувачів води 25кг - сіль в таблетках',
        code: 'SOL-CHE-001',
        price: '55.15',
        newPrice: '',
        size: 1,
        slug: 'goods16',
        img: '/chemical-means/14.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '17',
        title: 'Турбошампунь для автомийки (20л) ADR',
        code: 'TURBO/020',
        price: '138.55',
        newPrice: '',
        size: 1,
        slug: 'goods17',
        img: '/chemical-means/15.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '18',
        title: 'Шампунь для автомийки Turbo Plus (20 л) ADR',
        code: 'PLUS/020',
        price: '342.14',
        newPrice: '',
        size: 1,
        slug: 'goods18',
        img: '/chemical-means/16.jpg',
        descriptionPrise: '',
        description: ''
    },
    {
        id: '19',
        title: 'Віск для мийки Sky Wax концентрат (25 л)',
        code: 'SKY/025',
        price: '595.58',
        newPrice: '',
        size: 1,
        slug: 'goods19',
        img: '/chemical-means/17.jpg',
        descriptionPrise: '',
        description: ''
    },
]

const arrChildCatalog = [
    {
        slug: '/mixrite-dispenser',
        title: 'Дозатор Mixrite'
    },
    {
        slug: '/dosatron',
        title: 'Дозатрони'
    },
    {
        slug: '/SEKO-EVO-series-pumps',
        title: 'Насоси SEKO серії EVO'
    },
    {
        slug: '/DOSATRON-repair-kits',
        title: 'Ремкомплекти DOSATRON'
    },
    {
        slug: '/MIXRITE-repair-kits',
        title: 'Ремкомплекти MIXRITE'
    },
    {
        slug: '/SEKO-EVO-repair-kits',
        title: 'Ремкомплекти SEKO EVO'
    },
    {
        slug: '/SEKO-KOMPACT-repair-kits',
        title: 'Ремкомплекти SEKO KOMPACT'
    },
]


function ChemicalMeans() {

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

            <TopButton index={4} />

            <NavProduct2 child={arrChildCatalog} back={'/product'}/>

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
                                    <span> Насоси та дозатори миючих засобів</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Насоси та дозатори миючих засобів</h1>
                    <div>
                        Насоси-дозатори та дозатори миючих засобів є основою обладнання кожної автомийки. Кузов
                        автомобіля можна лише ретельно вимити відповідними хімічними засобами, але однієї води
                        недостатньо. Інструменти, доступні в цій категорії, полегшать вашим клієнтам щоденне
                        використання автомийок, а вам заощадять на споживанні миючих засобів.
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
                        <Image src='/pump/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Що таке насос-дозатор?</h2>
                            <p>
                                Дозуючий насос переміщує точний об’єм рідини в певний час, забезпечуючи точну об’ємну
                                швидкість потоку. Це означає, що вони керують усім процесом розподілу хімікатів навколо
                                певного об’єкта/об’єкта. Дозувальні насоси використовуються в багатьох галузях
                                промисловості, включаючи дозування рідин, змішування хімічних речовин, обробку харчових
                                продуктів, очищення води та очищення стічних вод.
                            </p> <br/> <br/>
                            <p>
                                Без цього елемента також складно уявити добре працюючу автомийку. Дозування рідини
                                зручно не тільки для клієнтів автомийки, які не хочуть забруднитися хімікатами під час
                                чищення автомобіля, а й для власників бізнесу - завдяки інтелектуальному дозуванні насос
                                використовує саме ту кількість хімікатів, яка необхідна для миття автомобіля. Це
                                дозволяє заощадити гроші, захистивши підприємців від надмірного використання хімікатів.
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
                                <h2>Чому варто впроваджувати насоси-дозатори на автомийці?</h2> <br/>
                                <p>
                                    Для більшості людей автомийки – це спосіб підтримувати свій транспортний засіб у
                                    гарному та чистому вигляді. Вони зосереджуються не на перевірці хімікатів, які
                                    використовує автомийка, а на якості послуг, які вона пропонує. Основною метою
                                    кожного власника автомийки має бути надання високоякісних послуг за доступними
                                    цінами, щоб більше клієнтів поверталося за більшою кількістю послуг у майбутньому.
                                    Такий підхід дозволяє створити постійні стосунки з водіями та розвивати свій бізнес.
                                </p> <br/>
                                <p>
                                    Однак досягти цієї мети нелегко. Більшість конкурентів стягують дуже низьку плату за
                                    свої послуги та намагаються конкурувати виключно ціною, а не якістю чи задоволеністю
                                    клієнтів. Якщо ви не хочете знижувати якість пропонованих послуг, ви можете шукати
                                    економію в іншому місці. І тут стане в нагоді насос-дозатор. Він відповідає за
                                    доставку точно визначених доз хімічних речовин у воду.
                                </p> <br/>
                                <p>
                                    Занадто мала доза хімікату означає неефективне миття автомобіля. Занадто
                                    концентрований розчин може стати причиною мікропошкодження фарби і, як наслідок,
                                    проблем у власника автомийки. Дозувальні насоси розумно дозують саме ту кількість
                                    миючого засобу, яку ви вказали. Таким чином, ви можете використовувати високоякісні
                                    хімікати на вашій автомийці, заощаджуючи на надмірному споживанні.
                                </p> <br/>
                                <p>
                                    Однак економія - не єдина перевага насосів-дозаторів. Пропонуючи хороші продукти на
                                    автомийці, ви займаєте лідируючі позиції. Водії частіше користуються безпечними
                                    автомийками, де вони можуть швидко та легко помити машину. Для більшості з них не
                                    проблема проїхати далі, щоб скористатися перевіреною автомийкою, з якою вони мають
                                    хороший досвід. Думка клієнта є одним з найважливіших елементів у розвитку
                                    будь-якого бізнесу, тому варто подбати про те, щоб ваша автомийка отримувала тільки
                                    позитивні рекомендації. Це, безумовно, допоможе вам розвивати свій бізнес, залучати
                                    нових клієнтів і підтримувати відносини з постійними користувачами автомийки.
                                </p> <br/> <br/>
                                <h2>Як вибрати насоси-дозатори</h2> <br/>
                                <p>
                                    Вибираючи насос-дозатор для вашої автомийки, необхідно враховувати кілька елементів.
                                </p> <br/>
                                <p>
                                    Я впевнений, що перше, про що ви подумали, це ціна. Це важливо, але не повинно бути
                                    єдиним критерієм. Така стратегія часто призводить до покупки неякісного обладнання,
                                    яке не витримає експлуатації протягом тривалого часу і потребуватиме частого ремонту
                                    або навіть заміни. Однак це не означає, що вся малобюджетна техніка погана. Однак
                                    вибирайте хімічні насоси від надійних постачальників, щоб бути впевненим, що купуєте
                                    якісне обладнання.
                                </p> <br/>
                                <p>
                                    Вибираючи насос-дозатор, також варто враховувати тип хімікату, який ви будете
                                    використовувати. У більшості випадків автомийки використовують лужні розчини, але
                                    зустрічаються і кислотні. Вибір насоса-дозатора та його ущільнення слід здійснювати
                                    відповідно до цього фактора, щоб хімікат не пошкодив інструмент.
                                </p> <br/>
                                <p>
                                    Якщо ви хочете придбати відмінний насос-дозатор для автомийки, вам слід шукати
                                    фірми, які спеціалізуються в цій галузі. Вони мають великий досвід продажу таких
                                    пристроїв і знають, як вони працюють в різних ситуаціях. Крім того, вони можуть
                                    порадити вам вибрати правильний насос для вашого бізнесу.
                                </p> <br/>
                                <p>
                                    Тому ми запрошуємо вас перевірити повну пропозицію насосів-дозаторів і дозаторів
                                    миючих засобів у нашому магазині. У цій категорії ви також знайдете всі елементи,
                                    необхідні для правильної роботи та обслуговування насоса. Якщо у вас виникли
                                    питання, звертайтеся - ми обов'язково допоможемо підібрати найкраще обладнання для
                                    вашої мийки.
                                </p>
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

export default ChemicalMeans;