"use client"

import s from './goods.module.css';
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next-intl/link";
import Image from "next/image";
import {useStore} from "@/store/store";
import Loading from "@/app/component/LOading/Loading";
import {FaBasketShopping} from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import {AiOutlineCheck, AiOutlineClose, AiOutlineHome} from "react-icons/ai";

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'


function Goods() {

    const [images, setImages] = useState([])
    const [open, setOpen] = useState(false)
    const [goods, setGoods] = useState([])
    const searchParams = useSearchParams()

    let pageUrl = searchParams.get('goods')

    const addOrderStore = useStore(store => store.addOrder)

    useEffect(() => {
        if(pageUrl){
            // axios.get(`https://cb.samwash.ua/api/v1/goods/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}/${pageUrl}`)
            axios.get(`https://cb.samwash.ua/api/v1/goods/ua/${pageUrl}`)
                .then(res => {
                    setGoods(res.data.data[0])
                    res.data.data[0].size = 1
                    console.log(res.data.data[0])
                    let goods2 = res.data.data[0]
                    if (goods2.catalog_goods_images !== undefined) {
                        goods2.catalog_goods_images.forEach((item, index) => {
                            if (item.mime_type === "webp" && item.width === "1200") {
                                const newImage = {
                                    original: `https://cb.samwash.ua/storage/${goods2?.catalog_goods_images[index].path}`,
                                    thumbnail: `https://cb.samwash.ua/storage/${goods2?.catalog_goods_images[index].path}`,
                                    title: 'photo',
                                    alt: 'photo'
                                };
                                setImages((prev) => {
                                    return [...prev, newImage]
                                });
                            }
                        })
                    }
                })
        }
    }, [pageUrl])

    useEffect(() => {

    }, [])

    const style = {
        cursor: 'default',
        color: '#DDDDDD',
        background: '#f4f4f4'
    }

    const addCol = () => {
        setGoods(prev => {return {...prev, size: prev.size + 1}});
    }

    const minesCol = () => {
        if(goods.size > 1){
            setGoods(prev => {return {...prev, size: prev.size - 1}});
        }
    }

    const addOrder = (item) => {
        addOrderStore(item)
        setGoods(prev => {return {...prev, size: 1}});
        setOpen(true)
    }


    return (
        <div className={s.mainDiv}>
            {goods.length === 0 ? <Loading /> : <div className={s.wrapper}>

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
                            <li><span>{goods.catalog_goods_content[0].title}</span></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className={s.divGoods}>
                        <h1>{goods.catalog_goods_content[0].title}</h1>
                        <div className={s.divColumn1}>
                            {
                                goods.catalog_goods_images.length === 0 ?
                                    <Image fill className={s.imgNo} src='/other/no-image.svg' alt='no image'/>
                                    : <ImageGallery lazyLoad={true}
                                                    thumbnailPosition={'left'}
                                                    useBrowserFullscreen={true}
                                                    items={images}
                                                    showIndex={true}
                                                    autoPlay={true}
                                                    disableThumbnailScroll={true}
                                                    alt={'photo'}
                                    />
                            }
                        </div>
                        <div className={s.divColumn2}>
                            <p>Код товару: <b>{goods.goods_code}</b></p>
                            <div className={s.divPriceNet}>
                                <span>{goods.price} </span>
                                <span> доларів </span>
                                <span> чистий</span>
                            </div>
                            <div className={s.divPriceBrutto}>
                                <span><b>{goods.price}</b> </span>
                                <span> <b>доларів</b> </span>
                                <span> <b>брутто</b></span>
                            </div>
                            <div className={s.divDescGoods}>
                                {goods.catalog_goods_content[0].description.slice(3, -4)}
                            </div>
                            <div className={s.divAdd}>
                                <div className={s.div_col + ' ' + s.div_col2}>
                                    <div className={s.div_col}>
                                        <button onClick={minesCol}
                                                disabled={goods.size === 1}
                                                style={goods.size === 1 ? style : undefined}
                                        >-
                                        </button>
                                        <p>{goods.size}</p>
                                        <button onClick={addCol}>+</button>
                                        <span>шт.</span>
                                    </div>
                                </div>
                                <button className={s.add_but} onClick={() => addOrder(goods)}>
                                    <Image src='/header/basket-gray.png' alt='search' width={32}
                                           height={32}/>
                                    <span>Додати до<br/>Кошика</span>
                                </button>
                            </div>
                            <div className={s.special_goods}>
                                <h3>Особливості товару</h3>
                                <ul>
                                    <li>
                                        <p>ПДВ</p>
                                        <p>23%</p>
                                    </li>
                                    <li>
                                        <p>Ваги</p>
                                        <p>0,33 кг</p>
                                    </li>
                                    <li>
                                        <p>Штриховий код</p>
                                        <p>{goods.goods_code}</p>
                                    </li>
                                    <li>
                                        <p>ID</p>
                                        <p>{goods.id}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.divDesc}>
                        <MdOutlineDescription />
                        <span>Опис продукту</span>
                    </div>
                    <div className={s.divDesc2}>
                        <h3><b>Опис продукту</b></h3>
                        <h4><b>Ім'я:</b> {goods.catalog_goods_content[0].title}</h4>
                        <h4><b>Код:</b> {goods.goods_code}</h4>
                        <p>{goods.catalog_goods_content[0].description.slice(3, -4)}</p>
                        <p>Код виробника: {goods.producer}</p>
                    </div>
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

export default Goods;