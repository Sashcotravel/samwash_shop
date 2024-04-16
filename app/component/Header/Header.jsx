"use client"

import s from './Header.module.css'
import Link from "next-intl/link";
import {useEffect, useState} from "react";
import {useStore} from "@/store/store";
import Image from "next/image";


const Header = () => {

    let prevScrollY = 0;
    const [fixHeader, setFixHeader] = useState(false)
    const [openWin, setOpenWin] = useState(false)

    const order = useStore(store => store.order)
    const sum = useStore(store => store.sum)

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 100) {
            setFixHeader(false);
        }
        else if (currentScrollY > prevScrollY) {
            setFixHeader(true);
        } else {
            setFixHeader(false);
            setFixHeader(true);
        }
        prevScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('click', function (e) {
            if (e.target.id === '') {}
            else if (e.target.id === 'mozhna') {
                let but = document.getElementById('button')
                let but2 = document.getElementById('boxManu')
                but.children[0].classList.remove(s['first_child'])
                but.children[2].classList.remove(s['last_child'])
                but.children[1].classList.remove(s['nth_child'])
                but2.classList.remove(s['boxMenuWrapper2'])
            }
            else if (e.target.id !== 'button' && e.target.id !== 'button9') {
                let but = document.getElementById('button')
                let but2 = document.getElementById('boxManu')
                but.children[0].classList.remove(s['first_child'])
                but.children[2].classList.remove(s['last_child'])
                but.children[1].classList.remove(s['nth_child'])
                but2.classList.remove(s['boxMenuWrapper2'])
                // but2.classList.add(s['boxMenuWrapper2'])
            }
        })

        window.addEventListener('scroll', handleScroll)
    }, []);

    const scroll = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const showMobileMenu = () => {
        let but = document.getElementById('button')
        let but2 = document.getElementById('boxManu')
        if(but.children[0].classList.value === ''){
            but.children[0].classList.add(s['first_child'])
            but.children[2].classList.add(s['last_child'])
            but.children[1].classList.add(s['nth_child'])
            but2.classList.add(s['boxMenuWrapper2'])
        }
        else{
            but.children[0].classList.remove(s['first_child'])
            but.children[2].classList.remove(s['last_child'])
            but.children[1].classList.remove(s['nth_child'])
            but2.classList.remove(s['boxMenuWrapper2'])
        }
    }


    return (
        <header>
            <div className={s.laptop}>
                <div className={s.grayLine}>
                    <div className={s.box1}>
                        <div className={s.divisions}>
                            <ul>
                                <li>
                                    <Image src='/header/headphone.png' className={s.icon_up} alt='phone'
                                         width={64} height={64}/>
                                    <a href="tel:0975794930">+38 097 579 4930</a>
                                </li>
                                <li>
                                    <Image src='/header/mail.png' className={s.icon_up} alt='mail'
                                         width={48} height={48}/>
                                    <a href="mailto:info@samwash.ua" title="Напишіть нам">info@samwash.ua</a>
                                </li>
                                <li>
                                    <Image src='/header/account.png' className={s.icon_up} alt='account'
                                         width={50} height={50}/>
                                    <Link href="/login">авторизуватися</Link>
                                </li>
                                <li>
                                    <Image src='/header/registration.png' className={s.icon_up} alt='registration'
                                         width={50} height={50}/>
                                    <Link href="/register">зареєструватися</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={s.logoWrapper}>
                        <Link href='/' className={s.brand} onClick={scroll}>
                            <Image src='/new_logo.svg' alt='samwash' className={s.logo} width={90} height={25}/>
                        </Link>
                        <div className={s.div_input}>
                            <input placeholder="Пошук статті..." type="search" className={s.search}/>
                            <button className={s.but_search}>
                                <Image src='/header/search.svg' alt='search' width={16} height={16}/>
                            </button>
                        </div>
                        <div className={s.div_icons}>
                            <div className={s.auth_icon}>
                                <Link href='/login'>
                                    <Image src='/header/account.svg' className={s.icon_account} alt='account'
                                         width={24} height={28}/>
                                </Link>
                            </div>
                            <div className={s.basket} onClick={() => setOpenWin(true)}>
                                <Image src='/header/basket.png' alt='search' width={30} height={30} />
                                {order.length !== 0 && <span className={s.goodsLength}>{order.length}</span>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${s.mainManu} ${fixHeader ? s.laptop2 : ''}`}>
                    <div className={s.bottomLine}>
                        <div className={s.mob_manu}>
                            <div className={s.menu_icon} id='button' onClick={showMobileMenu}>
                                <div id='button9'></div>
                                <div id='button9'></div>
                                <div id='button9'></div>
                            </div>
                        </div>
                        <ul className={s.boxMenuWrapper} id='boxManu'>
                            <li className={s.dropdown}>
                                <button>
                                    Хімічні засоби для безконтактної мийки
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>Активна піна для миття автомобіля</Link>
                                    <Link href="/" id='mozhna'>Порошки для миття автомобіля</Link>
                                    <Link href="/" id='mozhna'>Шампуні для миття автомобіля</Link>
                                    <Link href="/" id='mozhna'>Воски для миття автомобіля</Link>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Електромагнітні клапани та ремкомплекти
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>Електромагнітні клапани</Link>
                                    <Link href="/" id='mozhna'>Ремкомплекти електромагнітних клапанів</Link>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Насоси та дозатори миючих засобів
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>Дозатор Mixrite</Link>
                                    <Link href="/" id='mozhna'>Дозатрони</Link>
                                    <Link href="/" id='mozhna'>Насоси SEKO серії EVO</Link>
                                    <Link href="/" id='mozhna'>Ремкомплекти DOSATRON</Link>
                                    <Link href="/" id='mozhna'>Ремкомплекти MIXRITE</Link>
                                    <Link href="/" id='mozhna'>Ремкомплекти SEKO EVO</Link>
                                    <Link href="/" id='mozhna'>Ремкомплекти SEKO KOMPACT</Link>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Водяні насоси та аксесуари
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>Насоси низького тиску</Link>
                                    <span><Link href="/" id='mozhna'>Аксесуари для насосів</Link></span>
                                    <span> <Link href="/" id='mozhna'>Насоси</Link></span>
                                    <Link href="/" id='mozhna'>Насоси високого тиску</Link>
                                    <span><Link href="/" id='mozhna'>Аксесуари та ремонтні комплекти</Link></span>
                                    <span><Link href="/" id='mozhna'>Насоси</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Платіжні системи
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>Безготівковий</Link>
                                    <span><Link href="/" id='mozhna'>Операції з платіжними картками</Link></span>
                                    <span><Link href="/" id='mozhna'>Операції лояльності з карткою/ключем</Link></span>
                                    <Link href="/" id='mozhna'>Готівка</Link>
                                    <span><Link href="/" id='mozhna'>Зчитувачі банкнот і аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Монетоприймачі</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more} style={{position: 'static'}}>
                                <button>
                                    більше
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <ul className={s.dropdown_content2}>
                                    <li>
                                        <Link href="/" id='mozhna'>Розпродаж</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Аксесуари для пилососа та компресора</Link>
                                        <span><Link href="/" id='mozhna'>Аксесуари для компресорів</Link></span>
                                        <span><Link href="/" id='mozhna'>Елементи конструкції пилососа</Link></span>
                                        <span><Link href="/" id='mozhna'>Фільтри</Link></span>
                                        <span><Link href="/" id='mozhna'>Двигуни і турбіни</Link></span>
                                        <span><Link href="/" id='mozhna'>Форсунки і з'єднання шлангів</Link></span>
                                        <span><Link href="/" id='mozhna'>Всмоктувальні шланги</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Рекламні аксесуари</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Опалювальна арматура</Link>
                                        <span><Link href="/" id='mozhna'>Датчики</Link></span>
                                        <span><Link href="/" id='mozhna'>Насадки</Link></span>
                                        <span><Link href="/" id='mozhna'>Електричні обігрівачі</Link></span>
                                        <span><Link href="/" id='mozhna'>Діафрагмальні судини</Link></span>
                                        <span><Link href="/" id='mozhna'>Пальники та аксесуари</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Хімічні засоби для автоматичних мийок</Link>
                                        <span><Link href="/" id='mozhna'>Воски для миття автомобіля</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Очищення та обслуговування</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Дозування порошку</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Електричні та електронні компоненти</Link>
                                        <span><Link href="/" id='mozhna'>Датчики</Link></span>
                                        <span><Link href="/" id='mozhna'>Реле та контактори</Link></span>
                                        <span><Link href="/" id='mozhna'>Кнопки</Link></span>
                                        <span><Link href="/" id='mozhna'>Сортувальні машини та аксесуари</Link></span>
                                        <span><Link href="/" id='mozhna'>Контролери PLC та аксесуари</Link></span>
                                        <span><Link href="/" id='mozhna'>Трансформатори та джерела живлення</Link></span>
                                        <span><Link href="/" id='mozhna'>Запобіжні пристрої</Link></span>
                                        <span><Link href="/" id='mozhna'>Дисплеї (LCD, LED)</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Гідравлічні елементи</Link>
                                        <span><Link href="/" id='mozhna'>Збирачі програмного забезпечення</Link></span>
                                        <span><Link href="/" id='mozhna'>Манометри і термометри</Link></span>
                                        <span><Link href="/" id='mozhna'>Запобіжні клапани</Link></span>
                                        <span><Link href="/" id='mozhna'>Поплавкові клапани</Link></span>
                                        <span><Link href="/" id='mozhna'>Регулюючі клапани та редуктори</Link></span>
                                        <span><Link href="/" id='mozhna'>Зворотні клапани</Link></span>
                                        <span><Link href="/" id='mozhna'>Гідравлічні з'єднувачі</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Елементи та обладнання мийної станції</Link>
                                        <span><Link href="/" id='mozhna'>Наклейки на двері</Link></span>
                                        <span><Link href="/" id='mozhna'>Тримач килимка</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Фіскалізація</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Догляд за автомобілем</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Зброя та аксесуари</Link>
                                        <span><Link href="/" id='mozhna'>Обладнання</Link></span>
                                        <span><Link href="/" id='mozhna'>Рушниці та щітки</Link></span>
                                        <span><Link href="/" id='mozhna'>Лансові піхви</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Кабелі/Шланги</Link>
                                        <span><Link href="/" id='mozhna'>Інші кабелі</Link></span>
                                        <span><Link href="/" id='mozhna'>Гарматні кабелі</Link></span>
                                        <span><Link href="/" id='mozhna'>Щіткові кабелі</Link></span>
                                        <span><Link href="/" id='mozhna'>Троси для стріл</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Двигуни</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Системи закриття</Link>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Дезінфікуючі засоби</Link>
                                        <span><Link href="/" id='mozhna'>Дезінфекція рук</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Очищення води</Link>
                                        <span><Link href="/" id='mozhna'>Пляшки з пом'якшувачем і аксесуари</Link></span>
                                        <span><Link href="/" id='mozhna'>Фільтри та аксесуари</Link></span>
                                        <span><Link href="/" id='mozhna'>Головка пом'якшувача та аксесуари</Link></span>
                                        <span><Link href="/" id='mozhna'>Гідравліка водопідготовки</Link></span>
                                        <span><Link href="/" id='mozhna'>Зворотний осмос і аксесуари</Link></span>
                                        <span><Link href="/" id='mozhna'>Резервуари для розсолу</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/" id='mozhna'>Стріли</Link>
                                        <span><Link href="/" id='mozhna'>Неодружений</Link></span>
                                        <span><Link href="/" id='mozhna'>Ремонтні комплекти</Link></span>
                                    </li>
                                </ul>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Розпродаж
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Розпродаж</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Аксесуари для пилососа та компресора
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Аксесуари для компресорів</Link></span>
                                    <span><Link href="/" id='mozhna'>Елементи конструкції пилососа</Link></span>
                                    <span><Link href="/" id='mozhna'>Фільтри</Link></span>
                                    <span><Link href="/" id='mozhna'>Двигуни і турбіни</Link></span>
                                    <span><Link href="/" id='mozhna'>Форсунки і з'єднання шлангів</Link></span>
                                    <span><Link href="/" id='mozhna'>Всмоктувальні шланги</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Рекламні аксесуари
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Рекламні аксесуари</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Опалювальна арматура
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Датчики</Link></span>
                                    <span><Link href="/" id='mozhna'>Насадки</Link></span>
                                    <span><Link href="/" id='mozhna'>Електричні обігрівачі</Link></span>
                                    <span><Link href="/" id='mozhna'>Діафрагмальні судини</Link></span>
                                    <span><Link href="/" id='mozhna'>Пальники та аксесуари</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Хімічні засоби для автоматичних мийок
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Воски для миття автомобіля</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Очищення та обслуговування
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Очищення та обслуговування</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Дозування порошку
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Дозування порошку</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Електричні та електронні компоненти
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Датчики</Link></span>
                                    <span><Link href="/" id='mozhna'>Реле та контактори</Link></span>
                                    <span><Link href="/" id='mozhna'>Кнопки</Link></span>
                                    <span><Link href="/" id='mozhna'>Сортувальні машини та аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Контролери PLC та аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Трансформатори та джерела живлення</Link></span>
                                    <span><Link href="/" id='mozhna'>Запобіжні пристрої</Link></span>
                                    <span><Link href="/" id='mozhna'>Дисплеї (LCD, LED)</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Гідравлічні елементи
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Збирачі програмного забезпечення</Link></span>
                                    <span><Link href="/" id='mozhna'>Манометри і термометри</Link></span>
                                    <span><Link href="/" id='mozhna'>Запобіжні клапани</Link></span>
                                    <span><Link href="/" id='mozhna'>Поплавкові клапани</Link></span>
                                    <span><Link href="/" id='mozhna'>Регулюючі клапани та редуктори</Link></span>
                                    <span><Link href="/" id='mozhna'>Зворотні клапани</Link></span>
                                    <span><Link href="/" id='mozhna'>Гідравлічні з'єднувачі</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Елементи та обладнання мийної станції
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Наклейки на двері</Link></span>
                                    <span><Link href="/" id='mozhna'>Тримач килимка</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Фіскалізація
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Фіскалізація</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Догляд за автомобілем
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Догляд за автомобілем</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Зброя та аксесуари
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Обладнання</Link></span>
                                    <span><Link href="/" id='mozhna'>Рушниці та щітки</Link></span>
                                    <span><Link href="/" id='mozhna'>Лансові піхви</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Кабелі/Шланги
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Інші кабелі</Link></span>
                                    <span><Link href="/" id='mozhna'>Гарматні кабелі</Link></span>
                                    <span><Link href="/" id='mozhna'>Щіткові кабелі</Link></span>
                                    <span><Link href="/" id='mozhna'>Троси для стріл</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Двигуни
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Двигуни</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Системи закриття
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Системи закриття</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Дезінфікуючі засоби
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Дезінфекція рук</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Очищення води
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Пляшки з пом'якшувачем і аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Фільтри та аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Головка пом'якшувача та аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Гідравліка водопідготовки</Link></span>
                                    <span><Link href="/" id='mozhna'>Зворотний осмос і аксесуари</Link></span>
                                    <span><Link href="/" id='mozhna'>Резервуари для розсолу</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Стріли
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/" id='mozhna'>Неодружений</Link></span>
                                    <span><Link href="/" id='mozhna'>Ремонтні комплекти</Link></span>
                                </div>
                            </li>
                        </ul>
                        <div className={s.div_input2}>
                            <input placeholder="Пошук статті..." type="search" className={s.search2}/>
                            <button className={s.but_search2}>
                                <Image src='/header/search.svg' alt='search' width={16} height={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.div_goods2} id='goods' style={openWin ? {display: 'block'} : {display: 'none'}}>
                <p onClick={() => setOpenWin(false)} className={s.close}>X</p>
                {sum === 0 ? <p className={s.text}>
                        <Image src='/header/basket-gray.png' alt='basket' width={40} height={40} />
                        Ваш кошик порожній</p>
                    : <div className={s.basket_items}>
                        <div className={s.basket_name}>
                            <p style={{height: 'fit-content'}}>
                                <Image src='/header/registration.png' alt='registration' width={20} height={20} />
                                Кошик:
                            </p>
                        </div>
                        <div className={s.div_for_goods}>
                            {
                                order?.map((item, index) => {
                                    // console.log(item)
                                    return (
                                        <div key={index}>
                                            <Link href={'/product/' + item.slug}>
                                                <Image alt={item?.catalog_goods_content[0]?.title}
                                                       width={200} height={200}
                                                       src={item.catalog_goods_images.length === 0 ? '/other/noImage.jpg'
                                                           : 'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path
                                                       }/>
                                                <div>
                                                    <p>{item.catalog_goods_content[0].title}</p>
                                                    <p>{item.size} x <b style={{fontWeight: 700}}>{item.price} грн</b></p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className={s.sum}>Кількість товару: {order.length} <span>{sum} гривень</span></p>
                        <Link href='/basket' className={s.but_basket} onClick={() => setOpenWin(false)}>
                            <Image src='/header/basket-gray.png' alt='basket' width={30} height={30} />
                            До кошика
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header