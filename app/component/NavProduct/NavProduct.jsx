"use client"

import s from './nav.module.css';
import {useEffect, useState} from "react";
import Link from "next-intl/link";

function NavProduct() {

    const [catalog, setCatalog] = useState([])

    const fetchAPI = () => {
        // fetch(`https://cb.samwash.ua/api/v1/catalog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`, {
        fetch(`https://cb.samwash.ua/api/v1/catalog/ua`, { next: { revalidate: 60 }})
            .then(response => response.json())
            .then(json => setCatalog(json.data))
    }

    useEffect(() => {
        if(catalog.length === 0){
            fetchAPI()
        }
        else if(catalog.length === undefined){
            fetchAPI()
        }
    }, [catalog])


    return (
        <nav className={s.nav}>

            <div className={s.divName}>
                {
                    catalog.length !== undefined && catalog?.map(item => {
                        if(item.parent_id === null){
                            return <div className={s.item} key={item.id}>
                                <Link href={'/product/' + item.slug}>
                                    <p>{item.catalog_content[0].title}</p>
                                </Link>
                            </div>
                        }
                    })
                }
            </div>

        </nav>
    );
}

export default NavProduct;