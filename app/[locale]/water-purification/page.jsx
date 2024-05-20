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
        id: '409',
        title: 'Air Check 3/8" для резервуара для розсолу (330)',
        code: 'AIR-CHE',
        price: '46.05',
        newPrice: '',
        size: 1,
        slug: 'goods23-1',
        img: '/purification/1.jpg',
        imageShow: ['/purification/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/brine-tanks',
            title: 'Резервуари для розсолу',
        },
        bread3: {
            slug: '/water-purification/brine-tanks/spare-parts',
            title: 'Запчастини'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '410',
        title: 'Датчик потоку Suttner ST-5',
        code: 'CZU-PRZ-R+M-ST5',
        price: '204.54',
        newPrice: '',
        size: 1,
        slug: 'goods23-2',
        img: '/purification/2.jpg',
        imageShow: ['/purification/2.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '411',
        title: 'Сітчастий фільтр 3/4" GW (вода)',
        code: 'FIL-SIA-3/4',
        price: '42.04',
        newPrice: '',
        size: 1,
        slug: 'goods23-3',
        img: '/purification/3.jpg',
        imageShow: ['/purification/3.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '412',
        title: 'Керуюча головка Clack CI для умягчителя (160)',
        code: 'GLO-STE-CLACK-CI',
        price: '3552.83',
        newPrice: '',
        size: 1,
        slug: 'goods23-4',
        img: '/purification/4.jpg',
        imageShow: ['/purification/4.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '413',
        title: 'Clack CI Control Head for Softener (250 і 330)',
        code: 'GLO-STE-CLACK-CI-250/330',
        price: '3535.51',
        newPrice: '',
        size: 1,
        slug: 'goods23-5',
        img: '/purification/5.jpg',
        imageShow: ['/purification/5.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '414',
        title: 'Головка управління FL 9100 SE (1/2.4/05) до 160',
        code: 'GLO-STE-9100SE',
        price: '3737.32',
        newPrice: '',
        size: 1,
        slug: 'goods23-6',
        img: '/purification/6.jpg',
        imageShow: ['/purification/6.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '415',
        title: 'Головка управління FL 9100 SE (2/4/1 і 3/5/1) для 250 і 330',
        code: 'GLO-STE-9100SE-250/330',
        price: '3767.45',
        newPrice: '',
        size: 1,
        slug: 'goods23-7',
        img: '/purification/7.jpg',
        imageShow: ['/purification/7.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '416',
        title: 'Іоніт HCR-S/S',
        code: 'IONIT',
        price: '490.54',
        newPrice: '',
        size: 1,
        slug: 'goods23-8',
        img: '/purification/8.png',
        imageShow: ['/purification/8.png', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener',
            title: 'Пляшки з пом\'якшувачем і аксесуари',
        },
        bread3: {
            slug: '/water-purification/softener/filtering-layer',
            title: 'Фільтруючий шар'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '417',
        title: 'Ключ фільтра серії BB20',
        code: 'KLUCZ-BB20',
        price: '24.67',
        newPrice: '',
        size: 1,
        slug: 'goods23-9',
        img: '/purification/9.jpg',
        imageShow: ['/purification/9.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '418',
        title: 'Фільтровий ключ серії FHPR 10"',
        code: 'KLUCZ-10',
        price: '10.04',
        newPrice: '',
        size: 1,
        slug: 'goods23-10',
        img: '/purification/10.jpg',
        imageShow: ['/purification/10.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '419',
        title: 'Сервісний ключ для головок CLACK (ключ)',
        code: 'KLUCZ-CLACK',
        price: '65.99',
        newPrice: '',
        size: 1,
        slug: 'goods23-11',
        img: '/purification/11.jpg',
        imageShow: ['/purification/11.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '420',
        title: 'Зірочка з тросом (V3004) - для головки CLACK',
        code: 'V3004',
        price: '147.42',
        newPrice: '',
        size: 1,
        slug: 'goods23-12',
        img: '/purification/12.jpg',
        imageShow: ['/purification/12.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/brine-tanks',
            title: 'Резервуари для розсолу',
        },
        bread3: {
            slug: '/water-purification/brine-tanks/spare-parts',
            title: 'Запчастини'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '421',
        title: 'Набір шестерень 25868, 25870, 15135 до пом\'якшувача',
        code: 'KOL-ZEM-ZMI',
        price: '267.83',
        newPrice: '',
        size: 1,
        slug: 'goods23-13',
        img: '/purification/13.jpg',
        imageShow: ['/purification/13.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '422',
        title: 'Набір гайок до ротаметра ПТМ 3/4" (з\'єднувачі ПВХ різьбові) - 2 шт.',
        code: 'NAK-ROT-3/4',
        price: '128.85',
        newPrice: '',
        size: 1,
        slug: 'goods23-14',
        img: '/purification/14.jpg',
        imageShow: ['/purification/14.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '423',
        title: 'Комплект ущільнювачів і кілець до головки CLACK (V3005)',
        code: 'V3005',
        price: '205.03',
        newPrice: '',
        size: 1,
        slug: 'goods23-15',
        img: '/purification/15.jpg',
        imageShow: ['/purification/15.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/brine-tanks',
            title: 'Резервуари для розсолу',
        },
        bread3: {
            slug: '/water-purification/brine-tanks/spare-parts',
            title: 'Запчастини'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '424',
        title: 'Заглушка для корпусу тиску діафрагми',
        code: 'KOR-MEM',
        price: '288.37',
        newPrice: '',
        size: 1,
        slug: 'goods23-16',
        img: '/purification/16.jpg',
        imageShow: ['/purification/16.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '425',
        title: 'Мембрана DuPont TapTec LC HF 4040',
        code: 'MEM-DP-LC-HF-4040',
        price: '1110.32',
        newPrice: '',
        size: 1,
        slug: 'goods23-17',
        img: '/purification/17.jpg',
        imageShow: ['/purification/17.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '426',
        title: 'Гайка для ротаметра PTM 1/2" (різьбові з\'єднувачі ПВХ)',
        code: 'NAK-ROT-1/2',
        price: '69.37',
        newPrice: '',
        size: 1,
        slug: 'goods23-18',
        img: '/purification/18.jpg',
        imageShow: ['/purification/18.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '427',
        title: 'Ніпель латунний 1/2"',
        code: 'NYP-1/2',
        price: '9.10',
        newPrice: '',
        size: 1,
        slug: 'goods23-19',
        img: '/purification/19.jpg',
        imageShow: ['/purification/19.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '428',
        title: 'Корпус фільтра 10" на 1" GW',
        code: 'OBU-FIL-10-1',
        price: '49.56',
        newPrice: '',
        size: 1,
        slug: 'goods23-20',
        img: '/purification/20.jpg',
        imageShow: ['/purification/20.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '429',
        title: 'Корпус фільтра 10" на 1" GW, посилений 10 бар Aquafilter',
        code: 'OBU-FIL-10-1-WZM',
        price: '77.06',
        newPrice: '',
        size: 1,
        slug: 'goods23-21',
        img: '/purification/21.jpg',
        imageShow: ['/purification/21.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '430',
        title: 'Корпус фільтра 10" до 1/2" GW Aquafilter',
        code: 'OBU-FIL-10-1/2',
        price: '42.23',
        newPrice: '',
        size: 1,
        slug: 'goods23-22',
        img: '/purification/22.jpg',
        imageShow: ['/purification/22.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '431',
        title: 'Корпус фільтра 10" на 1/2" GW посилений 10 бар Aquafilter',
        code: 'OBU-FIL-10-1/2-WZM',
        price: '76.06',
        newPrice: '',
        size: 1,
        slug: 'goods23-23',
        img: '/purification/23.jpg',
        imageShow: ['/purification/23.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '432',
        title: 'Корпус фільтра від 20" до 1" GW (Big Blue)',
        code:  'OBU-FIL-20/1',
        price: '367.62',
        newPrice: '',
        size: 1,
        slug: 'goods23-24',
        img: '/purification/24.jpg',
        imageShow: ['/purification/24.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '433',
        title: '3-компонентний корпус фільтра 10" з підключенням GW 1" (Supreme)',
        code:  'OBU-FIL-SUP-10-1',
        price: '51.68',
        newPrice: '',
        size: 1,
        slug: 'goods23-25',
        img: '/purification/25.jpg',
        imageShow: ['/purification/25.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '434',
        title: '3-компонентний корпус фільтра 10" з підключенням GW 1/2" (Supreme)',
        code:  'OBU-FIL-SUP-10-1/2',
        price: '44.58',
        newPrice: '',
        size: 1,
        slug: 'goods23-26',
        img: '/purification/26.jpg',
        imageShow: ['/purification/26.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '435',
        title: 'Мембранний корпус (4040 1/2\'\' - 1/2\'\')',
        code:  'OBU-VSH-4040',
        price: '970.04',
        newPrice: '',
        size: 1,
        slug: 'goods23-27',
        img: '/purification/27.jpg',
        imageShow: ['/purification/27.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '436',
        title: 'Поліамідний кабель 14 мм х 12 мм (білий)',
        code:  'PRZ-POL-14',
        price: '22.15',
        newPrice: '',
        size: 1,
        slug: 'goods23-28',
        img: '/purification/28.jpg',
        imageShow: ['/purification/28.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '437',
        title: 'Ротаметр ПТМ-01 (шкала 60-630 л/год води, 3/4" F BSP)',
        code:  'ROT-60-630',
        price: '740.92',
        newPrice: '',
        size: 1,
        slug: 'goods23-29',
        img: '/purification/29.jpg',
        imageShow: ['/purification/29.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '438',
        title: 'Ротаметр PTM-01/TROGAMID (шкала 16-160 л/год води, 1/2")',
        code:  'ROT-16-160',
        price: '679.76',
        newPrice: '',
        size: 1,
        slug: 'goods23-30',
        img: '/purification/30.jpg',
        imageShow: ['/purification/30.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '439',
        title: 'Ротаметр PTM-01/TROGAMID (шкала 40-400 л/год води, 3/4" BSP-PVC)',
        code:  'ROT-40-400',
        price: '745.27',
        newPrice: '',
        size: 1,
        slug: 'goods23-31',
        img: '/purification/31.jpg',
        imageShow: ['/purification/31.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '440',
        title: 'Тестер жорсткості води Aquatest',
        code:  'AQUATEST',
        price: '40.70',
        newPrice: '',
        size: 1,
        slug: 'goods23-32',
        img: '/purification/32.jpg',
        imageShow: ['/purification/32.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '441',
        title: 'Поршень нижній для головки умягчителя (24235)',
        code:  'TLO-DOL-GLO',
        price: '495.36',
        newPrice: '',
        size: 1,
        slug: 'goods23-33',
        img: '/purification/33.jpg',
        imageShow: ['/purification/33.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '442',
        title: 'Поршень верхній до головки CLACK (V3011)',
        code:  'V3011',
        price: '56.63',
        newPrice: '',
        size: 1,
        slug: 'goods23-34',
        img: '/purification/34.jpg',
        imageShow: ['/purification/34.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/brine-tanks',
            title: 'Резервуари для розсолу',
        },
        bread3: {
            slug: '/water-purification/brine-tanks/spare-parts',
            title: 'Запчастини'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '443',
        title: 'Верхній поршень головки умягчителя (24234)',
        code:  'TLO-GOR-GLO',
        price: '419.76',
        newPrice: '',
        size: 1,
        slug: 'goods23-35',
        img: '/purification/35.jpg',
        imageShow: ['/purification/35.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '444',
        title: 'Розсольний поршень (V3174)',
        code:  'V3174',
        price: '41.84',
        newPrice: '',
        size: 1,
        slug: 'goods23-36',
        img: '/purification/36.jpg',
        imageShow: ['/purification/36.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/brine-tanks',
            title: 'Резервуари для розсолу',
        },
        bread3: {
            slug: '/water-purification/brine-tanks/spare-parts',
            title: 'Запчастини'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '445',
        title: 'Трійник 1/2 GZ-GW-GZ (Camozzi 2090 1/2-1/2)',
        code:  'TRO-1/2-GWZ',
        price: '26.57',
        newPrice: '',
        size: 1,
        slug: 'goods23-37',
        img: '/purification/37.jpg',
        imageShow: ['/purification/37.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '446',
        title: 'Ущільнювач нижній і верхній для пом\'якшувача (25642)',
        code:  'USZ-GOR-DOL',
        price: '434.36',
        newPrice: '',
        size: 1,
        slug: 'goods23-38',
        img: '/purification/38.jpg',
        imageShow: ['/purification/38.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '447',
        title: 'ВВ20" поліпропіленовий фільтрувальний вкладиш - 5 мікрон',
        code:  'WKL-POL-20-5',
        price: '53.12',
        newPrice: '',
        size: 1,
        slug: 'goods23-39',
        img: '/purification/39.jpg',
        imageShow: ['/purification/39.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '448',
        title: 'ВВ20" поліпропіленовий фільтрувальний вкладиш - 50 мікрон',
        code:  'WKL-POL-20-50U',
        price: '53.12',
        newPrice: '',
        size: 1,
        slug: 'goods23-40',
        img: '/purification/40.jpg',
        imageShow: ['/purification/40.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '449',
        title: 'Поліпропіленовий струнний фільтр-вкладиш 10" - 1 мікрон',
        code:  'WKL-SZN-10-1',
        price: '13.21',
        newPrice: '',
        size: 1,
        slug: 'goods23-41',
        img: '/purification/41.jpg',
        imageShow: ['/purification/41.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '450',
        title: 'Сітка-вставка для фільтра 10" - 100 мкм',
        code:  'WKL-SIA-10-100',
        price: '21.53',
        newPrice: '',
        size: 1,
        slug: 'goods23-42',
        img: '/purification/42.png',
        imageShow: ['/purification/42.png', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '451',
        title: 'Сітка-вставка для фільтра 10" - 50 мікрон',
        code:  'WKL-SIA-10-50',
        price: '28.13',
        newPrice: '',
        size: 1,
        slug: 'goods23-43',
        img: '/purification/43.jpg',
        imageShow: ['/purification/43.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '452',
        title: 'Вставка струнного фільтра 10" - 5 мікрон',
        code:  'WKL-SZN-10-5',
        price: '13.48',
        newPrice: '',
        size: 1,
        slug: 'goods23-44',
        img: '/purification/44.jpg',
        imageShow: ['/purification/44.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '453',
        title: '10" стрічковий фільтрувальний вкладиш - 50 мікрон',
        code:  'WKL-SZN-10-50',
        price: '14.01',
        newPrice: '',
        size: 1,
        slug: 'goods23-45',
        img: '/purification/45.jpg',
        imageShow: ['/purification/45.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '454',
        title: 'Струняний фільтр-вставка 10" Supreme - 1 мкм [S-PS1]',
        code:  'WKL-SZN-SUP-10-1',
        price: '8.61',
        newPrice: '',
        size: 1,
        slug: 'goods23-46',
        img: '/purification/46.jpg',
        imageShow: ['/purification/46.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '455',
        title: 'Струняний фільтр-вставка Supreme 10" - 50 мкм [S-PP50]',
        code:  'WKL-SZN-SUP-10-50',
        price: '8.81',
        newPrice: '',
        size: 1,
        slug: 'goods23-47',
        img: '/purification/47.jpg',
        imageShow: ['/purification/47.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/filters-and-accessories',
            title: 'Фільтри та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '456',
        title: 'Блок живлення для головки Fleck 9100',
        code:  'ZAS-GLO-9100',
        price: '245.32',
        newPrice: '',
        size: 1,
        slug: 'goods23-48',
        img: '/purification/48.jpg',
        imageShow: ['/purification/48.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener-head-and-accessories',
            title: 'Головка пом\'якшувача та аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '457',
        title: 'Соляний клапан Pentair (клапан + поплавок + датчик)',
        code:  'ZAW-SOL-PEN',
        price: '125.42',
        newPrice: '',
        size: 1,
        slug: 'goods23-49',
        img: '/purification/49.jpg',
        imageShow: ['/purification/49.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/brine-tanks',
            title: 'Резервуари для розсолу',
        },
        bread3: {
            slug: '/water-purification/brine-tanks/spare-parts',
            title: 'Запчастини'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '458',
        title: 'Туалетний напірний бак 14 x 65 дюймів з отвором 2,5 дюйма до 330',
        code:  'ZBI-CIS-330',
        price: '738.00',
        newPrice: '',
        size: 1,
        slug: 'goods23-50',
        img: '/purification/50.jpg',
        imageShow: ['/purification/50.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener',
            title: 'Пляшки з пом\'якшувачем і аксесуари',
        },
        bread3: {
            slug: '/water-purification/softener/cylinders',
            title: 'Циліндри'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '459',
        title: 'Кутовий з\'єднувач 14 мм - 1/2 M (Camozzi S6520 14 - 1/2)',
        code:  'ZLA-KAT-14',
        price: '48.79',
        newPrice: '',
        size: 1,
        slug: 'goods23-51',
        img: '/purification/51.jpg',
        imageShow: ['/purification/51.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '460',
        title: 'Кутовий з\'єднувач 2 мм х 14 мм (Camozzi 6550 14)',
        code:  'ZLA-KAT-2X14',
        price: '38.35',
        newPrice: '',
        size: 1,
        slug: 'goods23-52',
        img: '/purification/52.jpg',
        imageShow: ['/purification/52.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/reverse-osmosis-and-accessories',
            title: 'Зворотний осмос і аксесуари',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '461',
        title: 'З\'єднувач прямий 14 мм-1/2 шт. (Camozzi S6510 14-1/2)',
        code:  'ZLA-PRO-14',
        price: '26.27',
        newPrice: '',
        size: 1,
        slug: 'goods23-53',
        img: '/purification/53.jpg',
        imageShow: ['/purification/53.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/hydraulics-of-water-treatment',
            title: 'Гідравліка водопідготовки',
        },
        bread3:  '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
    {
        id: '462',
        title: 'Зернистість 2 - 3,15 мм',
        code:  'ZWIR',
        price: '52.57',
        newPrice: '',
        size: 1,
        slug: 'goods23-54',
        img: '/purification/54.jpg',
        imageShow: ['/purification/54.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Очищення води',
            slug: '/water-purification',
        },
        bread2: {
            slug: '/water-purification/softener',
            title: 'Пляшки з пом\'якшувачем і аксесуари',
        },
        bread3: {
            slug: '/water-purification/softener/filtering-layer',
            title: 'Фільтруючий шар'
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>продукту</p><br/>
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/water-purification/softener',
        title: 'Пляшки з пом\'якшувачем і аксесуари',
    },
    {
        slug: '/water-purification/softener/cylinders',
        title: 'Циліндри'
    },
    {
        slug: '/water-purification/softener/filtering-layer',
        title: 'Фільтруючий шар'
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
    },
    {
        slug: '/water-purification/brine-tanks/spare-parts',
        title: 'Запчастини'
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
                                    <span> Очищення води</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Очищення води</h1>
                    <div>
                        Щоб задовольнити очікування найвибагливіших клієнтів і зберегти репутацію вашої мийки,
                        обов’язково регулярно перевіряйте технічний стан вашої мийки. У цьому вам допоможуть наявні в
                        цій категорії компоненти. Запрошуємо перевірити пропозицію!
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
                        <Image src='/purification/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Водопідготовка - що це?</h2> <br/>
                            <p>
                                Для отримання високоякісного миття автомийки обладнані системами фільтрації води.
                                Власник автомийки зобов’язаний забезпечити регулярний огляд і підтримку систем
                                фільтрації води в найкращому стані.
                            </p> <br/>
                            <p>
                                Очищення води на автомийках відбувається в кілька етапів. Перший з них – це так звана
                                попередня обробка. механічний, який передбачає фільтрацію твердих частинок води,
                                наприклад піску. Наступним етапом обробки води на автомийці є її пом'якшення. У процесі
                                пом'якшення води ми видаляємо з води тверді частинки. Цей процес надзвичайно важливий,
                                оскільки жорсткість води, близька до нуля, означає, що хімічні речовини, які
                                використовуються в автомийці, краще піняться. Крім того, що важливо, ми захищаємо
                                компоненти автомийки від утворення накипу та готуємо воду для демінералізації на
                                наступному етапі, т.зв. зворотний осмос. Процес зворотного осмосу відіграє дуже важливу
                                роль, оскільки він дозволяє видалити з води всі мінерали. На цьому етапі ми створюємо
                                повністю демінералізовану воду, щоб запобігти утворенню смуг на кузові автомобіля.
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
                                <br/><h2>Способи очищення води</h2> <br/>
                                <p>
                                    Існує багато способів очищення води. Деякі з них є складними процесами, які
                                    покладаються
                                    на ретельні лабораторні дослідження. У випадку автомийок стандартних фільтрів для
                                    очищення води, які ви знайдете в цій категорії, зазвичай достатньо для очищення
                                    води.
                                </p> <br/>
                                <p>
                                    Методи очищення води підлаштовуються під рівень забруднення. Чим більше заражена
                                    вода, тим складніше і складніше процес. З цієї причини процесу фільтрації води має
                                    передувати перевірка фізико-хімічних параметрів. Найпоширенішими параметрами, які
                                    слід досліджувати, є:<br/><br/>

                                    рівень концентрації заліза,<br/>
                                    рівень концентрації марганцю,<br/>
                                    кількість атомарного іона,<br/>
                                    рівні нітратів і нітритів.<br/>
                                </p> <br/>
                                <p>
                                    Під час випробувань також перевіряють загальну жорсткість води, pH, окислюваність,
                                    колір, запах і каламутність.
                                </p> <br/>
                                <h2>Процеси очищення води</h2> <br/>
                                <p>
                                    До найпопулярніших методів очищення води відносяться: <br/> <br/>
                                    Механічна фільтрація води<br/>
                                </p> <br/>
                                <p>
                                    Механічне очищення води на великих водоочисних спорудах відбувається на колонах,
                                    фільтрах великої пропускної здатності або повільних фільтрах, заповнених спеціальним
                                    фільтруючим матеріалом (наприклад, кварцовим піском, на якому утворюється
                                    біоплівка). Під час механічної фільтрації з води видаляються тверді домішки. Для
                                    очищення води для автомийок використовуються спеціальні фільтри з сітчастими або
                                    нитковими вставками для механічної фільтрації.
                                </p> <br/>
                                <p>
                                    У нашій пропозиції є фільтри для механічної фільтрації води та спеціальні корпуси
                                    фільтрів, які потребують регулярної заміни. Зв’яжіться з нами, якщо у вас виникнуть
                                    проблеми з вибором потрібного продукту для вашої автомийки.
                                </p> <br/>
                                <p>Іонний обмін</p> <br/>
                                <p>
                                    Іонний обмін стосується процесу регенерації пом'якшувача. Використовується для
                                    видалення з води розчинених речовин. Жорсткі іони поглинаються шаром іонообмінної
                                    смоли пом’якшувача, що зрештою призводить до м’якості води.
                                </p> <br/>
                                <p>
                                    У нашому асортименті є фільтри для очищення води методом іонного обміну. Наші
                                    продукти характеризуються дуже хорошими кінетичними властивостями та високою
                                    іонообмінною здатністю.
                                </p> <br/>
                                <p>Зворотній осмос</p> <br/>
                                <p>На автомийках т. зв зворотний осмос.</p> <br/>
                                <p>
                                    Завдяки використанню спеціальних мембран для очищення води цей процес швидко зупиняє
                                    небажані забруднення. Завдяки процесу зворотного осмосу на кузові автомобіля не
                                    утворюється відкладень і плям від води.
                                </p> <br/>
                                <p>
                                    Запрошуємо Вас ознайомитися з повним асортиментом магазину та вибрати найкращий
                                    варіант для Вашої автомийки.
                                </p> <br/>
                                <h2>Очищена вода - переваги</h2> <br/>
                                <p>
                                    Вода є невід'ємним елементом роботи автомийки. Використовується як для миття, так і
                                    для змивання миючих засобів з автомобіля. Найважливіша причина, чому виробники
                                    автомийки обробляють воду, полягає в тому, що вона безпечніша для компонентів.
                                    Завдяки використанню очисних фільтрів у воді не накопичуються домішки, які можуть
                                    пошкодити компоненти та наразити всю систему на небажані збої та фінансові втрати
                                    для власника автомийки.
                                </p> <br/>
                                <p>
                                    Використання спеціальних фільтрів для очищення води забезпечує постійний і належний
                                    захист важливих компонентів автомийки. Використовуючи очищену воду з відповідними
                                    параметрами, власники автомийок також відзначають краще спінювання миючих засобів.
                                </p> <br/>
                                <p>Фільтри для очищення води гарантують, що на кузові автомобіля не залишиться
                                    відкладень і смуг. Тому очищення води на автомийці так важлива.</p> <br/>
                                <p>Тому очищення води приносить багато переваг. Якість води, яка використовується
                                    в обладнанні автомийок, значно впливає як на якість послуг, що надаються,
                                    так і на задоволеність клієнтів.</p> <br/>
                                <h2>Фільтр для очищення води автомийки – який вибрати?</h2> <br/>
                                <p>
                                    Фільтр є серцем процесів очищення води. Щоб забезпечити високу якість води для миття
                                    автомобіля та захистити компоненти в автомийці, слід вибрати фільтр з відповідними
                                    характеристиками та властивостями.
                                </p> <br/>
                                <p>
                                    Якщо ви забираєте воду зі студій, проведіть перевірку якості води, яка дозволить
                                    визначити концентрацію хімічних сполук (зверніть особливу увагу на концентрацію
                                    заліза та марганцю). Високі концентрації марганцю та заліза можуть пошкодити
                                    пристрій. Ретельний аналіз води дозволить підібрати відповідний тип фільтра для
                                    очищення води.
                                </p> <br/>
                                <p>
                                    Більш зручний варіант - брати воду для автомийки безпосередньо з водопроводу. Ця
                                    вода зазвичай набагато чистіша, оскільки вона вже пройшла етапи очищення. У цьому
                                    випадку зазвичай достатньо попередньої фільтрації та механічної обробки води.
                                </p> <br/>
                                <h2>Додаткові рішення для автомийок</h2> <br/>
                                <p>Окрім фільтрів для очищення води, наші клієнти також використовують засоби для
                                    пом’якшення води (особливо на принципі іонного обміну). М'яка вода набагато легше
                                    розподіляє хімічні речовини, тому автомийки використовують пом'якшувач, щоб
                                    полегшити цей процес.</p> <br/>
                                <p>Окрім фільтрів для очищення води, наші клієнти також використовують засоби для
                                    пом’якшення води (особливо на принципі іонного обміну). М'яка вода набагато легше
                                    розподіляє хімічні речовини, тому автомийки використовують пом'якшувач, щоб
                                    полегшити цей процес.</p> <br/>
                                <p>Незалежно від того, який спосіб очищення води ви використовуєте на своїй
                                    автомийці, варто використовувати для цього процесу тільки найякісніші
                                    засоби.</p> <br/>
                                <p>Наша пропозиція включає в себе всі найважливіші деталі очищення води, які допоможуть
                                    вам правильно доглядати за вашою автомийкою. Запрошуємо Вас ознайомитися з повним
                                    асортиментом магазину, де Ви знайдете сітчасті та струнні вкладиші, корпуси та
                                    вкладиші для фільтрів, запчастини та запчастини для пом’якшувачів, а також
                                    запчастини для установок зворотного осмосу.</p> <br/>
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