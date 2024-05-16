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
        id: '328',
        title: 'Коліно латунне 3/8" M (24.0289)(1204050128)',
        code: 'КОЛ-МТМ-3/8',
        price: '41.84',
        newPrice: '',
        size: 1,
        slug: 'goods14-1',
        img: '/hydraulic/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/1.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '329',
        title: 'Латунне коліно 3/8"M x 1/4"M',
        code: 'КОЛ-МТМ-3/8Х1/4',
        price: '77.49',
        newPrice: '',
        size: 1,
        slug: 'goods14-2',
        img: '/hydraulic/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/2.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '330',
        title: 'Манометр 0-10 бар 1/2" (низ 80 мм без логотипу)',
        code: 'MAN-10-DOL-1/2-80-WEEK',
        price: '142.68',
        newPrice: '',
        size: 1,
        slug: 'goods14-3',
        img: '/hydraulic/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/3.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '331',
        title: 'Манометр 0-10 бар 1/4" (нижній 63 мм без логотипу)',
        code: 'MAN-10-DOL-1/4-63-WEEK',
        price: '37.07',
        newPrice: '',
        size: 1,
        slug: 'goods14-4',
        img: '/hydraulic/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/4.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '332',
        title: 'Манометр 0-10 бар 1/4" (задній 63 мм без логотипу)',
        code: 'MAN-10-TYL-1/4-63-WEEK',
        price: '20.42',
        newPrice: '',
        size: 1,
        slug: 'goods14-5',
        img: '/hydraulic/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/5.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '333',
        title: 'Гліцериновий манометр (0-160 бар, дно 1/4\'\', 63 мм, нержавіюча сталь)',
        code: 'MAN-160-DOL-1/4-63-GLI-WIKA-SamWash',
        price: '130.74',
        newPrice: '',
        size: 1,
        slug: 'goods14-6',
        img: '/hydraulic/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/6.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '334',
        title: 'Гліцериновий манометр 0-10 бар 1/4\'\' (задній 63 мм, нержавіюча сталь без логотипу) ',
        code: 'MAN-10-TYL-1/4-63-GLI-WIKA',
        price: '72.30',
        newPrice: '',
        size: 1,
        slug: 'goods14-7',
        img: '/hydraulic/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/7.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '335',
        title: 'Гліцериновий манометр 0-25 бар 1/4\'\' (дно 63 мм, нержавіюча сталь без логотипу)',
        code: 'MAN-25-DOL-1/4-63-GLI-WIKA',
        price: '62.62',
        newPrice: '',
        size: 1,
        slug: 'goods14-8',
        img: '/hydraulic/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/8.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '336',
        title: 'Манометр гліцериновий Wika 0-160 бар 1/4\'\' задній, 63 мм, нерж. з логотипом SamWash (30530415)',
        code: 'MAN-160-TYL-1/4-63-GLI-WIKA-SamWash',
        price: '106.99',
        newPrice: '',
        size: 1,
        slug: 'goods14-9',
        img: '/hydraulic/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/9.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '337',
        title: 'Ніпель високого тиску оцинкований 3/8"',
        code: 'NYP-HYD-3/8',
        price: '5.25',
        newPrice: '',
        size: 1,
        slug: 'goods14-10',
        img: '/hydraulic/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/10.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '338',
        title: 'Редуктор тиску 1/2" CALEFFI 312 (DN15 Plus)',
        code: 'RED-CAL-1/2-312-PLUS',
        price: '170.31',
        newPrice: '',
        size: 1,
        slug: 'goods14-11',
        img: '/hydraulic/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/11.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '339',
        title: 'Редуктор тиску води Eurobrass 1" 0,5-6 бар',
        code: 'RED-CIS-EUR-1',
        price: '318.08',
        newPrice: '',
        size: 1,
        slug: 'goods14-12',
        img: '/hydraulic/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/12.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '340',
        title: '5-полюсний розподільник із зовнішньою різьбою від 3/4" до 1/2" (горизонтальний/модуль V1)',
        code: 'ROZ-5-3/4-NIE',
        price: '121.01',
        newPrice: '',
        size: 1,
        slug: 'goods14-13',
        img: '/hydraulic/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/software-assemblers',
            title: 'Збирачі програмного забезпечення'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/13.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '341',
        title: '6-полюсний розподільник з нержавіючої сталі, зовнішня різьба 3/4" знизу на 1/2" (Vertico V1/V2)',
        code: 'SIZE-6-3/4-NO-LOW',
        price: '117.50',
        newPrice: '',
        size: 1,
        slug: 'goods14-14',
        img: '/hydraulic/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/software-assemblers',
            title: 'Збирачі програмного забезпечення'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/14.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '3412',
        title: 'Термоманометр Afriso TM 80, fi80 мм, 0÷10 бар, 20÷120°C, G1/4", ax, кл. 2,5 [63 343]',
        code: 'TER-MAN-10-TYL-1/2-80-AFR',
        price: '95.61',
        newPrice: '',
        size: 1,
        slug: 'goods14-15',
        img: '',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: null,
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '342',
        title: 'Термометр 1/2\'\' зовнішня різьба до 120°C (оцинкована сталь, діаметр 63 мм без логотипу)',
        code: 'TER-1/2-63-WIKA',
        price: '41.80',
        newPrice: '',
        size: 1,
        slug: 'goods14-16',
        img: '/hydraulic/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/manometers-and-thermometers',
            title: 'Манометри і термометри'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/16.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '343',
        title: 'Термостатичний змішувальний клапан Taconova NovaMix High Capacity',
        code: 'ZAW-TER-MIE-HC',
        price: '973.00',
        newPrice: '',
        size: 1,
        slug: 'goods14-17',
        img: '/hydraulic/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/17.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '344',
        title: 'Термостатичний змішувальний клапан Taconova NovaMix Value 70 FS DN 20',
        code: 'ZAW-TER-MIE',
        price: '549.27',
        newPrice: '',
        size: 1,
        slug: 'goods14-18',
        img: '/hydraulic/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/18.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '345',
        title: 'Трійник 3х12мм ПУТ12',
        code: 'ТРО-НОВ-3Х12',
        price: '16.58',
        newPrice: '',
        size: 1,
        slug: 'goods14-19',
        img: '/hydraulic/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/19.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '346',
        title: 'Трійник 3х8мм (пластик)',
        code: 'ТРО-НОВ-001',
        price: '8.95',
        newPrice: '',
        size: 1,
        slug: 'goods14-20',
        img: '/hydraulic/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/20.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '347',
        title: 'Трійник високого тиску оцинкований 3/8" GW',
        code: 'ZLA-TRO-3/8',
        price: '61.50',
        newPrice: '',
        size: 1,
        slug: 'goods14-21',
        img: '/hydraulic/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/21.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '348',
        title: 'Трійник перехідний 12/8/12 (PUG 12-08)',
        code: 'ТРО-НОВ-12-8-12',
        price: '19.86',
        newPrice: '',
        size: 1,
        slug: 'goods14-22',
        img: '/hydraulic/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/hydraulic/22.jpg', ],
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '349',
        title: 'Запобіжний клапан (6 бар на вході 1/2", на виході 3/4 ГВт)',
        code: 'ZAW-BEZ-6BAR-1/2-GW',
        price: '101.20',
        newPrice: '',
        size: 1,
        slug: 'goods14-23',
        img: '/hydraulic/23.jpg',
        imageShow: ['/hydraulic/23.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/safety-valves',
            title: 'Запобіжні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '350',
        title: 'Запобіжний клапан 3 бар різьблення 1/2"',
        code: 'ZAW-BEZ-3BAR-1/2-GW',
        price: '101.20',
        newPrice: '',
        size: 1,
        slug: 'goods14-24',
        img: '/hydraulic/24.jpg',
        imageShow: ['/hydraulic/24.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/safety-valves',
            title: 'Запобіжні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '351',
        title: 'Запобіжний клапан 3 бар різьблення 3/4"',
        code: 'ZAW-BEZ-3BAR-3/4-GW',
        price: '186.92',
        newPrice: '',
        size: 1,
        slug: 'goods14-25',
        img: '/hydraulic/25.jpg',
        imageShow: ['/hydraulic/25.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/safety-valves',
            title: 'Запобіжні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '352',
        title: 'Запобіжний клапан 6 бар різьба 3/4"',
        code: 'ZAW-BEZ-6BAR-3/4-GW',
        price: '165.75',
        newPrice: '',
        size: 1,
        slug: 'goods14-26',
        img: '/hydraulic/26.jpg',
        imageShow: ['/hydraulic/26.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/safety-valves',
            title: 'Запобіжні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '353',
        title: 'Клапан запобіжний з виходом датчика 55426017',
        code: 'ZAW-BEZ-ACV',
        price: '269.26',
        newPrice: '',
        size: 1,
        slug: 'goods14-27',
        img: '/hydraulic/27.jpg',
        imageShow: ['/hydraulic/27.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/safety-valves',
            title: 'Запобіжні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '354',
        title: 'Клапан тонкого регулювання SERTO DN8 (внутрішня різьба G1/2)',
        code: 'ZAW-DOK-REG-SER',
        price: '306.26',
        newPrice: '',
        size: 1,
        slug: 'goods14-28',
        img: '/hydraulic/28.jpg',
        imageShow: ['/hydraulic/28.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '355',
        title: 'ESBE VRG131 3-ходовий змішувальний клапан (1160 11 00)',
        code: 'ZAW-ESBE-131',
        price: '341.67',
        newPrice: '',
        size: 1,
        slug: 'goods14-29',
        img: '/hydraulic/29.jpg',
        imageShow: ['/hydraulic/29.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '356',
        title: 'Заправний клапан Inter-Sano 1/2" (білий Inter-Sano TS 1/2" 30/215)',
        code: 'ZAW-NAP',
        price: '26.49',
        newPrice: '',
        size: 1,
        slug: 'goods14-30',
        img: '/hydraulic/30.jpg',
        imageShow: ['/hydraulic/30.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/float-valves',
            title: 'Поплавкові клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '357',
        title: 'Кран поплавковий 3/4"MZ 22.0016',
        code: 'ZAW-MTM-PLY',
        price: '75.66',
        newPrice: '',
        size: 1,
        slug: 'goods14-31',
        img: '/hydraulic/31.jpg',
        imageShow: ['/hydraulic/31.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/float-valves',
            title: 'Поплавкові клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '358',
        title: 'Поплавковий клапан з нержавіючої сталі DN 17',
        code: 'ZAW-PLY-MUL-17',
        price: '522.80',
        newPrice: '',
        size: 1,
        slug: 'goods14-32',
        img: '/hydraulic/32.jpg',
        imageShow: ['/hydraulic/32.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/float-valves',
            title: 'Поплавкові клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '359',
        title: 'Клапан регулювання тиску Kranzle 14141K (ULH250K / 53331)',
        code: 'ZAW-KRA',
        price: '307.73',
        newPrice: '',
        size: 1,
        slug: 'goods14-33',
        img: '/hydraulic/33.jpg',
        imageShow: ['/hydraulic/33.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '360',
        title: 'Клапан регулювання тиску з ручкою (VB9 unload. 3/8F)',
        code: 'ZAW-PA',
        price: '550.51',
        newPrice: '',
        size: 1,
        slug: 'goods14-34',
        img: '/hydraulic/34.jpg',
        imageShow: ['/hydraulic/34.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '361',
        title: 'Клапан регулювання тиску з маховиком MG4000 (18.015)',
        code: 'ZAW-MTM-002',
        price: '286.06',
        newPrice: '',
        size: 1,
        slug: 'goods14-35',
        img: '/hydraulic/35.jpg',
        imageShow: ['/hydraulic/35.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '362',
        title: 'Клапан зворотний 1" (ARCO)',
        code: 'ZAW-ZWR-ARC1',
        price: '63.16',
        newPrice: '',
        size: 1,
        slug: 'goods14-36',
        img: '/hydraulic/36.jpg',
        imageShow: ['/hydraulic/36.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/check-valves',
            title: 'Зворотні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '363',
        title: 'Клапан зворотний 3/8" GW 160 BAR PA',
        code: 'ZAW-SUT-001',
        price: '89.72',
        newPrice: '',
        size: 1,
        slug: 'goods14-37',
        img: '/hydraulic/37.jpg',
        imageShow: ['/hydraulic/37.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/check-valves',
            title: 'Зворотні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '364',
        title: 'Клапан зворотний латунний високого тиску MTM CK500 3/8" GW 280bar [1124080119]',
        code: 'ZAW-ZWR-MTM-1124080119',
        price: '55.92',
        newPrice: '',
        size: 1,
        slug: 'goods14-38',
        img: '',
        imageShow: null,
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/check-valves',
            title: 'Зворотні клапани'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '365',
        title: 'Ремкомплект клапана регулювання тиску MG4000 (41.0209)',
        code: 'ZES-MTM-002',
        price: '43.86',
        newPrice: '',
        size: 1,
        slug: 'goods14-39',
        img: '/hydraulic/39.jpg',
        imageShow: ['/hydraulic/39.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/valves-and-reducers',
            title: 'Регулюючі клапани та редуктори'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '366',
        title: 'З\'єднувач кутовий GW 3/8" GZ 3/8" (4500-06)',
        code: 'ZLA-KAT-NAS',
        price: '33.86',
        newPrice: '',
        size: 1,
        slug: 'goods14-40',
        img: '/hydraulic/40.jpg',
        imageShow: ['/hydraulic/40.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '367',
        title: 'Прямий з\'єднувач 12мм 1/2" M',
        code: 'ZLA-NOV-12-1/2',
        price: '16.46',
        newPrice: '',
        size: 1,
        slug: 'goods14-41',
        img: '/hydraulic/41.jpg',
        imageShow: ['/hydraulic/41.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '368',
        title: 'Прямий з\'єднувач 8мм 1/2" M',
        code: 'ZLA-NOV-8-1/2',
        price: '9.90',
        newPrice: '',
        size: 1,
        slug: 'goods14-42',
        img: '/hydraulic/42.jpg',
        imageShow: ['/hydraulic/42.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
    {
        id: '369',
        title: 'Прямий з\'єднувач 8 мм 3/8" M',
        code: 'ZLA-NOV-8-3/8',
        price: '17.12',
        newPrice: '',
        size: 1,
        slug: 'goods14-43',
        img: '/hydraulic/43.jpg',
        imageShow: ['/hydraulic/43.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Гідравлічні елементи',
            slug: '/hydraulic-elements',
        },
        bread2: {
            slug: '/hydraulic-elements/hydraulic-connectors',
            title: 'Гідравлічні з\'єднувачі'
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
        <p>Замінює</p><br/>
        `
    },
]

const arrChildCatalog = [
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
                                    <span> Гідравлічні елементи</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Гідравлічні елементи</h1>

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