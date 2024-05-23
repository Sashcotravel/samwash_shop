"use client"

import s from './nav.module.css';
import {useEffect, useState} from "react";
import Link from "next-intl/link";
import {useStore} from "@/store/store";
import {goodsArr} from "@/app/db/data";


function NavProduct2({child, back, noFilter}) {

    const [priceTo, setPriceTo] = useState('')
    const [priceFrom, setPriceFrom] = useState('')
    const [value1, setValue1] = useState(false)
    const [value2, setValue2] = useState(false)

    const addGoodsFilter = useStore(store => store.addGoodsFilter)
    const currentsGoods = useStore(store => store.currentsGoods)
    const setNewCurrentsGoods = useStore(store => store.setNewCurrentsGoods)
    const setFilterPriceTo = useStore(store => store.setFilterPriceTo)
    const setFilterPriceFrom = useStore(store => store.setFilterPriceFrom)
    const filterPriceTo = useStore(store => store.filterPriceTo)
    const filterPriceFrom = useStore(store => store.filterPriceFrom)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if(filterPriceTo === 'no'){
            setPriceTo('')
            const from = Number(priceFrom !== '' ? priceFrom : '0');
            const to = '1000000';

            let newArr = currentsGoods
                .filter(t => {
                const itemPrice = t.newPrice !== '' ? Number(t.newPrice) : Number(t.price);

                if (typeof from === 'number' && !isNaN(from)) {
                    if (typeof to === 'number' && !isNaN(to)) {
                        console.log('1')
                        return itemPrice >= from && itemPrice <= to;
                    } else {
                        console.log('2')
                        return itemPrice >= from;
                    }
                }
                else {
                    if (typeof to === 'number' && !isNaN(to)) {
                        console.log('3')
                        return itemPrice <= to;
                    } else {
                        console.log('4')
                        return true;
                    }
                }

                // return itemPrice >= from && itemPrice <= to;
            })
                .sort((a, b) => {
                    const aPrice = a.newPrice !== '' ? a.newPrice : a.price;
                    const bPrice = b.newPrice !== '' ? b.newPrice : b.price;
                    console.log(aPrice, bPrice)
                    return aPrice - bPrice;
                });
            setNewCurrentsGoods(newArr)
        }
    }, [filterPriceTo]);

    useEffect(() => {
        if(filterPriceFrom === 'no'){
            setPriceFrom('')
            const from = 0;
            const to = Number(priceTo !== '' ? priceTo : '1000000');

            let newArr = currentsGoods
                .filter(t => {
                    const itemPrice = t.newPrice !== '' ? Number(t.newPrice) : Number(t.price);

                    if (typeof from === 'number' && !isNaN(from)) {
                        if (typeof to === 'number' && !isNaN(to)) {
                            return itemPrice >= from && itemPrice <= to;
                        } else {
                            return itemPrice >= from;
                        }
                    }
                    else {
                        if (typeof to === 'number' && !isNaN(to)) {
                            return itemPrice <= to;
                        } else {
                            return true;
                        }
                    }

                    // return itemPrice >= from && itemPrice <= to;
                })
                .sort((a, b) => {
                    const aPrice = a.newPrice !== '' ? a.newPrice : a.price;
                    const bPrice = b.newPrice !== '' ? b.newPrice : b.price;
                    return aPrice - bPrice;
                });
            setNewCurrentsGoods(newArr)
        }
    }, [filterPriceFrom]);

    const filterFunction = (name) => {
        let filteredGoods = currentsGoods;

        if (priceTo !== '' || priceFrom !== '') {
            const from = Number(priceFrom !== '' ? priceFrom : '0');
            const to = Number(priceTo !== '' ? priceTo : '1000000');

            let newArr = filteredGoods
                .filter(t => {
                    const itemPrice = t.newPrice !== '' ? Number(t.newPrice) : Number(t.price);

                    if (typeof from === 'number' && !isNaN(from)) {
                        if (typeof to === 'number' && !isNaN(to)) {
                            return itemPrice >= from && itemPrice <= to;
                        } else {
                            return itemPrice >= from;
                        }
                    }
                    else {
                        if (typeof to === 'number' && !isNaN(to)) {
                            return itemPrice <= to;
                        } else {
                            return true;
                        }
                    }

                    // return itemPrice >= from && itemPrice <= to;
                })
                .sort((a, b) => {
                    const aPrice = a.newPrice !== '' ? a.newPrice : a.price;
                    const bPrice = b.newPrice !== '' ? b.newPrice : b.price;
                    return aPrice - bPrice;
                });

            setFilterPriceTo(priceTo)
            setFilterPriceFrom(priceFrom)

            setNewCurrentsGoods(newArr)
        }
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
                                        <p><b>{item.title}</b></p> <br/>
                                    </Link>
                                </div>
                            </div>
                    })
                }
            </div>
            {!noFilter && <div className={s.divFilter}>
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
                </ul>
            </div>}

        </nav>
    );
}

export default NavProduct2;