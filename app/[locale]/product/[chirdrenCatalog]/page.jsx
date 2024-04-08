"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './product.module.css';
import NavProduct from "@/app/component/NavProduct/NavProduct";
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


function Product() {

    const [allCatalog, setAllCatalog] = useState([])

    const [currentCatalog, setCurrentCatalog] = useState([])
    const [currentCatalog1, setCurrentCatalog1] = useState([])
    const [currentCatalog2, setCurrentCatalog2] = useState([])
    const [currentCatalog3, setCurrentCatalog3] = useState([])
    const [currentCatalog4, setCurrentCatalog4] = useState([])
    const [currentCatalog5, setCurrentCatalog5] = useState([])

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [currentItem, setCurrentItem] = useState()
    const currentURL = pathname.slice(6)

    const fetchAPI = () => {
        // fetch(`https://cb.samwash.ua/api/v1/catalog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`, {
        fetch(`https://cb.samwash.ua/api/v1/catalog/ua`, {next: {revalidate: 60}})
            .then(response => response.json())
            .then(json => setAllCatalog(json.data))
    }

    useEffect(() => {
        if (allCatalog.length === 0) {
            fetchAPI()
        } else if (allCatalog.length === undefined) {
            fetchAPI()
        }
    }, [allCatalog])

    useEffect(() => {
        if(allCatalog){
            allCatalog.forEach(item => {
                if(item.parent_id === null){
                    if(item.slug === currentURL || item.slug === currentURL.slice(3)){
                        setCurrentCatalog(item)
                        setCurrentCatalog1(item)
                    }
                    else {
                        item.sub_catalogs.forEach(item2 => {
                            if(item2.slug === currentURL || item2.slug === currentURL.slice(3)){
                                setCurrentCatalog(item2)
                                setCurrentCatalog1(item)
                                setCurrentCatalog2(item2)
                            } else {
                                item2.sub_catalogs.forEach(item3 => {
                                    if(item3.slug === currentURL || item3.slug === currentURL.slice(3)){
                                        setCurrentCatalog(item3)
                                        setCurrentCatalog1(item)
                                        setCurrentCatalog2(item2)
                                        setCurrentCatalog3(item3)
                                    } else {
                                        item3.sub_catalogs.forEach(item4 => {
                                            if(item4.slug === currentURL || item4.slug === currentURL.slice(3)){
                                                setCurrentCatalog(item4)
                                                setCurrentCatalog1(item)
                                                setCurrentCatalog2(item2)
                                                setCurrentCatalog3(item3)
                                                setCurrentCatalog4(item4)
                                            } else {
                                                item4.sub_catalogs.forEach(item5 => {
                                                    if(item5.slug === currentURL || item5.slug === currentURL.slice(3)){
                                                        setCurrentCatalog(item5)
                                                        setCurrentCatalog1(item)
                                                        setCurrentCatalog2(item2)
                                                        setCurrentCatalog3(item3)
                                                        setCurrentCatalog4(item4)
                                                        setCurrentCatalog5(item5)
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                }
            })
        }
    }, [allCatalog]);



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
                            currentCatalog.sub_catalogs?.map(item => {

                                    return <li className={s.item} key={item.id}>
                                        <Link href={'/product/' + item.slug}>
                                            <div className={s.divImage}>
                                                <img alt={item.catalog_content[0].title}
                                                     src={'https://cb.samwash.ua/storage/' + item.catalog_images[0]?.path}/>
                                            </div>
                                            <h3>{item.catalog_content[0].title}</h3>
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