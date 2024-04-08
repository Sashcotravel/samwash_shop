"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './product.module.css';
import NavProduct from "@/app/component/NavProduct/NavProduct";
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";


function Product() {

    const t = useTranslations();

    const [allCatalog, setAllCatalog] = useState([])
    const [goods, setGoods] = useState([])

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
                        setGoods(item.catalog_goods)
                        setCurrentCatalog1(item)
                    } else {
                        item.sub_catalogs.forEach(item2 => {
                            if(item2.slug === currentURL || item2.slug === currentURL.slice(3)){
                                setCurrentCatalog(item2)
                                setGoods(item2.catalog_goods)
                                setCurrentCatalog1(item)
                                setCurrentCatalog2(item2)
                            } else {
                                item2.sub_catalogs.forEach(item3 => {
                                    if(item3.slug === currentURL || item3.slug === currentURL.slice(3)){
                                        setCurrentCatalog(item3)
                                        setGoods(item3.catalog_goods)
                                        setCurrentCatalog1(item)
                                        setCurrentCatalog2(item2)
                                        setCurrentCatalog3(item3)
                                    } else {
                                        item3.sub_catalogs.forEach(item4 => {
                                            if(item4.slug === currentURL || item4.slug === currentURL.slice(3)){
                                                setCurrentCatalog(item4)
                                                setGoods(item4.catalog_goods)
                                                setCurrentCatalog1(item)
                                                setCurrentCatalog2(item2)
                                                setCurrentCatalog3(item3)
                                                setCurrentCatalog4(item4)
                                            } else {
                                                item4.sub_catalogs.forEach(item5 => {
                                                    if(item5.slug === currentURL || item5.slug === currentURL.slice(3)){
                                                        setCurrentCatalog(item5)
                                                        setGoods(item5.catalog_goods)
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

                    <h1>{currentCatalog.length !== 0 ? currentCatalog?.catalog_content[0].title : ''}</h1>
                    <div dangerouslySetInnerHTML={{__html: currentCatalog.length !== 0 ?
                            currentCatalog?.catalog_content[0].description : ''}}></div>

                    {/*<ul className={s.ulCategory}>*/}
                    {/*    {*/}
                    {/*        currentCatalog.sub_catalogs?.map(item => {*/}

                    {/*            return <li className={s.item} key={item.id}>*/}
                    {/*                <Link href={'/product/' + item.slug}>*/}
                    {/*                    <div className={s.divImage}>*/}
                    {/*                        <img alt={item.catalog_content[0].title}*/}
                    {/*                             src={'https://cb.samwash.ua/storage/' + item.catalog_images[0]?.path}/>*/}
                    {/*                    </div>*/}
                    {/*                    <h3>{item.catalog_content[0].title}</h3>*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</ul>*/}

                    <ul className={s.ulCategory}>
                        {
                            goods?.map((item, index) => {
                                if(Number(item?.availability) === 1) {

                                    return <div className={s.goods_wrapper} key={item.id}>
                                            <Link href={`/shop/${currentURL}/${item.slug}`}></Link>
                                            <div className={s.imageGoods}>
                                                {/*{*/}
                                                {/*    item.catalog_goods_images.length === 0 ?*/}
                                                <img src='/other/noImage.jpg' alt='no image'/>
                                                {/*            :*/}
                                                {/*            <Image fill*/}
                                                {/*                src={'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path}*/}
                                                {/*                alt={item.catalog_goods_content[0].title} />*/}
                                                {/*    }*/}
                                                <p className={s.goodsTitle}>{item.catalog_goods_content[0].title}</p>
                                            </div>
                                            {/*<div className={s.itemDesc}*/}
                                            {/*     dangerouslySetInnerHTML={{__html: item.catalog_goods_content[0].description}}></div>*/}
                                            {/*<div style={{*/}
                                            {/*    display: 'flex',*/}
                                            {/*    justifyContent: 'space-evenly',*/}
                                            {/*    marginTop: '25px'*/}
                                            {/*}}>*/}
                                                {/*<Image alt='photo' src={shopCart} onClick={() => submitForm(item)}*/}
                                                {/*       style={{cursor: 'pointer', position: 'relative'}}/>*/}
                                                {/*<Link href={locale === 'uk' ? `/shop/${currentURL}/${item.slug}`*/}
                                                {/*    : `/shop/${currentURL.slice(3)}/${item.slug}`}*/}
                                                {/*      className={s.buttonZamShop}*/}
                                                {/*      onClick={() => dispatch(addGoods(item))}>*/}
                                                {/*    {t("Details")}*/}
                                                {/*</Link>*/}
                                            {/*</div>*/}
                                        </div>
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