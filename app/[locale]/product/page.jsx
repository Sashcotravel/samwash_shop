"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './product.module.css';
import {AiOutlineHome} from "react-icons/ai";
import Image from "next/image";
import NavProduct2 from "@/app/component/navProduct2/navProduct2";
import TopButton from "@/app/component/topButton/topButton";

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
        img: '',
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

    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        setCatalog(arrChildCatalog)
    }, [])


    return (
        <div className={s.mainDiv}>

            <TopButton index={4} />

            <NavProduct2 child={arrChildCatalog} back={''} noFilter={true} />

            <div className={s.divProduct}>
                <div className={s.wrapper}>
                    <div className={s.breadcrumbs}>
                        <div className={s.crumbs}>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <AiOutlineHome/>
                                    </Link>
                                </li>
                                <li><span>Продукти</span></li>
                            </ul>
                        </div>
                    </div>
                    <ul className={s.ulCategory}>
                        {
                            catalog.length !== undefined && catalog?.map((item, index) => {

                                return <li className={s.item} key={index}>
                                    <Link href={item.slug}>
                                        <div className={s.divImage}>
                                            <Image alt={item.title} width={200} height={200}
                                                   src={item.img.length === 0 ? '/other/noImage.jpg' : item.img}/>
                                        </div>
                                        <h3>{item.title}</h3>
                                        {
                                            item.child?.map(item2 => {

                                                return <><Link className={s.linkChild}
                                                             href={item2.slug}>{item2.title}</Link>
                                                    <ul>
                                                        {
                                                            item2.child?.map(item2 => {

                                                                return <li style={{
                                                                    listStyle: 'disclosure-closed',
                                                                    marginLeft: '20px'
                                                                }}>
                                                                    <Link className={s.linkChild}
                                                                          style={{fontWeight: '300'}}
                                                                             href={item2.slug}>{item2.title}</Link></li>
                                                            })
                                                        }
                                                    </ul>
                                                </>
                                            })
                                        }
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Product;