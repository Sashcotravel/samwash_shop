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
        id: '204',
        title: 'Двигун пилососа 1200 Вт',
        code: 'S0SO03890',
        price: '363.05',
        newPrice: '',
        size: 1,
        slug: 'goods7-19',
        img: '/accessories/19.jpg',
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
        imageShow: ['/accessories/19.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '209',
        title: 'Щітка двигуна пилососа',
        code: 'S0SOTOGB839',
        price: '26.33',
        newPrice: '',
        size: 1,
        slug: 'goods7-23',
        img: '/accessories/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/engines-and-turbines',
            title: 'Двигуни і турбіни',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/23.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '210',
        title: 'Турбіна 3kW 50Hz SEKO (84148080)',
        code: 'TUR-SEK-3',
        price: '2103.00',
        newPrice: '',
        size: 1,
        slug: 'goods7-24',
        img: '/accessories/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/engines-and-turbines',
            title: 'Двигуни і турбіни',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/24.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '212',
        title: 'Прокладка для турбіни пилососа 1200 Вт (00119)(KTRI04216)',
        code: 'S0SO03901',
        price: '7.44',
        newPrice: '',
        size: 1,
        slug: 'goods7-26',
        img: '/accessories/26.jpg',
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
        imageShow: ['/accessories/26.jpg', ],
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
                                    <span> Двигуни і турбіни</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Двигуни і турбіни</h1>
                    <div>
                        Забезпечте найкращу якість прибирання з професійним пилососом на безконтактній мийці. У
                        нашій пропозиції є професійні аксесуари для пилососів на автомийках. Перевірте пропозицію!
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
                            <h2>Двигун пилососа - найважливіший елемент цього обладнання</h2>
                            <p>
                                Потужні двигуни є важливим елементом оснащення кожного пилососа, в тому числі і тих, що
                                використовуються в якості додаткових пристроїв на автомийках. У таких пилососах часто
                                використовуються універсальні двигуни, які відрізняються простою конструкцією і відносно
                                невисокою ціною. У випадку пилососів, які вимагають високої потужності всмоктування та
                                інтенсивної роботи, використовуються також більш технологічні двигуни, такі як
                                промислові двигуни або т.зв. поршневі двигуни.
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
                                    Варто відзначити, що двигун пилососа є одним з найважливіших його елементів. Він
                                    відповідає за потужність всмоктування і ефективність обладнання. Без справного
                                    двигуна пилосос не матиме належної потужності, а отже, не зможе ефективно видаляти
                                    бруд і забруднення з поверхні оббивки.
                                </p> <br/>
                                <p>
                                    Тому у випадку з пилососами для автомийки ключову роль відіграють двигуни. Ці
                                    пристрої призначені для очищення великих поверхонь і вимагають величезної потужності
                                    всмоктування. Ось чому вибір правильного двигуна пилососа має вирішальне значення
                                    для забезпечення ефективності та ефективності пристрою. Двигун повинен бути
                                    адаптований до специфіки пилососа та умов його використання. При виборі двигуна
                                    також варто звернути увагу на потужність, обороти, крутний момент і ступінь захисту
                                    від вологи і пилу. Одним із рекомендованих двигунів пилососа є модель 1200 Вт,
                                    доступна в нашій пропозиції. Даний виріб характеризується не тільки високою
                                    потужністю, але також низьким рівнем шуму і ефективністю. Це зробить очищення
                                    автомобіля швидшим і ефективнішим, а весь процес буде приємнішим.
                                </p> <br/>
                                <h2>Чому варто вибрати хороший мотор для пилососа?</h2> <br/>
                                <p>
                                    Двигуни пилососа надзвичайно важливі для правильної роботи пристрою, а отже, для
                                    ефективного прибирання автомобілів на автомийках. Двигуни пилососа відповідають за
                                    створення потоку повітря, який забезпечує ефективне всмоктування бруду та пилу з
                                    поверхні. Без потужного двигуна пилосос не зможе ефективно мити транспортні засоби
                                    та підтримувати чистоту на автомийці.
                                </p> <br/>
                                <p>
                                    Використання двигунів пилососа має багато переваг. Перш за все, вони дозволяють
                                    ефективно та швидко очистити автомобілі, що підвищує комфорт клієнтів при
                                    використанні мийки. Крім того, двигуни пилососа дуже міцні і довговічні, тому не
                                    вимагають частої заміни. Це, в свою чергу, призводить до зниження експлуатаційних
                                    витрат пристрою. Крім того, пилососи, оснащені більш потужними двигунами, більш
                                    ефективні та ефективні, що позитивно позначається на репутації автомийки та
                                    задоволеності клієнтів.
                                </p> <br/>
                                <h2>Турбіна пилососа - рушійний елемент машини</h2> <br/>
                                <p>
                                    Турбіна пилососа насправді дуже схожа на двигун, описаний раніше. Подібно до неї,
                                    турбіна також є рушійним елементом пилососа, але, на відміну від двигуна, вона
                                    безпосередньо впливає на процес всмоктування та збору бруду.
                                </p> <br/>
                                <p>
                                    Турбіни, які використовуються в пилососах автомийок, відрізняються високим ККД і
                                    тиском всмоктування, що дозволяє ефективно видаляти різного роду забруднення
                                    (включаючи пісок, пил, листя та інші дрібні предмети). Зазвичай вони оснащені
                                    додатковими елементами (наприклад, фільтрами), які допомагають підтримувати чистоту
                                    всередині пилососа і запобігають потраплянню бруду в навколишнє середовище.
                                </p> <br/>
                                <p>
                                    Використання турбінного пилососа має багато переваг, таких як швидке та ефективне
                                    прибирання, ефективність і надійність. Крім того, висока якість турбін та їх
                                    ефективність дозволяє знизити експлуатаційні витрати автомийки, що вигідно для
                                    бізнесу. Наша пропозиція включає, серед іншого, турбіну SEKO потужністю 3 кВт 50 Гц
                                    (84148080), яка забезпечує не тільки ефективність, але й довговічність і надійність
                                    у використанні. Це полегшує пилососіння вашого автомобіля, а ефект помітний після
                                    першого використання.
                                </p> <br/>
                                <h2>Вибирайте двигун пилососа від автомийки SamWash</h2> <br/>
                                <p>
                                    Використання пилососів є основною діяльністю у підтримці транспортних засобів у
                                    чистоті. Тому варто подбати про те, щоб обладнання, яке ми використовуємо, було
                                    найвищої якості. З цієї причини краще купувати двигуни для пилососів і турбіни для
                                    пилососів у надійних постачальників.
                                </p> <br/>
                                <p>
                                    Якщо ви бажаєте професійного та комплексного підходу до теми, варто скористатися
                                    пропозицією SamWash Group. Як лідери ринку, ми пропонуємо не тільки двигуни та турбіни
                                    пилососів, а й широкий вибір інших засобів для миття автомобілів. Скориставшись
                                    пропозицією автомийки SamWash, це гарантія не тільки високоякісної продукції, а й
                                    професійного підходу та повного обслуговування клієнтів. Щиро запрошуємо до покупки!
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