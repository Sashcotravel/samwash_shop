"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './product.module.css';
import NavProduct from "@/app/component/NavProduct/navProduct";
import {AiOutlineHome} from "react-icons/ai";
import Image from "next/image";
import NavProduct2 from "@/app/component/navProduct2/navProduct2";

const arrChildCatalog = [
    {
        title: 'Хімічні засоби для безконтактної мийки',
        slug: '/chemical-means',
        img: '/chemical-means/main.jpg',
        child: [
            {
                slug: '/active-foam',
                title: 'Активна піна для миття автомобіля'
            },
            {
                slug: '/car-wash-powders',
                title: 'Порошки для миття автомобіля'
            },
            {
                slug: '/car-wash-shampoos',
                title: 'Шампуні для миття автомобіля'
            },
            {
                slug: '/car-wash-waxes',
                title: 'Воски для миття автомобіля'
            },
        ]
    },
    {
        title: 'Електромагнітні клапани та ремкомплекти',
        slug: '/electromagnetic-valves-and-repair-kits',
        img: '/electromagnetic/main.jpg',
        child: [
            {
                slug: '/electromagnetic-valves',
                title: 'Електромагнітні клапани'
            },
            {
                slug: '/repair-kits-of-electromagnetic-valves',
                title: 'Ремкомплекти електромагнітних клапанів'
            },
        ]
    },
    {
        title: 'Насоси та дозатори миючих засобів',
        slug: '/pumps-and-detergent-dispensers',
        img: '/pump/main.jpg',
        child: [
            {
                slug: '/electromagnetic-valves',
                title: 'Електромагнітні клапани'
            },
            {
                slug: '/repair-kits-of-electromagnetic-valves',
                title: 'Ремкомплекти електромагнітних клапанів'
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

            <NavProduct2 child={arrChildCatalog} back={'/product'} noFilter={true} />

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

                                                return <Link className={s.linkChild}
                                                             href={item2.slug}>{item2.title}</Link>
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