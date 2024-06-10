"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../chemical-means/catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {useTranslations} from "next-intl";
import {useStore} from "@/store/store";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import {FaBasketShopping} from "react-icons/fa6";
import NavProduct2 from "@/app/component/navProduct2/navProduct2";
import TopButton from "@/app/component/topButton/topButton";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const arrGoods = [
    {
        id: '95',
        title: 'Адаптер насоса Grundfos для Ebara JEXM 80',
        code: 'ELE-BLA-99-83',
        price: '35.10',
        size: 1,
        slug: 'goods4-1',
        img: '/water-pumps/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/low-pressure-pumps',
            title: 'Насоси низького тиску',
        },
        bread3: {
            slug: '/accessories-for-pumps',
            title: 'Аксесуари для насосів',
        },
    },
    {
        id: '97',
        title: 'Головка насоса CAT 350 (44837)',
        code: 'GLO-CAT-001',
        price: '2220.68',
        size: 1,
        slug: 'goods4-3',
        img: '/water-pumps/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '98',
        title: 'Головка насоса CAT 3CP1140 (46616)',
        code: 'GLO-CAT-002',
        price: '1648.64',
        size: 1,
        slug: 'goods4-4',
        img: '/water-pumps/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '99',
        title: 'Клин для насоса 340 і 350 (30057)',
        code: 'KLI-340/350',
        price: '2.19',
        size: 1,
        slug: 'goods4-5',
        img: '/water-pumps/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '100',
        title: 'КЛЮЧ (М5) 30047',
        code: 'KLI-CAT',
        price: '1.65',
        size: 1,
        slug: 'goods4-6',
        img: '/water-pumps/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '101',
        title: 'Заглушка латунна для насоса CAT 1140',
        code: 'KOR-CAT-003',
        price: '58.09',
        size: 1,
        slug: 'goods4-7',
        img: '/water-pumps/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '102',
        title: 'Заглушка латунна для насоса CAT 350',
        code: 'KOR-CAT-002',
        price: '58.09',
        size: 1,
        slug: 'goods4-8',
        img: '/water-pumps/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '103',
        title: 'Масляна пробка (з ущільнювачем) для насоса CAT 340 і CAT 350',
        code: 'KOR-CAT-006',
        price: '60.45',
        size: 1,
        slug: 'goods4-9',
        img: '/water-pumps/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '104',
        title: 'Масляна пробка з прокладкою для насоса CAT 1140',
        code: 'KOR-CAT-005',
        price: '49.38',
        size: 1,
        slug: 'goods4-10',
        img: '/water-pumps/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '105',
        title: 'Кріплення валу 47.0300.01 Interpump',
        code: 'UCH-WAL-47030001',
        price: '166.94',
        size: 1,
        slug: 'goods4-11',
        img: '/water-pumps/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '106',
        title: 'Плунжер насоса CAT 1140',
        code: 'NUR-CAT-002',
        price: '140.69',
        size: 1,
        slug: 'goods4-12',
        img: '/water-pumps/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '107',
        title: 'НАСОС РОБОЧИЙ CAT 350',
        code: 'NUR-CAT-001',
        price: '433.55',
        size: 1,
        slug: 'goods4-13',
        img: '/water-pumps/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '108',
        title: 'Кришка зчеплення для CAT 340 і CAT 350',
        code: 'OSL-POM-340/350',
        price: '136.58',
        size: 1,
        slug: 'goods4-14',
        img: '/water-pumps/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '109',
        title: 'Кришка зчеплення насоса Hawk NMT',
        code: 'OSL-HAWK-NMT',
        price: '99.80',
        size: 1,
        slug: 'goods4-15',
        img: '/water-pumps/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '110',
        title: 'Кришка вала для насосів CAT 350 і 1140',
        code: 'OSL-CAT-WAL',
        price: '40.20',
        size: 1,
        slug: 'goods4-16',
        img: '/water-pumps/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '111',
        title: 'Ущільнювач латунний CAT 350',
        code: 'PLO-CAT-001',
        price: '208.68',
        size: 1,
        slug: 'goods4-17',
        img: '/water-pumps/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '112',
        title: 'Насос CAT 350',
        code: 'POM-CAT-350',
        price: '4031.90',
        size: 1,
        slug: 'goods4-18',
        img: '/water-pumps/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '113',
        title: 'Насос CAT 3CP 1140',
        code: 'POM-CAT-003',
        price: '3121.88',
        size: 1,
        slug: 'goods4-19',
        img: '/water-pumps/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '114',
        title: 'Насос CAT 5CP2150W',
        code: 'POM-CAT-BKF5CP2150W',
        price: '3818.00',
        size: 1,
        slug: 'goods4-20',
        img: '/water-pumps/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '115',
        title: 'Насос CAT BKF340D ПРАВИЙ червоний з логотипом SamWash (вихідний вал з правого боку)',
        code: 'POM-CAT-BKF340D',
        price: '3666.70',
        newPrice: '3556.65',
        size: 1,
        slug: 'goods4-21',
        img: '/water-pumps/21.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки : 3073,77 доларів',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '116',
        title: 'Насос CAT SamWash340DRS, ЛІВИЙ червоний, з логотипом SamWash (вихідний вал з лівого боку)',
        code: 'POM-CAT-BKF340F',
        price: '3802.93',
        newPrice: '',
        size: 1,
        slug: 'goods4-22',
        img: '/water-pumps/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '117',
        title: 'Насос HAWK NMT1220CWL (1.099-298.0) лівий',
        code: 'POM-HAWK-NMT-1220-CWL',
        price: '2014.44',
        newPrice: '',
        size: 1,
        slug: 'goods4-23',
        img: '/water-pumps/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '118',
        title: 'Насос Hawk NMT1220CWR',
        code: 'POM-HAWK-NMT-1220-CWR',
        price: '2263.76',
        newPrice: '',
        size: 1,
        slug: 'goods4-24',
        img: '/water-pumps/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '119',
        title: 'Насос повітряний HAWK NMT1520CWL (1.099-300.0)',
        code: 'POM-HAWK-NMT-1520-CWL',
        price: '2188.69',
        newPrice: '',
        size: 1,
        slug: 'goods4-25',
        img: '/water-pumps/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '120',
        title: 'Насос HAWK NMT1520CWR (1.099-301.0)',
        code: 'POM-HAWK-NMT-1520-CWR',
        price: '2215.75',
        newPrice: '',
        size: 1,
        slug: 'goods4-26',
        img: '/water-pumps/26.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '121',
        title: 'Насос HAWK NMT1520CWR (1.099-301.0)',
        code: 'POM-HAWK-NMT-2120-CWR',
        price: '2183.30',
        newPrice: '',
        size: 1,
        slug: 'goods4-27',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '122',
        title: 'Interpump VHT 4715 правий',
        code: 'POM-IP-VHT4715-0000',
        price: '4148.99',
        newPrice: '',
        size: 1,
        slug: 'goods4-28',
        img: '/water-pumps/28.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '123',
        title: 'Насос Interpump VHT 4715S lewa',
        code: 'POM-IP-VHT4715S-0000',
        price: '4508.36',
        newPrice: '',
        size: 1,
        slug: 'goods4-29',
        img: '/water-pumps/29.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '129',
        title: 'Гнучка муфта для Interpump HT4715, 4-5.5 (ZG151) EH',
        code: 'SPR-IP-EH',
        price: '97.58',
        newPrice: '',
        size: 1,
        slug: 'goods4-35',
        img: '/water-pumps/35.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '130',
        title: 'Муфта насоса CAT 1140 COUPLING [30736] 28мм/16,5мм',
        code: 'SPR-CAT-002',
        price: '219.15',
        newPrice: '',
        size: 1,
        slug: 'goods4-36',
        img: '/water-pumps/36.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '131',
        title: 'Муфта насоса Hawk NMT 28мм/24мм (1.099-541.0)',
        code: 'SPR-HAWK-NMT',
        price: '126.42',
        newPrice: '',
        size: 1,
        slug: 'goods4-37',
        img: '/water-pumps/37.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '132',
        title: 'Муфта насоса NU.ER.T IEC80 B14',
        code: 'SPR-NUE-003',
        price: '87.24',
        newPrice: '',
        size: 1,
        slug: 'goods4-38',
        img: '/water-pumps/38.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '133',
        title: 'Знімач сідла ущільнення насоса 340/350',
        code: 'KLU-CAT-001',
        price: '225.59',
        newPrice: '',
        size: 1,
        slug: 'goods4-39',
        img: '/water-pumps/39.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '134',
        title: 'Сальник [17547] для насоса CAT 1140',
        code: 'USZ-CAT-008',
        price: '12.10',
        newPrice: '',
        size: 1,
        slug: 'goods4-40',
        img: '/water-pumps/40.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '135',
        title: 'Сальник [48361] для насоса CAT 340/350',
        code: 'USZ-CAT-011',
        price: '15.24',
        newPrice: '',
        size: 1,
        slug: 'goods4-41',
        img: '/water-pumps/41.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '136',
        title: 'Сальник CAT (43358)',
        code: 'USZ-CAT-010',
        price: '6.27',
        newPrice: '',
        size: 1,
        slug: 'goods4-42',
        img: '/water-pumps/42.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '137',
        title: 'Сальник підшипника насоса ДЛЯ НАСОСА CAT 350',
        code: 'USZ-CAT-005',
        price: '21.30',
        newPrice: '',
        size: 1,
        slug: 'goods4-43',
        img: '/water-pumps/43.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '138',
        title: 'Сальник до насоса CAT 1140 SEAL',
        code: 'USZ-CAT-004/2',
        price: '25.18',
        newPrice: '',
        size: 1,
        slug: 'goods4-44',
        img: '/water-pumps/44.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '139',
        title: 'Сальник насоса CAT 350 САЛЬНИК КАРТЕРА',
        code: 'USZ-CAT-003/2',
        price: '25.66',
        newPrice: '',
        size: 1,
        slug: 'goods4-45',
        img: '/water-pumps/45.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '140',
        title: 'Ущільнення плунжера CAT 45688',
        code: 'USZ-NUR-CAT',
        price: '19.99',
        newPrice: '',
        size: 1,
        slug: 'goods4-46',
        img: '/water-pumps/46.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '141',
        title: 'Набір для ремонту ущільнювача гарячої води для насосів CAT 310/340/350',
        code: 'USZ-CAT-001',
        price: '571.30',
        newPrice: '',
        size: 1,
        slug: 'goods4-47',
        img: '/water-pumps/47.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '142',
        title: 'Ремкомплект сальника для насоса CAT 1140 КОМПЛЕКТ, САЛЬН',
        code: 'USZ-CAT-002',
        price: '429.91',
        newPrice: '',
        size: 1,
        slug: 'goods4-48',
        img: '/water-pumps/48.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '143',
        title: 'Ремкомплект сальника насоса CAT 5CP2150W',
        code: 'USZ-CAT-009',
        price: '1077.64',
        newPrice: '',
        size: 1,
        slug: 'goods4-49',
        img: '/water-pumps/49.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '144',
        title: 'Ремкомплект водяного сальника насоса HAWK NMT CW (1.099-849.0)',
        code: 'ZES-NAP-HAWK-1.099-849.0',
        price: '260.50',
        newPrice: '',
        size: 1,
        slug: 'goods4-50',
        img: '/water-pumps/50.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '145',
        title: 'Ремкомплект ущільнень холодної води для насосів CAT 310/340/350 (30623)',
        code: 'USZ-CAT-30623',
        price: '416.79',
        newPrice: '',
        size: 1,
        slug: 'goods4-51',
        img: '/water-pumps/51.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '146',
        title: 'Ремкомплект шатуна/ущільнення валу насоса HAWK NMT (1.905-542.0)',
        code: 'ZES-NAP-HAWK-1.905-542.0',
        price: '33.14',
        newPrice: '',
        size: 1,
        slug: 'goods4-52',
        img: '/water-pumps/52.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '147',
        title: 'Ремкомплект клапанів для насосів CAT 310, 340, 350, 5CP2120W',
        code: 'ZAW-CAT-001',
        price: '358.64',
        newPrice: '',
        size: 1,
        slug: 'goods4-53',
        img: '/water-pumps/53.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '148',
        title: 'Ремкомплект клапанів насоса CAT 1140 комплект, клапани',
        code: 'ZAW-CAT-002',
        price: '230.63',
        newPrice: '',
        size: 1,
        slug: 'goods4-54',
        img: '/water-pumps/54.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
    {
        id: '149',
        title: 'Ремкомплект клапана насоса HAWK NMT (1.905-543.0)',
        code: 'ZES-NAP-HAWK-1.905-543.0',
        price: '156.23',
        newPrice: '',
        size: 1,
        slug: 'goods4-55',
        img: '/water-pumps/55.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/water-pumps-and-accessories',
            title: 'Насоси та дозатори миючих засобів',
        },
        bread2: {
            slug: '/',
            title: '',
        },
        bread3: '',
    },
]

