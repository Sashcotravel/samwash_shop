"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
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
        id: '39',
        title: 'Диспенсер-циліндр MixRite',
        code: 'CYL-DEM',
        price: '114.27',
        size: 1,
        slug: 'goods3-1',
        img: '/pump/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '40',
        title: 'Нижня втулка поршня',
        code: 'REK-TLO-DOL-644',
        price: '48.19',
        size: 1,
        slug: 'goods3-2',
        img: '/pump/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '41',
        title: 'Дозатрон (D3RE2AF 0,2-2% AF)',
        code: 'DOS-D3RE2AF',
        price: '3120.97',
        size: 1,
        slug: 'goods3-3',
        img: '/pump/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/dosatron',
            title: 'Дозатрони',
        },
        bread3: '',
    },
    {
        id: '42',
        title: 'Дозатрон (D3RE2VF 0,2-2% VF)',
        code: 'DOS-D3RE2VF',
        price: '3211.83',
        newPrice: '',
        size: 1,
        slug: 'goods3-4',
        img: '/pump/4.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/dosatron',
            title: 'Дозатрони',
        },
        bread3: '',
    },
    {
        id: '43',
        title: 'Дозатор Mixrite 571 (0,3-2%)',
        code: 'DOZ-MIX-571',
        price: '1573.67',
        size: 1,
        slug: 'goods3-5',
        img: '/pump/5.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/mixrite-dispenser',
            title: 'Порошки для миття автомобіля',
        },
        bread3: '',
    },
    {
        id: '44',
        title: 'Головка з клапанами EM99106300 EPDM для насосів серії Kompact (AMS200)',
        code: 'POM-KOM-GlO',
        price: '232.20',
        newPrice: '',
        size: 1,
        slug: 'goods3-6',
        img: '/pump/6.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-KOMPACT-repair-kits',
            title: 'Ремкомплекти SEKO KOMPACT',
        },
        bread3: '',
    },
    {
        id: '45',
        title: 'Головка з клапанами EPDM для насосів серії EVO (APG603,APG800)',
        code: 'POM-TEK-GlO',
        price: '501.77',
        newPrice: '',
        size: 1,
        slug: 'goods3-7',
        img: '/pump/99.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-repair-kits',
            title: 'Ремкомплекти SEKO EVO',
        },
        bread3: '',
    },
    {
        id: '46',
        title: 'Головка з клапанами FPM [EM99106490] для насосів серії SEKO EVO (APG603,APG800)',
        code: 'POM-TEK-GlO-FPM',
        price: '462.36',
        newPrice: '',
        size: 1,
        slug: 'goods3-8',
        img: '/pump/99.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-repair-kits',
            title: 'Ремкомплекти SEKO EVO',
        },
        bread3: '',
    },
    {
        id: '47',
        title: 'Верхня і нижня гільзи поршня + термопластична пружина',
        code: 'REK-TLO-DOS',
        price: '133.73',
        newPrice: '',
        size: 1,
        slug: 'goods3-9',
        img: '/pump/7.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '48',
        title: 'Дозатрон верхня поршнева втулка',
        code: 'REK-DOS-643',
        price: '38.90',
        newPrice: '',
        size: 1,
        slug: 'goods3-10',
        img: '/pump/8.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '49',
        title: 'Мембрана для насосів серії EVO (APG603,APG800)',
        code: 'ПОМ-ТЕК-МЕМ',
        price: '96.94',
        newPrice: '',
        size: 1,
        slug: 'goods3-11',
        img: '/pump/9.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-repair-kits',
            title: 'Ремкомплекти SEKO EVO',
        },
        bread3: '',
    },
    {
        id: '50',
        title: 'Мембрана для насосів серії Kompact (AMS200)',
        code: 'ПОМ-КОМ-МЕМ',
        price: '120.28',
        newPrice: '',
        size: 1,
        slug: 'goods3-12',
        img: '/pump/10.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-KOMPACT-repair-kits',
            title: 'Ремкомплекти SEKO KOMPACT',
        },
        bread3: '',
    },
    {
        id: '60',
        title: 'Гайка для насосів серії EVO / Kompact',
        code: 'ПОМ-ТЕК-НАК',
        price: '24.62',
        newPrice: '',
        size: 1,
        slug: 'goods3-13',
        img: '/pump/11.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-series-pumps',
            title: 'Насоси SEKO серії EVO',
        },
        bread3: '',
    },
    {
        id: '61',
        title: 'Кришка зворотного клапана дозатора Dosatron',
        code: 'NAK-ZAW-DOS',
        price: '17.88',
        newPrice: '',
        size: 1,
        slug: 'goods3-14',
        img: '/pump/12.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '62',
        title: 'Кришка зворотного клапана диспенсера MixRite',
        code: 'NAK-ZAW-DEM',
        price: '147.60',
        newPrice: '',
        size: 1,
        slug: 'goods3-15',
        img: '/pump/13.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '63',
        title: 'Корпус дозатора Dosatron',
        code: 'OBU-DOZ-DOS-057',
        price: '306.28',
        newPrice: '',
        size: 1,
        slug: 'goods3-16',
        img: '/pump/14.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '64',
        title: 'Корпус дозатора MixRite',
        code: 'OBU-DOZ-DEM',
        price: '185.47',
        newPrice: '',
        size: 1,
        slug: 'goods3-17',
        img: '/pump/15.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '65',
        title: 'Ущільнювальне кільце для диспенсера MixRite (38021080048 viton demo)',
        code: 'ORI-004',
        price: '0.89',
        newPrice: '',
        size: 1,
        slug: 'goods3-18',
        img: '/pump/16.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '66',
        title: 'Ущільнювальне кільце для дозатора MixRite (38021090049 демо)',
        code: 'ORI-003',
        price: '0.90',
        newPrice: '',
        size: 1,
        slug: 'goods3-19',
        img: '/pump/17.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '67',
        title: 'Ущільнювальне кільце MixRite (38060211447 демонстрацій)',
        code: 'ORI-002',
        price: '1.44',
        newPrice: '',
        size: 1,
        slug: 'goods3-20',
        img: '/pump/18.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '68',
        title: 'Ущільнювальне кільце MixRite (38060221146 демонстрацій)',
        code: 'ORI-001',
        price: '2.66',
        newPrice: '',
        size: 1,
        slug: 'goods3-21',
        img: '/pump/20.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '69',
        title: 'Ущільнювальне кільце MixRite (38060222044 демонстрації)',
        code: 'ORI-005',
        price: '3.10',
        newPrice: '',
        size: 1,
        slug: 'goods3-22',
        img: '/pump/21.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '70',
        title: 'Прокладка кришки дозатора Dosatron O-ring (JDI001)',
        code: 'ORI-DOS-001',
        price: '4.50',
        newPrice: '',
        size: 1,
        slug: 'goods3-23',
        img: '/pump/22.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '71',
        title: 'Ручка дозування хімікатів MixRite',
        code: 'POK-RET-DEM',
        price: '28.23',
        newPrice: '',
        size: 1,
        slug: 'goods3-24',
        img: '/pump/23.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '72',
        title: 'Кришка дозатора Dosatron (MPDI186)',
        code: 'ПОК-ДОЗ-ДОС-МП',
        price: '300.59',
        newPrice: '',
        size: 1,
        slug: 'goods3-25',
        img: '/pump/24.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '73',
        title: 'Кришка дозатора Dosatron (PDI685)',
        code: 'POK-DOZ-DOS',
        price: '280.83',
        newPrice: '',
        size: 1,
        slug: 'goods3-26',
        img: '/pump/25.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '74',
        title: 'Нижня кришка диспенсера MixRite (1618-043532)',
        code: 'POK-DOL-DEM',
        price: '31.22',
        newPrice: '',
        size: 1,
        slug: 'goods3-27',
        img: '/pump/26.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '75',
        title: 'Кришка диспенсера MixRite (1618-043111)',
        code: 'POK-DOZ-DEM',
        price: '104.40',
        newPrice: '',
        size: 1,
        slug: 'goods3-28',
        img: '/pump/27.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '76',
        title: 'Насос дозатора Dosatron (PCDI030HT)',
        code: 'ПОМ-ДОЗ-ДОС-030',
        price: '624.72',
        newPrice: '',
        size: 1,
        slug: 'goods3-30',
        img: '/pump/28.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '77',
        title: 'Насос-дозатор SEKO Tekna EVO APG603 з логотипом SamWash для кислотної хімії (червоний)',
        code: 'DOS-POM-TEK-APG603-FPM',
        price: '1141.34',
        newPrice: '',
        size: 1,
        slug: 'goods3-31',
        img: '/pump/29.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-series-pumps',
            title: 'Насоси SEKO серії EVO',
        },
        bread3: '',
    },
    {
        id: '78',
        title: 'Дозуючий насос SEKO Tekna EVO APG603 з логотипом SamWash для лужної хімії (червоний)',
        code: 'DOS-POM-TEK-APG603-EPDM',
        price: '1141.34',
        newPrice: '',
        size: 1,
        slug: 'goods3-32',
        img: '/pump/30.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-series-pumps',
            title: 'Насоси SEKO серії EVO',
        },
        bread3: '',
    },
    {
        id: '79',
        title: 'Дозуючий насос SEKO Tekna EVO APG800 NHH1000 (синій) ущільнення EPDM - лужна хімія',
        code: 'DOS-POM-TEK-APG800-BL',
        price: '1867.37',
        newPrice: '',
        size: 1,
        slug: 'goods3-33',
        img: '/pump/31.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-series-pumps',
            title: 'Насоси SEKO серії EVO',
        },
        bread3: '',
    },
    {
        id: '80',
        title: 'Фільтр для диспенсера Dosatron 8x12 (MPDI207)',
        code: 'SIT-DOS-MPDI207',
        price: '50.00',
        newPrice: '',
        size: 1,
        slug: 'goods3-34',
        img: '/pump/32.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '81',
        title: 'Ущільнювач важеля поршня - дозатрон (AF PJDI114AF)',
        code: 'USZ-DOS-DZW',
        price: '48.33',
        newPrice: '',
        size: 1,
        slug: 'goods3-35',
        img: '/pump/33.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '82',
        title: 'Шланг-голка для дозатора Mixrite 8 x 1,1',
        code: 'WAZ-IGI-8X1,1',
        price: '4.23',
        newPrice: '',
        size: 1,
        slug: 'goods3-36',
        img: '/pump/34.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '83',
        title: 'Дозатрон дозатор HT/AF зворотний клапан (PJDI115HTAF)',
        code: 'ZAW-HTAF-DOS',
        price: '140.49',
        newPrice: '',
        size: 1,
        slug: 'goods3-37',
        img: '/pump/35.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '84',
        title: 'Зворотний клапан диспенсера Dosatron VF (PJDI115VF)',
        code: 'ZAW-VF-DOS',
        price: '139.73',
        newPrice: '',
        size: 1,
        slug: 'goods3-38',
        img: '/pump/36.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '85',
        title: 'Клапани всмоктування/нагнітання для насосів серії EVO (APG603,APG800) - набір з 2 шт.',
        code: 'POM-TEK-ZAW',
        price: '208.36',
        newPrice: '',
        size: 1,
        slug: 'goods3-39',
        img: '/pump/37.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-repair-kits',
            title: 'Ремкомплекти SEKO EVO',
        },
        bread3: '',
    },
    {
        id: '86',
        title: 'Клапани всмоктування/нагнітання для насосів серії Kompact (AMS200)',
        code: 'POM-KOM-ZAW',
        price: '114.13',
        newPrice: '',
        size: 1,
        slug: 'goods3-40',
        img: '/pump/38.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-KOMPACT-repair-kits',
            title: 'Ремкомплекти SEKO KOMPACT',
        },
        bread3: '',
    },
    {
        id: '87',
        title: 'Односторонній клапан Mixrite (1618-043112)',
        code: 'ZAW-JED-GREN',
        price: '82.00',
        newPrice: '',
        size: 1,
        slug: 'goods3-41',
        img: '/pump/39.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '88',
        title: 'Монтажний комплект для насосів серії EVO (APG603,APG800)',
        code: 'ПОМ-ТЕК-ЗЕС',
        price: '204.16',
        newPrice: '',
        size: 1,
        slug: 'goods3-42',
        img: '/pump/40.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-repair-kits',
            title: 'Ремкомплекти SEKO EVO',
        },
        bread3: '',
    },
    {
        id: '89',
        title: 'Монтажний комплект для насосів серії Kompact (AMS200)',
        code: 'ПОМ-КОМ-ЗЕС',
        price: '165.36',
        newPrice: '',
        size: 1,
        slug: 'goods3-43',
        img: '/pump/41.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-KOMPACT-repair-kits',
            title: 'Ремкомплекти SEKO KOMPACT',
        },
        bread3: '',
    },
    {
        id: '90',
        title: 'Ремкомплект дозатора Dosatron (PJDI116HTAF)',
        code: 'ZES-NAP-DOS-AF',
        price: '209.44',
        newPrice: '',
        size: 1,
        slug: 'goods3-44',
        img: '/pump/42.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '91',
        title: 'Ремкомплект дозатора Dosatron (PJDI116VF)',
        code: 'ZES-NAP-DOS-VF',
        price: '211.74',
        newPrice: '',
        size: 1,
        slug: 'goods3-45',
        img: '/pump/43.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
    {
        id: '92',
        title: 'Набір для ремонту дозатора Mixrite',
        code: 'ЗЕС-НАП-КРА',
        price: '103.48',
        newPrice: '',
        size: 1,
        slug: 'goods3-46',
        img: '/pump/44.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/MIXRITE-repair-kits',
            title: 'Ремкомплекти MIXRITE',
        },
        bread3: '',
    },
    {
        id: '93',
        title: 'Комплект ущільнень для насосів серії EVO (APG603,APG800)',
        code: 'POM-TEK-USZ',
        price: '49.74',
        newPrice: '',
        size: 1,
        slug: 'goods3-47',
        img: '/pump/45.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/SEKO-EVO-repair-kits',
            title: 'Ремкомплекти SEKO EVO',
        },
        bread3: '',
    },
    {
        id: '94',
        title: 'Комплект прокладок Dosatron (EMDI006HT)',
        code: 'USZ-MOT-DOS',
        price: '99.33',
        newPrice: '',
        size: 1,
        slug: 'goods3-48',
        img: '/pump/46.jpg',
        descriptionPrise: '',
        description: '',
        bread1: {
            slug: '/pumps-and-detergent-dispensers',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/DOSATRON-repair-kits',
            title: 'Ремкомплекти DOSATRON',
        },
        bread3: '',
    },
]

