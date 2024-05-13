"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../chemical-means/catalog.module.css';
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
        id: '187',
        title: 'Гнучка присоска для пилососа (264 019 1)',
        code: 'ELA-KON-SSA-ODK',
        price: '86.43',
        newPrice: '',
        size: 1,
        slug: 'goods7-1',
        img: '/accessories/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/1.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '188',
        title: 'Ватний фільтр',
        code: 'T0SO02860',
        price: '69.57',
        newPrice: '',
        size: 1,
        slug: 'goods7-2',
        img: '/accessories/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/2.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '189',
        title: 'Нейлоновий фільтр H=260',
        code: 'T0SO00312',
        price: '63.60',
        newPrice: '',
        size: 1,
        slug: 'goods7-3',
        img: '/accessories/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/3.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '190',
        title: 'Паперовий фільтр 29л',
        code: 'T0SO02741',
        price: '10.15',
        newPrice: '',
        size: 1,
        slug: 'goods7-4',
        img: '/accessories/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/4.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '191',
        title: 'Поліефірно-бавовняний фільтр',
        code: 'S0SO03241',
        price: '142.37',
        newPrice: '',
        size: 1,
        slug: 'goods7-5',
        img: '/accessories/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/5.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '192',
        title: 'Фільтр поліестер-ватний для набору - 3240, 3242 (FTDP00523)',
        code: 'T0SO02845',
        price: '101.12',
        newPrice: '',
        size: 1,
        slug: 'goods7-6',
        img: '/accessories/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/6.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '193',
        title: 'Поліефірно-бавовняний фільтр з каркасом',
        code: 'T0SO03240',
        price: '239.91',
        newPrice: '',
        size: 1,
        slug: 'goods7-7',
        img: '/accessories/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/7.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '194',
        title: 'Фільтр повітряний для 2-3 двигунів і турбінних пилососів (02852, 28620)',
        code: 'S0SO02852',
        price: '112.75',
        newPrice: '',
        size: 1,
        slug: 'goods7-8',
        img: '/accessories/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/8.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '195',
        title: 'Гніздо для всмоктувального шланга діаметром 36 і діаметром 38',
        code: 'S0SO02653NE',
        price: '26.76',
        newPrice: '',
        size: 1,
        slug: 'goods7-9',
        img: '/accessories/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/9.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '196',
        title: 'Муфта під шланг 50 мм',
        code: 'S0SO02782',
        price: '26.54',
        newPrice: '',
        size: 1,
        slug: 'goods7-10',
        img: '/accessories/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/10.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '197',
        title: 'Задній кінець шланга fi 50 (MPVR41815)',
        code: 'T0SO02773',
        price: '24.92',
        newPrice: '',
        size: 1,
        slug: 'goods7-11',
        img: '/accessories/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/11.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '198',
        title: 'Передній поворотний наконечник для шланга 38 мм',
        code: 'T0SO03928',
        price: '21.03',
        newPrice: '',
        size: 1,
        slug: 'goods7-12',
        img: '/accessories/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/12.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '199',
        title: 'Задній кінець шланга fi 38',
        code: 'T0SO00084',
        price: '13.55',
        newPrice: '',
        size: 1,
        slug: 'goods7-13',
        img: '/accessories/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/13.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '200',
        title: 'З\'єднувач для шлангів fi 38 (MPVR72230)',
        code: 'T0SO00047',
        price: '40.93',
        newPrice: '',
        size: 1,
        slug: 'goods7-14',
        img: '/accessories/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/14.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '201',
        title: 'Пістолет для накачування шин з манометром без роз\'єму швидкого з\'єднання',
        code: 'PIS-KOM-001',
        price: '52.87',
        newPrice: '',
        size: 1,
        slug: 'goods7-15',
        img: '/accessories/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/15.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '202',
        title: 'Продувний пістолет з подовжувачем 10 см',
        code: 'PIS-KOM-004',
        price: '50.63',
        newPrice: '',
        size: 1,
        slug: 'goods7-16',
        img: '/accessories/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/16.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '203',
        title: 'Шланг компресорний гнучкий 12х8 15м, закінчений перехідником DN12',
        code: 'ПРЗ-КОМ-15М',
        price: '363.40',
        newPrice: '',
        size: 1,
        slug: 'goods7-17',
        img: '/accessories/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/17.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '208',
        title: 'Повітряний насос Moeller M22-DDL-S-X4/X5 і кнопка випуску повітря',
        code: 'PRZ-M22-DLL-S',
        price: '43.26',
        newPrice: '',
        size: 1,
        slug: 'goods7-18',
        img: '/accessories/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/18.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
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
            slug: '/accessories-for-vacuum/engines-and-turbines',
            title: 'Двигуни і турбіни',
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
        id: '205',
        title: 'Компресор безмасляний H 215-6 AIRPRESS (36943)',
        code: 'SPR-AIR-H215',
        price: '774.60',
        newPrice: '',
        size: 1,
        slug: 'goods7-20',
        img: '/accessories/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/20.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '206',
        title: 'Безмасляний компресор HLO 215/25 AIRPRESS',
        code: 'SPR-AIR',
        price: '1039.46',
        newPrice: '',
        size: 1,
        slug: 'goods7-21',
        img: '/accessories/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/21.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '207',
        title: 'Щілинна насадка fi 38 (SPPV00156) Dakota 303E, 423W, Nevada 503, 633W, Power+, Amsterdam 440MS, Storm',
        code: 'T0SO00003',
        price: '17.00',
        newPrice: '',
        size: 1,
        slug: 'goods7-22',
        img: '/accessories/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/nozzles-and-hose-connections',
            title: 'Форсунки і з\'єднання шлангів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/22.jpg', ],
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
        id: '211',
        title: 'Тримач фільтра',
        code: 'S0SO02855',
        price: '33.98',
        newPrice: '',
        size: 1,
        slug: 'goods7-25',
        img: '/accessories/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/filters',
            title: 'Фільтри',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/25.jpg', ],
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
            slug: '/accessories-for-vacuum/engines-and-turbines',
            title: 'Двигуни і турбіни',
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
    {
        id: '213',
        title: 'Шланг fi 36, котушка 20 метрів (TBFF01153)',
        code: 'T0SO00624/Z',
        price: '19.09',
        newPrice: '',
        size: 1,
        slug: 'goods7-27',
        img: '/accessories/27.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/suction-hoses',
            title: 'Всмоктувальні шланги',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/27.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '214',
        title: 'Шланг fi 38',
        code: 'T0SO00082/Z',
        price: '29.91',
        newPrice: '',
        size: 1,
        slug: 'goods7-28',
        img: '/accessories/28.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/suction-hoses',
            title: 'Всмоктувальні шланги',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/28.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '215',
        title: 'Шланг Merlett EVA fi38, чорний',
        code: 'WAZ-MER-EVA38',
        price: '29.34',
        newPrice: '',
        size: 1,
        slug: 'goods7-29',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/suction-hoses',
            title: 'Всмоктувальні шланги',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: '',
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '216',
        title: 'Шланг для пилососа Norres (fi 51 мм)',
        code: 'WAZ-NOR-SF51',
        price: '67,79',
        newPrice: '',
        size: 1,
        slug: 'goods7-30',
        img: '/accessories/30.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/suction-hoses',
            title: 'Всмоктувальні шланги',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/30.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '217',
        title: 'Шланг спіральний для компресора 9м 10Х6,5',
        code: 'PRZ-KOM-1065-09',
        price: '116.87',
        newPrice: '',
        size: 1,
        slug: 'goods7-31',
        img: '/accessories/31.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/31.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '218',
        title: 'Внутрішній шланг fi 50',
        code: 'T0SO00520/Z',
        price: '61.48',
        newPrice: '',
        size: 1,
        slug: 'goods7-32',
        img: '/accessories/32.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/suction-hoses',
            title: 'Всмоктувальні шланги',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/32.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
    {
        id: '219',
        title: 'Ротор для безмасляного компресора HLO 215/25',
        code: 'WIR-SPR',
        price: '68.23',
        newPrice: '',
        size: 1,
        slug: 'goods7-33',
        img: '/accessories/33.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/accessories-for-vacuum',
            title: 'Аксесуари для пилососа та компресора',
        },
        bread2: {
            slug: '/accessories-for-vacuum/for-compressors',
            title: 'Аксесуари для компресорів',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/accessories/33.jpg', ],
        descriptionFull: `
        <p>Прямий</p><br/>
        `
    },
]

