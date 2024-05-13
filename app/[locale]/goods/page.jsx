"use client"

import s from './goods.module.css';
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next-intl/link";
import Image from "next/image";
import {useStore} from "@/store/store";
import {FaBasketShopping} from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import {AiOutlineCheck, AiOutlineClose, AiOutlineHome} from "react-icons/ai";

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import Loading from "@/app/component/loading/loading";
import TopButton from "@/app/component/topButton/topButton";

import { goodsArr } from '../../db/data'


function Goods() {

    const [currentCatalog, setCurrentCatalog] = useState([])
    const [currentCatalog1, setCurrentCatalog1] = useState([])
    const [currentCatalog2, setCurrentCatalog2] = useState([])
    const [currentCatalog3, setCurrentCatalog3] = useState([])
    const [currentCatalog4, setCurrentCatalog4] = useState([])
    const [currentCatalog5, setCurrentCatalog5] = useState([])
    const [currentCatalog6, setCurrentCatalog6] = useState([])
    const [images, setImages] = useState([])
    const [open, setOpen] = useState(false)
    const [goods, setGoods] = useState([])
    const searchParams = useSearchParams()

    let pageUrl = searchParams.get('goods')

    const addOrderStore = useStore(store => store.addOrder)

    useEffect(() => {
        goodsArr.map(item => {
            if (item.slug === pageUrl) {
                setGoods(item)
                item?.imageShow?.forEach((image, index) => {
                    const newImage = {
                        original: image,
                        thumbnail: image,
                        title: item.title,
                        alt: item.title
                    };
                    setImages((prev) => {
                        return [...prev, newImage]
                    });
                })
                if (item.bread1 !== '') {
                    setCurrentCatalog(item.bread1)
                    setCurrentCatalog1(item.bread1)
                    setCurrentCatalog2([])
                    setCurrentCatalog3([])
                    setCurrentCatalog4([])
                    setCurrentCatalog5([])
                    setCurrentCatalog6([])
                    if (item.bread2 !== '') {
                        setCurrentCatalog(item.bread2)
                        setCurrentCatalog2(item.bread2)
                        setCurrentCatalog3([])
                        setCurrentCatalog4([])
                        setCurrentCatalog5([])
                        setCurrentCatalog6([])
                        setCurrentCatalog5([])
                        setCurrentCatalog6([])
                        if (item.bread3 !== '') {
                            setCurrentCatalog(item.bread3)
                            setCurrentCatalog3(item.bread3)
                            setCurrentCatalog4([])
                            setCurrentCatalog5([])
                            setCurrentCatalog6([])
                            // res.data.forEach(item4 => {
                            //     if (item3.parent_id === item4.id) {
                            //         setCurrentCatalog4(item4)
                            //         setCurrentCatalog5([])
                            //         setCurrentCatalog6([])
                            //         res.data.forEach(item5 => {
                            //             if (item4.parent_id === item5.id) {
                            //                 setCurrentCatalog5(item5)
                            //                 setCurrentCatalog6([])
                            //                 res.data.forEach(item6 => {
                            //                     if (item5.parent_id === item6.id) {
                            //                         setCurrentCatalog6(item6)
                            //                     }
                            //                 })
                            //             }
                            //         })
                            //     }
                            // })
                        }
                    }
                }
            }
        })
    }, [pageUrl])

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

            <TopButton index={4} />

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
                            {currentCatalog1.length !== 0 && <li>
                                <Link
                                    href={currentCatalog1.slug}> {currentCatalog1?.title}
                                </Link>
                            </li>}
                            {currentCatalog2.length !== 0 && <li>
                                <Link
                                    href={currentCatalog2.slug}> {currentCatalog2?.title}
                                </Link>
                            </li>}
                            {currentCatalog3.length !== 0 && <li>
                                <Link
                                    href={currentCatalog3.slug}> {currentCatalog3?.title}
                                </Link>
                            </li>}
                            {currentCatalog4.length !== 0 && <li>
                                <Link href={currentCatalog4.slug}> {currentCatalog4?.title}</Link></li>}
                            {currentCatalog5.length !== 0 && <li>
                                <Link href={currentCatalog5.slug}> {currentCatalog5?.title}</Link></li>}
                            {currentCatalog5.length !== 0 && <li>
                                <Link href={currentCatalog5.slug}> {currentCatalog5?.title}</Link></li>}
                            {currentCatalog6.length !== 0 && <li>
                                <Link href={currentCatalog6.slug}> {currentCatalog6?.title}</Link></li>}
                            <li>
                                <span>{goods.title}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className={s.divGoods}>
                        <h1>{goods.title}</h1>
                        <div className={s.divColumn1}>
                            {
                                goods.imageShow === null ?
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
                            <p style={{marginBottom: '10px'}}>Код товару: <b>{goods.code}</b></p>
                            {goods.newPrice && <div className={s.divOldPrice}>
                                <del>
                                    <span>{goods.price} доларів</span>
                                </del>
                            </div>}
                            {goods.newPrice && <div className={s.divOldPrice2}>
                                <del>
                                    <span><b>{goods.price} доларів</b> </span>
                                </del>
                            </div>}
                            <div className={s.divPriceNet}>
                                <span>{!goods.newPrice ? goods.price : goods.newPrice} </span>
                                <span> доларів </span>
                                <span> чистий</span>
                            </div>
                            <div className={s.divPriceBrutto}>
                                <span><b>{!goods.newPrice ? goods.price : goods.newPrice}</b> </span>
                                <span> <b>доларів</b> </span>
                                <span> <b>брутто</b></span>
                            </div>
                            {goods.descriptionPrise && <div className={s.divOldPrice2}>
                                <span>{goods.descriptionPrise}</span>
                            </div>}
                            <div className={s.divDescGoods}>
                                {goods.descriptionMin}
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
                                    {goods?.weight && <li>
                                        <p>Ваги</p>
                                        <p>{goods?.weight} кг</p>
                                    </li>}
                                    {goods?.codeEAN && <li>
                                        <p>Код EAN</p>
                                        <p>{goods?.codeEAN}</p>
                                    </li>}
                                    <li>
                                        <p>Штриховий код</p>
                                        <p>{goods.code}</p>
                                    </li>
                                    <li>
                                        <p>ID</p>
                                        <p>{goods.id}</p>
                                    </li>
                                    {goods.symbol && <li>
                                        <p>Символ</p>
                                        <p>{goods.symbol}</p>
                                    </li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.divDesc}>
                        <MdOutlineDescription/>
                        <span>Опис продукту</span>
                    </div>
                    <div className={s.divDesc2}>
                        <h3><b>Опис продукту</b></h3>
                        <h4><b>Ім'я:</b> {goods.title}</h4>
                        <h4><b>Код:</b> {goods.code}</h4>
                        <p dangerouslySetInnerHTML={{
                            __html: goods.descriptionFull}}></p>
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