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

    const t = useTranslations();
    const locale = useLocale();

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
                                    <a href="mailto:info@samwash.ua" title={t("footer.footer2")}>info@samwash.ua</a>
                                </li>
                                <li>
                                    <Image src='/header/account.png' className={s.icon_up} alt='account'
                                           width={50} height={50}/>
                                    <Link href="/login">{t("header.header1")}</Link>
                                </li>
                                <li>
                                    <Image src='/header/registration.png' className={s.icon_up} alt='registration'
                                           width={50} height={50}/>
                                    <Link href="/register">{t("header.header2")}</Link>
                                </li>
                                <li className={s.language_selector} id='lang'>
                                    <div className={s.language_link2} id='lang'
                                         onClick={() => setToggleLang(prev => !prev)}>
                                        <img src={`/header/flug/${locale}.svg`} alt="language"
                                             className={s.flag} id='lang'/>
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
                                            <img src={"/header/flug/uk.svg"} alt="language" className={s.flag}/>Українська
                                        </Link>
                                        <Link href='/' locale="en" className={s.language_link}
                                              style={locale === 'en' ? {
                                                  backgroundColor: 'white',
                                                  color: '#d9d9d9'
                                              } : undefined}>
                                            <img src={"/header/flug/en.svg"} alt="language" className={s.flag}/>English
                                        </Link>
                                        <Link href='/' locale="ru" className={s.language_link}
                                              style={locale === 'ru' ? {
                                                  backgroundColor: 'white',
                                                  color: '#d9d9d9'
                                              } : undefined}>
                                            <img src={"/header/flug/ru.svg"} alt="language" className={s.flag}/>Російська
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
                            <input placeholder={t("header.header3")} type="text" className={s.search} value={input2}
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
                                        <img src={"/header/flug/uk.svg"} alt="flug" className={s.flag}/>Українська
                                    </Link>
                                    <Link href='/' locale="en" className={s.language_link}
                                          style={locale === 'en' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/en.svg"} alt="flug" className={s.flag}/>English
                                    </Link>
                                    <Link href='/' locale="ru" className={s.language_link}
                                          style={locale === 'ru' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/ru.svg"} alt="flug" className={s.flag}/>Російська
                                    </Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/chemical-means" id='mozhna'>{t("header.header4")}</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/chemical-means/active-foam" id='mozhna'>{t("header.header5")}</Link>
                                    <Link href="/chemical-means/car-wash-powders" id='mozhna'>{t("header.header6")}</Link>
                                    <Link href="/chemical-means/car-wash-shampoos" id='mozhna'>{t("header.header7")}</Link>
                                    <Link href="/chemical-means/car-wash-waxes" id='mozhna'>{t("header.header8")}</Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/electromagnetic-valves-and-repair-kits" id='mozhna'>
                                        {t("header.header9")}</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/electromagnetic-valves-and-repair-kits/electromagnetic-valves"
                                          id='mozhna'>{t("header.header10")}</Link>
                                    <Link
                                        href="/electromagnetic-valves-and-repair-kits/repair-kits-of-electromagnetic-valves"
                                        id='mozhna'>{t("header.header11")}</Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/pumps-and-detergent-dispensers" id='mozhna'>
                                        {t("header.header12")}</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/pumps-and-detergent-dispensers/mixrite-dispenser"
                                          id='mozhna'>{t("header.header13")} Mixrite</Link>
                                    <Link href="/pumps-and-detergent-dispensers/dosatron" id='mozhna'>
                                        {t("header.header25")}</Link>
                                    <Link href="/pumps-and-detergent-dispensers/SEKO-EVO-series-pumps"
                                          id='mozhna'>{t("header.header14")} SEKO {t("header.header15")} EVO</Link>
                                    <Link href="/pumps-and-detergent-dispensers/DOSATRON-repair-kits"
                                          id='mozhna'>{t("header.header16")} DOSATRON</Link>
                                    <Link href="/pumps-and-detergent-dispensers/MIXRITE-repair-kits"
                                          id='mozhna'>{t("header.header16")} MIXRITE</Link>
                                    <Link href="/pumps-and-detergent-dispensers/SEKO-EVO-repair-kits"
                                          id='mozhna'>{t("header.header16")} SEKO EVO</Link>
                                    <Link href="/pumps-and-detergent-dispensers/SEKO-KOMPACT-repair-kits"
                                          id='mozhna'>{t("header.header16")} SEKO KOMPACT</Link>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/water-pumps-and-accessories" id='mozhna'>{t("header.header17")}</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/low-pressure-pumps" id='mozhna'>{t("header.header18")}</Link>
                                    <span><Link href="/accessories-for-pumps" id='mozhna'>
                                        {t("header.header19")}</Link></span>
                                    <span> <Link href="/low-pumps" id='mozhna'>{t("header.header20")}</Link></span>
                                    <Link href="/high-pressure-pumps" id='mozhna'>{t("header.header21")}</Link>
                                    <span><Link href="/accessories-and-repair-kits" id='mozhna'>
                                        {t("header.header22")}</Link></span>
                                    <span><Link href="/high-pumps" id='mozhna'>{t("header.header23")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more}>
                                <button>
                                    <Link href="/payment-systems" id='mozhna'>{t("header.header24")}</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/payment-systems/cashless" id='mozhna'>{t("header.header26")}</Link>
                                    <span><Link href="/payment-systems/cashless/transactions-with-payment-cards"
                                                id='mozhna'>{t("header.header27")}</Link></span>
                                    <span><Link href="/payment-systems/cashless//loyalty-operations"
                                                id='mozhna'>{t("header.header28")}</Link></span>
                                    <Link href="/payment-systems/cash" id='mozhna'>{t("header.header29")}</Link>
                                    <span><Link href='/payment-systems/cash/banknote-readers-and-accessories'
                                                id='mozhna'>{t("header.header30")}</Link></span>
                                    <span><Link href='/payment-systems/cash/coin-validators'
                                                id='mozhna'>{t("header.header31")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.more} style={{position: 'static'}}>
                                <button>
                                    <Link href="/product" id='mozhna'>{t("header.header32")}</Link>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <ul className={s.dropdown_content2}>
                                    <li>
                                        <Link href="/product" id='mozhna'>{t("header.header33")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/accessories-for-vacuum" id='mozhna'>{t("header.header34")}</Link>
                                        <span><Link href="/accessories-for-vacuum/for-compressors"
                                                    id='mozhna'>{t("header.header35")}</Link></span>
                                        <span><Link href="/accessories-for-vacuum/design-elements-of-a-vacuum-cleaner"
                                                    id='mozhna'>{t("header.header36")}</Link></span>
                                        <span><Link href="/accessories-for-vacuum/filters"
                                                    id='mozhna'>{t("header.header37")}</Link></span>
                                        <span><Link href="/accessories-for-vacuum/engines-and-turbines"
                                                    id='mozhna'>{t("header.header38")}</Link></span>
                                        <span><Link href="/accessories-for-vacuum/nozzles-and-hose-connections"
                                                    id='mozhna'>{t("header.header39")}</Link></span>
                                        <span><Link href="/accessories-for-vacuum/suction-hoses"
                                                    id='mozhna'>{t("header.header40")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/advertising-accessories" id='mozhna'>{t("header.header41")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/peating-fittings" id='mozhna'>{t("header.header42")}</Link>
                                        <span><Link href="/peating-fittings/sensors"
                                                    id='mozhna'>{t("header.header43")}</Link></span>
                                        <span><Link href="/peating-fittings/nozzles"
                                                    id='mozhna'>{t("header.header44")}</Link></span>
                                        <span><Link href="/peating-fittings/electric-heaters"
                                                    id='mozhna'>{t("header.header45")}</Link></span>
                                        <span><Link href="/peating-fittings/diaphragmatic-vessels"
                                                    id='mozhna'>{t("header.header46")}</Link></span>
                                        <span><Link href="/peating-fittings/burners-and-accessories"
                                                    id='mozhna'>{t("header.header47")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/chemicals-for-automatic-wash" id='mozhna'>
                                            {t("header.header48")}</Link>
                                        <span><Link href="/chemicals-for-automatic-wash/car-wash-waxes" id='mozhna'>
                                            {t("header.header49")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/cleaning-and-maintenance" id='mozhna'>{t("header.header50")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/dosage-of-powder" id='mozhna'>{t("header.header51")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/electrical-and-electronic-components"
                                              id='mozhna'>{t("header.header52")}</Link>
                                        <span><Link href="/electrical-and-electronic-components/sensors"
                                                    id='mozhna'>{t("header.header53")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/relays-and-contactors"
                                                    id='mozhna'>{t("header.header54")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/buttons"
                                                    id='mozhna'>{t("header.header55")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/sorting-machines"
                                                    id='mozhna'>{t("header.header56")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/PLC-controllers"
                                                    id='mozhna'>{t("header.header57")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/transformers-and-power-supplies"
                                                    id='mozhna'>{t("header.header58")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/safety-devices"
                                                    id='mozhna'>{t("header.header59")}</Link></span>
                                        <span><Link href="/electrical-and-electronic-components/displays-LCD-LED)"
                                                    id='mozhna'>{t("header.header60")} (LCD, LED)</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/hydraulic-elements" id='mozhna'>{t("header.header61")}</Link>
                                        <span><Link href="/hydraulic-elements/software-assemblers"
                                                    id='mozhna'>{t("header.header62")}</Link></span>
                                        <span><Link href='/hydraulic-elements/manometers-and-thermometers'
                                                    id='mozhna'>{t("header.header63")}</Link></span>
                                        <span><Link href='/hydraulic-elements/safety-valves'
                                                    id='mozhna'>{t("header.header64")}</Link></span>
                                        <span><Link href='/hydraulic-elements/float-valves'
                                                    id='mozhna'>{t("header.header65")}</Link></span>
                                        <span><Link href='/hydraulic-elements/valves-and-reducers'
                                                    id='mozhna'>{t("header.header66")}</Link></span>
                                        <span><Link href='/hydraulic-elements/check-valves'
                                                    id='mozhna'>{t("header.header67")}</Link></span>
                                        <span><Link href='/hydraulic-elements/hydraulic-connectors'
                                                    id='mozhna'>{t("header.header68")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/equipment-washing-station" id='mozhna'>
                                            {t("header.header69")}</Link>
                                        <span><Link href="/equipment-washing-station/door-stickers" id='mozhna'>
                                            {t("header.header70")}</Link></span>
                                        <span><Link href="/equipment-washing-station/mat-holder" id='mozhna'>
                                            {t("header.header71")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/fiscalization" id='mozhna'>{t("header.header72")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/car-care" id='mozhna'>{t("header.header73")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/weapons-and-accessories" id='mozhna'>{t("header.header74")}</Link>
                                        <span><Link href="/weapons-and-accessories/equipment"
                                                    id='mozhna'>{t("header.header75")}</Link></span>
                                        <span><Link href="/weapons-and-accessories/guns-and-brushes"
                                                    id='mozhna'>{t("header.header76")}</Link></span>
                                        <span><Link href="/weapons-and-accessories/lance-scabbards"
                                                    id='mozhna'>{t("header.header77")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/cables-hoses" id='mozhna'>{t("header.header78")}</Link>
                                        <span><Link href="/cables-hoses/other-cables"
                                                    id='mozhna'>{t("header.header79")}</Link></span>
                                        <span><Link href="/cables-hoses/cannon-cables"
                                                    id='mozhna'>{t("header.header80")}</Link></span>
                                        <span><Link href="/cables-hoses/brush-cables"
                                                    id='mozhna'>{t("header.header81")}</Link></span>
                                        <span><Link href="/cables-hoses/ropes-for-arrows"
                                                    id='mozhna'>{t("header.header82")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/engines" id='mozhna'>{t("header.header83")}</Link>
                                    </li>
                                    <li>
                                        <Link href="/closing-systems" id='mozhna'>{t("header.header84")}</Link>
                                        <span><Link href="/closing-systems/containers-for-coins"
                                                    id='mozhna'>{t("header.header85")}</Link></span>
                                        <span><Link href="/closing-systems/closing-system"
                                                    id='mozhna'>{t("header.header86")}</Link></span>
                                        <span><Link href="/closing-systems/hinges-and-stops"
                                                    id='mozhna'>{t("header.header87")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/disinfectants" id='mozhna'>{t("header.header88")}</Link>
                                        <span><Link href="/disinfectants/disinfection-of-hands"
                                                    id='mozhna'>{t("header.header89")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/water-purification" id='mozhna'>{t("header.header90")}</Link>
                                        <span><Link href="/water-purification/softener"
                                                    id='mozhna'>{t("header.header91")}</Link></span>
                                        <span><Link href="/water-purification/filters-and-accessories"
                                                    id='mozhna'>{t("header.header92")}</Link></span>
                                        <span><Link href="/water-purification/softener-head-and-accessories"
                                                    id='mozhna'>{t("header.header93")}</Link></span>
                                        <span><Link href="/water-purification/hydraulics-of-water-treatment"
                                                    id='mozhna'>{t("header.header94")}</Link></span>
                                        <span><Link href="/water-purification/reverse-osmosis-and-accessories"
                                                    id='mozhna'>{t("header.header95")}</Link></span>
                                        <span><Link href="/water-purification/brine-tanks"
                                                    id='mozhna'>{t("header.header96")}</Link></span>
                                    </li>
                                    <li>
                                        <Link href="/arrows" id='mozhna'>{t("header.header97")}</Link>
                                        <span><Link href="/arrows/single"
                                                    id='mozhna'>{t("header.header98")}</Link></span>
                                        <span><Link href="/arrows/repair-kits"
                                                    id='mozhna'>{t("header.header99")}</Link></span>
                                    </li>
                                </ul>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header4")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/chemical-means" id='mozhna'>{t("header.header4")}</Link></span>
                                    <span><Link href="/chemical-means/active-foam"
                                                id='mozhna'>{t("header.header5")}</Link></span>
                                    <span><Link href="/chemical-means/car-wash-powders"
                                                id='mozhna'>{t("header.header6")}</Link></span>
                                    <span><Link href="/chemical-means/car-wash-shampoos"
                                                id='mozhna'>{t("header.header7")}</Link></span>
                                    <span><Link href="/chemical-means/car-wash-waxes"
                                                id='mozhna'>{t("header.header8")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header9")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/electromagnetic-valves-and-repair-kits"
                                                id='mozhna'>{t("header.header9")}</Link></span>
                                    <span><Link href="/electromagnetic-valves-and-repair-kits/electromagnetic-valves"
                                                id='mozhna'>{t("header.header10")}</Link></span>
                                    <span><Link href="/electromagnetic-valves-and-repair-kits/repair-kits-of-electromagnetic-valves"
                                                id='mozhna'>{t("header.header11")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header12")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/pumps-and-detergent-dispensers"
                                                id='mozhna'>{t("header.header12")}</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/mixrite-dispenser"
                                                id='mozhna'>{t("header.header13")} Mixrite</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/dosatron"
                                                id='mozhna'>{t("header.header25")}</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/SEKO-EVO-series-pumps"
                                                id='mozhna'>{t("header.header14")} SEKO {t("header.header15")} EVO</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/DOSATRON-repair-kits"
                                                id='mozhna'>{t("header.header16")} DOSATRON</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/MIXRITE-repair-kits"
                                                id='mozhna'>{t("header.header16")} MIXRITE</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/SEKO-EVO-repair-kits"
                                                id='mozhna'>{t("header.header16")} SEKO EVO</Link></span>
                                    <span><Link href="/pumps-and-detergent-dispensers/SEKO-KOMPACT-repair-kits"
                                                id='mozhna'>{t("header.header16")} SEKO KOMPACT</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header17")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/water-pumps-and-accessories"
                                                id='mozhna'>{t("header.header17")}</Link></span>
                                    <span><Link href="/low-pressure-pumps"
                                                id='mozhna'>{t("header.header18")}</Link></span>
                                    <span><span><Link href="/accessories-for-pumps"
                                                      id='mozhna'>{t("header.header19")}</Link></span></span>
                                    <span><span> <Link href="/low-pumps"
                                                       id='mozhna'>{t("header.header20")}</Link></span></span>
                                    <span><Link href="/high-pressure-pumps"
                                                id='mozhna'>{t("header.header21")}</Link></span>
                                    <span><span><Link href="/accessories-and-repair-kits"
                                                      id='mozhna'>{t("header.header22")}</Link></span></span>
                                    <span><span><Link href="/high-pumps"
                                                      id='mozhna'>{t("header.header23")}</Link></span></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header24")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/payment-systems"
                                                id='mozhna'>{t("header.header24")}</Link></span>
                                    <span><Link href="/payment-systems/cashless"
                                                id='mozhna'>{t("header.header26")}</Link></span>
                                    <span><Link href="/payment-systems/cashless/transactions-with-payment-cards"
                                                id='mozhna'>{t("header.header27")}</Link></span>
                                    <span><Link href="/payment-systems/cashless//loyalty-operations"
                                                id='mozhna'>{t("header.header28")}</Link></span>
                                    <span><Link href="/payment-systems/cash"
                                                id='mozhna'>{t("header.header29")}</Link></span>
                                    <span><Link href='/payment-systems/cash/banknote-readers-and-accessories'
                                                id='mozhna'>{t("header.header30")}</Link></span>
                                    <span><Link href='/payment-systems/cash/coin-validators'
                                                id='mozhna'>{t("header.header31")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header34")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span> <Link href="/accessories-for-vacuum"
                                                 id='mozhna'>{t("header.header34")}</Link></span>
                                    <span><Link href="/accessories-for-vacuum/for-compressors"
                                                id='mozhna'>{t("header.header35")}</Link></span>
                                    <span><Link href="/accessories-for-vacuum/design-elements-of-a-vacuum-cleaner"
                                                id='mozhna'>{t("header.header36")}</Link></span>
                                    <span><Link href="/accessories-for-vacuum/filters"
                                                id='mozhna'>{t("header.header37")}</Link></span>
                                    <span><Link href="/accessories-for-vacuum/engines-and-turbines"
                                                id='mozhna'>{t("header.header38")}</Link></span>
                                    <span><Link href="/accessories-for-vacuum/nozzles-and-hose-connections"
                                                id='mozhna'>{t("header.header39")}</Link></span>
                                    <span><Link href="/accessories-for-vacuum/suction-hoses"
                                                id='mozhna'>{t("header.header40")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header41")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/advertising-accessories"
                                                id='mozhna'>{t("header.header41")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header42")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/peating-fittings"
                                                id='mozhna'>{t("header.header42")}</Link></span>
                                    <span><Link href='/peating-fittings/sensors'
                                                id='mozhna'>{t("header.header43")}</Link></span>
                                    <span><Link href='/peating-fittings/nozzles'
                                                id='mozhna'>{t("header.header44")}</Link></span>
                                    <span><Link href='/peating-fittings/electric-heaters'
                                                id='mozhna'>{t("header.header45")}</Link></span>
                                    <span><Link href='/peating-fittings/diaphragmatic-vessels'
                                                id='mozhna'>{t("header.header46")}</Link></span>
                                    <span><Link href='/peating-fittings/burners-and-accessories'
                                                id='mozhna'>{t("header.header47")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header48")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/chemicals-for-automatic-wash"
                                                id='mozhna'>{t("header.header48")}</Link></span>
                                    <span><Link href="/chemicals-for-automatic-wash/car-wash-waxes"
                                                id='mozhna'>{t("header.header49")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header50")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/cleaning-and-maintenance"
                                                id='mozhna'>{t("header.header50")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header51")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/dosage-of-powder"
                                                id='mozhna'>{t("header.header51")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header52")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/electrical-and-electronic-components"
                                                id='mozhna'>{t("header.header52")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/sensors"
                                                id='mozhna'>{t("header.header53")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/relays-and-contactors"
                                                id='mozhna'>{t("header.header54")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/buttons"
                                                id='mozhna'>{t("header.header55")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/sorting-machines"
                                                id='mozhna'>{t("header.header56")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/PLC-controllers"
                                                id='mozhna'>{t("header.header57")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/transformers-and-power-supplies"
                                                id='mozhna'>{t("header.header58")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/safety-devices"
                                                id='mozhna'>{t("header.header59")}</Link></span>
                                    <span><Link href="/electrical-and-electronic-components/displays-LCD-LED)"
                                                id='mozhna'>{t("header.header60")} (LCD, LED)</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header61")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/hydraulic-elements"
                                                id='mozhna'>{t("header.header61")}</Link></span>
                                    <span><Link href='/hydraulic-elements/software-assemblers'
                                                id='mozhna'>{t("header.header62")}</Link></span>
                                    <span><Link href='/hydraulic-elements/manometers-and-thermometers'
                                                id='mozhna'>{t("header.header63")}</Link></span>
                                    <span><Link href='/hydraulic-elements/safety-valves'
                                                id='mozhna'>{t("header.header64")}</Link></span>
                                    <span><Link href='/hydraulic-elements/float-valves'
                                                id='mozhna'>{t("header.header65")}</Link></span>
                                    <span><Link href='/hydraulic-elements/valves-and-reducers'
                                                id='mozhna'>{t("header.header66")}</Link></span>
                                    <span><Link href='/hydraulic-elements/check-valves'
                                                id='mozhna'>{t("header.header67")}</Link></span>
                                    <span><Link href='/hydraulic-elements/hydraulic-connectors'
                                                id='mozhna'>{t("header.header68")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header69")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/equipment-washing-station"
                                                id='mozhna'>{t("header.header69")}</Link></span>
                                    <span><Link href="/equipment-washing-station/door-stickers"
                                                id='mozhna'>{t("header.header70")}</Link></span>
                                    <span><Link href="/equipment-washing-station/mat-holder"
                                                id='mozhna'>{t("header.header71")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header72")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/fiscalization" id='mozhna'>{t("header.header72")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header73")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/car-care" id='mozhna'>{t("header.header73")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header74")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/weapons-and-accessories"
                                                id='mozhna'>{t("header.header74")}</Link></span>
                                    <span><Link href="/weapons-and-accessories/equipment"
                                                id='mozhna'>{t("header.header75")}</Link></span>
                                    <span><Link href="/weapons-and-accessories/guns-and-brushes"
                                                id='mozhna'>{t("header.header76")}</Link></span>
                                    <span><Link href="/weapons-and-accessories/lance-scabbards"
                                                id='mozhna'>{t("header.header77")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header78")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/cables-hoses" id='mozhna'>{t("header.header78")}</Link></span>
                                    <span><Link href="/cables-hoses/other-cables"
                                                id='mozhna'>{t("header.header79")}</Link></span>
                                    <span><Link href="/cables-hoses/cannon-cables"
                                                id='mozhna'>{t("header.header80")}</Link></span>
                                    <span><Link href="/cables-hoses/brush-cables"
                                                id='mozhna'>{t("header.header81")}</Link></span>
                                    <span><Link href="/cables-hoses/ropes-for-arrows"
                                                id='mozhna'>{t("header.header82")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header83")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/engines" id='mozhna'>{t("header.header83")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header84")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/closing-systems" id='mozhna'>{t("header.header84")}</Link></span>
                                    <span><Link href="/closing-systems/containers-for-coins"
                                                id='mozhna'>{t("header.header85")}</Link></span>
                                    <span><Link href="/closing-systems/closing-system"
                                                id='mozhna'>{t("header.header86")}</Link></span>
                                    <span><Link href="/closing-systems/hinges-and-stops"
                                                id='mozhna'>{t("header.header87")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header88")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/disinfectants" id='mozhna'>{t("header.header88")}</Link></span>
                                    <span><Link href="/disinfectants/disinfection-of-hands"
                                                id='mozhna'>{t("header.header89")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header90")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/water-purification"
                                                id='mozhna'>{t("header.header90")}</Link></span>
                                    <span><Link href="/water-purification/softener"
                                                id='mozhna'>{t("header.header91")}</Link></span>
                                    <span><Link href="/water-purification/filters-and-accessories"
                                                id='mozhna'>{t("header.header92")}</Link></span>
                                    <span><Link href="/water-purification/softener-head-and-accessories"
                                                id='mozhna'>{t("header.header93")}</Link></span>
                                    <span><Link href="/water-purification/hydraulics-of-water-treatment"
                                                id='mozhna'>{t("header.header94")}</Link></span>
                                    <span><Link href="/water-purification/reverse-osmosis-and-accessories"
                                                id='mozhna'>{t("header.header95")}</Link></span>
                                    <span><Link href="/water-purification/brine-tanks"
                                                id='mozhna'>{t("header.header96")}</Link></span>
                                </div>
                            </li>
                            <li className={s.dropdown + ' ' + s.less}>
                                <button>
                                    {t("header.header97")}
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={16} height={16}
                                           className={s.imgArrowManu}/>
                                </button>
                                <div className={s.dropdown_content}>
                                    <span><Link href="/arrows" id='mozhna'>{t("header.header97")}</Link></span>
                                    <span><Link href="/arrows/single"
                                                id='mozhna'>{t("header.header98")}</Link></span>
                                    <span><Link href="/arrows/repair-kits"
                                                id='mozhna'>{t("header.header99")}</Link></span>
                                </div>
                            </li>
                        </ul>
                        <div className={s.div_input2}>
                            <input placeholder={t("header.header3")} type="text" className={s.search2} value={input2}
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
                        {t("header.header100")}</p>
                    : <div className={s.basket_items}>
                        <div className={s.basket_name}>
                            <p style={{height: 'fit-content'}}>
                                <Image src='/header/registration.png' alt='registration' width={20} height={20}/>
                                {t("header.header101")}:
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
                        <p className={s.sum}>{t("header.header102")}: {order?.length} <span>{sum} гривень</span></p>
                        <Link href='/basket' className={s.but_basket} onClick={() => setOpenWin(false)}>
                            <Image src='/header/basket-gray.png' alt='basket' width={30} height={30}/>
                            {t("header.header103")}
                        </Link>
                    </div>
                }
            </div>
        </header>
    </>)
}

export default Header