const arrChildCatalog = [
    {
        slug: '/accessories-and-repair-kits',
        title: 'Аксесуари та ремонтні комплекти',
    },
    {
        slug: '/high-pumps',
        title: 'Насоси',
    },
]


function HighPressurePumps() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [goods, setGoods] = useState([])
    const [priseTo, setPriseTo] = useState('')
    const [priseFrom, setPriseFrom] = useState('')

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let paginatedData = []

    let pageUrl = searchParams.get('page') || 1

    const addOrderStore = useStore(store => store.addOrder)
    const addCurrentsGoods = useStore(store => store.setCurrentsGoods)
    const newCurrentsGoods = useStore(store => store.newCurrentsGoods)
    const setNewCurrentsGoods = useStore(store => store.setNewCurrentsGoods)
    const filterPriceTo = useStore(store => store.filterPriceTo)
    const filterPriceFrom = useStore(store => store.filterPriceFrom)
    const setFilterPriceTo = useStore(store => store.setFilterPriceTo)
    const setFilterPriceFrom = useStore(store => store.setFilterPriceFrom)

    const main = (newArr) => {
        let postsData = arrGoods
        if(newArr !== undefined){
            postsData = newArr
        }
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
            ulEl.id = 'search_navigation'
            ulEl.classList.add(s['pagination__list']);

            for (let i = 0; i < pagesCount; i++) {
                const liEl = displayPaginationBtn(i + 1);
                ulEl.appendChild(liEl)
            }

            if(document.getElementById('search_navigation')){
                document.getElementById('search_navigation').remove();
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

    // useEffect(() => {
    //     main()
    //     addCurrentsGoods(arrGoods)
    // }, []);

    useEffect(() => {
        main()
        addCurrentsGoods(arrGoods)

        return (
            setNewCurrentsGoods([]),
                setFilterPriceTo(''),
                setFilterPriceFrom('')
        )
    }, []);

    useEffect(() => {
        if(newCurrentsGoods.length === 0){
            // setGoods(arrGoods)
            main(arrGoods)
        }
        else {
            // setGoods(newCurrentsGoods)
            main(newCurrentsGoods)
        }
    }, [newCurrentsGoods]);

    useEffect(() => {
        if(filterPriceTo === 'no'){
            setPriseTo('')
        } else {
            setPriseTo(filterPriceTo)
        }
    }, [filterPriceTo]);

    useEffect(() => {
        if(filterPriceFrom === 'no') {
            setPriseFrom('')
        } else {
            setPriseFrom(filterPriceFrom)
        }
    }, [filterPriceFrom]);

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

    const removeFilter = (type) => {
        if(type === 'priseFrom'){
            setFilterPriceFrom('no')
        }
        else if(type === 'priseTo'){
            setFilterPriceTo('no')
        }
    }


    return (
        <div className={s.mainDiv}>

            <TopButton index={4}/>

            <NavProduct2 child={arrChildCatalog} back={'/water-pumps-and-accessories'}/>

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
                                    <Link href='/water-pumps-and-accessories'> Водяні насоси та аксесуари</Link>
                                </li>
                                <li>
                                    <span> Насоси високого тиску</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {
                        <div className={s.filterDiv}>
                            {priseFrom !== '' && priseFrom !== 'no' ? <button onClick={() => removeFilter('priseFrom')}>
                                <AiOutlineClose /> Ціна від { priseFrom }
                            </button> : ''}
                            {priseTo !== '' && priseTo !== 'no' ? <button onClick={() => removeFilter('priseTo')}>
                                <AiOutlineClose /> Ціна до {priseTo}</button> : ''}
                        </div>
                    }

                    <h1>Насоси високого тиску</h1>
                    <div>
                        У різноманітній пропозиції магазину SamWash ви знайдете різноманітні моделі приладів та широкий
                        вибір запчастин для автомийок. В асортименті представлені насоси з підвищеним тиском подачі, які
                        в народі називають насосами високого тиску. Якщо ви шукаєте насос, замовляйте його в нашому
                        інтернет-магазині.
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

                    <div className={s.search_navigation}>
                        <div id="posts" className={s.articleBlog}></div>
                        <div id="pagination" className={s.pagination}></div>
                    </div>

                    <div className={s.descDiv}>
                        <div className={s.descDesc}>
                            <h2>Насос високого тиску для автомийки – який вибрати? На що варто звернути увагу
                                перед покупкою?</h2>
                            <p>
                                Насос високого тиску використовується в багатьох галузях промисловості. Застосовується
                                скрізь, де необхідно використовувати технологію миття під тиском. Ефективна та швидка
                                робота під дуже високим тиском - це найкоротший опис хорошого насоса. Також перевірте,
                                чи обладнано обладнання міцним корпусом із міцних матеріалів.
                            </p> <br/>
                            <p>
                                Вибираючи конкретну модель насоса, переконайтеся, що виробник надає вам доступ до всіх
                                витратних матеріалів. BKF, як професіонал, дозволяє придбати всі змінні елементи, без
                                яких неможлива нормальна робота насоса. У цій категорії ви знайдете, серед іншого:
                                <br/><br/>
                                голови,<br/>
                                латунні пробки,<br/>
                                кріплення,<br/>
                                керамічні поршні,<br/>
                                кришки зчеплення,<br/>
                                ущільнення.<br/>
                            </p> <br/>
                            <p>
                                Перш ніж купувати аксесуари для насосів, переконайтеся, що конкретний продукт підходить
                                для моделі насоса високого тиску, якою обладнана ваша автомийка.
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
                                <h2>Насоси високого тиску – що відрізняє кращі прилади?</h2> <br/>
                                <p>
                                    Насоси високого тиску для автомийок повинні бути надійними і придатними для
                                    інтенсивної експлуатації. Не менш важлива їх правильна конструкція, яка забезпечить
                                    їх ефективну роботу в будь-яких умовах. Навіть вологість, вода та інші шкідливі
                                    чинники, які можуть з'явитися в безконтактної мийки, не стануть перешкодою для її
                                    роботи. Пристрої, які ви знайдете в цій категорії, ідеально адаптовані для роботи в
                                    складних умовах. Чим ще вони виділяються? Кожен насос високого тиску
                                    характеризується довговічною та добре продуманою конструкцією, яка обмежує втрати
                                    тиску. У нашій пропозиції є обладнання з додатковим ущільненням, що підвищує
                                    стійкість і знижує ризик протікання. Запобігає протіканню навіть при значних
                                    коливаннях температури. Насоси високого тиску оснащені сучасними технологіями,
                                    завдяки яким вони працюють краще та ефективніше. Крім того, інноваційне обладнання
                                    гарантує безпеку під час використання. Зверніть увагу на моделі, оснащені міцними
                                    керамічними поршнями, які забезпечують чудовий потік рідини. Латунні головки і
                                    елементи з нержавіючої сталі забезпечують тривалий термін служби і високу стійкість
                                    до різних зовнішніх факторів.
                                </p> <br/>
                                <p>
                                    Кращі насоси високого тиску для автомийки прості в обслуговуванні. Також вони
                                    характеризуються високою стійкістю до корозії та впливу різних хімікатів, які
                                    використовуються на автомийці. Ми пропонуємо моделі, оснащені спеціальними масляними
                                    наповнювачами, які дозволяють легко доливати. Підтримка належного рівня масла
                                    продовжує термін служби насоса.
                                </p> <br/>
                                <p>
                                    Вам цікаво, чому варто обрати пропозицію нашого магазину? Висока якість продукції є
                                    результатом багаторічного досвіду та постійного розширення знань наших спеціалістів.
                                    Ми докладаємо всіх зусиль, щоб наші клієнти могли отримати від нас найвищу якість.
                                    Ми усвідомлюємо, що багато факторів впливають на задоволеність користувачів
                                    автомийки, зокрема:
                                    <br/><br/>
                                    надійна робота приладів,<br/>
                                    швидке обслуговування,<br/>
                                    ефективне миття автомобіля,<br/>
                                    прості платежі,<br/>
                                    безпеки.<br/>
                                </p> <br/>
                                <p>
                                    У нашому магазині ви знайдете насоси, електромагнітні клапани, двигуни та широкий
                                    вибір хімікатів. Довіртеся нам і ми подбаємо про комплексне оснащення вашої мийки.
                                    Якщо під час покупки у вас виникли сумніви, скористайтеся зручним способом зв'язку
                                    та задайте питання нашим консультантам. Ми допоможемо підібрати вироби з відмінними
                                    параметрами.
                                </p> <br/>
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

export default HighPressurePumps;