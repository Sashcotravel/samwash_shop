"use client"

import s from './nav.module.css';
import {useEffect, useState} from "react";
import Link from "next-intl/link";
import {useSearchParams} from "next/navigation";
import {useStore} from "@/store/store";


function NavProduct() {

    const [catalog, setCatalog] = useState([])
    const [filterCatalog, setFilterCatalog] = useState([])
    const [filteredGoods, setFilteredGoods] = useState([])
    const [point, setPoint] = useState({
        priceOnly: true, pricePlusProducer: false, producer: true, producerPlusPrice: false
    })
    const [priceTo, setPriceTo] = useState('')
    const [priceFrom, setPriceFrom] = useState('')
    const [value1, setValue1] = useState(false)
    const [value2, setValue2] = useState(false)
    const [value3, setValue3] = useState({
        Kothar: false, R_M: false, Seko: false, Schneider: false,
    })

    const searchParams = useSearchParams()
    let pageUrl = searchParams.get('catalog')

    const addGoodsFilter = useStore(store => store.addGoodsFilter)

    const fetchAPI = () => {
        // fetch(`https://cb.samwash.ua/api/v1/catalog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`, {
        fetch(`https://cb.samwash.ua/api/v1/catalog/ua`, { next: { revalidate: 60 }})
            .then(response => response.json())
            .then(json => {
                let res = json.data
                setCatalog(res)
                res.map(item => {
                    if(item.slug === pageUrl){
                        setFilterCatalog(item.catalog_goods)
                    }
                })
            })
    }

    useEffect(() => {
        if(catalog.length === 0){
            window.scrollTo(0, 0)
            fetchAPI()
        }
        else if(catalog.length === undefined){
            fetchAPI()
        }
    }, [catalog])


    const filterFunction = (type, num) => {
        if(type === 'prise'){
                if(Number(priceFrom) > Number(priceTo)){
                    document.getElementById('priceTo').style.border = '1px solid red'
                    document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
                }
                else if(priceFrom === '' && priceTo === ''){
                    document.getElementById('priceFrom').style.border = '1px solid red'
                    document.getElementById('priceTo').style.border = '1px solid red'
                }
                else if(priceFrom === ''){
                    document.getElementById('priceFrom').style.border = '1px solid red'
                    document.getElementById('priceTo').style.border = '1px solid #DDDDDD'
                }
                else if(priceTo === ''){
                    document.getElementById('priceTo').style.border = '1px solid red'
                    document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
                }
                if(Number(priceFrom) === Number(priceTo)){
                    document.getElementById('priceTo').style.border = '1px solid red'
                    document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
                }
                else if(Number(priceFrom) < Number(priceTo)){
                    document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
                    document.getElementById('priceTo').style.border = '1px solid #DDDDDD'

                    const priseRage = () => {
                        return filterCatalog.filter(product =>
                            product.price >= parseFloat(priceFrom) && product.price <= parseFloat(priceTo)
                        )
                    }

                    if(point.priceOnly){
                        addGoodsFilter(priseRage());
                        setFilteredGoods(priseRage());
                    }
                    else if(!point.priceOnly){

                    }
                }
            }
        else if(type === 'producer'){
                // setValue3({ Kothar: num === 1, R_M: num === 2, Seko: num === 3, Schneider: num === 4 });
            setValue3(prev => {
                switch (num) {
                    case 1:
                        return { Kothar: !prev.Kothar, R_M: false, Seko: false, Schneider: false };
                    case 2:
                        return { Kothar: false, R_M: !prev.R_M, Seko: false, Schneider: false };
                    case 3:
                        return { Kothar: false, R_M: false, Seko: !prev.Seko, Schneider: false };
                    case 4:
                        return { Kothar: false, R_M: false, Seko: false, Schneider: !prev.Schneider };
                    default:
                        return prev;
                }
            });
            let goodsP = []
            filterCatalog.filter(product => {
                    switch (num) {
                        case 1:
                            if(!value3.Kothar){
                                product.producer === 'Kothar' ? goodsP.push(product) : '';
                                addGoodsFilter(goodsP);
                                setFilteredGoods(goodsP);
                            } else {
                                addGoodsFilter(filterCatalog);
                                setFilteredGoods(filterCatalog);
                            }
                            break
                        case 2:
                            if(!value3.R_M){
                                product.producer === 'R+M' ? goodsP.push(product) : '';
                                addGoodsFilter(goodsP);
                                setFilteredGoods(goodsP);
                            } else {
                                addGoodsFilter(filterCatalog);
                                setFilteredGoods(filterCatalog);
                            }
                            break
                        case 3:
                            if(!value3.Seko){
                                product.producer === 'Seko' ? goodsP.push(product) : '';
                                addGoodsFilter(goodsP);
                                setFilteredGoods(goodsP);
                            } else {
                                addGoodsFilter(filterCatalog);
                                setFilteredGoods(filterCatalog);
                            }
                            break
                        case 4:
                            if(!value3.Schneider){
                                product.producer === 'Schneider Electric' ? goodsP.push(product) : '';
                                addGoodsFilter(goodsP);
                                setFilteredGoods(goodsP);
                            } else {
                                addGoodsFilter(filterCatalog);
                                setFilteredGoods(filterCatalog);
                            }
                            break
                        default:
                            return addGoodsFilter([product]);
                    }
                });
        }

        // console.log(filterCatalog, filteredGoods)
    }


    return (
        <nav className={s.nav}>

            <div className={s.divName}>
                {
                    catalog.length !== undefined && catalog?.map(item => {
                        if(item.parent_id === null){

                            return <div key={item.id}>
                                <div className={s.item} key={item.id}>
                                    <Link href={'/catalog?catalog=' + item.slug}>
                                        <p>{item.catalog_content[0].title}</p> <br/>
                                    </Link>
                                </div>
                                {
                                    catalog?.map(item2 => {
                                        if (item.id === item2.parent_id) {

                                            return (
                                                <div key={item.id}>
                                                    <div className={s.item} key={item2.id}>
                                                        <Link href={'/catalog?catalog=' + item2.slug}>
                                                            <p>{item2.catalog_content[0].title}</p> <br/>
                                                        </Link>
                                                    </div>
                                                    {
                                                        catalog?.map(item3 => {
                                                            if (item2.id === item3.parent_id) {
                                                                return (<div key={item.id}>
                                                                    <div className={s.item} key={item3.id}>
                                                                        <Link href={'/catalog?catalog=' + item3.slug}>
                                                                            <p>{item3.catalog_content[0].title}</p>
                                                                            <br/>
                                                                        </Link>
                                                                    </div>
                                                                    {
                                                                        catalog?.map(item4 => {
                                                                            if (item3.id === item4.parent_id) {
                                                                                return (<div key={item.id}>
                                                                                    <div className={s.item}
                                                                                         key={item4.id}>
                                                                                        <Link
                                                                                            href={'/catalog?catalog=' + item4.slug}>
                                                                                            <p>{item4.catalog_content[0].title}</p>
                                                                                            <br/>
                                                                                        </Link>
                                                                                    </div>
                                                                                    {
                                                                                        catalog?.map(item5 => {
                                                                                            if (item4.id === item5.parent_id) {
                                                                                                return (
                                                                                                    <div key={item.id}>
                                                                                                        <div
                                                                                                            className={s.item}
                                                                                                            key={item5.id}>
                                                                                                            <Link
                                                                                                                href={'/catalog?catalog=' + item5.slug}>
                                                                                                                <p>{item5.catalog_content[0].title}</p>
                                                                                                                <br/>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        {
                                                                                                            catalog?.map(item6 => {
                                                                                                                if (item5.id === item6.parent_id) {
                                                                                                                    return (
                                                                                                                        <div
                                                                                                                            key={item.id}>
                                                                                                                            <div
                                                                                                                                className={s.item}
                                                                                                                                key={item6.id}>
                                                                                                                                <Link
                                                                                                                                    href={'/catalog?catalog=' + item6.slug}>
                                                                                                                                    <p>{item6.catalog_content[0].title}</p>
                                                                                                                                    <br/>
                                                                                                                                </Link>
                                                                                                                            </div>
                                                                                                                        </div>)
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    </div>)
                                                                                            }
                                                                                        })
                                                                                    }
                                                                                </div>)
                                                                            }
                                                                        })
                                                                    }
                                                                </div>)
                                                            }
                                                        })
                                                    }
                                                </div>)
                                        }
                                    })
                                }
                            </div>
                        }
                    })
                }
            </div>
            {catalog.length !== undefined && <div className={s.divFilter}>
                <h3>Фільтри</h3>
                <ul>
                    <li className={s.liPrise}>
                        <p>Ціна</p>
                        <div className={s.rangDiv}>
                            <span>Від</span>
                            <input type="text" value={priceFrom} id='priceFrom'
                                   onChange={e => setPriceFrom(e.target.value)}/>
                            <span>До</span>
                            <input type="text" value={priceTo} id='priceTo'
                                   onChange={e => setPriceTo(e.target.value)}/>
                            <span>доларів</span>
                        </div>
                    </li>
                    <button className={s.buttonRang} onClick={() => filterFunction('prise')}>Застосувати</button>
                    <li>
                        <p><b>Доступність</b></p>
                        <label className={s.label}>
                            <input type="checkbox" value={value1} onClick={() => setValue1(prev => !prev)}/>
                            <span className={s.labelSpan}>
                                <span>Відразу (34)</span>
                            </span>
                        </label>
                    </li>
                    <li>
                        <p><b>Рейтинг</b></p>
                        <label className={s.label}>
                            <input type="checkbox" value={value2} onClick={() => setValue2(prev => !prev)}/>
                            <span className={s.labelSpan}>
                                <span>Жодного (34)</span>
                            </span>
                        </label>
                    </li>
                    <li>
                        <p><b>Виробник / Назва компанії</b></p>
                        <label onChange={() => filterFunction('producer',1)} className={s.label}>
                            <input type="checkbox" value={value3.Kothar} checked={value3.Kothar}/>
                            <span className={s.labelSpan}>
                                <span>Kothar</span>
                            </span>
                        </label>
                        <label onChange={() => filterFunction('producer', 2)} className={s.label}>
                            <input type="checkbox" value={value3.R_M} checked={value3.R_M}/>
                            <span className={s.labelSpan}>
                                <span>R+M</span>
                            </span>
                        </label>
                        <label onChange={() => filterFunction('producer',3)} className={s.label}>
                            <input type="checkbox" value={value3.Seko} checked={value3.Seko}/>
                            <span className={s.labelSpan}>
                                <span>Seko</span>
                            </span>
                        </label>
                        <label onChange={() => filterFunction('producer',4)} className={s.label}>
                            <input type="checkbox" value={value3.Schneider} checked={value3.Schneider}/>
                            <span className={s.labelSpan}>
                                <span>Schneider Electric</span>
                            </span>
                        </label>
                    </li>
                </ul>
            </div>}

        </nav>
    );
}

export default NavProduct;