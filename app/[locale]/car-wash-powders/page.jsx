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
        id: '11',
        title: 'Автомийний порошок Powder FF (25 кг), безфосфатний',
        code: 'PROFF/025',
        price: '366.63',
        newPrice: '298.78',
        size: 1,
        slug: 'goods11',
        img: '/chemical-means/9.jpg',
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
        img: '/chemical-means/10.jpg',
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
        img: '/chemical-means/11.jpg',
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
        img: '/chemical-means/12.jpg',
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
        img: '/chemical-means/13.jpg',
        descriptionPrise: '',
        description: '',
        bread1: '/chemical-means',
        bread2: '/car-wash-powders',
        bread3: '',
    },
]


function Powders() {

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
                                    <span>  Порошки для миття автомобіля</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1> Порошки для миття автомобіля</h1>
                    <div>
                        Кращий порошок для миття автомобіля містить ефективні миючі речовини, які допомагають швидко і
                        ефективно видалити різного роду забруднення. Ознайомтеся з нашою пропозицією порошків для миття
                        автомобіля та завоюйте довіру своїх клієнтів.
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
                            <h2>Як працюють ефективні порошки для миття автомобіля?</h2>
                            <p>
                                Не кожен порошок для безконтактної мийки працює однаково. Його високу якість визначають,
                                серед іншого: правильно вишуканий склад. До складу препарату обов’язково входить миючий
                                засіб, який допоможе розчинити будь-які забруднення. Найкращі засоби, які ви знайдете в
                                нашій пропозиції, ідеально підходять для видалення таких забруднень, як пил або наліт,
                                але вони також добре працюють у випадку сильного забруднення, наприклад, пташиного
                                посліду, слідів комах або опалого листя. Які характеристики найкращих порошків для миття
                                автомобіля? Вони повинні характеризуватися найвищою ефективністю.
                            </p> <br/>
                            <p>
                                У нашому інтернет-магазині ви знайдете не тільки ефективні, але й ефективні препарати.
                                Це важливо для власників автомийок, які шукають економічні рішення. Особливо варто
                                відзначити той факт, що продукція BKF характеризується високою ефективністю з одночасною
                                гарантією збереження працездатності. Висококонцентрованої кількості активних
                                інгредієнтів достатньо для ретельного миття автомобіля.
                            </p> <br/>
                            <p>
                                Купуючи певний товар, переконайтеся, що виробник дає користувачам гарантію безпеки.
                                Висока концентрація активних речовин має бути ефективною, але не повинна викликати
                                ризику пошкодження фарби. Кузов повинен бути чистим, на його поверхні не повинно бути
                                плям або, що ще гірше, подряпин. Порошки для миття автомобіля, представлені в нашій
                                пропозиції, безпечні не тільки для фарби, але й для всіх гумових, хромованих і
                                пластикових елементів, які є частиною конструкції автомобіля. Завдяки цьому кожен
                                власник автомийки може запропонувати своїм клієнтам найвищу якість і не хвилюватися про
                                будь-які пошкодження. Задоволений водій вийде з мийки з блискучою машиною, а через
                                деякий час повернеться помити машину туди ж!
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
                                <h2>На що звернути увагу, купуючи порошок для безконтактної мийки?</h2> <br/>
                                <p>
                                    Ефективність, економічність, безпека - це те, що відрізняє кращі автомийні порошки.
                                    Однак це ще не всі можливості! Хороші порошки для автомийок самообслуговування добре
                                    розчиняються у воді. Це означає, що вони створюють однорідний розчин і порошок не
                                    осідає на дно ємності. Таким чином, немає ризику, що водій буде мити транспортний
                                    засіб лише водою, а отже, буде розчарований отриманою якістю. Відповідна розчинність
                                    є гарантією стабільно високої якості.
                                </p> <br/>
                                <p>
                                    Крім того, продукція, яка є в нашому магазині, не викликає проблем із зависанням у
                                    годівницях. Тому вони працюють ефективно і не збільшують ризик відмови. Порошок для
                                    миття автомобіля BKF легко змивається. Щоб зняти його з кузова автомобіля без зайвих
                                    зусиль, знадобиться всього кілька хвилин. Крім того, порошок не залишає жодних плям,
                                    відкладень чи інших слідів, які можуть погіршити естетичну цінність автомобіля.
                                    Чисту та блискучу поверхню належним чином готують до нанесення полірувального
                                    засобу. На добре вимитому тілі забруднення осідають неохоче, а наступні прання
                                    набагато ефективніші.
                                </p> <br/>
                                <p>
                                    Ще одна особливість хороших порошків – відповідна формула. Дуже важливо, щоб
                                    заготовки не злежувалися під впливом вологи. Це дозволить вам використовувати весь
                                    вміст упаковки та ефективно використовувати його на автомийці. Кращі автомийні
                                    порошки:<br/> <br/>

                                    вони не матують фарбу, <br/>
                                    вони не дряпають кузов, <br/>
                                    не викликають зміни кольору.
                                </p> <br/>
                                <p>
                                    Дрібні гранули - відмінний препарат, який справляється навіть зі стійкими
                                    забрудненнями і гарантує безпеку не тільки кузова автомобіля, але і всього
                                    обладнання автомийки, забезпечуючи тим самим їх довгий термін служби і надійну
                                    роботу.
                                </p> <br/>
                                <h2>Чим відрізняються мийні порошки, які ви знайдете в нашому магазині?</h2> <br/>
                                <p>
                                    Ми знаємо, що водії та власники автомийок мають різні очікування щодо
                                    використовуваних хімікатів. Щоб задовольнити якомога більше клієнтів, ми пропонуємо
                                    різні види порошків. Вони відрізняються, серед іншого, за: вміст фосфору. Пропонуємо
                                    препарати:<br/> <br/>

                                    без фосфатів, <br/>
                                    низький вміст фосфору, <br/>
                                    з підвищеним вмістом фосфору.
                                </p> <br/>
                                <p>
                                    Зверніть увагу, що навіть порошок для миття автомобіля зі зниженим вмістом фосфору
                                    відмінно виконує свою практичну роль. Він ретельно та ефективно очищає, не залишаючи
                                    непривабливих смуг або плям. Продукція цієї категорії також відрізняється ароматом.
                                    Ми знаємо, що серед наших клієнтів є любителі лимонних і апельсинових ароматів - у
                                    нас є ідеальні пропозиції для них. Але тут також буде аромат свіжого бризу та
                                    жувальної гумки! Для тих, кому ефективність достатня, а запах не важливий, ми
                                    підготували порошок без запаху для безконтактної мийки, який також дуже подобається
                                    широкому колу водіїв.
                                </p> <br/>
                                <p>
                                    Вам цікаво, чому робити покупки в нашому магазині? Водії, які відвідують автомийки,
                                    хочуть досягти ефекту швидко і якісно без зайвих зусиль. Вибираючи пудру в нашому
                                    магазині, ви гарантуєте, що вони досягнуть своєї мети. Це підвищить їхню
                                    задоволеність послугами, що змусить їх повернутися в конкретне місце! Тому не буде
                                    перебільшенням сказати, що автомийні порошки, як і інша хімія, істотно впливають на
                                    прибутковість бізнесу. Вони не тільки дозволяють завоювати довіру клієнтів, але й
                                    дозволяють набагато довше насолоджуватися надійною роботою пристроїв на автомийці.
                                    Кожен із цих факторів важливий для прибутковості та задоволення власника від ведення
                                    бізнесу.
                                </p> <br/>
                                <p>
                                    У нашому магазині ви знайдете порошок для миття автомобіля, який не містить
                                    шкідливих речовин. Завдяки цьому ви дбаєте не лише про задоволення клієнтів, а й про
                                    природне середовище. Це цінна інформація, якою варто поділитися з клієнтами,
                                    оскільки багато з них хочуть зменшити використання корозійних хімікатів. Екологічна
                                    та ефективна мийка, яка ідеально відповідає потребам клієнтів! Ми гарантуємо нашим
                                    клієнтам, що рецептура кожного продукту цієї категорії була ретельно розроблена. Ми
                                    ретельно підібрали інгредієнти для досягнення максимально можливої ​​ефективності.
                                    Безпека транспортних засобів і користувачів однаково важлива для нас. Замовляйте
                                    автомийний порошок великої ємності та насолоджуйтеся продукцією найвищої якості! Ми
                                    гарантуємо професійне обслуговування, консультації спеціалістів та експрес-доставку
                                    замовлень. Переконайтеся самі, що з нами варто працювати! У комплексній пропозиції
                                    нашого магазину ви знайдете різноманітні миючі засоби, але не тільки це. Також ми
                                    пропонуємо запчастини, ремкомплекти та багато інших необхідних елементів обладнання
                                    для професійних автомийок.
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

export default Powders;