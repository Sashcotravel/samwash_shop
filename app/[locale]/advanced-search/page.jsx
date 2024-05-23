"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './search.module.css';
import {AiOutlineHome} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import TopButton from "@/app/component/topButton/topButton";
import { goodsArr } from '../../db/data'
import Image from "next/image";

const arrChildCatalog = [
    {
        title: 'Аксесуари для пилососа та компресора',
        slug: '/accessories-for-vacuum',
        img: '/accessories/main.jpg',
        child: [
            {
                slug: '/accessories-for-vacuum/for-compressors',
                title: 'Аксесуари для компресорів'
            },
            {
                slug: '/accessories-for-vacuum/design-elements-of-a-vacuum-cleaner',
                title: 'Елементи конструкції пилососа',
            },
            {
                slug: '/accessories-for-vacuum/filters',
                title: 'Фільтри',
            },
            {
                slug: '/accessories-for-vacuum/engines-and-turbines',
                title: 'Двигуни і турбіни',
            },
            {
                slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
                title: 'Форсунки і з\'єднання шлангів',
            },
            {
                slug: '/accessories-for-vacuum/suction-hoses',
                title: 'Всмоктувальні шланги',
            },
        ]
    },
    {
        title: 'Рекламні аксесуари',
        slug: '/advertising-accessories',
        img: '',
    },
    {
        title: 'Опалювальна арматура',
        slug: '/peating-fittings',
        img: '/fittings/main.jpg',
        child: [
            {
                slug: '/peating-fittings/sensors',
                title: 'Датчики',
            },
            {
                slug: '/peating-fittings/nozzles',
                title: 'Насадки',
            },
            {
                slug: '/peating-fittings/electric-heaters',
                title: 'Електричні обігрівачі',
            },
            {
                slug: '/peating-fittings/diaphragmatic-vessels',
                title: 'Діафрагмальні судини',
            },
            {
                slug: '/peating-fittings/burners-and-accessories',
                title: 'Пальники та аксесуари',
            },
        ]
    },
    {
        title: 'Хімічні засоби для автоматичних мийок',
        slug: '/chemicals-for-automatic-wash',
        img: '',
        child: [
            {
                slug: '/chemicals-for-automatic-wash/car-wash-waxes',
                title: 'Воски для миття автомобіля',
            },
        ]
    },
    {
        title: 'Хімічні засоби для безконтактної мийки',
        slug: '/chemical-means',
        img: '/chemical-means/main.jpg',
        child: [
            {
                slug: '/chemical-means/active-foam',
                title: 'Активна піна для миття автомобіля'
            },
            {
                slug: '/chemical-means/car-wash-powders',
                title: 'Порошки для миття автомобіля'
            },
            {
                slug: '/chemical-means/car-wash-shampoos',
                title: 'Шампуні для миття автомобіля'
            },
            {
                slug: '/chemical-means/car-wash-waxes',
                title: 'Воски для миття автомобіля'
            },
        ]
    },
    {
        title: 'Очищення та обслуговування',
        slug: '/cleaning-and-maintenance',
        img: '',
    },
    {
        title: 'Дозування порошку',
        slug: '/dosage-of-powder',
        img: '/dosagePowder/main.jpg',
    },
    {
        title: 'Електромагнітні клапани та ремкомплекти',
        slug: '/electromagnetic-valves-and-repair-kits',
        img: '/electromagnetic/main.jpg',
        child: [
            {
                slug: '/electromagnetic-valves-and-repair-kits/electromagnetic-valves',
                title: 'Електромагнітні клапани'
            },
            {
                slug: '/electromagnetic-valves-and-repair-kits/repair-kits-of-electromagnetic-valves',
                title: 'Ремкомплекти електромагнітних клапанів'
            },
        ]
    },
    {
        title: 'Електричні та електронні компоненти',
        slug: '/electrical-and-electronic-components',
        img: '/electronic/main.jpg',
        child: [
            {
                slug: '/electrical-and-electronic-components/sensors',
                title: 'Датчики'
            },
            {
                slug: '/electrical-and-electronic-components/relays-and-contactors',
                title: 'Реле та контактори'
            },
            {
                slug: '/electrical-and-electronic-components/buttons',
                title: 'Кнопки'
            },
            {
                slug: '/electrical-and-electronic-components/sorting-machines',
                title: 'Сортувальні машини та аксесуари'
            },
            {
                slug: '/electrical-and-electronic-components/PLC-controllers',
                title: 'Контролери PLC та аксесуари'
            },
            {
                slug: '/electrical-and-electronic-components/transformers-and-power-supplies',
                title: 'Трансформатори та джерела живлення'
            },
            {
                slug: '/electrical-and-electronic-components/safety-devices',
                title: 'Запобіжні пристрої'
            },
            {
                slug: '/electrical-and-electronic-components/displays-LCD-LED)',
                title: 'Дисплеї (LCD, LED)'
            },
        ]
    },
    {
        title: 'Гідравлічні елементи',
        slug: '/hydraulic-elements',
        img: '/hydraulic/main.jpg',
        child: [
            {
                slug: '/hydraulic-elements/software-assemblers',
                title: 'Збирачі програмного забезпечення'
            },
            {
                slug: '/hydraulic-elements/manometers-and-thermometers',
                title: 'Манометри і термометри'
            },
            {
                slug: '/hydraulic-elements/safety-valves',
                title: 'Запобіжні клапани'
            },
            {
                slug: '/hydraulic-elements/float-valves',
                title: 'Поплавкові клапани'
            },
            {
                slug: '/hydraulic-elements/valves-and-reducers',
                title: 'Регулюючі клапани та редуктори'
            },
            {
                slug: '/hydraulic-elements/check-valves',
                title: 'Зворотні клапани'
            },
            {
                slug: '/hydraulic-elements/hydraulic-connectors',
                title: 'Гідравлічні з\'єднувачі'
            },
        ]
    },
    {
        title: 'Елементи та обладнання мийної станції',
        slug: '/equipment-washing-station',
        img: '/equipmentWashing/main.jpg',
        child: [
            {
                slug: '/equipment-washing-station/door-stickers',
                title: 'Наклейки на двері',
                child: [
                    {
                        slug: '/equipment-washing-station/door-stickers/domestic',
                        title: 'Вітчизняний',
                    }
                ]
            },
            {
                slug: '/equipment-washing-station/mat-holder',
                title: 'Тримач килимка'
            },
        ]
    },
    {
        title: 'Фіскалізація',
        slug: '/fiscalization',
        img: '',
    },
    {
        title: 'Догляд за автомобілем',
        slug: '/car-care',
        img: '/carCare/main.jpg',
    },
    {
        title: 'Зброя та аксесуари',
        slug: '/weapons-and-accessories',
        img: '/weapons/main.jpg',
        child: [
            {
                slug: '/weapons-and-accessories/equipment',
                title: 'Обладнання',
                child: [
                    {
                        slug: '/weapons-and-accessories/equipment/accessories-for-brushes',
                        title: 'Аксесуари для щіток',
                    },
                    {
                        slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
                        title: 'Насадки і кришки',
                    },
                    {
                        slug: '/weapons-and-accessories/equipment/spears',
                        title: 'Списи',
                    },
                    {
                        slug: '/weapons-and-accessories/equipment/repair-kits',
                        title: 'Ремонтні комплекти',
                    },
                ]
            },
            {
                slug: '/weapons-and-accessories/guns-and-brushes',
                title: 'Рушниці та щітки'
            },
            {
                slug: '/weapons-and-accessories/lance-scabbards',
                title: 'Лансові піхви'
            },
        ]
    },
    {
        title: 'Насоси та дозатори миючих засобів',
        slug: '/pumps-and-detergent-dispensers',
        img: '/pump/main.jpg',
        child: [
            {
                slug: '/pumps-and-detergent-dispensers/mixrite-dispenser',
                title: 'Дозатор Mixrite'
            },
            {
                slug: '/pumps-and-detergent-dispensers/dosatron',
                title: 'Дозатрони'
            },
            {
                slug: '/pumps-and-detergent-dispensers/SEKO-EVO-series-pumps',
                title: 'Насоси SEKO серії EVO'
            },
            {
                slug: '/pumps-and-detergent-dispensers/DOSATRON-repair-kits',
                title: 'Ремкомплекти DOSATRON'
            },
            {
                slug: '/pumps-and-detergent-dispensers/MIXRITE-repair-kits',
                title: 'Ремкомплекти MIXRITE'
            },
            {
                slug: '/pumps-and-detergent-dispensers/SEKO-EVO-repair-kits',
                title: 'Ремкомплекти SEKO EVO'
            },
            {
                slug: '/pumps-and-detergent-dispensers/SEKO-KOMPACT-repair-kits',
                title: 'Ремкомплекти SEKO KOMPACT'
            },
        ]
    },
    {
        title: 'Водяні насоси та аксесуари',
        slug: '/water-pumps-and-accessories',
        img: '/water-pumps/main.jpg',
        child: [
            {
                slug: '/low-pressure-pumps',
                title: 'Насоси низького тиску',
                child: [
                    {
                        slug: '/accessories-for-pumps',
                        title: 'Аксесуари для насосів',
                    },
                    {
                        slug: '/low-pumps',
                        title: 'Насоси',
                    },
                ]
            },
            {
                slug: '/high-pressure-pumps',
                title: 'Насоси високого тиску',
                child: [
                    {
                        slug: '/accessories-and-repair-kits',
                        title: 'Аксесуари та ремонтні комплекти',
                    },
                    {
                        slug: '/high-pumps',
                        title: 'Насоси',
                    },
                ]
            },
        ]
    },
    {
        title: 'Кабелі/Шланги',
        slug: '/cables-hoses',
        img: '/cables/main.jpg',
        child: [
            {
                slug: '/cables-hoses/other-cables',
                title: 'Інші кабелі'
            },
            {
                slug: '/cables-hoses/cannon-cables',
                title: 'Гарматні кабелі'
            },
            {
                slug: '/cables-hoses/brush-cables',
                title: 'Щіткові кабелі'
            },
            {
                slug: '/cables-hoses/ropes-for-arrows',
                title: 'Троси для стріл'
            },
        ]
    },
    {
        title: 'Двигуни',
        slug: '/engines',
        img: '/engines/main.jpg',
    },
    {
        title: 'Платіжні системи',
        slug: '/payment-systems',
        img: '/system-payment/main.jpg',
        child: [
            {
                slug: '/payment-systems/cashless',
                title: 'Безготівковий',
                child: [
                    {
                        slug: '/payment-systems/cashless/transactions-with-payment-cards',
                        title: 'Операції з платіжними картками'
                    },
                    {
                        slug: '/payment-systems/cashless/loyalty-operations',
                        title: 'Операції лояльності з карткою/ключем',
                    },
                ]
            },
            {
                slug: '/payment-systems/cash',
                title: 'Готівка',
                child: [
                    {
                        slug: '/payment-systems/cash/banknote-readers-and-accessories',
                        title: 'Зчитувачі банкнот і аксесуари',
                    },
                    {
                        slug: '/payment-systems/cash/coin-validators',
                        title: 'Валідатори монет',
                    },
                ]
            },
        ]
    },
    {
        title: 'Системи закриття',
        slug: '/closing-systems',
        img: '/closing/main.jpg',
        child: [
            {
                slug: '/closing-systems/containers-for-coins',
                title: 'Грошові ящики, сейфи та контейнери для монет'
            },
            {
                slug: '/closing-systems/closing-system',
                title: 'Система закриття'
            },
            {
                slug: '/closing-systems/hinges-and-stops',
                title: 'Петлі та упори'
            },
        ]
    },
    {
        title: 'Дезінфікуючі засоби',
        slug: '/disinfectants',
        img: '/disinfectants/main.jpg',
        child: [
            {
                slug: '/disinfectants/disinfection-of-hands',
                title: 'Дезінфекція рук'
            },
        ]
    },
    {
        title: 'Очищення води',
        slug: '/water-purification',
        img: '/purification/main.jpg',
        child: [
            {
                slug: '/water-purification/softener',
                title: 'Пляшки з пом\'якшувачем і аксесуари',
                child: [
                    {
                        slug: '/water-purification/softener/cylinders',
                        title: 'Циліндри'
                    },
                    {
                        slug: '/water-purification/softener/filtering-layer',
                        title: 'Фільтруючий шар'
                    },
                ]
            },
            {
                slug: '/water-purification/filters-and-accessories',
                title: 'Фільтри та аксесуари',
            },
            {
                slug: '/water-purification/softener-head-and-accessories',
                title: 'Головка пом\'якшувача та аксесуари',
            },
            {
                slug: '/water-purification/hydraulics-of-water-treatment',
                title: 'Гідравліка водопідготовки',
            },
            {
                slug: '/water-purification/reverse-osmosis-and-accessories',
                title: 'Зворотний осмос і аксесуари',
            },
            {
                slug: '/water-purification/brine-tanks',
                title: 'Резервуари для розсолу',
                child: [
                    {
                        slug: '/water-purification/brine-tanks/spare-parts',
                        title: 'Запчастини'
                    },
                ]
            },
        ]
    },
    {
        title: 'Стріли',
        slug: '/arrows',
        img: '/arrow/main.jpg',
        child: [
            {
                slug: '/arrows/single',
                title: 'Неодружений'
            },
            {
                slug: '/arrows/repair-kits',
                title: 'Ремонтні комплекти',
            },
        ]
    },
]


