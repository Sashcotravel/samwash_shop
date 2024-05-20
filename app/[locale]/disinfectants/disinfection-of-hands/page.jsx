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
        id: '408',
        title: 'De-Zal E 1L Засіб для дезінфекції рук з насосом ADR',
        code: 'DEZALE/001 PUMP',
        price: '12.31',
        newPrice: '11.55',
        size: 1,
        slug: 'goods22-1',
        img: '/disinfectants/1.jpg',
        imageShow: ['/disinfectants/1.jpg', ],
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки – 12,31 злотих',
        bread1: {
            title: 'Дезінфікуючі засоби',
            slug: '/disinfectants',
        },
        bread2: {
            slug: '/disinfectants/disinfection-of-hands',
            title: 'Дезінфекція рук'
        },
        bread3:  '',
        descriptionMin: 'Засіб для дезінфекції рук з віруліцидною дією. Завдяки унікальній формулі засіб має ' +
            'здатність накопичуватися в епідермісі, що забезпечує тривалий ефект (приблизно 3 години). ' +
            'Знищує мікроорганізми, що живуть у глибших шарах шкіри, які виділяються з рукавичок, напр. ' +
            'Містить жирні та зволожуючі речовини, які запобігають висиханню рук і зберігають еластичність' +
            ' шкіри. Дозвіл на торгівлю біоцидним препаратом: 0163/ТП/2020. ЗАЯВКА - заклад',
        weight: '1',
        codeEAN: '',
        descriptionFull: `
         <p><b style="color: black">Опис продукту</b></p><br/>
         <p>Засіб для дезінфекції рук з віруліцидною дією. Завдяки унікальній формулі засіб має здатність 
         накопичуватися в епідермісі, що забезпечує тривалий ефект (приблизно 3 години). Знищує мікроорганізми, 
         що живуть у глибших шарах шкіри, які виділяються з рукавичок, напр. Містить жирні та зволожуючі речовини,
          які запобігають висиханню рук і зберігають еластичність шкіри. Дозвіл на торгівлю біоцидним препаратом:
           0163/ТП/2020.</p><br/>
         <p><b style="color: black">ЗАСТОСУВАННЯ</b></p><br/>
         <p>державні установи (дитячі садки, школи, ясла, офіси), </p>
         <p>контакт з їжею (гастрономія, харчова промисловість),</p>
         <p>медичні практики (медичні послуги).</p><br/>
         <p><b style="color: black">ЯК ВИКОРИСТОВУВАТИ</b></p><br/>
         <p>Не розводити. Гігієнічна дезінфекція рук: 3 мл препарату втирати порціями протягом 30 секунд.</p><br/>
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

            <TopButton index={4} />

            <NavProduct2 back={'/disinfectants'}/>

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
                                    <Link href='/disinfectants'> Дезінфікуючі засоби</Link>
                                </li>
                                <li>
                                    <span> Дезінфекція рук</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Дезінфекція рук</h1>

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