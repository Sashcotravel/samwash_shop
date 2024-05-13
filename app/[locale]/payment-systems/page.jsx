"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../pumps-and-detergent-dispensers/catalog.module.css';
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
        id: '150',
        title: 'Червоне оргскло для дисплея COMESTERO',
        code: 'COM-PLE',
        price: '36.99',
        newPrice: '',
        size: 1,
        slug: 'goods5-1',
        img: '/system-payment/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/loyalty-operations',
            title: 'Операції лояльності з карткою/ключем',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/1.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '151',
        title: 'Зчитувач банкнот ICT XBA з касетою для банкнот на 400 штук (імпульсний кабель 12 В постійного струму, кабель MDB 34 В постійного струму)',
        code: 'CZY-BAN-XBA',
        price: '2362.37',
        newPrice: '',
        size: 1,
        slug: 'goods5-2',
        img: '/system-payment/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/banknote-readers-and-accessories',
            title: 'Зчитувачі банкнот і аксесуари',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/2.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '152',
        title: 'ПЕРСОНАЛІЗОВАНА КАРТКА MIFARE "SamWash"',
        code: 'КАР-КОМ',
        price: '21.29',
        newPrice: '',
        size: 1,
        slug: 'goods5-3',
        img: '/system-payment/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/loyalty-operations',
            title: 'Операції лояльності з карткою/ключем',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/3.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '153',
        title: 'Касета для зчитування банкнот ICT XBA на 400 банкнот',
        code: 'KAS-CZY-BAN-ICT-XBA-400',
        price: '227.91',
        newPrice: '',
        size: 1,
        slug: 'goods5-4',
        img: '/system-payment/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/banknote-readers-and-accessories',
            title: 'Зчитувачі банкнот і аксесуари',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/4.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '154',
        title: 'Касета для зчитування банкнот ICT XBA на 600 банкнот',
        code: 'KAS-CZY-BAN-ICT-XBA-600',
        price: '292.86',
        newPrice: '',
        size: 1,
        slug: 'goods5-5',
        img: '/system-payment/5.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/banknote-readers-and-accessories',
            title: 'Зчитувачі банкнот і аксесуари',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/5.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '155',
        title: 'Монетниця з нержавіючої сталі для модуля і робочих столів',
        code: 'KAS-MOD-NIE',
        price: '430.50',
        newPrice: '',
        size: 1,
        slug: 'goods5-6',
        img: '/system-payment/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash',
            title: '',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/6.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '156',
        title: 'Повне кріплення зчитувача банкнот (оргскло в комплекті)',
        code: 'MOC-CZY-BAN',
        price: '237.22',
        newPrice: '',
        size: 1,
        slug: 'goods5-7',
        img: '/system-payment/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/banknote-readers-and-accessories',
            title: 'Зчитувачі банкнот і аксесуари',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/7.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '157',
        title: 'Кріплення монетоприймача та коместеро (без дисплея)(14-4-1)',
        code: 'MOC-WRZ-COM',
        price: '55.89',
        newPrice: '',
        size: 1,
        slug: 'goods5-8',
        img: '/system-payment/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/8.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '158',
        title: 'Розводка кабелів для системи Eurokey Plus у версії MDB',
        code: 'KAB-MDB',
        price: '106.57',
        newPrice: '',
        size: 1,
        slug: 'goods5-9',
        img: '/system-payment/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/loyalty-operations',
            title: 'Операції лояльності з карткою/ключем',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/9.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '159',
        title: 'Кришка зчитувача PEP (Saturn) - в комплекті з кріпленням',
        code: 'OSL-CZY-PEP',
        price: '260.43',
        newPrice: '',
        size: 1,
        slug: 'goods5-10',
        img: '/system-payment/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/transactions-with-payment-cards',
            title: 'Операції з платіжними картками',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/10.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '160',
        title: 'Дійсна кришка механізму та двері comestero (клапан з нержавіючої сталі + оргскло)',
        code: 'MOD-BKF-OSL-WRZ',
        price: '235.67',
        newPrice: '',
        size: 1,
        slug: 'goods5-11',
        img: '/system-payment/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/11.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '161',
        title: 'Кришка монетоприймача з оргскла',
        code: 'KLA-MTM-001',
        price: '78.41',
        newPrice: '',
        size: 1,
        slug: 'goods5-12',
        img: '/system-payment/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/12.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '162',
        title: 'Полікарбонатна пластина для клепаних монет валідатора і кришки comestero (прозора 3мм)',
        code: 'PLY-POL-WRZ-3MM',
        price: '24.33',
        newPrice: '',
        size: 1,
        slug: 'goods5-13',
        img: '/system-payment/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/13.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '163',
        title: 'Полікарбонатна пластина для кришки монетоприймача і коместеро (прозора 2 мм)',
        code: 'PLY-POL-WRZ',
        price: '26.94',
        newPrice: '',
        size: 1,
        slug: 'goods5-14',
        img: '/system-payment/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/14.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '164',
        title: 'Пластина полікарбонатна для чохлів Saturn/Nayax (прозора 3мм)',
        code: 'PLY-POL-SAT-NX',
        price: '21.62',
        newPrice: '',
        size: 1,
        slug: 'goods5-15',
        img: '/system-payment/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/transactions-with-payment-cards',
            title: 'Операції з платіжними картками',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/15.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '165',
        title: 'Кабель CCTalk 50 см для модуля і змінного автомата',
        code: 'PRZ-CCT-50',
        price: '41.76',
        newPrice: '',
        size: 1,
        slug: 'goods5-16',
        img: '/system-payment/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/16.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '166',
        title: 'CCTalk кабель 70 см до робочого столу',
        code: 'PRZ-CCT-70',
        price: '43.67',
        newPrice: '',
        size: 1,
        slug: 'goods5-17',
        img: '/system-payment/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/17.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '167',
        title: 'Система безготівкових розрахунків EuroKey NEXT COMESTERO',
        code: 'SYS-COM-003',
        price: '1258.40',
        newPrice: '',
        size: 1,
        slug: 'goods5-18',
        img: '/system-payment/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/loyalty-operations',
            title: 'Операції лояльності з карткою/ключем',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/18.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '168',
        title: 'Стрічка для 10-контактного монетника (35см)',
        code: 'TAS-10PIN-35',
        price: '58.28',
        newPrice: '',
        size: 1,
        slug: 'goods5-19',
        img: '/system-payment/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/19.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '169',
        title: 'Стрічка для 10-контактного монетника (60см)',
        code: 'TAS-10PIN-60',
        price: '48.77',
        newPrice: '',
        size: 1,
        slug: 'goods5-20',
        img: '/system-payment/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/20.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '170',
        title: 'Стрічка для 10-контактного монетника (70см)',
        code: 'TAS-10PIN-70',
        price: '76.83',
        newPrice: '',
        size: 1,
        slug: 'goods5-21',
        img: '/system-payment/21.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/21.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '171',
        title: 'Термінал поповнення ключів системи EUROKEY NEXT COMESTERO з блоком живлення (РАНІШНИЙ ПЛЮС)',
        code: 'TER-DOL-COM',
        price: '2501.32',
        newPrice: '',
        size: 1,
        slug: 'goods5-22',
        img: '/system-payment/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cashless',
            title: 'Безготівковий',
        },
        bread3: {
            slug: '/payment-systems/cashless/loyalty-operations',
            title: 'Операції лояльності з карткою/ключем',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/22.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '172',
        title: 'Електронний монетоприймач (EMP 800.00) (1 секція, 10 PIN TAPE)',
        code: 'WRZ-WH-005',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-23',
        img: '/system-payment/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/23.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '173',
        title: 'Електронний валідатор монет (EMP 800.00) (4 секції, 10 PIN TAPE)',
        code: 'WRZ-WH-004',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-24',
        img: '/system-payment/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/24.jpg', ],
        descriptionFull: `
        
        `
    },
    {
        id: '174',
        title: 'Електронний монетоприймач (EMP 800.13) (WH v6 /E2/I/T 4 секції, кабель CC TALK)',
        code: 'WRZ-WH-003',
        price: '899.65',
        newPrice: '',
        size: 1,
        slug: 'goods5-25',
        img: '/system-payment/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/payment-systems',
            title: 'Платіжні системи',
        },
        bread2: {
            slug: '/payment-systems/cash',
            title: 'Готівка',
        },
        bread3: {
            slug: '/payment-systems/cash/coin-validators',
            title: 'Валідатори монет',
        },
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/system-payment/25.jpg', ],
        descriptionFull: `
        
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/payment-systems/cashless',
        title: 'Безготівковий',
    },
    {
        slug: '/payment-systems/cashless/transactions-with-payment-cards',
        title: 'Операції з платіжними картками'
    },
    {
        slug: '/payment-systems/cashless/loyalty-operations',
        title: 'Операції лояльності з карткою/ключем',
    },
    {
        slug: '/payment-systems/cash',
        title: 'Готівка',
    },
    {
        slug: '/payment-systems/cash/banknote-readers-and-accessories',
        title: 'Зчитувачі банкнот і аксесуари',
    },
    {
        slug: '/payment-systems/cash/coin-validators',
        title: 'Валідатори монет',
    },
]


function ChemicalMeans() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [goods, setGoods] = useState([])
    const [open2, setOpen2] = useState(false)

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
                                    <span> Платіжні системи</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Платіжні системи</h1>
                    <div>
                        Вам цікаво, які запчастини автомийки знадобляться для підтримки систем оплати автомийки?
                        Перегляньте товари цієї категорії.
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
                        <Image src='/system-payment/main.jpg' alt='Платіжні системи' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <h2>Традиційні системи оплати на автомийках – як їх спростити?</h2>
                            <p>
                                Якщо автомийка підтримує традиційні способи оплати готівкою, вона також повинна бути
                                обладнана розмінним автоматом із зчитувачем банкнот. Його роль полягає в безпечному
                                обміні готівки. Найкращі змінні автомати для автомийок мають зчитувачі, які надійно
                                працюють у будь-яких умовах. Все це для того, щоб гарантувати клієнтам швидку оплату.
                                Усі платіжні системи та додаткове обладнання, що пропонуються на автомийці, повинні
                                гарантувати високу якість та забезпечувати ефективне обслуговування клієнтів.
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
                                <h2>Системи безготівкової оплати автомийок – безпечно та зручно</h2> <br/>
                                <p>
                                    Системи безготівкової оплати стають все більш популярними. Все більше користувачів
                                    автомийки хочуть обмежити використання монет і банкнот і оплачувати послугу,
                                    наприклад, банківською карткою. Для цього необхідно буде придбати зчитувальні
                                    пристрої, які підтримують усі види платіжних карток. Платіжні системи повинні бути
                                    зручними для користувачів і дозволяти власникам контролювати обороти. При
                                    облаштуванні автомийки варто вибирати вироби, стійкі до погодних умов і тривалого
                                    впливу вологи.
                                </p> <br/>
                                <p>
                                    Також зверніть увагу на інші системи оплати на автомийках, такі як картки та ключі.
                                    Працюють вони за тим же принципом - потрібно лише періодично поповнювати баланс, щоб
                                    у будь-який час мати можливість з комфортом помити автомобіль на конкретній мийці.
                                    Носії містять закодовану інформацію, прості у використанні, зручні та легко
                                    зберігаються. Для того, щоб клієнти могли ними вільно користуватися, необхідно
                                    придбати відповідний рідер.
                                </p> <br/>
                                <p>
                                    Враховуючи, що системи оплати автомийок постійно розвиваються, варто подумати про
                                    надання клієнтам мобільного додатку, за допомогою якого вони зможуть за кілька
                                    секунд знайти автомийку та оплатити послугу. Таку можливість надає мобільний додаток
                                    BE LOYAL, який використовується на автомийках SamWash. Користувачі дуже цінують прості
                                    та функціональні рішення, які спрощують використання засобу. Саме такий додаток ми
                                    пропонуємо! Незалежно від того, яке рішення ви виберете, пам'ятайте, що платіжні
                                    системи повинні працювати ефективно, надійно і гарантувати безпеку користувачів і
                                    власників.
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

export default ChemicalMeans;