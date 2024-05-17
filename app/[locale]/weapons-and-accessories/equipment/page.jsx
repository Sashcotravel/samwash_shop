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
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const arrGoods = [
    {
        id: '391',
        title: 'Насадка 1/4" GZ 40 05 (62150)',
        code: 'DYS-RM-40-05',
        price: '31.43',
        newPrice: '',
        size: 1,
        slug: 'goods18-1',
        img: '/weapons/1.jpg',
        imageShow: ['/weapons/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '392',
        title: 'Насадка 1/4" GZ 40 06 (62170)',
        code: 'DYS-RM-40-06',
        price: '32.53',
        newPrice: '',
        size: 1,
        slug: 'goods18-2',
        img: '/weapons/2.jpg',
        imageShow: ['/weapons/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '393',
        title: 'Насадка 1/4" GZ 65 04 (62540)',
        code: 'DYS-RM-65-04',
        price: '32.74',
        newPrice: '',
        size: 1,
        slug: 'goods18-3',
        img: '/weapons/3.jpg',
        imageShow: ['/weapons/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '394',
        title: 'Насадка фурма 1/4" GZ 65 05 (62560)',
        code: 'DYS-RM-65-05',
        price: '31.93',
        newPrice: '',
        size: 1,
        slug: 'goods18-4',
        img: '/weapons/4.jpg',
        imageShow: ['/weapons/4.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '395',
        title: 'Насадка 1/4" GZ 65 06',
        code: 'DYS-RM-65-06',
        price: '29.52',
        newPrice: '',
        size: 1,
        slug: 'goods18-5',
        img: '/weapons/5.jpg',
        imageShow: ['/weapons/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '396',
        title: 'Пінна насадка - розмір 04 - 1,2 мм [200 075 403]',
        code: 'DYS-PIA-1.2',
        price: '44.34',
        newPrice: '',
        size: 1,
        slug: 'goods18-6',
        img: '/weapons/6.jpg',
        imageShow: ['/weapons/6.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '397',
        title: 'Пінна насадка 200075401 - 1,05 мм',
        code: 'DYS-PIA-1.05',
        price: '44.35',
        newPrice: '',
        size: 1,
        slug: 'goods18-7',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '398',
        title: 'Керамічне сопло високого тиску з меншим потоком',
        code: 'DYS-WIT-003',
        price: '221.46',
        newPrice: '',
        size: 1,
        slug: 'goods18-8',
        img: '/weapons/8.jpg',
        imageShow: ['/weapons/8.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '399',
        title: 'Сталева губка для поролону',
        code: 'PIS-PIA-GAB',
        price: '34.77',
        newPrice: '',
        size: 1,
        slug: 'goods18-9',
        img: '/weapons/9.jpg',
        imageShow: ['/weapons/9.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '340',
        title: 'Піноутворювальна головка для пінопласту (чорна, без насадки)',
        code: 'PIS-PIA-GLO-ST75',
        price: '133.66',
        newPrice: '',
        size: 1,
        slug: 'goods18-10',
        img: '/weapons/10.jpg',
        imageShow: ['/weapons/10.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '341',
        title: 'Набір для розширення щітки з повітряним інжектором',
        code: 'SZC-INJ-KOM',
        price: '348.29',
        newPrice: '',
        size: 1,
        slug: 'goods18-11',
        img: '/weapons/11.jpg',
        imageShow: ['/weapons/11.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '342',
        title: 'Зливна пробка для контейнера для щіток MOSMATIC',
        code: 'KOR-MOS-903.251',
        price: '297.12',
        newPrice: '',
        size: 1,
        slug: 'goods18-12',
        img: '/weapons/12.jpg',
        imageShow: ['/weapons/12.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '343',
        title: 'Ленс (200029306)',
        code: 'LAN-RM',
        price: '59.77',
        newPrice: '',
        size: 1,
        slug: 'goods18-13',
        img: '/weapons/13.jpg',
        imageShow: ['/weapons/13.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '344',
        title: 'Ленс (200029306)',
        code: 'LAN-RM-EASY-15G',
        price: '102.84',
        newPrice: '',
        size: 1,
        slug: 'goods18-14',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '345',
        title: '1200 мм трубка з нержавіючої сталі з теплозахисним екраном',
        code: 'LAN-PA-005',
        price: '139.17',
        newPrice: '',
        size: 1,
        slug: 'goods18-15',
        img: '/weapons/15.jpg',
        imageShow: ['/weapons/15.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '346',
        title: 'Спис з нержавіючої сталі 450 мм з теплозахисним екраном',
        code: 'LAN-PA-001',
        price: '43.42',
        newPrice: '',
        size: 1,
        slug: 'goods18-16',
        img: '/weapons/16.jpg',
        imageShow: ['/weapons/16.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '347',
        title: 'Спис з нержавіючої сталі 500 мм з теплозахисним екраном і кришкою (прямий)',
        code: 'LAN-PA-003',
        price: '59.67',
        newPrice: '',
        size: 1,
        slug: 'goods18-17',
        img: '/weapons/17.jpg',
        imageShow: ['/weapons/17.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '348',
        title: 'Кришка насадки',
        code: 'OSL-DYS-RM',
        price: '30.82',
        newPrice: '',
        size: 1,
        slug: 'goods18-18',
        img: '/weapons/18.jpg',
        imageShow: ['/weapons/18.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '349',
        title: 'Кришка насадки (чорна)',
        code: 'OSL-DYS-PA',
        price: '20.47',
        newPrice: '',
        size: 1,
        slug: 'goods18-19',
        img: '/weapons/19.jpg',
        imageShow: ['/weapons/19.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '350',
        title: 'Кришка пістолета/списка',
        code: 'OSL-PIS-LAN-RM',
        price: '6.54',
        newPrice: '',
        size: 1,
        slug: 'goods18-20',
        img: '/weapons/20.jpg',
        imageShow: ['/weapons/20.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '351',
        title: 'Чохол для рамки щітки (020001540)',
        code: 'OSL-RAM-WLO',
        price: '66.37',
        newPrice: '',
        size: 1,
        slug: 'goods18-21',
        img: '/weapons/21.jpg',
        imageShow: ['/weapons/21.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '361',
        title: 'Контейнер для щіток з нержавіючої сталі, призначений для щіток EASYWASH365+',
        code: 'POJ-SZC',
        price: '1871.29',
        newPrice: '',
        size: 1,
        slug: 'goods18-31',
        img: '/weapons/31.jpg',
        imageShow: ['/weapons/31.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '362',
        title: 'Щетинний каркас для пензля 1/4" GW (пластик)',
        code: 'RAM-WLO',
        price: '44.39',
        newPrice: '',
        size: 1,
        slug: 'goods18-32',
        img: '/weapons/32.jpg',
        imageShow: ['/weapons/32.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '363',
        title: 'Щетинний каркас для пензля 1/4" GW (нерж. сталь)',
        code: 'RAM-WLO-STAL',
        price: '192.99',
        newPrice: '',
        size: 1,
        slug: 'goods18-33',
        img: '/weapons/33.jpg',
        imageShow: ['/weapons/33.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '366',
        title: 'Тримач сопла 1/4GW Bsp - 1/4GW Npt',
        code: 'UCH-DYS-PA',
        price: '15.90',
        newPrice: '',
        size: 1,
        slug: 'goods18-36',
        img: '/weapons/36.jpg',
        imageShow: ['/weapons/36.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '367',
        title: 'Ущільнювач 10х2,2 для пістолета активної піни R+M',
        code: 'USZ-79025',
        price: '9.15',
        newPrice: '',
        size: 1,
        slug: 'goods18-37',
        img: '/weapons/37.jpg',
        imageShow: ['/weapons/37.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '368',
        title: 'Щетина для щітки L60',
        code: 'WLO-SZC-001',
        price: '154.27',
        newPrice: '',
        size: 1,
        slug: 'goods18-38',
        img: '/weapons/38.jpg',
        imageShow: ['/weapons/38.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '369',
        title: 'Щетина для щітки L90',
        code: 'WLO-SZC-002',
        price: '173.02',
        newPrice: '',
        size: 1,
        slug: 'goods18-39',
        img: '/weapons/39.jpg',
        imageShow: ['/weapons/39.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '370',
        title: 'Постійний клапан 0,6 л/хв MTM',
        code: 'ZAW-MTM-0213',
        price: '41.19',
        newPrice: '',
        size: 1,
        slug: 'goods18-40',
        img: '/weapons/40.jpg',
        imageShow: ['/weapons/40.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '371',
        title: 'Постійний клапан 1,1 л/хв MTM (10.0320)',
        code: 'ZAW-MTM-0320',
        price: '40.29',
        newPrice: '',
        size: 1,
        slug: 'goods18-41',
        img: '/weapons/41.jpg',
        imageShow: ['/weapons/41.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '372',
        title: 'Ремкомплект для пістолета MTM AURA',
        code: 'ZES-MTM-AURA',
        price: '47.83',
        newPrice: '',
        size: 1,
        slug: 'goods18-42',
        img: '/weapons/42.jpg',
        imageShow: ['/weapons/42.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '373',
        title: 'Ремкомплект пістолета R+M ST2600 (промивка, піна) з клапаном Permanent Weep',
        code: 'ZЕS-НАП-Р+М-ПІС',
        price: '64.56',
        newPrice: '',
        size: 1,
        slug: 'goods18-43',
        img: '/weapons/43.jpg',
        imageShow: ['/weapons/43.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
    {
        id: '374',
        title: 'Ремкомплект R+M для пістолета ST-2600 (Freeze stop',
        code: 'ZES-NAP-R+M',
        price: '123.30',
        newPrice: '',
        size: 1,
        slug: 'goods18-44',
        img: '/weapons/44.jpg',
        imageShow: ['/weapons/44.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
]

const arrChildCatalog = [
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


function HighPressurePumps() {

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

            <TopButton index={4}/>

            <NavProduct2 child={arrChildCatalog} back={'/weapons-and-accessories'}/>

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
                                    <Link href='/weapons-and-accessories'> Зброя та аксесуари</Link>
                                </li>
                                <li>
                                    <span> Обладнання</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Обладнання</h1>

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