const arrChildCatalog = [
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
                if (Number(currentPage) === 1) {
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)) {
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
                if (Number(currentItemLi?.textContent) === 1) {
                    currentItemLi.classList.remove(s['pagination__item__active_first']);
                }
                currentItemLi.id = ''

                if (Number(currentPage) === 1) {
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)) {
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

            <TopButton index={4}/>

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
                                    <span> Аксесуари для пилососа та компресора</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Аксесуари для пилососа та компресора</h1>
                    <div>
                        Деталі пилососа та компресора є необхідними частинами обладнання для кожної автомийки. Вони
                        полегшують видалення бруду та пилу з важкодоступних місць, а також допомагають підтримувати
                        прилади в справному технічному стані. Наша пропозиція аксесуарів для пилососів і компресорів
                        включає широкий вибір продуктів, таких як всмоктувальні насадки, фільтри та шланги, а також
                        багато інших аксесуарів, необхідних для ефективного очищення автомобіля.
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
                        <Image src='/accessories/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Запчастини для пилососа - чому їх варто мати на автомийці</h2>
                            <p>
                                Наш інтернет-магазин надасть вам доступ до повного асортименту запчастин для пилососів.
                                Якщо ви хочете запропонувати своїм клієнтам комплексні та професійні клінінгові послуги,
                                купуйте запчастини. Вони дозволяють ретельно пилососити оббивку, килими та підлогу
                                автомобіля, що сприяє підвищенню гігієни та естетики салону автомобіля. Не дивно, що в
                                кожній автомийці повинні бути найважливіші аксесуари для пилососів. Запасні частини
                                дозволяють швидко відремонтувати обладнання, не зупиняючи роботу мийки на тривалий час.
                                Часто виходив з ладу лише один елемент, а не весь пилосос.
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
                                    Окрім очевидних переваг незначного технічного обслуговування (і продовження терміну
                                    служби пилососів), автомобільні аксесуари цієї категорії мають багато інших переваг,
                                    які роблять їх використання практично незамінним. Варто пам'ятати, що ефективне та
                                    ретельне очищення салону автомобіля робить клієнтів більш задоволеними послугами,
                                    які надає ваша автомийка.
                                </p> <br/>
                                <p>
                                    Крім того, запчастини для пилососів підвищують ефективність прибирання. Вони
                                    забезпечують ефективне та ретельне прибирання у важкодоступних місцях автомобіля, що
                                    скорочує час прибирання та підвищує ефективність роботи.
                                </p> <br/>
                                <p>
                                    Наявність відповідних аксесуарів для пилососів і компресорів дозволяє прибирати
                                    автомобілі швидше і ефективніше, що означає економію часу і грошей, а пропонуючи
                                    комплексні послуги з прибирання автомобілів, використовуючи аксесуари для пилососів
                                    і компресорів, можна залучити більше клієнтів і мати значний вплив на збільшення
                                    прибутку вашої автомийки.
                                </p> <br/>
                                <p>
                                    Крім того, використання професійних аксесуарів для пилососів і компресорів позитивно
                                    впливає на імідж вашої автомийки, що може сприяти підвищенню довіри клієнтів і
                                    покращенню думки про вашу компанію. Водії неодмінно оцінять сучасну та інноваційну
                                    автомийку та охочіше обиратимуть її.
                                </p> <br/> <br/>
                                <h2>Аксесуари для пилососа - які вибрати</h2> <br/>
                                <p>
                                    Володіння та використання аксесуарів для пилососів і компресорів – це інвестиція,
                                    яка приносить користь як власнику автомийки, так і її клієнтам. Завдяки їм ви можете
                                    запропонувати більш комплексні клінінгові послуги, що сприяє підвищенню
                                    задоволеності клієнтів, економії часу та грошей, покращенню іміджу вашої компанії.
                                    Але які з них вибрати, щоб повною мірою використовувати потенціал автомийки?
                                </p> <br/>
                                <p>
                                    Першим необхідним елементом пилососа є всмоктувальний шланг. Правильно підібране
                                    відповідно до потреб і типу обладнання дозволяє проводити ретельне та ефективне
                                    очищення автомобіля. Шланги, представлені в нашій пропозиції, виготовлені з
                                    високоякісних матеріалів, завдяки чому вони характеризуються високою міцністю та
                                    стійкістю до механічних пошкоджень. Прикладом міцного і довговічного шланга для
                                    пилососа є шланг для пилососа Norres (діаметр 51 мм), який використовується як
                                    внутрішній шланг.
                                </p> <br/>
                                <p>
                                    Також варто обладнати автомийку всмоктуючими форсунками. Ми пропонуємо багато видів
                                    наконечників, що відрізняються за формою, розміром і призначенням. Завдяки їм ви
                                    можете ефективно дістатися до важкодоступних місць автомобіля, таких як сидіння,
                                    кишені, відділення для речей або обшивка стелі. Наша пропозиція включає, серед
                                    іншого: щілинну насадку або гнучкий всмоктуючий наконечник.
                                </p> <br/>
                                <p>
                                    Також варто переконатися в справності роботи фільтра в пилососі. Фільтр запобігає
                                    потраплянню бруду всередину пилососа, що сприяє більш тривалому терміну служби та
                                    ефективності. Наша пропозиція включає різні типи фільтрів, які відповідають потребам
                                    різних моделей пилососів. До них відносяться бавовняні, паперові або нейлонові
                                    фільтри. Широкий асортимент запропонованих фільтрів означає, що їх можна адаптувати
                                    до будь-якого обладнання.
                                </p> <br/>
                                <p>
                                    Пам’ятайте, що також важливо регулярно обслуговувати обладнання та замінювати
                                    деталі. Такі заходи допомагають забезпечити технічну справність пилососів. Наша
                                    пропозиція включає запчастини та аксесуари для ремонту пилососів, наприклад,
                                    двигуни, компресори та інші елементи, стан яких варто перевіряти на постійній
                                    основі. Завдяки їм ви зможете швидко і якісно відремонтувати пристрій і надати своїм
                                    клієнтам повний спектр послуг.
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