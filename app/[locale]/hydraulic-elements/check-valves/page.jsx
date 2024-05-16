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
        id: '362',
        title: 'Клапан зворотний 1" (ARCO)',
        code: 'ZAW-ZWR-ARC1',
        price: '63.16',
        newPrice: '',
        size: 1,
        slug: 'goods14-36',
        img: '/hydraulic/36.jpg',
        imageShow: ['/hydraulic/36.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '363',
        title: 'Клапан зворотний 3/8" GW 160 BAR PA',
        code: 'ZAW-SUT-001',
        price: '89.72',
        newPrice: '',
        size: 1,
        slug: 'goods14-37',
        img: '/hydraulic/37.jpg',
        imageShow: ['/hydraulic/37.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '364',
        title: 'Клапан зворотний латунний високого тиску MTM CK500 3/8" GW 280bar [1124080119]',
        code: 'ZAW-ZWR-MTM-1124080119',
        price: '55.92',
        newPrice: '',
        size: 1,
        slug: 'goods14-38',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            title: '',
            slug: '/hydraulic-elements/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
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

            <NavProduct2 back={'/hydraulic-elements'}/>

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
                                    <Link href='/hydraulic-elements'> Гідравлічні елементи</Link>
                                </li>
                                <li>
                                    <span> Зворотні клапани</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Зворотні клапани</h1>

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
                                Зворотні клапани </h2>
                            <p>
                                Зворотні клапани є безцінним елементом гідравлічної системи кожної автомийки.
                                Ці компоненти забезпечують правильну роботу автомийок. Перевірте, чому варто
                                інвестувати в якісні зворотні клапани.
                            </p> <br/>
                            <p>
                                У цій категорії ви знайдете різні моделі зворотних клапанів. Виберіть ті, які
                                найкраще підходять для вашої автомийки.
                            </p> <br/>
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Зворотні клапани - що це таке і чим вони корисні?</h2>
                            <p>
                                Зворотні клапани, хоч і здаються невеликим елементом складної системи автомийки,
                                відіграють ключову роль у її ефективній роботі. <b>Ці спеціалізовані компоненти
                                розроблені
                                для того, щоб забезпечити рух рідини в одному напрямку.</b> Завдяки цьому вони
                                забезпечують
                                оптимальний потік води в гідравлічній системі мийки, який необхідний для її правильної
                                роботи.
                            </p> <br/>
                            <p>
                                Завдяки зворотним клапанам вода та миючі засоби можуть бути контрольовано та
                                ефективно доставлені до відповідних частин автомийки.
                            </p> <br/>
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Використання зворотних клапанів на автомийках</h2>
                            <p>
                                Завдяки зворотним клапанам вода та миючі засоби можуть надходити до відповідних частин,
                                що необхідно для підтримки високої ефективності та якості обслуговування. Також вони
                                необхідні для захисту обладнання автомийки. Без них вода та мийні засоби можуть
                                повертатися назад, що може призвести до пошкодження обладнання. <b>Завдяки зворотним
                                клапанам ми можемо бути впевнені, що наша автомийка працюватиме ефективно та
                                безпечно</b>,
                                і нам не доведеться нести незапланованих витрат.
                            </p> <br/>
                            <p>
                                <b>Зворотні клапани також необхідні для забезпечення оптимальної роботи автомийки. </b>
                                Без них системи подачі води та миючих засобів можуть не працювати належним чином.
                            </p> <br/>
                            <p><b>
                                Використовуючи якісну арматуру, ми збільшуємо термін служби обладнання та економимо
                                гроші, які в іншому випадку довелося б витрачати на обслуговування або заміну
                                обладнання.
                            </b></p> <br/>
                            <p>
                                Крім того, без клапанів системи подачі води та миючих засобів можуть не працювати.
                            </p> <br/>
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Чому варто використовувати якісні зворотні клапани</h2>
                            <p>
                                Використання високоякісних зворотних клапанів на автомийці має багато переваг. <b>Перш
                                за
                                все, ці клапани надзвичайно міцні та стійкі до пошкоджень, що означає їх тривалий термін
                                служби.</b>
                            </p> <br/>
                            <p>
                                Нарешті, зворотні клапани прості в експлуатації та обслуговуванні. Більшість моделей
                                розроблено таким чином, щоб їх легко монтувати та демонтувати, що спрощує регулярний
                                огляд і обслуговування. <b>Завдяки цьому ви можете бути впевнені, що обладнання на вашій
                                автомийці працюватиме більш ефективно протягом тривалого часу, забезпечуючи надійність
                                та ефективність вашого бізнесу.</b>
                            </p> <br/>
                            <p>
                                Коли ви запускаєте автомийку, ви, звичайно, розумієте, наскільки важливо підібрати
                                відповідні компоненти для функціонування всієї машини. Звичайно, з клапанами справа не
                                відрізняється. <b>Як спеціалісти, які роками підтримують підприємців та допомагають
                                працювати автомийкам, ми знаємо, що навіть дрібниця може суттєво вплинути на якість
                                послуг, що надаються на автомийці. Тому, якщо</b> вам потрібна допомога у виборі
                                правильного обладнання, хімікатів або деталей для пральних машин, зверніться за
                                підтримкою до нас. Ми обов'язково з радістю відповімо та проконсультуємо!
                            </p> <br/>
                            <h2 style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}>
                                Зворотні клапана від автомийки SamWash</h2>
                            <p>
                                <b>Як лідер у виробництві автомийок, ми пропонуємо широкий вибір зворотних клапанів,
                                    адаптованих до різноманітних потреб і вимог.</b> У нашій пропозиції лише
                                високоякісні
                                товари, необхідні для правильної та ефективної роботи автомийки.
                            </p> <br/>
                            <p><b>
                                Завдяки зворотним клапанам з нашої пропозиції ви можете бути впевнені, що ваша
                                автомийка працюватиме ефективно та безпечно.
                            </b></p> <br/>
                            <p>
                                <b>Ми щиро запрошуємо Вас ознайомитися з повною пропозицією нашого магазину. У широкому
                                    асортименті ви знайдете все необхідне для роботи автомийки.</b> Це, звичайно,
                                зворотні клапани, описані вище, а також багато інших деталей і аксесуарів для пральних
                                машин, які використовуються як на автомийках самообслуговування, так і на портальних
                                автомийках. Ми впевнені, що Ви знайдете все необхідне для розвитку Вашого бізнесу!
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