function Product() {

    const [price, setPrice] = useState({
        from: '', to: ''
    })
    const [select, setSelect] = useState('')
    const [input, setInput] = useState('')
    const [allGoods, setAllGoods] = useState([])
    const [filterAll, setFilter] = useState({
        hasDesc: null, hasSpecial: false, hasSymbol: false, hasEAN: false, hasCode: false,
        hasPhoto: false, hasNew: false, hasSpecialOffer: false, hasFromMagazine: false, hasRecommended: false,
        hasSale: false, hasQuality: false, hasGoodPrise: false, hasHighlyRated: false,
        hasSellerRecommendation: false, hasForPoints: false,
    })

    useEffect(() => {}, [])

    const selectHandel = (e) => {
        setSelect(e.target.value)
    }

    const inputHandel = (e) => {
        setInput(e.target.value)
    }

    const priceHandler = (e, type) => {
        if(type === 'to'){
            setPrice(prev => {
                return {...prev, to: e.target.value}
            })
        } else {
            setPrice(prev => {
                return {...prev, from: e.target.value}
            })
        }
    }

    const updateFilter = (par) => {
        if(par === 'hasPhoto'){
            setFilter(prev => { return {...prev, hasPhoto: !prev.hasPhoto} })
        }
        else if (par === 'hasDesc'){
            setFilter(prev => { return {...prev, hasDesc: !prev.hasDesc} })
        }
        else if (par === 'hasSymbol'){
            setFilter(prev => { return {...prev, hasSymbol: !prev.hasSymbol} })
        }
        else if (par === 'hasSymbol'){
            setFilter(prev => { return {...prev, hasSpecial: !prev.hasSpecial} })
        }
        else if (par === 'hasEAN'){
            setFilter(prev => { return {...prev, hasEAN: !prev.hasEAN} })
        }
        else if (par === 'hasCode'){
            setFilter(prev => { return {...prev, hasCode: !prev.hasCode} })
        }
        else if (par === 'hasNew'){
            setFilter(prev => { return {...prev, hasNew: !prev.hasNew} })
        }
        else if (par === 'hasSpecialOffer'){
            setFilter(prev => { return {...prev, hasSpecialOffer: !prev.hasSpecialOffer} })
        }
        else if (par === 'hasFromMagazine'){
            setFilter(prev => { return {...prev, hasFromMagazine: !prev.hasFromMagazine} })
        }
        else if (par === 'hasRecommended'){
            setFilter(prev => { return {...prev, hasRecommended: !prev.hasRecommended} })
        }
        else if (par === 'hasSale'){
            setFilter(prev => { return {...prev, hasSale: !prev.hasSale} })
        }
        else if (par === 'hasQuality'){
            setFilter(prev => { return {...prev, hasQuality: !prev.hasQuality} })
        }
        else if (par === 'hasGoodPrise'){
            setFilter(prev => { return {...prev, hasGoodPrise: !prev.hasGoodPrise} })
        }
        else if (par === 'hasHighlyRated'){
            setFilter(prev => { return {...prev, hasHighlyRated: !prev.hasHighlyRated} })
        }
        else if (par === 'hasSellerRecommendation'){
            setFilter(prev => { return {...prev, hasSellerRecommendation: !prev.hasSellerRecommendation} })
        }
        else if (par === 'hasForPoints'){
            setFilter(prev => { return {...prev, hasForPoints: !prev.hasForPoints} })
        }
    }

    const handleSubmit = () => {
        let filteredGoods = goodsArr;

        if (input !== '') {
            filteredGoods = filteredGoods.filter(t => t.title.toLowerCase().includes(input.toLowerCase()));
        }

        if (select !== '') {
            if(select === 'all'){
                filteredGoods = filteredGoods.filter(t => t);
            }
            else {
                filteredGoods = filteredGoods.filter(t => t.bread1.title === select);
            }
        }

        if (price.from !== '' || price.to !== '') {
            const from = Number(price.from !== '' ? price.from : '0');
            const to = Number(price.to !== '' ? price.to : '1000000');

            filteredGoods = goodsArr
                .filter(t => {
                    const itemPrice = t.newPrice !== '' ? Number(t.newPrice) : Number(t.price);
                    return itemPrice >= from && itemPrice <= to;
                })
                .sort((a, b) => {
                    const aPrice = a.newPrice !== '' ? a.newPrice : a.price;
                    const bPrice = b.newPrice !== '' ? b.newPrice : b.price;
                    return aPrice - bPrice;
                });
        }

        if (filterAll.hasDesc === true) {
            filteredGoods = filteredGoods.filter(t => t.descriptionMin !== '');
        }

        if (filterAll.hasSpecial === true) {
            filteredGoods = filteredGoods.filter(t => t.descriptionPrise !== '');
        }

        if (filterAll.hasSymbol === true) {
            filteredGoods = filteredGoods.filter(t => t.symbol !== undefined);
        }

        if (filterAll.hasEAN === true) {
            filteredGoods = filteredGoods.filter(t => t.codeEAN !== '');
        }

        if (filterAll.hasCode === true) {
            filteredGoods = filteredGoods.filter(t => t.code !== '');
        }

        if (filterAll.hasPhoto === true) {
            filteredGoods = filteredGoods.filter(t => t.img !== '');
        }

        if (filterAll.hasNew === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasSpecialOffer === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasFromMagazine === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasRecommended === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasSale === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasQuality === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasGoodPrise === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasHighlyRated === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasSellerRecommendation === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }
        if (filterAll.hasForPoints === true) {
            // filteredGoods = filteredGoods.filter(t => t.img !== '');
        }

        if(filteredGoods.length !== 0){
            const wash = document.getElementById('container')
            wash.scrollIntoView({block: "start", behavior: 'smooth'});
        }

        setAllGoods(filteredGoods)
        console.log(filteredGoods)
    }

    const style = {
        cursor: 'default',
        color: '#DDDDDD',
        background: '#f4f4f4'
    }

    return (
        <div className={s.mainDiv}>

            <TopButton index={4}/>

            <section className={s.divProduct}>
                <div className={s.breadcrumbs}>
                    <div className={s.crumbs}>
                        <ul>
                            <li>
                                <Link href='/'>
                                    <AiOutlineHome/>
                                </Link>
                            </li>
                            <li><span>Розширений пошук</span></li>
                        </ul>
                    </div>
                </div>

                <div className={s.wrapper}>
                    <div className={s.divOptions}>
                        <input aria-label="пошук" type="search" className={s.inputSearch}
                               placeholder="Пошук фрази" maxLength="100" value={input}
                               onChange={(e) => inputHandel(e)}/>
                        <select className={s.selectSearch}
                                onChange={selectHandel}>
                            <option value='all'>Всі категорії</option>
                            <option value='Аксесуари для пилососа та компресора'>
                                Аксесуари для пилососа та компресора
                            </option>
                            <option value='Рекламні аксесуари'>Рекламні аксесуари</option>
                            <option value='Опалювальна арматура'>Опалювальна арматура</option>
                            <option value='Хімічні засоби для автоматичних мийок'>
                                Хімічні засоби для автоматичних мийок
                            </option>
                            <option value='Хімічні засоби для безконтактної мийки'>
                                Хімічні засоби для безконтактної мийки
                            </option>
                            <option value='Очищення та обслуговування'>Очищення та обслуговування</option>
                            <option value='Дозування порошку'>Дозування порошку</option>
                            <option value='Електромагнітні клапани та ремкомплекти'>
                                Електромагнітні клапани та ремкомплекти
                            </option>
                            <option value='Електричні та електронні компоненти'>
                                Електричні та електронні компоненти
                            </option>
                            <option value='Гідравлічні елементи'>Гідравлічні елементи</option>
                            <option value='Елементи та обладнання мийної станції'>
                                Елементи та обладнання мийної станції
                            </option>
                            <option value='Фіскалізація'>Фіскалізація</option>
                            <option value='Догляд за автомобілем'>Догляд за автомобілем</option>
                            <option value='Зброя та аксесуари'>Зброя та аксесуари</option>
                            <option value='Насоси та дозатори миючих засобів'>Насоси та дозатори миючих засобів</option>
                            <option value='Водяні насоси та аксесуари'>Водяні насоси та аксесуари</option>
                            <option value='Кабелі/Шланги'>Кабелі/Шланги</option>
                            <option value='Двигуни'>Двигуни</option>
                            <option value='Платіжні системи'>Платіжні системи</option>
                            <option value='Системи закриття'>Системи закриття</option>
                            <option value='Дезінфікуючі засоби'>Дезінфікуючі засоби</option>
                            <option value='Очищення води'>Очищення води</option>
                            <option value='Стріли'>Стріли</option>
                        </select>
                        <button className={s.butSearch} onClick={handleSubmit}>
                            <span className={s.butText}>Пошук</span>
                            <span className={s.butImage}><FaSearch/></span>
                        </button>
                    </div>
                    <div>
                        <label className={s.labelSearch}>
                            <input type="radio" name='radio'/>
                            З експресією
                            <span className={s.spanRadio}></span>
                        </label>
                        <label className={s.labelSearch}>
                            <input type="radio" name='radio'/>
                            З усіма словами
                            <span className={s.spanRadio}></span>
                        </label>
                        <label className={s.labelSearch}>
                            <input type="radio" name='radio'/>
                            Будь-яким із слів
                            <span className={s.spanRadio}></span>
                        </label>
                        <label className={s.labelSearch}>
                            <input type="radio" name='radio'/>
                            З частиною слова
                            <span className={s.spanRadio}></span>
                        </label>
                    </div>
                    <div className={s.divPrice}>
                        <b>ціна від</b>
                        <input type="text" value={price.from}
                               onChange={(e) => priceHandler(e, 'from')}/>
                        <b>до</b>
                        <input type="text" value={price.to}
                               onChange={(e) => priceHandler(e, 'to')}/>
                        <b>гривень</b>
                    </div>
                    <div className={s.column}>
                        <h2>Зона пошуку</h2>
                        <ul>
                            <li>
                                <label onChange={() => updateFilter('hasDesc')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Опис продукту</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasSpecial')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Особливості товару</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasSymbol')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Символ</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasEAN')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>код EAN</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasCode')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Код виробника</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className={s.column}>
                        <h2>Тип предмета</h2>
                        <ul>
                            <li>
                                <label onChange={() => updateFilter('hasPhoto')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>З фото</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasNew')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Новинка</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasSpecialOffer')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Особлива пропозиція</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasFromMagazine')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Товари з журналу</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasRecommended')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Рекомендований продукт</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasSale')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Розпродаж</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasQuality')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Чудова якість</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasGoodPrise')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Хороша ціна</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasHighlyRated')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Високо оцінений</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasSellerRecommendation')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Рекомендація продавця</span>
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onChange={() => updateFilter('hasForPoints')}>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>Товари за бали</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className={s.column}>
                        <h2>Продюсер</h2>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox"/>
                                    <span className={s.spanFirst}>
                                        <span>TENZI Sp. z o</span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className={s.column}>
                        <h2>Марк</h2>
                    </div>
                </div>
            </section>

            <ul id='container' className={s.ulCategory}>
                {
                    allGoods?.map((item, index) => {
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
                                <p className={s.client_code}>Код виробника: <b> {item?.code}</b></p>
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
    );
}

export default Product;