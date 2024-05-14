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
        id: '224',
        title: 'Нагрівальний вентилятор для TS-рейки, HVL 031 150W, 230VAC, IP20 (STEGO 03103.0-00)',
        code: 'GRZ-TS-150W',
        price: '662.91',
        newPrice: '',
        size: 1,
        slug: 'goods9-1',
        img: '/fittings/1.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/electric-heaters',
            title: 'Електричні обігрівачі',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/1.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '225',
        title: 'Насадка для пальника Riello Gulliver RG2 - 1,25 GPH (60 кВт) (Delta 55 / HM 60 / HM 70) Z00033 (заміна 537D1027)',
        code: 'DYSZ-RG2-1.25',
        price: '86.30',
        newPrice: '',
        size: 1,
        slug: 'goods9-2',
        img: '/fittings/2.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/nozzles',
            title: 'Насадки',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/2.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '226',
        title: 'Електрод іонізації пальника BG2000 S25-100, для котлів D25 D55 HM60 HM100 (537DX010) (53437009)',
        code: 'ELE-ACV-537DX010',
        price: '223.86',
        newPrice: '',
        size: 1,
        slug: 'goods9-3',
        img: '/fittings/3.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/3.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '227',
        title: 'Електрод пальника BG2000 S100, для котла HM100 (537DX028)',
        code: 'ELE-ACV-537DX028',
        price: '223.86',
        newPrice: '',
        size: 1,
        slug: 'goods9-4',
        img: '/fittings/4.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/4.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '228',
        title: 'Електрод пальника BG2000 S55-70, для котлів D55 HM60 (537DX029)',
        code: 'ELE-ACV-537DX029',
        price: '339.70',
        newPrice: '',
        size: 1,
        slug: 'goods9-5',
        img: '/fittings/5.png',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/5.png', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '229',
        title: 'Електрод пальника для котлів HM25TC HM35TC V14 (10800288)',
        code: 'ELE-ACV-10800288',
        price: '216.04',
        newPrice: '',
        size: 1,
        slug: 'goods9-6',
        img: '/fittings/6.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/6.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '230',
        title: 'Електрод пальника для котлів HM25TC HM35TC V15 (A1002510)',
        code: 'ELE-ACV-A1002510',
        price: '438.32',
        newPrice: '',
        size: 1,
        slug: 'goods9-7',
        img: '/fittings/7.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/7.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '231',
        title: 'Електрод пальника для котлів HM70TC HM85TC V14 і V15 (10800313)',
        code: 'ELE-ACV-10800313',
        price: '253.23',
        newPrice: '',
        size: 1,
        slug: 'goods9-8',
        img: '/fittings/8.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/8.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '232',
        title: 'Рейковий нагрівач ts cs 060,100W (Мод. 06010.0-00)',
        code: 'GRZ-TS-100W',
        price: '346.87',
        newPrice: '',
        size: 1,
        slug: 'goods9-9',
        img: '/fittings/9.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/electric-heaters',
            title: 'Електричні обігрівачі',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/9.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '233',
        title: 'Кабель запалювання ACV 257F1160',
        code: 'KAB-ZAP-ACV',
        price: '167.13',
        newPrice: '',
        size: 1,
        slug: 'goods9-10',
        img: '/fittings/10.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/10.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '234',
        title: 'Заглушка для корпусу тиску діафрагми',
        code: 'KOR-MEM',
        price: '288.37',
        newPrice: '',
        size: 1,
        slug: 'goods9-11',
        img: '/fittings/11.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/sensors',
            title: 'Датчики',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/11.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '235',
        title: 'Розширювальний бак (CO) Cosmo Mag-H 25',
        code: 'NAC-PRZ-25L',
        price: '320.44',
        newPrice: '',
        size: 1,
        slug: 'goods9-12',
        img: '/fittings/12.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/diaphragmatic-vessels',
            title: 'Діафрагмальні судини',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/12.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '236',
        title: 'Плоский розширювальний бак (CO) Varem Flatvarem 8L [C2 008 231]',
        code: 'NAC-PRZ-6-CIMM',
        price: '262.40',
        newPrice: '',
        size: 1,
        slug: 'goods9-13',
        img: '/fittings/13.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/diaphragmatic-vessels',
            title: 'Діафрагмальні судини',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/13.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '237',
        title: 'Розширювальний бак 10 л',
        code: 'NACZ-PRZ-ACV-10L',
        price: '493.12',
        newPrice: '',
        size: 1,
        slug: 'goods9-14',
        img: '/fittings/14.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/diaphragmatic-vessels',
            title: 'Діафрагмальні судини',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/14.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '238',
        title: 'Розширювальний бак 8 л',
        code: 'NACZ-PRZ-ACV-8L',
        price: '398.84',
        newPrice: '',
        size: 1,
        slug: 'goods9-15',
        img: '/fittings/15.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/diaphragmatic-vessels',
            title: 'Діафрагмальні судини',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/15.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '239',
        title: 'Розширювальний бак REFIX DE 12 л (для холодної води)',
        code: 'NAC-PRZ-12L-Z',
        price: '292.68',
        newPrice: '',
        size: 1,
        slug: 'goods9-16',
        img: '/fittings/16.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/diaphragmatic-vessels',
            title: 'Діафрагмальні судини',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/16.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '240',
        title: 'Конвекційний обігрівач для TS-рейки, CS 060 50W, 230VAC, IP20 (STEGO 06000.0-00)',
        code: 'GRZ-TS-50W',
        price: '242.19',
        newPrice: '',
        size: 1,
        slug: 'goods9-17',
        img: '/fittings/17.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/electric-heaters',
            title: 'Електричні обігрівачі',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/17.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '241',
        title: 'Реле Alfa Sprint M/S BG',
        code: 'PRZ-ALF-SPR',
        price: '1123.10',
        newPrice: '',
        size: 1,
        slug: 'goods9-18',
        img: '/fittings/18.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/18.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '242',
        title: 'Контролер MCBA Prestige для котла 85TC',
        code: 'STE-85TC-ACV',
        price: '3977.82',
        newPrice: '',
        size: 1,
        slug: 'goods9-19',
        img: '/fittings/19.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/19.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '243',
        title: 'Термостат котла (54442045)',
        code: 'TER-KOT-ACV',
        price: '181.07',
        newPrice: '',
        size: 1,
        slug: 'goods9-20',
        img: '/fittings/20.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/sensors',
            title: 'Датчики',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/20.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '244',
        title: 'Тепловентилятор Stiebel-Eltron CK 20 TREND',
        code: 'TER-STI-TREND',
        price: '721.71',
        newPrice: '',
        size: 1,
        slug: 'goods9-21',
        img: '/fittings/21.png',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/electric-heaters',
            title: 'Електричні обігрівачі',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/21.png', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '245',
        title: 'Вентилятор для HM 25-35 TC для V14 і старіших версій (537D3041)',
        code: 'WEN-ACV-RG-128',
        price: '1134.33',
        newPrice: '',
        size: 1,
        slug: 'goods9-22',
        img: '/fittings/22.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/22.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '246',
        title: 'Вентилятор для HM 25-35-45 TC для версії V15',
        code: 'WEN-TC-25-45',
        price: '1282.63',
        newPrice: '',
        size: 1,
        slug: 'goods9-23',
        img: '/fittings/23.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/23.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '247',
        title: 'Вентилятор для котлів ACV (HM70TC, HM85TC V15)',
        code: 'WEN-RG148-3633P75V14',
        price: '1992.96',
        newPrice: '',
        size: 1,
        slug: 'goods9-24',
        img: '/fittings/24.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/24.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '248',
        title: 'Вентилятор з двигуном DC/Sprint S для котлів ACV',
        code: 'WEN-SPR-148/1200-3612',
        price: '1377.60',
        newPrice: '',
        size: 1,
        slug: 'goods9-25',
        img: '/fittings/25.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/25.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '249',
        title: 'Вентилятор з двигуном для котлів ACV (HM 85TC V14)',
        code: 'WEN-SPR-85',
        price: '2066.94',
        newPrice: '',
        size: 1,
        slug: 'goods9-26',
        img: '/fittings/26.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/26.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
    {
        id: '250',
        title: 'Дисплей MK4 для нової версії контролера ACV MAX (HM 35, HM 85)',
        code: 'WYS-ACV-35TC',
        price: '878.22',
        newPrice: '',
        size: 1,
        slug: 'goods9-27',
        img: '/fittings/27.jpg',
        description: '',
        descriptionPrise: '',
        bread1: {
            slug: '/peating-fittings',
            title: 'Опалювальна арматура',
        },
        bread2: {
            slug: '/peating-fittings/',
            title: '',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        imageShow: ['/fittings/27.jpg', ],
        descriptionFull: `
        <p></p><br/>
        `
    },
]

const arrChildCatalog = [
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
                                    <span> Опалювальна арматура</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Опалювальна арматура</h1>

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