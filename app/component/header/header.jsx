"use client"

import s from './Header.module.css'
import Link from "next-intl/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {useStore} from "@/store/store";
import Image from "next/image";
import { goodsArr } from '../../db/data'
import { IoClose } from "react-icons/io5";


const Header = () => {

    const t = useTranslations("header");
    const locale = useLocale();
    const router = usePathname()

    let prevScrollY = 0;
    const [toggleLang, setToggleLang] = useState(false)
    const [fixHeader, setFixHeader] = useState(false)
    const [openWin, setOpenWin] = useState(false)
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')

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

    const inputFilter = (e) => {
        let inputEnter = e.target.value
        setInput2(e.target.value)

        if (inputEnter !== '' && inputEnter.length > 3) {
            let newArr = goodsArr.filter(t => t.title.toLowerCase().includes(inputEnter.toLowerCase()));

            if(newArr.length > 10){
                setInput(newArr.slice(0, 10))
            } else{
                setInput(newArr)
            }
        } else {
            setInput('')
        }
    }

    const closeFilter = () => {
        setInput('')
        setInput2('')
    }


    return (<>
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
                                <li className={s.language_selector} id='lang'>
                                    <div className={s.language_link2} id='lang'
                                         onClick={() => setToggleLang(prev => !prev)}>
                                        <img src={`/header/flug/${locale}.svg`} alt="" className={s.flag} id='lang'/>
                                        {
                                            locale === 'uk' ? 'Українська' : locale === 'en' ? "English" : "Російська"
                                        }
                                    </div>
                                    {
                                        !toggleLang ?
                                            <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={10}
                                                   height={10}
                                                   className={s.imgArrow} id='lang'/>
                                            :
                                            <Image src='/header/flug/arrow-up.svg' alt='arrow up' width={10} height={10}
                                                   className={s.imgArrow} id='lang'/>
                                    }
                                    <div style={{display: toggleLang ? 'flex' : "none"}} className={s.toggleManu}>
                                        <Link href='/' locale="uk" className={s.language_link}
                                              style={locale === 'uk' ? {
                                                  backgroundColor: 'white',
                                                  color: '#d9d9d9'
                                              } : undefined}>
                                            <img src={"/header/flug/uk.svg"} alt="" className={s.flag}/>Українська
                                        </Link>
                                        <Link href='/' locale="en" className={s.language_link}
                                              style={locale === 'en' ? {
                                                  backgroundColor: 'white',
                                                  color: '#d9d9d9'
                                              } : undefined}>
                                            <img src={"/header/flug/en.svg"} alt="" className={s.flag}/>English
                                        </Link>
                                        <Link href='/' locale="ru" className={s.language_link}
                                              style={locale === 'ru' ? {
                                                  backgroundColor: 'white',
                                                  color: '#d9d9d9'
                                              } : undefined}>
                                            <img src={"/header/flug/ru.svg"} alt="" className={s.flag}/>Російська
                                        </Link>
                                    </div>
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
                            <input placeholder="Пошук статті..." type="text" className={s.search} value={input2}
                                   onChange={(e) => inputFilter(e)}/>
                            {
                                input.length !== 0 &&
                                <div className={s.divFilter}>
                                    {input.map(item => {

                                        return (<div className={s.item_goods_name + ' ' + s.item_div}>
                                            <Link href={'/goods?goods=' + item.slug}>

                                                <div className={s.item_img}>
                                                    <Image alt={item.title} width={200} height={200}
                                                           src={item.img.length === 0 ? '/other/noImage.jpg' : item.img}/>
                                                </div>
                                                <div className={s.item_name_text}>
                                                    <h3><b>{item.title}</b></h3>
                                                </div>
                                                <div className={s.item_prise_net + ' ' + s.item_div}
                                                     style={{flexDirection: 'column'}}>
                                                    <span>{item?.price}</span>
                                                    <span style={{marginLeft: '5px'}}> доларів</span>
                                                </div>
                                            </Link>
                                        </div>)
                                    })}
                                </div>
                            }
                            <button className={s.but_search}>
                                {input.length === 0
                                    ? <Image src='/header/search.svg' alt='search' width={16} height={16}/>
                                    :<IoClose onClick={closeFilter} />}
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
                                <Image src='/header/basket.png' alt='search' width={30} height={30}/>
                                {order?.length !== 0 && <span className={s.goodsLength}>{order?.length}</span>}
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
                            <li className={s.dropdown + ' ' + s.less}>
                                <button style={{display: 'flex', alignItems: 'center'}}
                                        onClick={() => setToggleLang(prev => !prev)}>
                                    <img src={`/header/flug/${locale}.svg`} alt="" className={s.flag} id='lang'/>
                                    {
                                        locale === 'uk' ? 'Українська' : locale === 'en' ? "English" : "Російська"
                                    }
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu + ' ' + s.imgArrowManu2}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href='/' locale="uk" className={s.language_link}
                                          style={locale === 'uk' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/uk.svg"} alt="" className={s.flag}/>Українська
                                    </Link>
                                    <Link href='/' locale="en" className={s.language_link}
                                          style={locale === 'en' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/en.svg"} alt="" className={s.flag}/>English
                                    </Link>
                                    <Link href='/' locale="ru" className={s.language_link}
                                          style={locale === 'ru' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/ru.svg"} alt="" className={s.flag}/>Російська
                                    </Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/chemical-means" id='mozhna'>
                                        Хімічні засоби для безконтактної мийки</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/chemical-means/active-foam" id='mozhna'>Активна піна для миття
                                        автомобіля</Link>
                                    <Link href="/chemical-means/car-wash-powders" id='mozhna'>Порошки для миття
                                        автомобіля</Link>
                                    <Link href="/chemical-means/car-wash-shampoos" id='mozhna'>Шампуні для миття
                                        автомобіля</Link>
                                    <Link href="/chemical-means/car-wash-waxes" id='mozhna'>Воски для миття
                                        автомобіля</Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/electromagnetic-valves-and-repair-kits" id='mozhna'>
                                        Електромагнітні клапани та ремкомплекти</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/electromagnetic-valves-and-repair-kits/electromagnetic-valves"
                                          id='mozhna'>Електромагнітні клапани</Link>
                                    <Link
                                        href="/electromagnetic-valves-and-repair-kits/repair-kits-of-electromagnetic-valves"
                                        id='mozhna'>
                                        Ремкомплекти електромагнітних клапанів</Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/pumps-and-detergent-dispensers" id='mozhna'>
                                        Насоси та дозатори миючих засобів</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/pumps-and-detergent-dispensers/mixrite-dispenser"
                                          id='mozhna'>Дозатор Mixrite</Link>
                                    <Link href="/pumps-and-detergent-dispensers/dosatron" id='mozhna'>Дозатрони</Link>
                                    <Link href="/pumps-and-detergent-dispensers/SEKO-EVO-series-pumps"
                                          id='mozhna'>Насоси SEKO серії EVO</Link>
                                    <Link href="/pumps-and-detergent-dispensers/DOSATRON-repair-kits"
                                          id='mozhna'>Ремкомплекти DOSATRON</Link>
                                    <Link href="/pumps-and-detergent-dispensers/MIXRITE-repair-kits"
                                          id='mozhna'>Ремкомплекти MIXRITE</Link>
                                    <Link href="/pumps-and-detergent-dispensers/SEKO-EVO-repair-kits"
                                          id='mozhna'>Ремкомплекти SEKO EVO</Link>
                                    <Link href="/pumps-and-detergent-dispensers/SEKO-KOMPACT-repair-kits"
                                          id='mozhna'>Ремкомплекти SEKO KOMPACT</Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/water-pumps-and-accessories" id='mozhna'>
                                        Водяні насоси та аксесуари</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/low-pressure-pumps" id='mozhna'>Насоси низького тиску</Link>
                                    <span><Link href="/accessories-for-pumps"
                                                id='mozhna'>Аксесуари для насосів</Link></span>
                                    <span> <Link href="/low-pumps" id='mozhna'>Насоси</Link></span>
                                    <Link href="/high-pressure-pumps" id='mozhna'>Насоси високого тиску</Link>
                                    <span><Link href="/accessories-and-repair-kits" id='mozhna'>Аксесуари та ремонтні комплекти</Link></span>
                                    <span><Link href="/high-pumps" id='mozhna'>Насоси</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/payment-systems" id='mozhna'>
                                        Платіжні системи</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/payment-systems/cashless" id='mozhna'>Безготівковий</Link>
                                    <span><Link
                                        href="/payment-systems/cashless/transactions-with-payment-cards"
                                        id='mozhna'>Операції з платіжними картками</Link></span>
                                    <span><Link
                                        href="/payment-systems/cashless//loyalty-operations"
                                        id='mozhna'>Операції лояльності з карткою/ключем</Link></span>
                                    <Link href="/payment-systems/cash" id='mozhna'>Готівка</Link>
                                    <span><Link
                                        href='/payment-systems/cash/banknote-readers-and-accessories'
                                        id='mozhna'>Зчитувачі банкнот і аксесуари</Link></span>
                                    <span><Link href='/payment-systems/cash/coin-validators'
                                                id='mozhna'>Валідатори монет</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more} style={{position: 'static'}}>
                                <button>
                                    <Link href="/product" id='mozhna'>
                                        більше</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <ul className={s.dropdown_content2}>
                                    <li>
                                        <Link href="/product" id='mozhna'>Розпродаж</Link>
                                    </li>
                                    <li>
                                        <Link href="/accessories-for-vacuum" id='mozhna'>
                                            Аксесуари для пилососа та компресора</Link>
                                        <span><Link href="/accessories-for-vacuum/for-compressors"
                                                    id='mozhna'>Аксесуари для компресорів</Link></span>
                                        <span><Link href="/accessories-for-vacuum/design-elements-of-a-vacuum-cleaner"
                                                    id='mozhna'>Елементи конструкції пилососа</Link></span>
                                        <span><Link href="/accessories-for-vacuum/filters" id='mozhna'>
                                            Фільтри</Link></span>
                                        <span><Link href="/accessories-for-vacuum/engines-and-turbines"
                                                    id='mozhna'>Двигуни і турбіни</Link></span>
                                        <span><Link href="/accessories-for-vacuum/nozzles-and-hose-connections"
                                                    id='mozhna'>Форсунки і з'єднання шлангів</Link></span>
                                        <span><Link href="/accessories-for-vacuum/suction-hoses"
                                                    id='mozhna'>Всмоктувальні шланги</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/advertising-accessories" id='mozhna'>Рекламні аксесуари</Link>
                                    </li>
                                    <li>
                                        <Link href="/peating-fittings" id='mozhna'>Опалювальна арматура</Link>
                                        <span><Link href="/peating-fittings/sensors" id='mozhna'>Датчики</Link></span>
                                        <span><Link href="/peating-fittings/nozzles" id='mozhna'>Насадки</Link></span>
                                        <span><Link href="/peating-fittings/electric-heaters"
                                                    id='mozhna'>Електричні обігрівачі</Link></span>
                                        <span><Link href="/peating-fittings/diaphragmatic-vessels"
                                                    id='mozhna'>Діафрагмальні судини</Link></span>
                                        <span><Link href="/peating-fittings/burners-and-accessories"
                                                    id='mozhna'>Пальники та аксесуари</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/chemicals-for-automatic-wash" id='mozhna'>
                                            Хімічні засоби для автоматичних мийок</Link>
                                        <span><Link href="/chemicals-for-automatic-wash/car-wash-waxes"
                                                    id='mozhna'>Воски для миття автомобіля</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/cleaning-and-maintenance" id='mozhna'>Очищення та обслуговування</Link>
                                    </li>
                                    <li>
                                        <Link href="/dosage-of-powder" id='mozhna'>Дозування порошку</Link>
                                    </li>
                                    <li>
                                        <Link href="/electrical-and-electronic-components"
                                              id='mozhna'>Електричні та електронні компоненти</Link>
                                        <span><Link href="/electrical-and-electronic-components/sensors"
                                                    id='mozhna'>Датчики</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/relays-and-contactors"
                                                    id='mozhna'>Реле та контактори</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/buttons"
                                                    id='mozhna'>Кнопки</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/sorting-machines"
                                                    id='mozhna'>Сортувальні машини та аксесуари</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/PLC-controllers"
                                                    id='mozhna'>Контролери PLC та аксесуари</Link></span>
                                        <span>
                                            <Link href="/electrical-and-electronic-components/transformers-and-power-supplies"
                                                    id='mozhna'>Трансформатори та джерела живлення</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/safety-devices"
                                                    id='mozhna'>Запобіжні пристрої</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/displays-LCD-LED)"
                                                    id='mozhna'>Дисплеї (LCD, LED)</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/hydraulic-elements" id='mozhna'>Гідравлічні елементи</Link>
                                        <span><Link href="/hydraulic-elements/software-assemblers"
                                                    id='mozhna'>Збирачі програмного забезпечення</Link></span>
                                        <span><Link href='/hydraulic-elements/manometers-and-thermometers'
                                                    id='mozhna'>Манометри і термометри</Link></span>
                                        <span><Link href='/hydraulic-elements/safety-valves'
                                                    id='mozhna'>Запобіжні клапани</Link></span>
                                        <span><Link href='/hydraulic-elements/float-valves'
                                                    id='mozhna'>Поплавкові клапани</Link></span>
                                        <span><Link href='/hydraulic-elements/valves-and-reducers'
                                                    id='mozhna'>Регулюючі клапани та редуктори</Link></span>
                                        <span><Link href='/hydraulic-elements/check-valves'
                                                    id='mozhna'>Зворотні клапани</Link></span>
                                        <span><Link href='/hydraulic-elements/hydraulic-connectors'
                                                    id='mozhna'>Гідравлічні з'єднувачі</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/equipment-washing-station"
                                              id='mozhna'>Елементи та обладнання мийної станції</Link>
                                        <span><Link href="/equipment-washing-station/door-stickers"
                                                    id='mozhna'>Наклейки на двері</Link></span>
                                        <span><Link href="/equipment-washing-station/mat-holder"
                                                    id='mozhna'>Тримач килимка</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/fiscalization" id='mozhna'>Фіскалізація</Link>
                                    </li>
                                    <li>
                                        <Link href="/car-care" id='mozhna'>Догляд за автомобілем</Link>
                                    </li>
                                    <li>
                                        <Link href="/weapons-and-accessories" id='mozhna'>Зброя та аксесуари</Link>
                                        <span><Link href="/weapons-and-accessories/equipment"
                                                    id='mozhna'>Обладнання</Link></span>
                                        <span><Link href="/weapons-and-accessories/guns-and-brushes"
                                                    id='mozhna'>Рушниці та щітки</Link></span>
                                        <span><Link href="/weapons-and-accessories/lance-scabbards"
                                                    id='mozhna'>Лансові піхви</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/cables-hoses" id='mozhna'>Кабелі/Шланги</Link>
                                        <span><Link href="/cables-hoses/other-cables" id='mozhna'>Інші кабелі</Link></span>
                                        <span><Link href="/cables-hoses/cannon-cables" id='mozhna'>Гарматні кабелі</Link></span>
                                        <span><Link href="/cables-hoses/brush-cables" id='mozhna'>Щіткові кабелі</Link></span>
                                        <span><Link href="/cables-hoses/ropes-for-arrows" id='mozhna'>Троси для стріл</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/engines" id='mozhna'>Двигуни</Link>
                                    </li>
                                    <li>
                                        <Link href="/closing-systems" id='mozhna'>Системи закриття</Link>
                                        <span><Link href="/closing-systems/containers-for-coins"
                                                    id='mozhna'>Грошові ящики, сейфи та контейнери для монет</Link></span>
                                        <span><Link href="/closing-systems/closing-system"
                                                    id='mozhna'>Система закриття</Link></span>
                                        <span><Link href="/closing-systems/hinges-and-stops"
                                                    id='mozhna'>Петлі та упори</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/disinfectants" id='mozhna'>Дезінфікуючі засоби</Link>
                                        <span><Link href="/disinfectants/disinfection-of-hands"
                                                    id='mozhna'>Дезінфекція рук</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/water-purification" id='mozhna'>Очищення води</Link>
                                        <span><Link href="/water-purification/softener"
                                                    id='mozhna'>Пляшки з пом'якшувачем і аксесуари</Link></span>
                                        <span><Link href="/water-purification/filters-and-accessories"
                                                    id='mozhna'>Фільтри та аксесуари</Link></span>
                                        <span><Link href="/water-purification/softener-head-and-accessories"
                                                    id='mozhna'>Головка пом'якшувача та аксесуари</Link></span>
                                        <span><Link href="/water-purification/hydraulics-of-water-treatment"
                                                    id='mozhna'>Гідравліка водопідготовки</Link></span>
                                        <span><Link href="/water-purification/reverse-osmosis-and-accessories"
                                                    id='mozhna'>Зворотний осмос і аксесуари</Link></span>
                                        <span><Link href="/water-purification/brine-tanks"
                                                    id='mozhna'>Резервуари для розсолу</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/arrows" id='mozhna'>Стріли</Link>
                                        <span><Link href="/arrows/single" id='mozhna'>Неодружений</Link></span>
                                        <span><Link href="/arrows/repair-kits"
                                                    id='mozhna'>Ремонтні комплекти</Link></span>
                                    </li>
                                </ul>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Хімічні засоби для безконтактної мийки
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/chemical-means" id='mozhna'>
                                        Хімічні засоби для безконтактної мийки</Link></span>
                                    <span><Link href="/chemical-means/active-foam"
                                                id='mozhna'>Активна піна для миття автомобіля</Link></span>
                                    <span><Link href="/chemical-means/car-wash-powders"
                                                id='mozhna'>Порошки для миття автомобіля</Link></span>
                                    <span><Link href="/chemical-means/car-wash-shampoos"
                                                id='mozhna'>Шампуні для миття автомобіля</Link></span>
                                    <span><Link href="/chemical-means/car-wash-waxes"
                                                id='mozhna'>Воски для миття автомобіля</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Електромагнітні клапани та ремкомплекти
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/electromagnetic-valves-and-repair-kits" id='mozhna'>
                                        Електромагнітні клапани та ремкомплекти</Link></span>
                                    <span><Link href="/electromagnetic-valves-and-repair-kits/electromagnetic-valves"
                                                id='mozhna'>Електромагнітні клапани</Link></span>
                                    <span><Link id='mozhna'
                                                href="/electromagnetic-valves-and-repair-kits/repair-kits-of-electromagnetic-valves">
                                        Ремкомплекти електромагнітних клапанів</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Насоси та дозатори миючих засобів
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/pumps-and-detergent-dispensers" id='mozhna'>
                                        Насоси та дозатори миючих засобів</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/mixrite-dispenser"
                                                id='mozhna'>Дозатор Mixrite</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/dosatron"
                                                id='mozhna'>Дозатрони</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/SEKO-EVO-series-pumps"
                                                id='mozhna'>Насоси SEKO серії EVO</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/DOSATRON-repair-kits"
                                                id='mozhna'>Ремкомплекти DOSATRON</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/MIXRITE-repair-kits"
                                                id='mozhna'>Ремкомплекти MIXRITE</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/SEKO-EVO-repair-kits"
                                                id='mozhna'>Ремкомплекти SEKO EVO</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/SEKO-KOMPACT-repair-kits"
                                                id='mozhna'>Ремкомплекти SEKO KOMPACT</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Водяні насоси та аксесуари
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/water-pumps-and-accessories" id='mozhna'>
                                        Водяні насоси та аксесуари</Link></span>
                                    <span><Link href="/low-pressure-pumps"
                                                id='mozhna'>Насоси низького тиску</Link></span>
                                    <span><span><Link href="/accessories-for-pumps"
                                                      id='mozhna'>Аксесуари для насосів</Link></span></span>
                                    <span><span> <Link href="/low-pumps" id='mozhna'>Насоси</Link></span></span>
                                    <span><Link href="/high-pressure-pumps"
                                                id='mozhna'>Насоси високого тиску</Link></span>
                                    <span><span><Link href="/accessories-and-repair-kits" id='mozhna'>Аксесуари та ремонтні комплекти</Link></span></span>
                                    <span><span><Link href="/high-pumps" id='mozhna'>Насоси</Link></span></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Платіжні системи
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/payment-systems" id='mozhna'>
                                        Платіжні системи</Link></span>
                                    <span><Link href="/payment-systems/cashless" id='mozhna'>Безготівковий</Link></span>
                                    <span><Link
                                        href="/payment-systems/cashless/transactions-with-payment-cards"
                                        id='mozhna'>Операції з платіжними картками</Link></span>
                                    <span><Link
                                        href="/payment-systems/cashless//loyalty-operations"
                                        id='mozhna'>Операції лояльності з карткою/ключем</Link></span>
                                    <span><Link href="/payment-systems/cash" id='mozhna'>Готівка</Link></span>
                                    <span><Link
                                        href='/payment-systems/cash/banknote-readers-and-accessories'
                                        id='mozhna'>Зчитувачі банкнот і аксесуари</Link></span>
                                    <span><Link href='/payment-systems/cash/coin-validators'
                                                id='mozhna'>Валідатори монет</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Аксесуари для пилососа та компресора
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span> <Link href="/accessories-for-vacuum" id='mozhna'>
                                        Аксесуари для пилососа та компресора</Link></span>
                                    <span><Link href="/accessories-for-vacuum/for-compressors"
                                                id='mozhna'>Аксесуари для компресорів</Link></span>
                                    <span><Link href="/accessories-for-vacuum/design-elements-of-a-vacuum-cleaner"
                                                id='mozhna'>Елементи конструкції пилососа</Link></span>
                                    <span><Link href="/accessories-for-vacuum/filters" id='mozhna'>
                                            Фільтри</Link></span>
                                    <span><Link href="/accessories-for-vacuum/engines-and-turbines"
                                                id='mozhna'>Двигуни і турбіни</Link></span>
                                    <span><Link href="/accessories-for-vacuum/nozzles-and-hose-connections"
                                                id='mozhna'>Форсунки і з'єднання шлангів</Link></span>
                                    <span><Link href="/accessories-for-vacuum/suction-hoses"
                                                id='mozhna'>Всмоктувальні шланги</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Рекламні аксесуари
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/advertising-accessories" id='mozhna'>
                                        Рекламні аксесуари</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Опалювальна арматура
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/peating-fittings" id='mozhna'>Опалювальна арматура</Link></span>
                                    <span><Link href='/peating-fittings/sensors' id='mozhna'>Датчики</Link></span>
                                    <span><Link href='/peating-fittings/nozzles' id='mozhna'>Насадки</Link></span>
                                    <span><Link href='/peating-fittings/electric-heaters' id='mozhna'>
                                        Електричні обігрівачі</Link></span>
                                    <span><Link href='/peating-fittings/diaphragmatic-vessels' id='mozhna'>
                                        Діафрагмальні судини</Link></span>
                                    <span><Link href='/peating-fittings/burners-and-accessories' id='mozhna'>
                                        Пальники та аксесуари</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Хімічні засоби для автоматичних мийок
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/chemicals-for-automatic-wash" id='mozhna'>
                                        Хімічні засоби для автоматичних мийок</Link></span>
                                    <span><Link href="/chemicals-for-automatic-wash/car-wash-waxes" id='mozhna'>
                                        Воски для миття автомобіля</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Очищення та обслуговування
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/cleaning-and-maintenance" id='mozhna'>Очищення та обслуговування</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Дозування порошку
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/dosage-of-powder" id='mozhna'>Дозування порошку</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Електричні та електронні компоненти
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/electrical-and-electronic-components" id='mozhna'>
                                        Електричні та електронні компоненти</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/sensors"
                                                id='mozhna'>Датчики</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/relays-and-contactors"
                                                id='mozhna'>Реле та контактори</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/buttons"
                                                id='mozhna'>Кнопки</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/sorting-machines"
                                                id='mozhna'>Сортувальні машини та аксесуари</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/PLC-controllers"
                                                id='mozhna'>Контролери PLC та аксесуари</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/transformers-and-power-supplies"
                                                id='mozhna'>Трансформатори та джерела живлення</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/safety-devices"
                                                id='mozhna'>Запобіжні пристрої</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/displays-LCD-LED)"
                                                id='mozhna'>Дисплеї (LCD, LED)</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Гідравлічні елементи
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/hydraulic-elements" id='mozhna'>Гідравлічні елементи</Link></span>
                                    <span><Link href='/hydraulic-elements/software-assemblers'
                                                id='mozhna'>Збирачі програмного забезпечення</Link></span>
                                    <span><Link href='/hydraulic-elements/manometers-and-thermometers'
                                                id='mozhna'>Манометри і термометри</Link></span>
                                    <span><Link href='/hydraulic-elements/safety-valves'
                                                id='mozhna'>Запобіжні клапани</Link></span>
                                    <span><Link href='/hydraulic-elements/float-valves'
                                                id='mozhna'>Поплавкові клапани</Link></span>
                                    <span><Link href='/hydraulic-elements/valves-and-reducers'
                                                id='mozhna'>Регулюючі клапани та редуктори</Link></span>
                                    <span><Link href='/hydraulic-elements/check-valves'
                                                id='mozhna'>Зворотні клапани</Link></span>
                                    <span><Link href='/hydraulic-elements/hydraulic-connectors'
                                                id='mozhna'>Гідравлічні з'єднувачі</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Елементи та обладнання мийної станції
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/equipment-washing-station"
                                                id='mozhna'>Елементи та обладнання мийної станції</Link></span>
                                    <span><Link href="/equipment-washing-station/door-stickers"
                                                id='mozhna'>Наклейки на двері</Link></span>
                                    <span><Link href="/equipment-washing-station/mat-holder"
                                                id='mozhna'>Тримач килимка</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Фіскалізація
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/fiscalization" id='mozhna'>Фіскалізація</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Догляд за автомобілем
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/car-care" id='mozhna'>Догляд за автомобілем</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Зброя та аксесуари
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/weapons-and-accessories"
                                                id='mozhna'>Зброя та аксесуари</Link></span>
                                    <span><Link href="/weapons-and-accessories/equipment"
                                                id='mozhna'>Обладнання</Link></span>
                                    <span><Link href="/weapons-and-accessories/guns-and-brushes"
                                                id='mozhna'>Рушниці та щітки</Link></span>
                                    <span><Link href="/weapons-and-accessories/lance-scabbards"
                                                id='mozhna'>Лансові піхви</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Кабелі/Шланги
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/cables-hoses" id='mozhna'>Кабелі/Шланги</Link></span>
                                    <span><Link href="/cables-hoses/other-cables" id='mozhna'>Інші кабелі</Link></span>
                                    <span><Link href="/cables-hoses/cannon-cables" id='mozhna'>Гарматні кабелі</Link></span>
                                    <span><Link href="/cables-hoses/brush-cables" id='mozhna'>Щіткові кабелі</Link></span>
                                    <span><Link href="/cables-hoses/ropes-for-arrows" id='mozhna'>Троси для стріл</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Двигуни
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/engines" id='mozhna'>Двигуни</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Системи закриття
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/closing-systems" id='mozhna'>Системи закриття</Link></span>
                                    <span><Link href="/closing-systems/containers-for-coins"
                                                id='mozhna'>Грошові ящики, сейфи та контейнери для монет</Link></span>
                                    <span><Link href="/closing-systems/closing-system"
                                                id='mozhna'>Система закриття</Link></span>
                                    <span><Link href="/closing-systems/hinges-and-stops"
                                                id='mozhna'>Петлі та упори</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Дезінфікуючі засоби
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/disinfectants" id='mozhna'>Дезінфікуючі засоби</Link></span>
                                    <span><Link href="/disinfectants/disinfection-of-hands"
                                                id='mozhna'>Дезінфекція рук</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Очищення води
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/water-purification" id='mozhna'>Очищення води</Link></span>
                                    <span><Link href="/water-purification/softener"
                                                id='mozhna'>Пляшки з пом'якшувачем і аксесуари</Link></span>
                                    <span><Link href="/water-purification/filters-and-accessories"
                                                id='mozhna'>Фільтри та аксесуари</Link></span>
                                    <span><Link href="/water-purification/softener-head-and-accessories"
                                                id='mozhna'>Головка пом'якшувача та аксесуари</Link></span>
                                    <span><Link href="/water-purification/hydraulics-of-water-treatment"
                                                id='mozhna'>Гідравліка водопідготовки</Link></span>
                                    <span><Link href="/water-purification/reverse-osmosis-and-accessories"
                                                id='mozhna'>Зворотний осмос і аксесуари</Link></span>
                                    <span><Link href="/water-purification/brine-tanks"
                                                id='mozhna'>Резервуари для розсолу</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    Стріли
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/arrows" id='mozhna'>Стріли</Link></span>
                                    <span><Link href="/arrows/single" id='mozhna'>Неодружений</Link></span>
                                    <span><Link href="/arrows/repair-kits" id='mozhna'>Ремонтні комплекти</Link></span>
                                </div>
                            </li>
                        </ul>
                        <div className={s.div_input2}>
                            <input placeholder="Пошук статті..." type="text" className={s.search2} value={input2}
                                   onChange={(e) => inputFilter(e)}/>
                            {
                                input.length !== 0 &&
                                <div className={s.divFilter}>
                                    {input.map(item => {

                                        return (<div className={s.item_goods_name + ' ' + s.item_div}>
                                            <Link href={'/goods?goods=' + item.slug}>

                                                <div className={s.item_img}>
                                                    <Image alt={item.title} width={200} height={200}
                                                           src={item.img.length === 0 ? '/other/noImage.jpg' : item.img}/>
                                                </div>
                                                <div className={s.item_name_text}>
                                                    <h3><b>{item.title}</b></h3>
                                                </div>
                                                <div className={s.item_prise_net + ' ' + s.item_div}
                                                     style={{flexDirection: 'column'}}>
                                                    <span>{item?.price}</span>
                                                    <span style={{marginLeft: '5px'}}> доларів</span>
                                                </div>
                                            </Link>
                                        </div>)
                                    })}
                                </div>
                            }
                            <button className={s.but_search2}>
                                {input.length === 0
                                    ? <Image src='/header/search.svg' alt='search' width={16} height={16}/>
                                    :<IoClose onClick={closeFilter} style={{width: '20px', height: '20px'}} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.div_goods2} id='goods' style={openWin ? {display: 'block'} : {display: 'none'}}>
                <p onClick={() => setOpenWin(false)} className={s.close}>X</p>
                {sum === 0 ? <p className={s.text}>
                        <Image src='/header/basket-gray.png' alt='basket' width={40} height={40}/>
                        Ваш кошик порожній</p>
                    : <div className={s.basket_items}>
                        <div className={s.basket_name}>
                            <p style={{height: 'fit-content'}}>
                                <Image src='/header/registration.png' alt='registration' width={20} height={20}/>
                                Кошик:
                            </p>
                        </div>
                        <div className={s.div_for_goods}>
                            {
                                order?.map((item, index) => {
                                    // console.log(item)
                                    return (
                                        <div key={index}>
                                            {/*<Link href={'/product/' + item.slug}>*/}
                                            {/*    <Image alt={item?.catalog_goods_content[0]?.title}*/}
                                            {/*           width={200} height={200}*/}
                                            {/*           src={item.catalog_goods_images.length === 0 ? '/other/noImage.jpg'*/}
                                            {/*               : 'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path*/}
                                            {/*           }/>*/}
                                            {/*    <div>*/}
                                            {/*        <p>{item.catalog_goods_content[0].title}</p>*/}
                                            {/*        <p>{item.size} x <b style={{fontWeight: 700}}>{item.price} грн</b>*/}
                                            {/*        </p>*/}
                                            {/*    </div>*/}
                                            {/*</Link>*/}
                                            <Link href={'/goods?goods=' + item.slug}>
                                                <Image alt={item.title} width={200} height={200}
                                                       src={item.img.length === 0 ? '/other/noImage.jpg' : item.img}/>
                                                <div>
                                                    <p>{item.title}</p>
                                                    <p>{item.size} x <b style={{fontWeight: 700}}>{item.price} грн</b>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className={s.sum}>Кількість товару: {order?.length} <span>{sum} гривень</span></p>
                        <Link href='/basket' className={s.but_basket} onClick={() => setOpenWin(false)}>
                            <Image src='/header/basket-gray.png' alt='basket' width={30} height={30}/>
                            До кошика
                        </Link>
                    </div>
                }
            </div>
        </header>
    </>)
}

export default Header