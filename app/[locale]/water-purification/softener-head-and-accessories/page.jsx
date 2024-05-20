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
        id: '412',
        title: 'Керуюча головка Clack CI для умягчителя (160)',
        code: 'GLO-STE-CLACK-CI',
        price: '3552.83',
        newPrice: '',
        size: 1,
        slug: 'goods23-4',
        img: '/purification/4.jpg',
        imageShow: ['/purification/4.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '413',
        title: 'Clack CI Control Head for Softener (250 і 330)',
        code: 'GLO-STE-CLACK-CI-250/330',
        price: '3535.51',
        newPrice: '',
        size: 1,
        slug: 'goods23-5',
        img: '/purification/5.jpg',
        imageShow: ['/purification/5.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '414',
        title: 'Головка управління FL 9100 SE (1/2.4/05) до 160',
        code: 'GLO-STE-9100SE',
        price: '3737.32',
        newPrice: '',
        size: 1,
        slug: 'goods23-6',
        img: '/purification/6.jpg',
        imageShow: ['/purification/6.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '415',
        title: 'Головка управління FL 9100 SE (2/4/1 і 3/5/1) для 250 і 330',
        code: 'GLO-STE-9100SE-250/330',
        price: '3767.45',
        newPrice: '',
        size: 1,
        slug: 'goods23-7',
        img: '/purification/7.jpg',
        imageShow: ['/purification/7.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '419',
        title: 'Сервісний ключ для головок CLACK (ключ)',
        code: 'KLUCZ-CLACK',
        price: '65.99',
        newPrice: '',
        size: 1,
        slug: 'goods23-11',
        img: '/purification/11.jpg',
        imageShow: ['/purification/11.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '421',
        title: 'Набір шестерень 25868, 25870, 15135 до пом\'якшувача',
        code: 'KOL-ZEM-ZMI',
        price: '267.83',
        newPrice: '',
        size: 1,
        slug: 'goods23-13',
        img: '/purification/13.jpg',
        imageShow: ['/purification/13.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '441',
        title: 'Поршень нижній для головки умягчителя (24235)',
        code: 'TLO-DOL-GLO',
        price: '495.36',
        newPrice: '',
        size: 1,
        slug: 'goods23-33',
        img: '/purification/33.jpg',
        imageShow: ['/purification/33.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            title: '',
            slug: '/water-purification/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '443',
        title: 'Верхній поршень головки умягчителя (24234)',
        code: 'TLO-GOR-GLO',
        price: '419.76',
        newPrice: '',
        size: 1,
        slug: 'goods23-35',
        img: '/purification/35.jpg',
        imageShow: ['/purification/35.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            title: '',
            slug: '/water-purification/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '446',
        title: 'Ущільнювач нижній і верхній для пом\'якшувача (25642)',
        code: 'USZ-GOR-DOL',
        price: '434.36',
        newPrice: '',
        size: 1,
        slug: 'goods23-38',
        img: '/purification/38.jpg',
        imageShow: ['/purification/38.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '456',
        title: 'Блок живлення для головки Fleck 9100',
        code: 'ZAS-GLO-9100',
        price: '245.32',
        newPrice: '',
        size: 1,
        slug: 'goods23-48',
        img: '/purification/48.jpg',
        imageShow: ['/purification/48.jpg',],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
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

            <NavProduct2 back={'/water-purification'}/>

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
                                    <Link href='/water-purification'> Очищення води</Link>
                                </li>
                                <li>
                                    <span> Головка пом'якшувача та аксесуари</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Головка пом'якшувача та аксесуари</h1>

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
                            <h2 style={{fontFamily: 'Ubuntu Medium, sans-serif'}}>Головка для пом'якшення води</h2>
                            <p style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}><b>
                                Для отримання високоякісного миття автомийки обладнані системами фільтрації води.
                                Власник автомийки зобов’язаний забезпечити регулярний огляд і підтримку систем
                                фільтрації води в найкращому стані.
                            </b></p> <br/>
                            <p style={{textAlign: 'center', fontFamily: 'Ubuntu Medium, sans-serif'}}><b>
                                Головка для пом'якшення води - непомітний, але ключовий елемент вашої мийки
                            </b></p> <br/>
                            <p>
                                Головка пом'якшувача води складається з кількох важливих елементів, кожен з яких виконує
                                свою унікальну функцію. На початку знаходиться контролер, який контролює весь процес
                                пом'якшення води. <b style={{fontFamily: 'Ubuntu Medium, sans-serif'}}>Він контролює
                                потік води, стежить за рівнем жорсткості та контролює цикли регенерації.</b>
                            </p> <br/>
                            <p>
                                Також варто звернути увагу на поршень у верхній частині головки, який відповідає
                                за контроль потоку води через весь пом'якшувач. <b style={{
                                fontFamily:
                                    'Ubuntu Medium, sans-serif'
                            }}> Цей поршень регулює надходження води в резервуари
                                пом’якшувача. Тут відбувається процес іонного обміну. </b>
                            </p> <br/>
                            <p>
                                Ще один важливий елемент - нижній поршень від головки, який виконує роль, протилежну
                                верхньому поршню. Він відповідає за контроль потоку води в процесі регенерації
                                пом'якшувача. Він ефективно перенаправляє воду в процесі регенерації, що дозволяє всій
                                системі пом'якшення води працювати належним чином.
                            </p> <br/>
                            <p>У цій категорії можна придбати як поршні (верхні та нижні), так і повну головку.</p><br/>
                            <h2 style={{fontFamily: 'Ubuntu Medium, sans-serif'}}>Яка головка пом'якшувача?</h2>
                            <p>
                                Вибираючи відповідну модель голови, варто звернути увагу на кілька важливих елементів.
                                Ключовими є індивідуальні потреби користувача та умови в даному місці. Варто звернути
                                увагу на наявні технічні параметри приладів і жорсткість води.
                            </p> <br/>
                            <p>
                                Перед прийняттям рішення також варто звернути увагу на репутацію виробника, якість
                                матеріалів і доступність сервісу. Якісна насадка для пом'якшення води повинна бути
                                довговічною і надійною, що забезпечить тривалу і ефективну роботу всього пристрою. <b
                                style={{fontFamily: 'Ubuntu Medium, sans-serif'}}> Це особливо важливо, якщо він
                                використовується на автомийці через дуже великий потік води.</b>
                            </p> <br/>
                            <h2 style={{fontFamily: 'Ubuntu Medium, sans-serif'}}>Головка для пом'якшення
                                води від SamWash Group</h2>
                            <p>
                                У нашій пропозиції є кілька цікавих моделей головок для пом'якшення води,
                                серед яких: Головки керування Clack CI та Fleck FL.
                            </p> <br/>
                            <p>
                                У цій категорії ви також знайдете <b style={{
                                fontFamily:
                                    'Ubuntu Medium, sans-serif'
                            }}> всі аксесуари для голів, тому ви
                                зможете комплексно подбати про їх обладнання.</b>
                            </p> <br/>
                            <p>
                                Як відомий виробник автомийок, ми щиро запрошуємо вас ознайомитися з повною пропозицією
                                аксесуарів і деталей для автомийок, де ви знайдете всі елементи, що підтримують ведення
                                цього бізнесу. Приємних покупок!
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