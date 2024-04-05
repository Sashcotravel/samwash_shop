import s from './Header.module.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useStore} from "../../store/store.js";


const Header = () => {

    let prevScrollY = 0;
    const [fixHeader, setFixHeader] = useState(false)
    const [openWin, setOpenWin] = useState(false)

    const goods = useStore(store => store.goods)
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
                                    <img src='/header/headphone.png' className={s.icon_up} alt='phone'/>
                                    <a href="tel:0975794930">+380 97 57 94930</a>
                                </li>
                                <li>
                                    <img src='/header/mail.png' className={s.icon_up} alt='mail'/>
                                    <a href="mailto:info@samwash.ua" title="Напишіть нам">info@samwash.ua</a>
                                </li>
                                <li>
                                    <img src='/header/account.png' className={s.icon_up} alt='account'/>
                                    <Link to="/login">авторизуватися</Link>
                                </li>
                                <li>
                                    <img src='/header/registration.png' className={s.icon_up} alt='registration'/>
                                    <Link to="/register">зареєструватися</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={s.logoWrapper}>
                        <Link to='/' className={s.brand} onClick={scroll}>
                            <img src='/new_logo.svg' alt='samwash' className={s.logo}/>
                        </Link>
                        <div className={s.div_input}>
                            <input placeholder="Пошук статті..." type="search" className={s.search}/>
                            <button className={s.but_search}>
                                <img src='/header/search.svg' alt='search'/>
                            </button>
                        </div>
                        <div className={s.div_icons}>
                            <div className={s.auth_icon}>
                                <Link to='/login'>
                                    <img src='/header/account.svg' className={s.icon_account} alt='account'/>
                                </Link>
                            </div>
                            <div className={s.basket} onClick={() => setOpenWin(true)}>
                                <img src='/header/basket.png' alt='search'/>
                                {goods.length !== 0 && <span className={s.goodsLength}>{goods.length}</span>}
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
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link to="/" id='mozhna'>Активна піна для миття автомобіля</Link>
                                    <Link to="/" id='mozhna'>Порошки для миття автомобіля</Link>
                                    <Link to="/" id='mozhna'>Шампуні для миття автомобіля</Link>
                                    <Link to="/" id='mozhna'>Воски для миття автомобіля</Link>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Електромагнітні клапани та ремкомплекти
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link to="/" id='mozhna'>Електромагнітні клапани</Link>
                                    <Link to="/" id='mozhna'>Ремкомплекти електромагнітних клапанів</Link>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Насоси та дозатори миючих засобів
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link to="/" id='mozhna'>Дозатор Mixrite</Link>
                                    <Link to="/" id='mozhna'>Дозатрони</Link>
                                    <Link to="/" id='mozhna'>Насоси SEKO серії EVO</Link>
                                    <Link to="/" id='mozhna'>Ремкомплекти DOSATRON</Link>
                                    <Link to="/" id='mozhna'>Ремкомплекти MIXRITE</Link>
                                    <Link to="/" id='mozhna'>Ремкомплекти SEKO EVO</Link>
                                    <Link to="/" id='mozhna'>Ремкомплекти SEKO KOMPACT</Link>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Водяні насоси та аксесуари
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link to="/" id='mozhna'>Насоси низького тиску</Link>
                                    <span><Link to="/" id='mozhna'>Аксесуари для насосів</Link></span>
                                    <span> <Link to="/" id='mozhna'>Насоси</Link></span>
                                    <Link to="/" id='mozhna'>Насоси високого тиску</Link>
                                    <span><Link to="/" id='mozhna'>Аксесуари та ремонтні комплекти</Link></span>
                                    <span><Link to="/" id='mozhna'>Насоси</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Платіжні системи
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link to="/" id='mozhna'>Безготівковий</Link>
                                    <span><Link to="/" id='mozhna'>Операції з платіжними картками</Link></span>
                                    <span><Link to="/" id='mozhna'>Операції лояльності з карткою/ключем</Link></span>
                                    <Link to="/" id='mozhna'>Готівка</Link>
                                    <span><Link to="/" id='mozhna'>Зчитувачі банкнот і аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Монетоприймачі</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown}>
                                <button>
                                    Платіжні системи
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link to="/" id='mozhna'>Безготівковий</Link>
                                    <span><Link to="/" id='mozhna'>Операції з платіжними картками</Link></span>
                                    <span><Link to="/" id='mozhna'>Операції лояльності з карткою/ключем</Link></span>
                                    <Link to="/" id='mozhna'>Готівка</Link>
                                    <span><Link to="/" id='mozhna'>Зчитувачі банкнот і аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Монетоприймачі</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more} style={{position: 'static'}}>
                                <button>
                                    більше
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <ul className={s.dropdown_content2}>
                                    <li>
                                        <Link to="/" id='mozhna'>Розпродаж</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Аксесуари для пилососа та компресора</Link>
                                        <span><Link to="/" id='mozhna'>Аксесуари для компресорів</Link></span>
                                        <span><Link to="/" id='mozhna'>Елементи конструкції пилососа</Link></span>
                                        <span><Link to="/" id='mozhna'>Фільтри</Link></span>
                                        <span><Link to="/" id='mozhna'>Двигуни і турбіни</Link></span>
                                        <span><Link to="/" id='mozhna'>Форсунки і з'єднання шлангів</Link></span>
                                        <span><Link to="/" id='mozhna'>Всмоктувальні шланги</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Рекламні аксесуари</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Опалювальна арматура</Link>
                                        <span><Link to="/" id='mozhna'>Датчики</Link></span>
                                        <span><Link to="/" id='mozhna'>Насадки</Link></span>
                                        <span><Link to="/" id='mozhna'>Електричні обігрівачі</Link></span>
                                        <span><Link to="/" id='mozhna'>Діафрагмальні судини</Link></span>
                                        <span><Link to="/" id='mozhna'>Пальники та аксесуари</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Хімічні засоби для автоматичних мийок</Link>
                                        <span><Link to="/" id='mozhna'>Воски для миття автомобіля</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Очищення та обслуговування</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Дозування порошку</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Електричні та електронні компоненти</Link>
                                        <span><Link to="/" id='mozhna'>Датчики</Link></span>
                                        <span><Link to="/" id='mozhna'>Реле та контактори</Link></span>
                                        <span><Link to="/" id='mozhna'>Кнопки</Link></span>
                                        <span><Link to="/" id='mozhna'>Сортувальні машини та аксесуари</Link></span>
                                        <span><Link to="/" id='mozhna'>Контролери PLC та аксесуари</Link></span>
                                        <span><Link to="/" id='mozhna'>Трансформатори та джерела живлення</Link></span>
                                        <span><Link to="/" id='mozhna'>Запобіжні пристрої</Link></span>
                                        <span><Link to="/" id='mozhna'>Дисплеї (LCD, LED)</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Гідравлічні елементи</Link>
                                        <span><Link to="/" id='mozhna'>Збирачі програмного забезпечення</Link></span>
                                        <span><Link to="/" id='mozhna'>Манометри і термометри</Link></span>
                                        <span><Link to="/" id='mozhna'>Запобіжні клапани</Link></span>
                                        <span><Link to="/" id='mozhna'>Поплавкові клапани</Link></span>
                                        <span><Link to="/" id='mozhna'>Регулюючі клапани та редуктори</Link></span>
                                        <span><Link to="/" id='mozhna'>Зворотні клапани</Link></span>
                                        <span><Link to="/" id='mozhna'>Гідравлічні з'єднувачі</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Елементи та обладнання мийної станції</Link>
                                        <span><Link to="/" id='mozhna'>Наклейки на двері</Link></span>
                                        <span><Link to="/" id='mozhna'>Тримач килимка</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Фіскалізація</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Догляд за автомобілем</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Зброя та аксесуари</Link>
                                        <span><Link to="/" id='mozhna'>Обладнання</Link></span>
                                        <span><Link to="/" id='mozhna'>Рушниці та щітки</Link></span>
                                        <span><Link to="/" id='mozhna'>Лансові піхви</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Кабелі/Шланги</Link>
                                        <span><Link to="/" id='mozhna'>Інші кабелі</Link></span>
                                        <span><Link to="/" id='mozhna'>Гарматні кабелі</Link></span>
                                        <span><Link to="/" id='mozhna'>Щіткові кабелі</Link></span>
                                        <span><Link to="/" id='mozhna'>Троси для стріл</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Двигуни</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Системи закриття</Link>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Дезінфікуючі засоби</Link>
                                        <span><Link to="/" id='mozhna'>Дезінфекція рук</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Очищення води</Link>
                                        <span><Link to="/" id='mozhna'>Пляшки з пом'якшувачем і аксесуари</Link></span>
                                        <span><Link to="/" id='mozhna'>Фільтри та аксесуари</Link></span>
                                        <span><Link to="/" id='mozhna'>Головка пом'якшувача та аксесуари</Link></span>
                                        <span><Link to="/" id='mozhna'>Гідравліка водопідготовки</Link></span>
                                        <span><Link to="/" id='mozhna'>Зворотний осмос і аксесуари</Link></span>
                                        <span><Link to="/" id='mozhna'>Резервуари для розсолу</Link></span>
                                    </li>
                                    <li>
                                        <Link to="/" id='mozhna'>Стріли</Link>
                                        <span><Link to="/" id='mozhna'>Неодружений</Link></span>
                                        <span><Link to="/" id='mozhna'>Ремонтні комплекти</Link></span>
                                    </li>
                                </ul>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Розпродаж
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Розпродаж</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Аксесуари для пилососа та компресора
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Аксесуари для компресорів</Link></span>
                                    <span><Link to="/" id='mozhna'>Елементи конструкції пилососа</Link></span>
                                    <span><Link to="/" id='mozhna'>Фільтри</Link></span>
                                    <span><Link to="/" id='mozhna'>Двигуни і турбіни</Link></span>
                                    <span><Link to="/" id='mozhna'>Форсунки і з'єднання шлангів</Link></span>
                                    <span><Link to="/" id='mozhna'>Всмоктувальні шланги</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Рекламні аксесуари
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Рекламні аксесуари</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Опалювальна арматура
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Датчики</Link></span>
                                    <span><Link to="/" id='mozhna'>Насадки</Link></span>
                                    <span><Link to="/" id='mozhna'>Електричні обігрівачі</Link></span>
                                    <span><Link to="/" id='mozhna'>Діафрагмальні судини</Link></span>
                                    <span><Link to="/" id='mozhna'>Пальники та аксесуари</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Хімічні засоби для автоматичних мийок
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Воски для миття автомобіля</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Очищення та обслуговування
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Очищення та обслуговування</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Дозування порошку
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Дозування порошку</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Електричні та електронні компоненти
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Датчики</Link></span>
                                    <span><Link to="/" id='mozhna'>Реле та контактори</Link></span>
                                    <span><Link to="/" id='mozhna'>Кнопки</Link></span>
                                    <span><Link to="/" id='mozhna'>Сортувальні машини та аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Контролери PLC та аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Трансформатори та джерела живлення</Link></span>
                                    <span><Link to="/" id='mozhna'>Запобіжні пристрої</Link></span>
                                    <span><Link to="/" id='mozhna'>Дисплеї (LCD, LED)</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Гідравлічні елементи
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Збирачі програмного забезпечення</Link></span>
                                    <span><Link to="/" id='mozhna'>Манометри і термометри</Link></span>
                                    <span><Link to="/" id='mozhna'>Запобіжні клапани</Link></span>
                                    <span><Link to="/" id='mozhna'>Поплавкові клапани</Link></span>
                                    <span><Link to="/" id='mozhna'>Регулюючі клапани та редуктори</Link></span>
                                    <span><Link to="/" id='mozhna'>Зворотні клапани</Link></span>
                                    <span><Link to="/" id='mozhna'>Гідравлічні з'єднувачі</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Елементи та обладнання мийної станції
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Наклейки на двері</Link></span>
                                    <span><Link to="/" id='mozhna'>Тримач килимка</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Фіскалізація
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Фіскалізація</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Догляд за автомобілем
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Догляд за автомобілем</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Зброя та аксесуари
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Обладнання</Link></span>
                                    <span><Link to="/" id='mozhna'>Рушниці та щітки</Link></span>
                                    <span><Link to="/" id='mozhna'>Лансові піхви</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Кабелі/Шланги
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Інші кабелі</Link></span>
                                    <span><Link to="/" id='mozhna'>Гарматні кабелі</Link></span>
                                    <span><Link to="/" id='mozhna'>Щіткові кабелі</Link></span>
                                    <span><Link to="/" id='mozhna'>Троси для стріл</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Двигуни
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Двигуни</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Системи закриття
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Системи закриття</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Дезінфікуючі засоби
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Дезінфекція рук</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Очищення води
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Пляшки з пом'якшувачем і аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Фільтри та аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Головка пом'якшувача та аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Гідравліка водопідготовки</Link></span>
                                    <span><Link to="/" id='mozhna'>Зворотний осмос і аксесуари</Link></span>
                                    <span><Link to="/" id='mozhna'>Резервуари для розсолу</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Стріли
                                    <img src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                         className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link to="/" id='mozhna'>Неодружений</Link></span>
                                    <span><Link to="/" id='mozhna'>Ремонтні комплекти</Link></span>
                                </div>
                            </li>
                        </ul>
                        <div className={s.div_input2}>
                            <input placeholder="Пошук статті..." type="search" className={s.search2}/>
                            <button className={s.but_search2}>
                                <img src='/header/search.svg' alt='search'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.div_goods2} id='goods' style={openWin ? {display: 'block'} : {display: 'none'}}>
                <p onClick={() => setOpenWin(false)} className={s.close}>X</p>
                {sum === 0 ? <p className={s.text}>
                        <img src='/header/basket-gray.png' alt='search'/>
                        Ваш кошик порожній</p>
                    : <div className={s.basket_items}>
                        <div className={s.basket_name}>
                            <p style={{height: 'fit-content'}}>
                                <img src='/header/registration.png' alt='search'/>
                                Кошик:
                            </p>
                        </div>
                        <div className={s.div_for_goods}>
                            {
                                goods?.map(item => {
                                    // console.log(item)
                                    return (
                                        <div key={item.name}>
                                            <Link to={item.link}>
                                                <img src={item.img} alt={item.name}/>
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>{item.number} x <b style={{fontWeight: 700}}>{item.prise} грн</b>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className={s.sum}>Кількість товару: {goods.length} <span>{sum} гривень</span></p>
                        <Link to='/basket' className={s.but_basket} onClick={() => setOpenWin(false)}>
                            <img src='/header/basket-gray.png' alt='search'/>
                            До кошика
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header