const arrChildCatalog = [
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


function ChemicalMeans() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [goods, setGoods] = useState([])

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let paginatedData = []

    let pageUrl = searchParams.get('page') || 1

    const addOrderStore = useStore(store => store.addOrder)

    const main = () => {
        const postsData = arrGoods
        let currentPage = Number(pageUrl)
        let rows = 20;

        function displayList(arrData, rowPerPage, page) {
            const postsEl = document.getElementById('posts');
            postsEl.innerHTML = "";
            page--;

            const start = rowPerPage * page;
            const end = start + rowPerPage;
            paginatedData = arrData?.slice(start, end);
            if (paginatedData?.length === 0) {
                paginatedData = arrData?.slice(0, 6);
            }
            setGoods(paginatedData)
        }

        function displayPagination(arrData, rowPerPage) {
            const paginationEl = document.getElementById('pagination');
            const pagesCount = Math.ceil(arrData.length / rowPerPage);
            if (pagesCount < Number(pageUrl)) {
                router.push(pathname + '?page=' + 1)
                currentPage = 1
            }
            const ulEl = document.createElement("ul");
            ulEl.classList.add(s['pagination__list']);

            for (let i = 0; i < pagesCount; i++) {
                const liEl = displayPaginationBtn(i + 1);
                ulEl.appendChild(liEl)
            }
            paginationEl.appendChild(ulEl)
        }

        function displayPaginationBtn(page) {
            const liEl = document.createElement("li");
            liEl.classList.add(s['pagination__item'])
            liEl.innerText = page
            const pagesCount = Math.ceil(postsData.length / rows);

            if (currentPage === page) {
                if(Number(currentPage) === 1){
                    liEl.classList.add(s['pagination__item__active_first']);
                }
                else if (Number(pagesCount) === Number(currentPage)){
                    liEl.classList.add(s['pagination__item__active_end']);
                }

                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            }

            liEl.addEventListener('click', () => {
                window.scrollTo(0, 0);
                currentPage = page
                displayList(postsData, rows, currentPage)

                let currentItemLi = document.getElementById('pagination__item__active');

                router.push(pathname + '?page=' + page)

                currentItemLi.classList.remove(s['pagination__item__active']);
                if(Number(currentItemLi?.textContent) === 1){
                    currentItemLi.classList.remove(s['pagination__item__active_first']);
                }
                currentItemLi.id = ''

                if(Number(currentPage) === 1){
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)){
                    liEl.classList.add(s['pagination__item__active_end']);
                }
                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            })

            return liEl;
        }

        displayList(postsData, rows, currentPage);
        displayPagination(postsData, rows);
    }

    useEffect(() => {
        main()
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

            <NavProduct2 child={arrChildCatalog} back={'/product'}/>

            {/*    <h2 className='loadingMainDiv'>Товарів не знайдено</h2>*/}

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
                                <li>
                                    <Link href='/product'> Продукти</Link>
                                </li>
                                <li>
                                    <span> Насоси та дозатори миючих засобів</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Насоси та дозатори миючих засобів</h1>
                    <div>
                        Насоси-дозатори та дозатори миючих засобів є основою обладнання кожної автомийки. Кузов
                        автомобіля можна лише ретельно вимити відповідними хімічними засобами, але однієї води
                        недостатньо. Інструменти, доступні в цій категорії, полегшать вашим клієнтам щоденне
                        використання автомийок, а вам заощадять на споживанні миючих засобів.
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
                                        <p className={s.client_code}>Код виробника: <b>{item?.code}</b></p>
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

                    <div className={s.search_navigation}>
                        <div id="posts" className={s.articleBlog}></div>
                        <div id="pagination" className={s.pagination}></div>
                    </div>

                    <div className={s.descDiv}>
                        <Image src='/pump/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Що таке насос-дозатор?</h2>
                            <p>
                                Дозуючий насос переміщує точний об’єм рідини в певний час, забезпечуючи точну об’ємну
                                швидкість потоку. Це означає, що вони керують усім процесом розподілу хімікатів навколо
                                певного об’єкта/об’єкта. Дозувальні насоси використовуються в багатьох галузях
                                промисловості, включаючи дозування рідин, змішування хімічних речовин, обробку харчових
                                продуктів, очищення води та очищення стічних вод.
                            </p> <br/> <br/>
                            <p>
                                Без цього елемента також складно уявити добре працюючу автомийку. Дозування рідини
                                зручно не тільки для клієнтів автомийки, які не хочуть забруднитися хімікатами під час
                                чищення автомобіля, а й для власників бізнесу - завдяки інтелектуальному дозуванні насос
                                використовує саме ту кількість хімікатів, яка необхідна для миття автомобіля. Це
                                дозволяє заощадити гроші, захистивши підприємців від надмірного використання хімікатів.
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
                                <h2>Чому варто впроваджувати насоси-дозатори на автомийці?</h2> <br/>
                                <p>
                                    Для більшості людей автомийки – це спосіб підтримувати свій транспортний засіб у
                                    гарному та чистому вигляді. Вони зосереджуються не на перевірці хімікатів, які
                                    використовує автомийка, а на якості послуг, які вона пропонує. Основною метою
                                    кожного власника автомийки має бути надання високоякісних послуг за доступними
                                    цінами, щоб більше клієнтів поверталося за більшою кількістю послуг у майбутньому.
                                    Такий підхід дозволяє створити постійні стосунки з водіями та розвивати свій бізнес.
                                </p> <br/>
                                <p>
                                    Однак досягти цієї мети нелегко. Більшість конкурентів стягують дуже низьку плату за
                                    свої послуги та намагаються конкурувати виключно ціною, а не якістю чи задоволеністю
                                    клієнтів. Якщо ви не хочете знижувати якість пропонованих послуг, ви можете шукати
                                    економію в іншому місці. І тут стане в нагоді насос-дозатор. Він відповідає за
                                    доставку точно визначених доз хімічних речовин у воду.
                                </p> <br/>
                                <p>
                                    Занадто мала доза хімікату означає неефективне миття автомобіля. Занадто
                                    концентрований розчин може стати причиною мікропошкодження фарби і, як наслідок,
                                    проблем у власника автомийки. Дозувальні насоси розумно дозують саме ту кількість
                                    миючого засобу, яку ви вказали. Таким чином, ви можете використовувати високоякісні
                                    хімікати на вашій автомийці, заощаджуючи на надмірному споживанні.
                                </p> <br/>
                                <p>
                                    Однак економія - не єдина перевага насосів-дозаторів. Пропонуючи хороші продукти на
                                    автомийці, ви займаєте лідируючі позиції. Водії частіше користуються безпечними
                                    автомийками, де вони можуть швидко та легко помити машину. Для більшості з них не
                                    проблема проїхати далі, щоб скористатися перевіреною автомийкою, з якою вони мають
                                    хороший досвід. Думка клієнта є одним з найважливіших елементів у розвитку
                                    будь-якого бізнесу, тому варто подбати про те, щоб ваша автомийка отримувала тільки
                                    позитивні рекомендації. Це, безумовно, допоможе вам розвивати свій бізнес, залучати
                                    нових клієнтів і підтримувати відносини з постійними користувачами автомийки.
                                </p> <br/> <br/>
                                <h2>Як вибрати насоси-дозатори</h2> <br/>
                                <p>
                                    Вибираючи насос-дозатор для вашої автомийки, необхідно враховувати кілька елементів.
                                </p> <br/>
                                <p>
                                    Я впевнений, що перше, про що ви подумали, це ціна. Це важливо, але не повинно бути
                                    єдиним критерієм. Така стратегія часто призводить до покупки неякісного обладнання,
                                    яке не витримає експлуатації протягом тривалого часу і потребуватиме частого ремонту
                                    або навіть заміни. Однак це не означає, що вся малобюджетна техніка погана. Однак
                                    вибирайте хімічні насоси від надійних постачальників, щоб бути впевненим, що купуєте
                                    якісне обладнання.
                                </p> <br/>
                                <p>
                                    Вибираючи насос-дозатор, також варто враховувати тип хімікату, який ви будете
                                    використовувати. У більшості випадків автомийки використовують лужні розчини, але
                                    зустрічаються і кислотні. Вибір насоса-дозатора та його ущільнення слід здійснювати
                                    відповідно до цього фактора, щоб хімікат не пошкодив інструмент.
                                </p> <br/>
                                <p>
                                    Якщо ви хочете придбати відмінний насос-дозатор для автомийки, вам слід шукати
                                    фірми, які спеціалізуються в цій галузі. Вони мають великий досвід продажу таких
                                    пристроїв і знають, як вони працюють в різних ситуаціях. Крім того, вони можуть
                                    порадити вам вибрати правильний насос для вашого бізнесу.
                                </p> <br/>
                                <p>
                                    Тому ми запрошуємо вас перевірити повну пропозицію насосів-дозаторів і дозаторів
                                    миючих засобів у нашому магазині. У цій категорії ви також знайдете всі елементи,
                                    необхідні для правильної роботи та обслуговування насоса. Якщо у вас виникли
                                    питання, звертайтеся - ми обов'язково допоможемо підібрати найкраще обладнання для
                                    вашої мийки.
                                </p>
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

export default ChemicalMeans;