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
        id: '270',
        title: 'Сутінковий автомат F&F AZ-112 (з зондом)',
        code: 'AUT-ZM-FF-AZ112',
        price: '141.75',
        newPrice: '',
        size: 1,
        slug: 'goods13-1',
        img: '/electronic/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/1.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '271',
        title: 'Модуль B&R X20 CS1020 RS232',
        code: 'B&R-X20-CS1020',
        price: '1155.22',
        newPrice: '',
        size: 1,
        slug: 'goods13-2',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: '',
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '272',
        title: 'B&R X20 DO8332 8 цифрових виходів 2A зовнішнє джерело живлення',
        code: 'B&R-X20-DO8332',
        price: '929.14',
        newPrice: '',
        size: 1,
        slug: 'goods13-3',
        img: '/electronic/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/3.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '273',
        title: 'B&R X20 DO9322 12 цифрових виходів 0,5 А',
        code: 'B&R-X20-DO9322',
        price: '868.87',
        newPrice: '',
        size: 1,
        slug: 'goods13-4',
        img: '/electronic/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/4.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '274',
        title: 'B&R X20 TB12 Термінал введення/виведення 12 контактів',
        code: 'B&R-X20-TB12',
        price: '77.93',
        newPrice: '',
        size: 1,
        slug: 'goods13-5',
        img: '/electronic/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/5.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '275',
        title: 'Датчик послідовності та несправності фаз F&F CKF-317 (одномодульний)',
        code: 'CZU-FIF-317',
        price: '163.32',
        newPrice: '',
        size: 1,
        slug: 'goods13-6',
        img: '/electronic/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Запобіжні пристрої',
            slug: '/electrical-and-electronic-components/safety-devices',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/6.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '276',
        title: 'Поплавковий датчик (MAC3 M04 20 м)',
        code: 'CZU-PLY-MAC',
        price: '242.38',
        newPrice: '',
        size: 1,
        slug: 'goods13-7',
        img: '/electronic/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/7.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '277',
        title: 'Датчик рівня (поплавковий) (поліпропіленовий з кабелем 10м)',
        code: 'CZU-POZ-PLY-ELO-PP',
        price: '176.52',
        newPrice: '',
        size: 1,
        slug: 'goods13-8',
        img: '/electronic/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/8.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '278',
        title: 'Датчик зовнішньої температури (PT-100 Czaki TP-952-1)',
        code: 'CZU-PT100-ZEWN',
        price: '160.98',
        newPrice: '',
        size: 1,
        slug: 'goods13-9',
        img: '/electronic/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/9.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '279',
        title: 'Білий світлодіод Moeller (M22-LED-W)',
        code: 'DIO-MOE-BIA',
        price: '28.13',
        newPrice: '',
        size: 1,
        slug: 'goods13-10',
        img: '/electronic/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/10.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '280',
        title: 'Електронний датчик тиску (0-250 бар)',
        code: 'ELE-CZU-CIS',
        price: '762.65',
        newPrice: '',
        size: 1,
        slug: 'goods13-11',
        img: '/electronic/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/11.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '281',
        title: 'Гніздо реле Finder 95.05',
        code: 'GNI-FIN-001',
        price: '46.22',
        newPrice: '',
        size: 1,
        slug: 'goods13-12',
        img: '/electronic/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/12.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '282',
        title: 'Hopper Uni Pay ONE S11 ctalk з адаптером',
        code: 'HOP-UNI-ONES11',
        price: '761.11',
        newPrice: '',
        size: 1,
        slug: 'goods13-13',
        img: '/electronic/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Сортувальні машини та аксесуари',
            slug: '/electrical-and-electronic-components/sorting-machines',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/13.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '283',
        title: 'Розетка JUMPFLEX з реле (24V DC 1p WAGO)(857-304)',
        code: 'POD-WAG-857-304',
        price: '76.86',
        newPrice: '',
        size: 1,
        slug: 'goods13-14',
        img: '/electronic/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/14.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '284',
        title: 'Compact Flash карта 512 Мб',
        code: 'B&R-CFC512MB',
        price: '452.80',
        newPrice: '',
        size: 1,
        slug: 'goods13-15',
        img: '/electronic/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/15.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '285',
        title: 'Ліцензія на програмне забезпечення для розширення автомийки',
        code: 'ROZ-MYJ-OPR',
        price: '0.00',
        newPrice: '',
        size: 1,
        slug: 'goods13-16',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Сортувальні машини та аксесуари',
            slug: '/electrical-and-electronic-components/sorting-machines',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: '',
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '286',
        title: 'Захисна мембрана для кнопки (M22-TD)',
        code: 'MEM-M22-TD',
        price: '24.21',
        newPrice: '',
        size: 1,
        slug: 'goods13-17',
        img: '/electronic/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/17.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '287',
        title: 'Модуль (B&R X20 CM8281)',
        code: 'B&R-X20-CM8281',
        price: '1286.58',
        newPrice: '',
        size: 1,
        slug: 'goods13-18',
        img: '/electronic/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/18.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '288',
        title: 'Модуль 12 цифрових входів (B&R X20 DI9371)',
        code: 'B&R-X20-DI9371',
        price: '748.09',
        newPrice: '',
        size: 1,
        slug: 'goods13-19',
        img: '/electronic/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/19.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '289',
        title: 'Світлодіодний модуль Finder (99.02.9.024.99)',
        code: 'MOD-FIN-001',
        price: '14.51',
        newPrice: '',
        size: 1,
        slug: 'goods13-20',
        img: '/electronic/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/20.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '290',
        title: 'Міст DILM 12-XSL',
        code: 'MOS-DIL',
        price: '170.86',
        newPrice: '',
        size: 1,
        slug: 'goods13-21',
        img: '/electronic/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/21.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '291',
        title: 'NRI Pelicano v2 CCTALK (Валюта: US)',
        code: 'NRI-PEL-V2-CZK',
        price: '3512.18',
        newPrice: '',
        size: 1,
        slug: 'goods13-22',
        img: '/electronic/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Сортувальні машини та аксесуари',
            slug: '/electrical-and-electronic-components/sorting-machines',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/22.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '292',
        title: 'Мережевий приймач X2X (B&R X20 BR9300)',
        code: 'B&R-X20-BR9300',
        price: '647.90',
        newPrice: '',
        size: 1,
        slug: 'goods13-23',
        img: '/electronic/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/23.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '293',
        title: 'Кришка кнопки автомийки (прозора гума)',
        code: 'OSL-LEN-004',
        price: '17.72',
        newPrice: '',
        size: 1,
        slug: 'goods13-24',
        img: '/electronic/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/24.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '294',
        title: 'Червона прозора пластина з оргскла (дисплейне скло)',
        code: 'PLY-PLEX-WYS-4SEK',
        price: '15.74',
        newPrice: '',
        size: 1,
        slug: 'goods13-25',
        img: '/electronic/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/25.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '295',
        title: 'Плата SamWash-CAN-IO - 4-значний РК-дисплей (v.2.6.x) - не запрограмований',
        code: 'PLY-SamWash-CAN-IO-V2.6.X-LCD',
        price: '1543.21',
        newPrice: '680.47',
        size: 1,
        slug: 'goods13-26',
        img: '/electronic/26.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки : 1543,21 злотих',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/26.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '296',
        title: 'Плата SamWash-CAN-IO - 4-значний світлодіодний дисплей (v.2.6.x) - незапрограмований',
        code: 'PLY-SamWash-CAN-IO-V2.6.X-LED',
        price: '1408.11',
        newPrice: '620.89',
        size: 1,
        slug: 'goods13-27',
        img: '/electronic/27.jpg',
        description: '',
        descriptionPrise: 'Найнижча ціна за 30 днів до знижки : 1408,11 злотих',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/27.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '297',
        title: 'Підставка для живлення (B&R X20 BM01)',
        code: 'B&R-X20-BM01',
        price: '101.73',
        newPrice: '',
        size: 1,
        slug: 'goods13-28',
        img: '/electronic/28.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/28.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '298',
        title: 'Стандартна підставка (B&R X20 BM11)',
        code: 'B&R-X20-BM11',
        price: '112.18',
        newPrice: '',
        size: 1,
        slug: 'goods13-29',
        img: '/electronic/29.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/29.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '299',
        title: 'Стандартна кодова база (B&R X20 BM15)',
        code: 'B&R-X20-BM15',
        price: '223.04',
        newPrice: '',
        size: 1,
        slug: 'goods13-30',
        img: '/electronic/30.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/30.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '300',
        title: 'Світлодіодне п\'єзоелектричне підсвічування кнопок "SamWash 1"',
        code: 'POD-PRZ-PIE',
        price: '12.42',
        newPrice: '',
        size: 1,
        slug: 'goods13-31',
        img: '/electronic/31.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/31.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '301',
        title: 'Реле тиску латунне (G1/4, 1-10 БАР)',
        code: 'PRE-1/4-10B-MOS',
        price: '90.97',
        newPrice: '',
        size: 1,
        slug: 'goods13-32',
        img: '/electronic/32.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/32.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '302',
        title: 'Реле Finder 40.61 (24V DC 16A)',
        code: 'PRZ-FIN-001',
        price: '42.47',
        newPrice: '',
        size: 1,
        slug: 'goods13-33',
        img: '/electronic/33.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/33.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '303',
        title: 'Реле монтажне Moeller Z-R23/16-10 (з діодом)',
        code: 'PRZ-MOE-ZR23',
        price: '113.70',
        newPrice: '',
        size: 1,
        slug: 'goods13-34',
        img: '/electronic/34.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/34.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '304',
        title: 'Кабель для підключення бункерів',
        code: 'SamWash-HOPPER-PRZ',
        price: '59.84',
        newPrice: '',
        size: 1,
        slug: 'goods13-35',
        img: '/electronic/35.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Сортувальні машини та аксесуари',
            slug: '/electrical-and-electronic-components/sorting-machines',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/35.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '305',
        title: 'Кнопка автомийки біла з підсвічуванням (без лампочки "RM-E")',
        code: 'PRZ-IND-BZ',
        price: '27.44',
        newPrice: '',
        size: 1,
        slug: 'goods13-36',
        img: '/electronic/36.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/36.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '306',
        title: 'П\'єзокнопка з нержавіючої сталі',
        code: 'PRZ-PIE-NIE-APEM',
        price: '142.48',
        newPrice: '',
        size: 1,
        slug: 'goods13-37',
        img: '/electronic/37.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/37.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '307',
        title: 'П\'єзокнопка з нержавіючої сталі без підсвічування IP68 APEM [PBARZAFB263OP-10967]',
        code: 'PRZ-PIE-NIE-APEM-BPO',
        price: '114.92',
        newPrice: '',
        size: 1,
        slug: 'goods13-38',
        img: '/electronic/38.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/38.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '308',
        title: 'Повітряний насос Moeller M22-DDL-S-X4/X5 і кнопка випуску повітря',
        code: 'PRZ-M22-DLL-S',
        price: '43.26',
        newPrice: '',
        size: 1,
        slug: 'goods13-39',
        img: '/electronic/39.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/39.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '309',
        title: 'Moeller M22-DL-W біла кнопка самоповернення з підсвічуванням',
        code: 'PRZ-M22-DL-W',
        price: '45.57',
        newPrice: '',
        size: 1,
        slug: 'goods13-40',
        img: '/electronic/40.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/40.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '310',
        title: 'Червона кнопка STOP Moeller M22-DR',
        code: 'PRZ-MOE-004',
        price: '28.93',
        newPrice: '',
        size: 1,
        slug: 'goods13-41',
        img: '/electronic/41.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/41.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '311',
        title: 'Кнопковий плоский імпульсний вимикач GQ19-F/S (кислотний)',
        code: 'PRZ-ELE-GQ-19B',
        price: '38.49',
        newPrice: '',
        size: 1,
        slug: 'goods13-42',
        img: '/electronic/42.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/42.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '312',
        title: 'Терморегулятор (КТО 011 0-60)',
        code: 'REG-TEM',
        price: '90.69',
        newPrice: '',
        size: 1,
        slug: 'goods13-43',
        img: '/electronic/43.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Датчики',
            slug: '/electrical-and-electronic-components/sensors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/43.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '313',
        title: 'Сортувальник NRI Pelicano HSD300',
        code: 'NRI-PEL-SOR',
        price: '668.74',
        newPrice: '',
        size: 1,
        slug: 'goods13-44',
        img: '/electronic/44.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Сортувальні машини та аксесуари',
            slug: '/electrical-and-electronic-components/sorting-machines',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/44.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '314',
        title: 'Контролер Moeller EASY 821-DC-TC',
        code: 'STE-MOE-003',
        price: '1300.96',
        newPrice: '',
        size: 1,
        slug: 'goods13-45',
        img: '/electronic/45.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Контролери PLC та аксесуари',
            slug: '/electrical-and-electronic-components/PLC-controllers',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/45.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '315',
        title: 'Контактор Moeller DILM9-01 (24VDC)',
        code: 'STY-DILM9',
        price: '178.26',
        newPrice: '',
        size: 1,
        slug: 'goods13-46',
        img: '/electronic/46.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/46.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '316',
        title: 'NC контакт Moeller M22-K01',
        code: 'STY-MOE-NC',
        price: '20.71',
        newPrice: '',
        size: 1,
        slug: 'goods13-47',
        img: '/electronic/47.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Реле та контактори',
            slug: '/electrical-and-electronic-components/relays-and-contactors',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/47.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '317',
        title: 'NO контакт Moeller M22-K10',
        code: 'STY-MOE-NO',
        price: '19.31',
        newPrice: '',
        size: 1,
        slug: 'goods13-48',
        img: '/electronic/48.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/48.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '318',
        title: 'Перемикач двигуна Moeller PKZM0-10',
        code: 'WYL-MOE-031',
        price: '241.17',
        newPrice: '',
        size: 1,
        slug: 'goods13-49',
        img: '/electronic/49.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Запобіжні пристрої',
            slug: '/electrical-and-electronic-components/safety-devices',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/49.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '319',
        title: '4-значний дисплей (v1.06.0) - не запрограмований',
        code: 'PLY-BKF-CAN-IO-V4',
        price: '1226.38',
        newPrice: '',
        size: 1,
        slug: 'goods13-50',
        img: '/electronic/50.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/50.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '320',
        title: '4-значний дисплей для системи eurokey COMESTERO',
        code: 'COM-WYS-RM924/G',
        price: '337.09',
        newPrice: '',
        size: 1,
        slug: 'goods13-51',
        img: '/electronic/51.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/51.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '321',
        title: '4-значний дисплей для системи eurokey COMESTERO, НЕКОМПЛЕКТ (без проводки)',
        code: 'COM-WYS-RM924/G-NK',
        price: '279.54',
        newPrice: '',
        size: 1,
        slug: 'goods13-52',
        img: '/electronic/52.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/52.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '322',
        title: 'LED дисплей автомийки (1-секційний)',
        code: 'WYS-LED-V2.2',
        price: '506.46',
        newPrice: '',
        size: 1,
        slug: 'goods13-53',
        img: '/electronic/53.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Дисплеї (LCD, LED)',
            slug: '/electrical-and-electronic-components/displays-LCD-LED)',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/53.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '323',
        title: 'Імпульсний блок живлення Lovato PSL1M (60 24 2.5A 230/24VDC)',
        code: 'ZAS-CAR-004',
        price: '259.99',
        newPrice: '',
        size: 1,
        slug: 'goods13-54',
        img: '/electronic/54.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Трансформатори та джерела живлення',
            slug: '/electrical-and-electronic-components/transformers-and-power-supplies',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/54.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '324',
        title: 'Wieland Wipos P1 / Lovato імпульсний блок живлення 24-5A (230/24V 5A)',
        code: 'ZAS-WIE-002',
        price: '459.52',
        newPrice: '',
        size: 1,
        slug: 'goods13-55',
        img: '/electronic/55.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Трансформатори та джерела живлення',
            slug: '/electrical-and-electronic-components/transformers-and-power-supplies',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/55.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '325',
        title: 'Блок живлення Lovato PSL1;240;24 (заміна ZAS-WIE-003)',
        code: 'ZAS-LOV-24V-10A',
        price: '638.59',
        newPrice: '',
        size: 1,
        slug: 'goods13-56',
        img: '/electronic/56.png',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Трансформатори та джерела живлення',
            slug: '/electrical-and-electronic-components/transformers-and-power-supplies',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/56.png', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '326',
        title: 'Світлодіодна лампа (24V W5W T10)',
        code: 'ZAR-LED-24V-T10',
        price: '8.79',
        newPrice: '',
        size: 1,
        slug: 'goods13-57',
        img: '/electronic/57.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/57.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
    {
        id: '327',
        title: 'Лампа LED 24V W5W T10 (червона)',
        code: 'ZAR-LED-24V-T10-RED',
        price: '8.79',
        newPrice: '',
        size: 1,
        slug: 'goods13-58',
        img: '/electronic/58.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Електричні та електронні компоненти',
            slug: '/electrical-and-electronic-components',
        },
        bread2: {
            title: 'Кнопки',
            slug: '/electrical-and-electronic-components/buttons',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/electronic/58.jpg', ],
        descriptionFull: `
        <p>Привідний</p><br/>
        `
    },
]

const arrChildCatalog = [
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


function ChemicalMeans() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
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
                                    <span> Електричні та електронні компоненти</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Електричні та електронні компоненти</h1>

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