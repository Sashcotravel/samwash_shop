"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './catalog.module.css';
import NavProduct from "@/app/component/NavProduct/NavProduct";
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {useStore} from "@/store/store";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import {FaBasketShopping} from "react-icons/fa6";


const fetchAPI = (setAllCatalog) => {
    // fetch(`https://cb.samwash.ua/api/v1/catalog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`, {
    fetch(`https://cb.samwash.ua/api/v1/catalog/ua`, {next: {revalidate: 60}})
        .then(response => response.json())
        .then(json => setAllCatalog(json.data))
}


function Product2() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
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
    const currentURL = pathname.slice(9)

    let pageUrl = searchParams.get('catalog')

    const addOrderStore = useStore(store => store.addOrder)

    useEffect(() => {
        if (allCatalog.length === 0) {
            fetchAPI(setAllCatalog)
        } else if (allCatalog.length === undefined) {
            fetchAPI(setAllCatalog)
        }
    }, [allCatalog])

    useEffect(() => {
        if (allCatalog) {
            allCatalog.forEach(item => {
                if (item.parent_id === null) {
                    if (item.slug === pageUrl || item.slug === currentURL.slice(3)) {
                    // if (item.slug === currentURL || item.slug === currentURL.slice(3)) {
                        setCurrentCatalog(item)
                        setGoods(item.catalog_goods)
                        setCurrentCatalog1(item)
                    }
                    else {
                        item.sub_catalogs.forEach(item2 => {
                            if (item2.slug === currentURL || item2.slug === currentURL.slice(3)) {
                                setCurrentCatalog(item2)
                                setGoods(item2.catalog_goods)
                                setCurrentCatalog1(item)
                                setCurrentCatalog2(item2)
                            } else {
                                item2.sub_catalogs.forEach(item3 => {
                                    if (item3.slug === currentURL || item3.slug === currentURL.slice(3)) {
                                        setCurrentCatalog(item3)
                                        setGoods(item3.catalog_goods)
                                        setCurrentCatalog1(item)
                                        setCurrentCatalog2(item2)
                                        setCurrentCatalog3(item3)
                                    } else {
                                        item3.sub_catalogs.forEach(item4 => {
                                            if (item4.slug === currentURL || item4.slug === currentURL.slice(3)) {
                                                setCurrentCatalog(item4)
                                                setGoods(item4.catalog_goods)
                                                setCurrentCatalog1(item)
                                                setCurrentCatalog2(item2)
                                                setCurrentCatalog3(item3)
                                                setCurrentCatalog4(item4)
                                            } else {
                                                item4.sub_catalogs.forEach(item5 => {
                                                    if (item5.slug === currentURL || item5.slug === currentURL.slice(3)) {
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

            <NavProduct/>

            {goods.length === 0 ? <div>Loading...</div> : <div className={s.divProduct}>
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
                    <div
                        //     dangerouslySetInnerHTML={{
                        //     __html: currentCatalog.length !== 0 ?
                        //         currentCatalog?.catalog_content[0].description : ''
                        // }}
                    >{currentCatalog?.catalog_content[0].description.slice(5, -6)}</div>

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
                                if (Number(item?.availability) === 1) {
                                    if (item.size === 0) {
                                        item.size = 1

                                        return <div className={s.goods_wrapper} key={item.id}>
                                            <Link href={`/goods?goods=${item.slug}`}></Link>
                                            {/*<Link href={`/product/${currentURL}/${item.slug}`}></Link>*/}
                                            <div>
                                                <div className={s.imageGoods}>
                                                    {
                                                        item.catalog_goods_images.length === 0 ?
                                                            <img src='/other/noImage.jpg' alt='no image'/>
                                                            :
                                                            <img
                                                                src={'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path}
                                                                alt={item.catalog_goods_content[0].title}/>
                                                    }
                                                </div>
                                                <p className={s.goodsTitle}>{item.catalog_goods_content[0].title}</p>
                                                <p className={s.client_code}>Код виробника:
                                                    <b> {item?.client_code}</b></p>
                                                <p className={s.description} dangerouslySetInnerHTML={{
                                                    __html: item?.catalog_goods_content[0].description
                                                }}></p>
                                            </div>
                                            <div className={s.div_price}>
                                                <span>{item.price} доларів</span>
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
                                    } else {
                                        return <div className={s.goods_wrapper} key={item.id}>
                                            <Link href={`/goods?goods=${item.slug}`}></Link>
                                            {/*<Link href={`/product/${currentURL}/${item.slug}`}></Link>*/}
                                            <div>
                                                <div className={s.imageGoods}>
                                                    {
                                                        item.catalog_goods_images.length === 0 ?
                                                            <img src='/other/noImage.jpg' alt='no image'/>
                                                            :
                                                            <img
                                                                src={'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path}
                                                                alt={item.catalog_goods_content[0].title}/>
                                                    }
                                                </div>
                                                <p className={s.goodsTitle}>{item.catalog_goods_content[0].title}</p>
                                                <p className={s.client_code}>{item?.client_code}</p>
                                                <p className={s.description} dangerouslySetInnerHTML={{
                                                    __html: item?.catalog_goods_content[0].description
                                                }}></p>
                                            </div>
                                            <div className={s.div_price}>
                                                <span>{item.price} доларів</span>
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
                                    }
                                }
                            })
                        }
                    </ul>
                </div>
            </div>}

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

export default Product2;