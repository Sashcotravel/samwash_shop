"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from './catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {useStore} from "@/store/store";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import {FaBasketShopping} from "react-icons/fa6";
import NavProduct from "@/app/component/navProduct/navProduct";


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
    const [currentCatalog6, setCurrentCatalog6] = useState([])

    const searchParams = useSearchParams()
    let pageUrl = searchParams.get('catalog')

    const addOrderStore = useStore(store => store.addOrder)
    const goodsStore = useStore(store => store.goods)

    useEffect(() => {
        if (allCatalog.length === 0) {
            fetchAPI(setAllCatalog)
        } else if (allCatalog.length === undefined) {
            fetchAPI(setAllCatalog)
        }
    }, [pageUrl])

    useEffect(() => {
        if (allCatalog) {
            allCatalog.forEach(item => {
                if (item.parent_id === null) {
                    if (item.slug === pageUrl || item.slug === pageUrl.slice(3)) {
                        setCurrentCatalog(item)
                        setGoods(item.catalog_goods)
                        setCurrentCatalog1([])
                        setCurrentCatalog2([])
                        setCurrentCatalog3([])
                        setCurrentCatalog4([])
                        setCurrentCatalog5([])
                        setCurrentCatalog6([])
                    }
                    else {
                        item.sub_catalogs.forEach(item2 => {
                            if (item2.slug === pageUrl || item2.slug === pageUrl.slice(3)) {
                                setCurrentCatalog(item2)
                                setGoods(item2.catalog_goods)
                                setCurrentCatalog1(item)
                                setCurrentCatalog2([])
                                setCurrentCatalog3([])
                                setCurrentCatalog4([])
                                setCurrentCatalog5([])
                                setCurrentCatalog6([])
                            }
                            else {
                                item2.sub_catalogs.forEach(item3 => {
                                    if (item3.slug === pageUrl || item3.slug === pageUrl.slice(3)) {
                                        setCurrentCatalog(item3)
                                        setGoods(item3.catalog_goods)
                                        setCurrentCatalog1(item)
                                        setCurrentCatalog2(item2)
                                        setCurrentCatalog3([])
                                        setCurrentCatalog4([])
                                        setCurrentCatalog5([])
                                        setCurrentCatalog6([])
                                    }
                                    else {
                                        item3.sub_catalogs.forEach(item4 => {
                                            if (item4.slug === pageUrl || item4.slug === pageUrl.slice(3)) {
                                                setCurrentCatalog(item4)
                                                setGoods(item4.catalog_goods)
                                                setCurrentCatalog1(item)
                                                setCurrentCatalog2(item2)
                                                setCurrentCatalog3(item3)
                                                setCurrentCatalog4(item4)
                                                setCurrentCatalog5([])
                                                setCurrentCatalog6([])
                                            } else {
                                                item4.sub_catalogs.forEach(item5 => {
                                                    if (item5.slug === pageUrl || item5.slug === pageUrl.slice(3)) {
                                                        setCurrentCatalog(item5)
                                                        setGoods(item5.catalog_goods)
                                                        setCurrentCatalog1(item)
                                                        setCurrentCatalog2(item2)
                                                        setCurrentCatalog3(item3)
                                                        setCurrentCatalog4(item4)
                                                        setCurrentCatalog5(item5)
                                                        setCurrentCatalog6([])
                                                    }
                                                    else {
                                                        item5.sub_catalogs.forEach(item6 => {
                                                            if (item6.slug === pageUrl || item6.slug === pageUrl.slice(3)) {
                                                                setCurrentCatalog(item6)
                                                                setGoods(item6.catalog_goods)
                                                                setCurrentCatalog1(item)
                                                                setCurrentCatalog2(item2)
                                                                setCurrentCatalog3(item3)
                                                                setCurrentCatalog4(item4)
                                                                setCurrentCatalog5(item5)
                                                                setCurrentCatalog6(item6)
                                                            }
                                                        })
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
    }, [pageUrl, allCatalog]);

    useEffect(() => {
        setGoods(goodsStore)
    }, [goodsStore]);


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

            <NavProduct />

            {goods.length === 0 ?
                // <Loading />
                <h2 className='loadingMainDiv'>Товарів не знайдено</h2>
                :
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
                                {currentCatalog1.length !== 0 && currentCatalog1.slug !== currentCatalog.slug &&  <li>
                                    <Link
                                        href={`catalog?catalog=${currentCatalog1.slug}`}> {currentCatalog1?.catalog_content[0].title}
                                    </Link>
                                </li>}
                                {currentCatalog2.length !== 0 && currentCatalog2.slug !== currentCatalog.slug &&  <li>
                                    <Link
                                        href={`catalog?catalog=${currentCatalog2.slug}`}> {currentCatalog2?.catalog_content[0].title}
                                    </Link>
                                </li>}
                                {currentCatalog3.length !== 0 && currentCatalog3.slug !== currentCatalog.slug &&  <li>
                                    <Link
                                        href={`catalog?catalog=${currentCatalog3.slug}`}> {currentCatalog3?.catalog_content[0].title}
                                    </Link>
                                </li>}
                                {currentCatalog4.length !== 0 && currentCatalog4.slug !== currentCatalog.slug &&  <li>
                                    <Link
                                        href={`catalog?catalog=${currentCatalog4.slug}`}> {currentCatalog4?.catalog_content[0].title}
                                    </Link>
                                </li>}
                                {currentCatalog5.length !== 0 && currentCatalog5.slug !== currentCatalog.slug &&  <li>
                                    <Link
                                        href={`catalog?catalog=${currentCatalog5.slug}`}> {currentCatalog5?.catalog_content[0].title}
                                    </Link>
                                </li>}
                                {currentCatalog6.length !== 0 && currentCatalog6.slug !== currentCatalog.slug && <li>
                                    <Link
                                        href={`catalog?catalog=${currentCatalog6.slug}`}> {currentCatalog6?.catalog_content[0].title}
                                    </Link>
                                </li>}
                                <li>
                                    <span>{currentCatalog.length !== 0 ? currentCatalog?.catalog_content[0].title : ''}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>{currentCatalog.length !== 0 ? currentCatalog?.catalog_content[0].title : ''}</h1>
                    <div>{currentCatalog.length !== 0 ?
                        currentCatalog?.catalog_content[0].description.slice(3, -4) : ''}</div>

                    <ul className={s.ulCategory}>
                        {
                            goods?.map((item, index) => {
                                if (Number(item?.availability) === 1) {
                                    if (item.size === 0) {
                                        item.size = 1

                                        return <div className={s.goods_wrapper} key={item.id}>
                                            <Link href={`/goods?goods=${item.slug}`}></Link>
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
                                    }
                                    else if(!item.size) {
                                        item.size = 1

                                        return <div className={s.goods_wrapper} key={item.id}>
                                            <Link href={`/goods?goods=${item.slug}`}></Link>
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
                                    else {
                                        return <div className={s.goods_wrapper} key={item.id}>
                                            <Link href={`/goods?goods=${item.slug}`}></Link>
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
            </div>
             }

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