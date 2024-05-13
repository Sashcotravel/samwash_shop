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
        id: '157',
        title: 'Кріплення монетоприймача та коместеро (без дисплея)(14-4-1)',
        code: 'MOC-WRZ-COM',
        price: '55.89',
        newPrice: '',
        size: 1,
        slug: 'goods5-8',
        img: '/system-payment/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/8.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '160',
        title: 'Дійсна кришка механізму та двері comestero (клапан з нержавіючої сталі + оргскло)',
        code: 'MOD-BKF-OSL-WRZ',
        price: '235.67',
        newPrice: '',
        size: 1,
        slug: 'goods5-11',
        img: '/system-payment/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/11.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '161',
        title: 'Кришка монетоприймача з оргскла',
        code: 'KLA-MTM-001',
        price: '78.41',
        newPrice: '',
        size: 1,
        slug: 'goods5-12',
        img: '/system-payment/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/12.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '162',
        title: 'Полікарбонатна пластина для клепаних монет валідатора і кришки comestero (прозора 3мм)',
        code: 'PLY-POL-WRZ-3MM',
        price: '24.33',
        newPrice: '',
        size: 1,
        slug: 'goods5-13',
        img: '/system-payment/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/13.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '163',
        title: 'Полікарбонатна пластина для кришки монетоприймача і коместеро (прозора 2 мм)',
        code: 'PLY-POL-WRZ',
        price: '26.94',
        newPrice: '',
        size: 1,
        slug: 'goods5-14',
        img: '/system-payment/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/14.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '165',
        title: 'Кабель CCTalk 50 см для модуля і змінного автомата',
        code: 'PRZ-CCT-50',
        price: '41.76',
        newPrice: '',
        size: 1,
        slug: 'goods5-16',
        img: '/system-payment/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/16.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '166',
        title: 'CCTalk кабель 70 см до робочого столу',
        code: 'PRZ-CCT-70',
        price: '43.67',
        newPrice: '',
        size: 1,
        slug: 'goods5-17',
        img: '/system-payment/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/17.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '168',
        title: 'Стрічка для 10-контактного монетника (35см)',
        code: 'TAS-10PIN-35',
        price: '58.28',
        newPrice: '',
        size: 1,
        slug: 'goods5-19',
        img: '/system-payment/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/19.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '169',
        title: 'Стрічка для 10-контактного монетника (60см)',
        code: 'TAS-10PIN-60',
        price: '48.77',
        newPrice: '',
        size: 1,
        slug: 'goods5-20',
        img: '/system-payment/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/20.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '170',
        title: 'Стрічка для 10-контактного монетника (70см)',
        code: 'TAS-10PIN-70',
        price: '76.83',
        newPrice: '',
        size: 1,
        slug: 'goods5-21',
        img: '/system-payment/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/21.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '172',
        title: 'Електронний монетоприймач (EMP 800.00) (1 секція, 10 PIN TAPE)',
        code: 'WRZ-WH-005',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-23',
        img: '/system-payment/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/23.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '173',
        title: 'Електронний валідатор монет (EMP 800.00) (4 секції, 10 PIN TAPE)',
        code: 'WRZ-WH-004',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-24',
        img: '/system-payment/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/24.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '174',
        title: 'Електронний монетоприймач (EMP 800.13) (WH v6 /E2/I/T 4 секції, кабель CC TALK)',
        code: 'WRZ-WH-003',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-25',
        img: '/system-payment/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/25.jpg', ],
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

            <NavProduct2 back={'/payment-systems/cash'}/>

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
                                    <Link href='/payment-systems/cash'> Готівка</Link>
                                </li>
                                <li>
                                    <span> Валідатори монет</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Валідатори монет</h1>
                    <div>
                        Ви думаєте, який монетоприймач для автомийки вибрати? Виберіть обладнання, яке забезпечить
                        ефективне та безпечне здійснення платежів вашим клієнтам. У цій категорії ви знайдете не тільки
                        електронні монетоприймачі, а й додаткові елементи, що дозволяють швидко зібрати виріб. Ми також
                        пропонуємо практичні аксесуари, такі як чохли та клапани, які додатково захистять ваше цінне
                        обладнання від пошкоджень, спричинених надмірною вологістю та водою.
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
                            <h2>Валідатор монет для автомийки – який вибрати і на що звернути увагу перед покупкою?</h2>
                            <p>
                                У цій категорії ми представляємо продукти, адаптовані для інтенсивного та щоденного
                                використання. Електронні монетоприймачі ідеально підходять для своєї практичної ролі.
                                Вони належним чином підготовлені до тривалої експлуатації в складних умовах на
                                автомийці. Тому вони виготовлені з міцних матеріалів, стійких до тривалого впливу вологи
                                та шкідливих погодних умов. Перш ніж купити певний монетоприймач для автомийки,
                                переконайтеся, що він сумісний з дисплеєм. Варто відзначити, що представлені в даній
                                категорії монетоприймачі для автомийок працюють надійно і без збоїв. Завдяки цьому
                                клієнти із задоволенням ними користуються, не боячись зупинки роботи або недостатньої
                                точності розпізнавання номіналів. Прилади відрізняються високим рівнем точності.
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
                                    Електронний монетоприймач - це багатофункціональний пристрій, який приймає не тільки
                                    монети, але і пристосований для прийому жетонів, які використовуються як платіжний
                                    засіб. Пристрої запрограмовані на зчитування монет номіналом 5 злотих, 2 злотих і 1
                                    злотий. Однак ви можете вільно вибирати номінали підтримуваних монет. Власник
                                    автомийки вирішує, як повинен працювати пристрій - він може вибрати конкретне
                                    рішення, яке відповідає його очікуванням і є відповіддю на потреби клієнтів
                                    автомийки.
                                </p> <br/>
                                <p>
                                    Монетоприймачі для автомийок і додаткові аксесуари можна знайти в нашому магазині
                                    <br/> <br/>
                                    Наші клієнти знайдуть у нас не тільки монетоприймачі для автомийок, а й додаткові
                                    елементи, необхідні для встановлення та забезпечення захисту обладнання під час
                                    експлуатації. <br/> <br/>
                                    Ми пропонуємо: <br/> <br/>
                                    обкладинки, <br/>
                                    стрічки, <br/>
                                    дроти, <br/>
                                    кріплення, <br/>
                                    в'єтнамки. <br/> <br/>

                                    Кожен із зазначених вище аксесуарів забезпечує ефективну роботу кожного електронного
                                    монетоприймача, а чохли додатково захищають його від вологи та води, які можуть
                                    становити загрозу для пристроїв під час миття автомобіля.
                                </p> <br/>
                                <h2>Монетоприймач для автомийки гарантує зручність для користувачів</h2>
                                <p>
                                    Монетоприймачі для автомийок повинні бути зручним обладнанням. Тому вибирайте прості
                                    та інтуїтивно зрозумілі пристрої, які дозволяють швидко та зручно здійснювати
                                    платежі. Пам'ятайте, що ваш візит на автомийку має пройти без проблем, а будь-які
                                    проблеми з оплатою можуть значно ускладнити його. Тому намагайтеся викликати у
                                    водіїв позитивні емоції, які змусять їх повернутися в конкретне місце. Скористайтеся
                                    нашою пропозицією та виберіть надійні електронні монетоприймачі, що гарантують
                                    високу якість. Ознайомтеся з продукцією, представленою в нашому магазині, і подбайте
                                    про комплексне оснащення вашої мийки. Ви підвищите конкурентоспроможність свого
                                    закладу та збільшите інтерес серед нових клієнтів.
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