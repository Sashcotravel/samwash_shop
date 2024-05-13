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

                    <h1>Операції з платіжними картками</h1>
                    <div>
                        Операції платіжними картками на автомийці – це функціонал, який окупається! Перевірте, які
                        запасні елементи автомийки вам потрібні для безготівкових розрахунків для ваших клієнтів.
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
                            <h2>Карткові розрахунки – майбутнє чи тимчасовий тренд?</h2>
                            <p>
                                Основна ідея безконтактних мийок - ефективне обслуговування. Оплата платіжною карткою
                                ідеально підходить для цієї ідеї. Це дозволяє водіям заощадити багато часу, тому що,
                                відвідуючи автомийку, їм не потрібно турбуватися про наявність у гаманці монет певного
                                номіналу. Безготівковий розрахунок є швидким і безпроблемним, оскільки клієнту не
                                потрібно стояти в черзі з іншими людьми, щоб оплатити послугу. Платіжні термінали прості
                                у використанні і не становлять труднощів навіть для менш досвідчених користувачів.
                                Більше того, все більше торговельних і сервісних точок оснащуються такими пристроями,
                                тому їх наявність на автомийках нікого не здивує.
                            </p> <br/>
                            <p>
                                Ми живемо в часи, коли мати платіжну картку набагато очевидніше, ніж мати готівку.
                                Спостерігаючи за мінливими тенденціями ринку, власники деяких автомийок повністю
                                відмовляються від готівкових операцій і приймають оплату тільки карткою. Є багато
                                вказівок на те, що ми рухатимемося саме в цьому напрямку, тому варто подумати про
                                встановлення машини зараз. Клієнти зможуть розплачуватися будь-якими типами карток,
                                навіть телефоном чи годинником – просто піднесіть пристрій до зчитувача. Вже на етапі
                                будівництва мийки може бути встановлений термінал з можливістю оплати карткою, щоб
                                водіям було зручно користуватися послугами з самого початку. Зараз популярним трендом є
                                оснащення наявних автомийок платіжними зчитувачами. Вони можуть бути встановлені на
                                платіжному посту в одному місці або на робочому столі на кожному робочому місці.
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
                                <h2>Чому оплата карткою на автомийці стає все більш популярною?</h2>
                                <br/>
                                <p>
                                    Операції з платіжними картками все частіше обирають через зручність. Покупцям не
                                    потрібно мати готівку, а персоналу магазинів та інших торговельних і сервісних точок
                                    не потрібно турбуватися про наявність певних номіналів для здачі. Просто
                                    доторкніться карткою до терміналу, і відповідна сума буде перерахована на ваш
                                    рахунок як оплата послуги. Точно з цієї ж причини можна розраховуватися карткою на
                                    автомийках. Водіям не потрібно гадати, чи є у них при собі відрахована сума, щоб
                                    помити машину. Це означає, що вони можуть прийняти рішення в будь-який момент і без
                                    проблем скористатися послугами закладу. Для власника це може означати більший дохід,
                                    оскільки водій не скасовує послугу через відсутність монет.
                                </p> <br/>
                                <p>
                                    Переважна більшість людей мали можливість скористатися автоматами для монет: при
                                    купівлі квитка, оплаті паркувального збору чи на автомийці. Багато стикалися з
                                    проблемою випадання монет. Це викликає стрес і відлякує людей від користування
                                    послугою. Оплата безконтактною карткою повністю виключає цей ризик. Можливість
                                    оперативного розрахунку неодмінно підвищить рівень задоволеності послугами
                                    конкретної автомийки.
                                </p> <br/>
                                <h2>Які переваги оплати карткою для власника автомийки?</h2>
                                <br/>
                                <p>
                                    Оплата карткою на автомийці також означає значно вищий рівень безпеки: для клієнта,
                                    оскільки йому не потрібно носити з собою готівку, а також для власника. Автомийки
                                    іноді стають об’єктом злодіїв, які хочуть викрасти весь вміст монетоприймачів.
                                    Платіжні термінали легко знижують ризик втрати готівки. Крім того, це дає можливість
                                    негайно використовувати кошти в банківських операціях. Деякі власники повністю
                                    відмовляються від оплати грошима і додатково захищають свої термінали моніторингом.
                                    Ризик того, що захищений таким чином пристрій стане жертвою вандалів, дуже низький,
                                    і в такій ситуації зловмисників вдасться спіймати завдяки записам моніторингу.
                                </p> <br/>
                                <p>
                                    Термінал поступово стає одним із основних пристроїв, яким повинна бути оснащена
                                    кожна безконтактна мийка. Карткові платежі — це тенденція ринку, яка все ще
                                    зміцнюється, і немає ознак того, що вона зміниться. Тому, щоб підвищити
                                    конкурентоспроможність своєї мийки, її власник повинен якнайшвидше зважитися на таке
                                    рішення. Самообслуговування стає стандартом, і багато клієнтів цінують можливість
                                    користуватися послугою самостійно, не шукаючи здачі або просити інших клієнтів або
                                    працівників автомийки поміняти банкноти. Тут варто згадати ще одну перевагу оплати
                                    карткою. Для власника це означає відсутність потреби наймати людину для прийому
                                    готівки (якщо в закладі немає автоматів). Скорочуючи витрати, часто можна збільшити
                                    прибуток.
                                </p> <br/>
                                <p>
                                    Крім того, якщо безконтактні платежі картками стануть доступними на вашій автомийці,
                                    вам, як власнику, не доведеться часто відвідувати заклад, щоб спорожнити вміст
                                    автоматів для монет. Обладнавши свою автомийку терміналом, ви створите імідж
                                    сучасної та привабливої компанії.
                                </p> <br/>
                                <h2>Операції з платіжними картками – який термінал обрати та як його захистити?</h2>
                                <br/>
                                <p>
                                    Встановлені на даний момент термінали сумісні з багатьма пристроями
                                    самообслуговування, тому операції з платіжними картками повинні проходити
                                    безперебійно, без зайвих труднощів і збоїв. Найкращі автомати дозволяють здійснювати
                                    різні форми оплати. Варто враховувати, що клієнти мають різні види платіжних карток.
                                    Тому, якщо ви хочете створити місце, зручне для водія, вибирайте термінал, який
                                    дозволяє використовувати як чіп-картку, так і магнітну смугу. Оплата безконтактною
                                    карткою дуже важлива і використовується значною кількістю клієнтів для невеликих
                                    сум. Багато хто також вирішує використовувати для цього сучасний годинник або
                                    розплачуватися карткою по телефону. Є можливість налаштувати багато функцій і
                                    розширити можливості терміналу в залежності від очікувань власника та потреб
                                    клієнта. Тому перед покупкою переконайтеся, що конкретна модель дозволяє
                                    використовувати конкретні опції. Наша пропозиція включає добре укомплектований
                                    набір, який включає модем, зчитувач, кабелі, антени, SD-карту та навіть необхідні
                                    для складання гвинти.
                                </p> <br/>
                                <p>
                                    Перевірте, чи обраний виріб стійкий до вологи та шкідливих погодних умов.
                                    Переконайтеся, що модель зроблена міцно і при її виготовленні використовувалися
                                    тільки міцні матеріали. Подумайте про придбання додаткових елементів, щоб захистити
                                    своє обладнання від пошкоджень. Пропонуємо вашій увазі чохол-рідер, який ефективно
                                    захистить його від вологи та різного роду забруднень, які можуть істотно скоротити
                                    термін служби пристрою.
                                </p> <br/>
                                <p>
                                    Операції з платіжними картками на автомийці – чудовий спосіб охопити клієнтів, у
                                    яких немає готівки. Спостереження показують, що група прихильників безготівкових
                                    операцій постійно розширюється і ця тенденція триватиме. Тому ми заохочуємо вас
                                    виправдати очікування водіїв і оснастити вашу автомийку функціональними пристроями з
                                    низьким рівнем відмов. Це дозволить вам здійснити платіж: <br/> <br/>

                                    швидко, <br/>
                                    комфортно, <br/>
                                    безпечно. <br/> <br/>

                                    Запрошуємо всіх, кого цікавить пропозиція нашого інтернет-магазину, оформляти
                                    замовлення та зв’язуватися з нами у разі виникнення сумнівів. Ми з радістю
                                    проконсультуємо вас і покажемо, які рішення та продукти є найпопулярнішими. Ми
                                    постійно спостерігаємо за змінами тенденцій і пропонуємо нашим клієнтам найкращу
                                    якість. Протягом багатьох років ми оснащуємо автомийки апаратами з високими
                                    технічними параметрами, ефективною хімією та запчастинами. Переконайтеся самі, що
                                    співпрацювати з SamWash «Мійнє» варто!
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