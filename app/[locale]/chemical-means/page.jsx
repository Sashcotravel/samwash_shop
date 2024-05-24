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
        img: '/test/3.jpg',
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
        bread1: '/chemical-means',
        bread2: '/active-foam',
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
        bread1: '/chemical-means',
        bread2: '/active-foam',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '',
        bread3: '',
    },
    {
        id: '11',
        title: 'Автомийний порошок Powder FF (25 кг), безфосфатний',
        code: 'PROFF/025',
        price: '366.63',
        newPrice: '298.78',
        size: 1,
        slug: 'goods11',
        img: '/test/4.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 319,92 доларів',
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-powders',
        bread3: '',
    },
    {
        id: '12',
        title: 'Порошок LF порошок мийний (25 кг), аромат',
        code: 'PROLF/025',
        price: '343.29',
        newPrice: '',
        size: 1,
        slug: 'goods12',
        img: '/test/5.jpg',
        descriptionPrise: '',
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-powders',
        bread3: '',
    },
    {
        id: '13',
        title: 'Порошок ORANGE FF автомийний порошок (25 кг), без фосфатів, аромат',
        code: 'ORANGEFF/025',
        price: '402.21',
        newPrice: '',
        size: 1,
        slug: 'goods13',
        img: '/test/6.jpg',
        descriptionPrise: '',
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-powders',
        bread3: '',
    },
    {
        id: '14',
        title: 'Автомийний порошок Powder Ultra (25 кг)',
        code: 'PROULT/025',
        price: '554.95',
        newPrice: '441.61',
        size: 1,
        slug: 'goods14',
        img: '/test/7.jpg',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки: 474,73 злотих',
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-powders',
        bread3: '',
    },
    {
        id: '15',
        title: 'Порошок Автомийний порошок Ultra Fresh (25 кг), аромат',
        code: 'PROFRESH/025',
        price: '562.15',
        newPrice: '',
        size: 1,
        slug: 'goods15',
        img: '/test/2.jpg',
        descriptionPrise: '',
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-powders',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-shampoos',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-shampoos',
        bread3: '',
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
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-waxes',
        bread3: '',
    },
]

