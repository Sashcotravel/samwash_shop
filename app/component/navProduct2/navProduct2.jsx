"use client"

import s from './nav.module.css';
import {useEffect, useState} from "react";
import Link from "next-intl/link";
import {useStore} from "@/store/store";


function NavProduct2({child, back, noFilter}) {

    const [priceCheck, setPriseCheck] = useState(false)
    const [priceGoods, setPriceGoods] = useState([])
    const [producerCheck, setProducerCheck] = useState(false)
    const [producerGoods, setProducerGoods] = useState([])
    const [imageCheck, setImageCheck] = useState(false)
    const [imageGoods, setImageGoods] = useState([])
    const [currentSLug, setCurrentSLug] = useState('')
    const [catalog, setCatalog] = useState([])
    const [filterCatalog, setFilterCatalog] = useState([])
    const [priceTo, setPriceTo] = useState('')
    const [priceFrom, setPriceFrom] = useState('')
    const [value1, setValue1] = useState(false)
    const [value2, setValue2] = useState(false)
    const [value3, setValue3] = useState({
        Kothar: false, R_M: false, Seko: false, Schneider: false,
    })

    const addGoodsFilter = useStore(store => store.addGoodsFilter)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const filterFunction = (name, num, num2) => {

        if(name === 'price') {
            if(Number(priceFrom) > Number(priceTo)){
                document.getElementById('priceTo').style.border = '1px solid red'
                document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
            }
            else if (priceFrom === '' && priceTo === '') {
                document.getElementById('priceFrom').style.border = '1px solid red'
                document.getElementById('priceTo').style.border = '1px solid red'
            }
            else if (priceFrom === '') {
                document.getElementById('priceFrom').style.border = '1px solid red'
                document.getElementById('priceTo').style.border = '1px solid #DDDDDD'
            }
            else if (priceTo === '') {
                document.getElementById('priceTo').style.border = '1px solid red'
                document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
            }
            else if (Number(priceFrom) === Number(priceTo)) {
                document.getElementById('priceTo').style.border = '1px solid red'
                document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
            }
            else if (Number(priceFrom) < Number(priceTo)) {
                document.getElementById('priceFrom').style.border = '1px solid #DDDDDD'
                document.getElementById('priceTo').style.border = '1px solid #DDDDDD'

                const priseRage = (filterCatalog) => {
                    return filterCatalog.filter(product =>
                        product.price >= parseFloat(priceFrom) && product.price <= parseFloat(priceTo)
                    )
                }

                if(producerGoods.length === 0 && imageGoods.length === 0){
                    addGoodsFilter(priseRage(filterCatalog));
                    setPriceGoods(priseRage(filterCatalog))
                    setPriseCheck(true)
                }
            }
        }

        // setValue3({ Kothar: num === 1, R_M: num === 2, Seko: num === 3, Schneider: num === 4 });
        if(name === 'producer') {
            setValue3(prev => {
                switch (num) {
                    case 1:
                        setProducerCheck(!prev.Kothar)
                        return { Kothar: !prev.Kothar, R_M: false, Seko: false, Schneider: false };
                    case 2:
                        setProducerCheck(!prev.R_M)
                        return { Kothar: false, R_M: !prev.R_M, Seko: false, Schneider: false };
                    case 3:
                        setProducerCheck(!prev.Seko)
                        return { Kothar: false, R_M: false, Seko: !prev.Seko, Schneider: false };
                    case 4:
                        setProducerCheck(!prev.Schneider)
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
                            setProducerGoods(goodsP);
                        }
                        else {
                            addGoodsFilter(filterCatalog);
                            setProducerGoods(filterCatalog);
                        }
                        break
                    case 2:
                        if(!value3.R_M){
                            product.producer === 'R+M' ? goodsP.push(product) : '';
                            addGoodsFilter(goodsP);
                            setProducerGoods(goodsP);
                        }
                        else {
                            addGoodsFilter(filterCatalog);
                            setProducerGoods(filterCatalog);
                        }
                        break
                    case 3:
                        if(!value3.Seko){
                            product.producer === 'Seko' ? goodsP.push(product) : '';
                            addGoodsFilter(goodsP);
                            setProducerGoods(goodsP);
                        }
                        else {
                            addGoodsFilter(filterCatalog);
                            setProducerGoods(filterCatalog);
                        }
                        break
                    case 4:
                        if(!value3.Schneider){
                            product.producer === 'Schneider Electric' ? goodsP.push(product) : '';
                            addGoodsFilter(goodsP);
                            setProducerGoods(goodsP);
                        }
                        else {
                            addGoodsFilter(filterCatalog);
                            setProducerGoods(filterCatalog);
                        }
                        break
                    default:
                        return addGoodsFilter([product]);
                }
            });
        }

        // 3 логіка
        if(name === 'image'){
            setValue2(num2)
            setImageCheck(true)
        }

        // console.log(filterCatalog, filteredGoods)
    }

    return (
        <nav className={s.nav}>

            <div className={s.divName}>
                {back.length !== 0 && <Link href={back} className={s.backDiv}>
                    <span>{'< '} </span>
                    <span> Повернення</span>
                </Link>}
                {
                    child?.length !== undefined && child?.map((item, index) => {

                        return <div key={index}>
                                <div className={s.item} key={index}>
                                    <Link href={item.slug}>
                                        <p>{item.title}</p> <br/>
                                    </Link>
                                </div>
                            </div>
                    })
                }
            </div>
            {catalog.length !== undefined && !noFilter && <div className={s.divFilter}>
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
                    <button className={s.buttonRang} onClick={() => filterFunction('price')}>Застосувати</button>
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
                        <label onChange={() => filterFunction('producer', 1)} className={s.label}>
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
                        <label onChange={() => filterFunction('producer', 3)} className={s.label}>
                            <input type="checkbox" value={value3.Seko} checked={value3.Seko}/>
                            <span className={s.labelSpan}>
                                <span>Seko</span>
                            </span>
                        </label>
                        <label onChange={() => filterFunction('producer', 4)} className={s.label}>
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

export default NavProduct2;