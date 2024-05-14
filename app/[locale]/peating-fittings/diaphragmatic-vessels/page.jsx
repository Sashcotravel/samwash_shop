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
        id: '235',
        title: 'Розширювальний бак (CO) Cosmo Mag-H 25',
        code: 'NAC-PRZ-25L',
        price: '320.44',
        newPrice: '',
        size: 1,
        slug: 'goods9-12',
        img: '/fittings/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/12.jpg',],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '236',
        title: 'Плоский розширювальний бак (CO) Varem Flatvarem 8L [C2 008 231]',
        code: 'NAC-PRZ-6-CIMM',
        price: '262.40',
        newPrice: '',
        size: 1,
        slug: 'goods9-13',
        img: '/fittings/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/13.jpg',],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '237',
        title: 'Розширювальний бак 10 л',
        code: 'NACZ-PRZ-ACV-10L',
        price: '493.12',
        newPrice: '',
        size: 1,
        slug: 'goods9-14',
        img: '/fittings/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/14.jpg',],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '238',
        title: 'Розширювальний бак 8 л',
        code: 'NACZ-PRZ-ACV-8L',
        price: '398.84',
        newPrice: '',
        size: 1,
        slug: 'goods9-15',
        img: '/fittings/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/15.jpg',],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '239',
        title: 'Розширювальний бак REFIX DE 12 л (для холодної води)',
        code: 'NAC-PRZ-12L-Z',
        price: '292.68',
        newPrice: '',
        size: 1,
        slug: 'goods9-16',
        img: '/fittings/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/16.jpg',],
        descriptionFull: `
        <p></p><br/>
        `
    },
]


function MixriteDispenser() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
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

            <NavProduct2 back={'/peating-fittings'}/>

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
                                    <Link href='/peating-fittings'> Опалювальна арматура</Link>
                                </li>
                                <li>
                                    <span> Діафрагмальні судини</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Діафрагмальні судини</h1>

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
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Діафрагмальні судини</h2>
                            <p><b style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Розширювальні баки необхідні для підтримки стабільного тиску в системі. Завдяки їм вода
                                доставляється до відповідних частин автомийки контрольовано та ефективно. Без
                                розширювальних баків система мийки не могла б нормально працювати. Ці малопомітні
                                елементи відіграють надзвичайно важливу роль у забезпеченні правильної та ефективної
                                роботи автомийки.
                            </b></p> <br/>
                            <p><b style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Радимо ознайомитись з нашою пропозицією розширювальних баків. Ми впевнені, що висока
                                якість нашої продукції та її конкурентоспроможна ціна спонукатимуть вас до покупки в
                                нашому інтернет-магазині.
                            </b></p> <br/>
                            <p><b style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Використання розширювальних баків на автомийках
                            </b></p> <br/>
                            <p>
                                Посудини з діафрагмою працюють шляхом розділення двох середовищ - води та повітря - за
                                допомогою гнучкої діафрагми. Вода в посудину подається під тиском, що викликає
                                розширення діафрагми і стиснення повітря. Коли тиск води падає, стиснене повітря
                                розширюється, виштовхуючи воду з посудини та підтримуючи постійний тиск у системі.
                            </p> <br/>
                            <p>
                                На автомийках розширювальні баки використовуються в системах питної води для миття та в
                                контурі опалення бетонних підлог. Без належного функціонування розширювальних баків тиск
                                води може значно коливатися, що негативно вплине на якість мийки та термін служби
                                компонентів автомийки.
                            </p> <br/>
                            <p>
                                Розширювальні баки надзвичайно універсальні і можуть використовуватися в різних типах
                                автомийок, від невеликих мийок самообслуговування з однією станцією до великих
                                автоматичних мийок з декількома станціями.
                            </p> <br/>
                            <p>
                                Також варто відзначити, що розширювальні баки доступні в різних розмірах і
                                конфігураціях, що дозволяє адаптувати їх до конкретних потреб і вимог кожної автомийки.
                                Наш магазин пропонує багато моделей, тож ви можете підібрати компонент до обладнання,
                                яке використовуєте у своєму бізнесі. У нас ви завжди знайдете потрібний продукт, який
                                відповідатиме вашим очікуванням.
                            </p> <br/>
                            <p>
                                Варто також відзначити, що розширювальні баки прості у використанні та обслуговуванні.
                                Більшість моделей сконструйовано таким чином, щоб їх легко складати та розбирати. Це
                                полегшує регулярні перевірки та обслуговування. Завдяки цьому ви можете бути впевнені,
                                що ваші судини діафрагми будуть функціонувати ефективно протягом тривалого часу.
                                Використовуючи запчастини та техніку від перевірених постачальників, ви забезпечуєте
                                надійність та ефективність вашої мийки.
                            </p> <br/>
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Переваги використання розширювальних баків на автомийці</h2> <br/>
                            <p>
                                Розширювальні баки забезпечують стабільний тиск в системі. Тиск має вирішальне
                                значення для належної та ефективної роботи автомийки.
                            </p> <br/>
                            <p>
                                Перш за все, розширювальні баки захищають систему мийки від впливу різких перепадів
                                тиску (так званих гідроударів). Такі стрибки можуть призвести до поломки важливих
                                елементів автомийки, наприклад бойлера. Гідравлічні стрибки без функціонального
                                розширювального бака можуть призвести до дорогого ремонту та простою. Завдяки
                                діафрагмальним судинам ризик виникнення таких проблем значно знижується.
                            </p> <br/>
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Розширювальні баки, які пропонує автомийка SamWash</h2> <br/>
                            <p>
                                У SamWash Group ми пропонуємо широкий вибір розширювальних баків, які ідеально підходять
                                для потреб автомийок.
                                <b style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                    Наші розширювальні баки виготовлені відомими виробниками та
                                    відрізняються високою якістю, довговічністю та надійністю.
                                </b>
                            </p> <br/>
                            <p>
                                А якщо ви маєте автомийку і шукаєте перевіреного постачальника всього обладнання та
                                аксесуарів для машин, обов'язково ознайомтеся з повною пропозицією нашого магазину. Там
                                ви знайдете все необхідне для забезпечення нормальної роботи вашої мийки. Запрошуємо
                                вас! Якщо у вас виникли запитання, зв'яжіться з нами в повідомленнях!
                            </p> <br/>
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