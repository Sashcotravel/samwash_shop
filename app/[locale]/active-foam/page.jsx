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
        id: '1',
        title: 'Активна піна для миття автомобіля Blue Foam (20л), синій колір',
        code: 'BLUE/020',
        price: '263.27',
        size: 1,
        slug: 'goods1',
        img: '/chemical-means/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: '/chemical-means',
        bread2: '/active-foam',
        bread3: '',
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
        descriptionPrise: '',
        bread1: '/chemical-means',
        bread2: '/active-foam',
        bread3: '',
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
        descriptionPrise: '',
        bread1: '/chemical-means',
        bread2: '/active-foam',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '/active-foam',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '/active-foam',
        bread3: '',
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
        description: '',
        bread3: '',
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
        description: '',
    },
]


function ActiveFoam() {

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

            <NavProduct2 back={'/chemical-means'}/>

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
                                    <Link href='/chemical-means'> Хімічні засоби для безконтактної мийки</Link>
                                </li>
                                <li>
                                    <span> Активна піна для миття автомобіля</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Активна піна для миття автомобіля</h1>
                    <div>
                        Ефективне та ефективне видалення бруду з автомобіля є головним завданням кожної автомийки. Це
                        можливо завдяки встановленим приладам та ефективним хімікатам. Активна піна для миття автомобіля
                        - це базова категорія миючих засобів, яка не може бути відсутнім на жодній професійній
                        автомийці! Дізнайтеся, яку роль він відіграє та на що варто звернути увагу під час покупок. Якою
                        має бути найкраща піна?
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
                            <h2>Яка активна піна для миття автомобіля найкраща? На що варто звернути увагу
                                перед покупкою?</h2>
                            <p>
                                Активні піни для автомийки виконують одну основну роль: правильну підготовку кузова
                                автомобіля до основного миття. Тому дуже важливо точно визначити характеристики, якими
                                повинні володіти найкращі продукти. Препарати мають працювати ефективно – у цьому ми не
                                сумніваємося. Тому в нашому інтернет-магазині ви знайдете чудові продукти з доведеною
                                ефективністю. Як досвідчений виробник мийки ми пропонуємо вам продукцію з продуманими
                                формулами і ретельно розробленими складами. Завдяки цьому водії, які користуються
                                послугами автомийки, можуть насолоджуватися ідеально чистим автомобілем, а власники –
                                розширити коло задоволених клієнтів.
                            </p> <br/> <br/>
                            <p>
                                Ще однією особливістю піни для миття автомобіля є її гарантія безпеки для лакофарбового
                                покриття автомобіля. Всі продукти з нашої пропозиції безпечні для кузова і не
                                пошкоджують ніжні пластикові, гумові або хромовані елементи. Вони ретельно закривають
                                всі куточки та ефективно видаляють забруднення різного походження та ступеня тяжкості.
                                Активна піна безпечна для лакофарбового та захисного покриття, і при цьому ефективно
                                видаляє всі забруднення.
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
                                <h2>Активні піни для автомийки – виберіть правильний тип</h2> <br/>
                                <p>
                                    Активна піна для автомийки - це широка група засобів, що відрізняються за певними
                                    параметрами. Здійснюючи покупку, зверніть увагу на нейтральну або лужну піну. Чим
                                    вони відрізняються? Активна піна з нейтральним рН добре справляється з нальотом і
                                    пилом, ідеально підходить для частого прання. Лужні засоби, навпаки, діють сильніше.
                                    Вони ефективно та результативно пом’якшують забруднення, а отже, ефективно видаляють
                                    забруднення, які довго залишаються.
                                </p> <br/>
                                <p>
                                    Пам'ятайте, що активна піна для миття автомобіля допоможе вам досягти найкращих
                                    результатів лише за умови її використання відповідно до рекомендацій виробника.
                                    Суворе дотримання інструкцій підвищує безпеку та знижує ризик пошкодження кузова.
                                    Тому уважно прочитайте інформацію, що міститься в описі продукту, і використовуйте
                                    продукт за призначенням і у відповідній концентрації. Активна піна, використана за
                                    призначенням, гарантує ефективність і безпеку для автомобілів і користувачів.
                                </p> <br/>
                                <p>
                                    Активна піна для миття автомобіля також відрізняється кольором і запахом. Любителі
                                    класики знайдуть продукти, які створюють білий, обволікаючий пух - доступні у версії
                                    без запаху. Якщо ви хочете подарувати своїм клієнтам незабутні враження від запаху,
                                    вирішіть купити пінку з оригінальним ароматом:<br/> <br/>

                                    свіжий вітерець, <br/>
                                    вишні, <br/>
                                    зелене яблуко.
                                </p> <br/>
                                <p>
                                    Препарати з цієї категорії доступні в різних кольорах: рожевому, блакитному і
                                    зеленому. Варто брати до уваги очікування клієнтів, які відвідують автомийку, і
                                    пропонувати їм миючі засоби, які змусять їх повернутися в конкретний заклад.
                                </p> <br/>
                                <h2>Активна піна для миття автомобіля доступна на samwash.ua – чому її варто
                                    купувати?</h2> <br/>
                                <p>
                                    У нашому магазині купують як власники автомийок, так і люди, які займаються
                                    постачанням таких об’єктів. Вони чудово знають, що висока результативність і
                                    ефективність сприяють розширенню кола задоволених клієнтів і продовженню терміну
                                    служби пристроїв, що працюють на автомийці. Унікальні формули виправдовують
                                    очікування всіх користувачів! Широкий вибір різноманітних товарів означає, що кожен
                                    знайде продукт відповідно до своїх потреб. Пам'ятайте, що активна піна для миття
                                    автомобіля не тільки видаляє залишки бруду, але й захищає лакофарбове покриття та
                                    знижує ризик подальшого осідання бруду. Завдяки цьому базове прання ефективніше!
                                    Водій, який відчуває високу ефективність мийки і не потребує жодних зусиль для
                                    процесу, неодмінно повернеться на конкретну автомийку та заохочуватиме своїх друзів
                                    робити те ж саме. Тому активна піна є одним із факторів успіху бізнесу – це
                                    твердження не є перебільшенням. Це підтверджують задоволені клієнти нашого
                                    інтернет-магазину!
                                </p> <br/>
                                <p>Наша хімія для миття автомобіля - це, перш за все, гарантія:</p> <br/>
                                <p>
                                    Пропонуємо вам уважніше ознайомитись з наявним асортиментом у цій категорії та
                                    оформити замовлення. Оснастіть свою автомийку відмінною хімією для чищення та
                                    догляду за транспортними засобами, і ваш заклад почне відвідувати все більше
                                    клієнтів. Також зверніть увагу на інші засоби, такі як порошки, шампуні та
                                    ополіскувачі. Ми гарантуємо найвищу якість продукції та професійне обслуговування.
                                    Оформіть замовлення, і ми негайно його обробимо! Переконайтеся самі, що з
                                    професіоналами галузі варто працювати. Ви знайдете все необхідне обладнання для
                                    автомийки в одному місці!
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

export default ActiveFoam;