const arrChildCatalog = [
    {
        slug: '/chemical-means/active-foam',
        title: 'Активна піна для миття автомобіля'
    },
    {
        slug: '/chemical-means/car-wash-powders',
        title: 'Порошки для миття автомобіля'
    },
    {
        slug: '/chemical-means/car-wash-shampoos',
        title: 'Шампуні для миття автомобіля'
    },
    {
        slug: '/chemical-means/car-wash-waxes',
        title: 'Воски для миття автомобіля'
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

            <NavProduct2 child={arrChildCatalog} back={'/product'} />

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
                                    <span> Хімічні засоби для безконтактної мийки</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Хімічні засоби для безконтактної мийки</h1>
                    <div>
                        Вам цікаво, якими мають бути найкращі продукти для безконтактної мийки? Ми не сумніваємося, що
                        найважливішою особливістю є їх ефективність. Наш інтернет-магазин пропонує широкий вибір
                        різноманітних високоефективних препаратів. Вони безпечні для фарби та ефективно зберігають
                        кузов, запобігаючи подальшому накопиченню бруду та полегшуючи миття автомобіля в майбутньому.
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
                                        <p className={s.client_code}>Код виробника:  <b> {item?.code}</b></p>
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
                        <Image src='/accees/desc1.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Хімічні засоби для безконтактної мийки – якими вони повинні бути? На що звернути
                                увагу перед покупкою, щоб зробити найкращий вибір?</h2>
                            <p>
                                Найкраща хімія для безконтактних мийок повинна бути ефективною - ми в цьому не
                                сумніваємося. Тому всі товари, які ви знайдете в цій категорії, вирізняються чудовими
                                характеристиками. Ми усвідомлюємо, що водії, відвідуючи автомийку, хочуть швидко та
                                ретельно очистити свій автомобіль. Тому ми пропонуємо вам придбати препарати з доведеною
                                ефективністю. Вони дуже добре видаляють забруднення різного походження. Вони видаляють
                                легкий пил і відкладення, а також інтенсивні забруднення, що виникають в результаті
                                використання автомобіля. Ще одна особливість хімії для безконтактної мийки –
                                ефективність. Набагато більш економним рішенням є придбання препаратів інтенсивної
                                концентрації. Ефективність і ефективність повинні йти рука об руку, тому, як професійний
                                і досвідчений виробник автомийки, ми пропонуємо лише продукти, які поєднують обидві
                                функції.
                            </p> <br/> <br/>
                            <p>
                                Професійна хімія для автомийки повинна мати ще одну особливість. Мова йде про безпеку
                                кузова і всіх додаткових елементів конструкції автомобіля (особливо чутливих). Купуючи у
                                нас, ви можете бути впевнені, що автомобіль вашого клієнта буде ефективно очищено за
                                короткий час, без ризику пошкодження фарби. Верхній шар буде захищений і захищений від
                                подальшого забруднення. Клієнту не доведеться знову йти на автомийку через кілька днів.
                                Збитків власникам автомийки це, всупереч видимості, не принесе! Задоволені водії будуть
                                набагато охочіше відвідувати місце, де вони зможуть професійно та ефективно подбати про
                                свій автомобіль.
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
                                <h2>Автомийники – які варто вибрати?</h2> <br/>
                                <p>
                                    Автомобілі постійно піддаються впливу шкідливих факторів. Проте найкраща хімія для
                                    безконтактних мийок, яку ви можете знайти в нашому інтернет-магазині, ефективно та
                                    надовго видаляє: <br/> <br/>
                                    - пил, <br/>
                                    - бруд, <br/>
                                    - пташиний послід, <br/>
                                    - сліди комах.
                                </p> <br/>
                                <p>
                                    Основні категорії засобів для миття автомобілів діляться на рідкі та порошкоподібні
                                    препарати. Варто вибирати висококонцентровані препарати. Виберіть тип засобу,
                                    адаптований до конкретної мийки. Пропонуємо широкий вибір різноманітних препаратів.
                                    Ми знаємо, що уподобання власників і користувачів можуть відрізнятися, тому ми також
                                    продаємо активні піни. В наявності активна піна для безконтактної мийки з
                                    нейтральним запахом і білим кольором. Ви також знайдете густу та ароматну піну,
                                    наприклад у відтінках рожевого або блакитного. Незалежно від того, який продукт ви
                                    виберете, ви можете бути впевнені, що він ідеально пом'якшить навіть стійкі
                                    забруднення. Це істотно прискорює весь процес і підвищує рівень ефективності.
                                    Найкращі хімікати для безконтактної мийки доступні з різними ароматами. У нас є
                                    пропозиції для тих, хто любить аромат свіжості після миття автомобіля, запах
                                    цитрусових, апельсинів, зелених яблук або оригінальний солодкий аромат жувальної
                                    гумки!
                                </p> <br/>
                                <p>
                                    Порошки і рідини відмінно справляються з відкладеннями і забрудненнями, що
                                    утворюються в результаті атмосферних опадів. Вони не залишають розводів, а чистий
                                    автомобіль набагато стійкіший до майбутніх забруднень. Достатньо лише невеликої
                                    кількості продукту, щоб отримати задовільний результат: ідеально чистий, ароматний і
                                    блискучий автомобіль! Багато хто задається питанням, чи варто інвестувати в миючі
                                    засоби? Виявилося, що хімікати для безконтактної мийки, призначені для професійного
                                    використання, значно підвищують задоволеність клієнтів. Це безпосередньо означає
                                    збільшення трафіку в закладі та, як наслідок, максимізацію прибутку.
                                </p> <br/>
                                <h2>Професійна хімія для автомийок для особливих завдань</h2> <br/>
                                <p>
                                    Ми розуміємо, що миття кузова - це лише одне із завдань, які стоять перед
                                    автомийкою. Також в автомобілі є додаткові пластикові та хромовані елементи, які
                                    потребують особливої ​​уваги. Бруд часто осідає на дисках і ковпаках, але килими та
                                    оббивка також потребують ретельного очищення. Тому хімічні засоби для безконтактної
                                    мийки - це концентровані препарати, призначені для частого миття дисків і ковпаків.
                                    Їх робота полягає у видаленні забруднень, що виникли в результаті експлуатації, в
                                    тому числі: про покриття гальмівних колодок. Ми гарантуємо вам доступ до професійних
                                    продуктів, безпечних для всіх вузлів автомобіля. Сильна концентрація дозволила
                                    досягти високої продуктивності. Навіть невеликої порції продукту достатньо, щоб
                                    ефективно видалити навіть сильні забруднення. До складу безконтактної хімії для
                                    миття також відносяться препарати, призначені для миття автомобільних сидінь,
                                    килимів і оббивки. Якими характеристиками повинні володіти найкращі продукти цієї
                                    категорії? Перш ніж зробити вибір, переконайтеся, що продукт: <br/> <br/>

                                    ефективно очищає, <br/>
                                    має знежирюючі властивості, <br/>
                                    доглядає навіть за делікатною тканиною, <br/>
                                    він безпечний для кольорів і не знебарвлює їх.
                                </p> <br/>
                                <p>
                                    Саме такі засоби для миття автомобілів ви знайдете в нашій пропозиції. Вони не
                                    містять корозійних речовин, тому гарантують безпеку оббивки. При цьому не варто
                                    турбуватися про низьку ефективність! Ефективність миття забезпечується правильно
                                    складеним складом на основі відповідних діючих речовин, об’єднаних у комплекси.
                                </p> <br/>
                                <p>
                                    Професійна хімія для автомийок не може обмежуватися тільки мийкою транспорту - хоча
                                    це її основне завдання. Однак не менш важливим є захист кузова автомобіля та надання
                                    йому блиску. Кожен власник хоче, щоб його автомобіль виглядав акуратно і красиво
                                    сяяв. Немає жодного питання про створення непривабливих смуг. Усвідомлюючи,
                                    наскільки важливий для користувача зовнішній вигляд і стан автомобіля, ми пропонуємо
                                    придбати полірувальні засоби. Ефективне просочення ідеально захищає кузов від
                                    подальшого забруднення та надає автомобілю елегантний вигляд. Ви знайдете продукти,
                                    які забезпечують тривалий ефект. Багато з них висихають автоматично і не вимагають
                                    додаткового потоку повітря. Зверніть увагу на висококонцентровані продукти, які
                                    відрізняються винятковою ефективністю та дієвістю. Перша властивість важлива для
                                    власника автомийки, який зможе обмежити покупки, а друга стає найвищою цінністю для
                                    клієнтів. Правильно підібрана хімія для безконтактної мийки дозволить водіям охочіше
                                    і частіше відвідувати певний пункт. Гарантуючи найвищу якість, швидкість і
                                    ефективність прання, власник може розраховувати на схвальні відгуки. Задоволені
                                    користувачі передадуть інформацію своїм друзям, а коло клієнтів значно розшириться.
                                </p> <br/>
                                <h2>Хімічні засоби для миття автомобіля – чому варто
                                    купувати на samwash.ua?</h2> <br/>
                                <p>
                                    Як бачите, хімікати для автомийок – це набагато більше, ніж просто засоби для
                                    чищення та поліролі. Правильні хімікати збільшать ваші доходи - чим раніше ви
                                    придбаєте правильні препарати, тим швидше окупите свої інвестиції. Наразі клієнти
                                    підкреслюють, що висока якість є ключовою характеристикою, яку вони очікують при
                                    використанні будь-яких послуг. Це стосується і обладнання для автомийок! Пам'ятаючи
                                    про вимоги водіїв, ми вирішили запропонувати вам професійну хімію для безконтактних
                                    мийок, яку можна використовувати на будь-якому об'єкті.
                                </p> <br/>
                                <p>Наша хімія для миття автомобіля - це, перш за все, гарантія:</p> <br/>
                                <p>
                                    висока якість, <br/>
                                    ефективність дії, <br/>
                                    ефективність, <br/>
                                    безпечність фарби.
                                </p> <br/>
                                <p>
                                    Ще одна особливість, яка відрізняє нашу продукцію для автомийок, це її екологічна
                                    безпека. У цій категорії ми представляємо вам продукти, які відповідають найвищим
                                    стандартам і суворим нормам. Вони містять біорозкладні речовини, які однаково
                                    ефективно видаляють складні забруднення. Ми знаємо, що тема екології обговорюється
                                    все частіше і навіть маленькі кроки для захисту навколишнього середовища мають
                                    значення. Тому, як відповідальний виробник мийних засобів, ми хочемо надати нашим
                                    клієнтам можливість придбати такі препарати. Це цінна інформація, якою ви можете
                                    похвалитися серед своїх клієнтів і таким чином отримати ще більше визнання в їхніх
                                    очах.
                                </p> <br/>
                                <p>
                                    Не чекайте і замовляйте засоби для миття автомобіля в нашому інтернет-магазині вже
                                    зараз. Також вас чекає широкий вибір запчастин для різних пристроїв і повне
                                    обслуговування на найвищому рівні. Ми гарантуємо професійну консультацію та швидке
                                    виконання замовлення. Скористайтеся нашою пропозицією та подаруйте своїм клієнтам
                                    найкращу якість на ринку!
                                </p>
                            </div>
                            <br/> <br/> <br/>
                            <h3>Питання що часто задаються:</h3> <br/>
                            <dl className={s.dl}>
                                <dt>Які характеристики найкращих продуктів для безконтактної мийки?</dt>
                                <dd>Вони ефективні, ефективні та безпечні для фарби та інших елементів автомобіля.
                                    Вони забезпечують ідеальну чистоту, блиск і захист кузова від подальшого
                                    забруднення.
                                </dd>
                                <dt>Яка хімія найчастіше використовується для безконтактної мийки?</dt>
                                <dd>Порошки та рідкі миючі засоби, тобто активна піна та шампуні. Також
                                    використовуються відповідні препарати для чищення ободів та оббивки.
                                </dd>
                                <dt>Чи SamWash Group пропонує безпечну для навколишнього середовища
                                    хімію для автомийки?
                                </dt>
                                <dd>Так, багато продуктів, представлених у нашому магазині, містять біорозкладані
                                    речовини, які не мають шкідливого впливу на природне середовище.
                                </dd>
                            </dl>
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