"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './product.module.css';
import NavProduct from "@/app/component/NavProduct/NavProduct";
import {AiOutlineHome} from "react-icons/ai";


function Product() {

    const [catalog, setCatalog] = useState([])

    const fetchAPI = () => {
        // fetch(`https://cb.samwash.ua/api/v1/catalog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`, {
        fetch(`https://cb.samwash.ua/api/v1/catalog/ua`, {next: {revalidate: 60}})
            .then(response => response.json())
            .then(json => setCatalog(json.data))
    }

    useEffect(() => {
        if (catalog.length === 0) {
            fetchAPI()
        } else if (catalog.length === undefined) {
            fetchAPI()
        }
    }, [catalog])

    // console.log(catalog)

    return (
        <div className={s.mainDiv}>

            <NavProduct/>

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
                            catalog.length !== undefined && catalog?.map(item => {
                                if (item.parent_id === null) {
                                    return <li className={s.item} key={item.id}>
                                        <Link href={'/catalog?catalog=' + item.slug}>
                                            <div className={s.divImage}>
                                                <img alt={item.catalog_content[0].title}
                                                     src={'https://cb.samwash.ua/storage/' + item.catalog_images[0]?.path}/>
                                            </div>
                                            <h3>{item.catalog_content[0].title}</h3>
                                        </Link>
                                    </li>
                                }
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Product;