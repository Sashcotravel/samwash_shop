"use client"

import {useState} from "react";
import s from './filter.module.css';
import Image from "next/image";
import Card from "@/app/component/Card/card";
import Label from "@/app/component/Label/label";
import products from '../../db/data'

function Page() {

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedPrise, setSelectedPrise] = useState(null)
    const [query, setQuery] = useState('')


    const handleChangeInput = (e) => {
        setQuery(e.target.value)
    }

    const filteredItems = products.filter(product =>
        product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

    const handleChangeRadio = (e) => {
        setSelectedCategory(e.target.value)
    }

    const handleChangeRadio3 = (e) => {
        setSelectedColor(e.target.value)
    }

    const filterData = (products, selected1, selected2, selected3, query) =>  {
        let filterProducts = products;

        // Фільтруємо за кольором, якщо вибраний тільки колір
        if (selected2 && !selected1 && !selected3) {
            filterProducts = filterProducts.filter(({ color }) => color === selected2);
        }

        // Фільтруємо за ціною, якщо вибрана тільки ціна
        if (selected3 && !selected1 && !selected2) {
            filterProducts = filterProducts.filter(({ newPrice }) => newPrice === selected3);
        }

        // Фільтруємо за категорією, якщо вибрана тільки категорія
        if (selected1 && !selected2 && !selected3) {
            filterProducts = filterProducts.filter(({ category }) => category === selected1);
        }

        // Фільтруємо за коліром і ціною, якщо вибрані колір і ціна
        if (selected2 && selected3 && !selected1) {
            filterProducts = filterProducts.filter(({ color, newPrice }) => color === selected2 && newPrice === selected3);
        }

        // Фільтруємо за коліром і категорією, якщо вибрані колір і категорія
        if (selected2 && selected1 && !selected3) {
            filterProducts = filterProducts.filter(({ color, category }) => color === selected2 && category === selected1);
        }

        // Фільтруємо за категорією і ціною, якщо вибрані категорія і ціна
        if (selected1 && selected3 && !selected2) {
            filterProducts = filterProducts.filter(({ category, newPrice }) => category === selected1 && newPrice === selected3);
        }

        // Фільтруємо за всіма трема параметрами
        if (selected1 && selected2 && selected3) {
            filterProducts = filterProducts.filter(({ category, color, newPrice }) =>
                category === selected1 && color === selected2 && newPrice === selected3
            );
        }

        // Фільтруємо за текстовим запитом
        if (query) {
            filterProducts = filterProducts.filter(({ title }) =>
                title.toLowerCase().includes(query.toLowerCase())
            );
        }

        return filterProducts.map(({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
            return <Card key={Math.random()} img={img} title={title} star={star}
                         reviews={reviews} prevPrice={prevPrice} newPrice={newPrice}
                         company={company} color={color} category={category} />;
        });
    }

    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (e) => {
        const value = parseInt(e.target.value);
        setRangeValue(value);
        if (value === 0){
            return setSelectedPrise('');
        }
        setSelectedPrise(value.toString());
    };


    return (<>

        <section className={s.sidebar}>
            <div className={s.logo_container}>
                <h2>
                    <Image src='/header/basket.png' alt='search' width={48} height={48}/>
                </h2>
            </div>

            {/*  category  */}
            <div className={s.category}>
                <h2 className={s.sidebar_title}>Category</h2>

                <div>
                    <Label title={'All'} nameRadio={"test"} click={handleChangeRadio} value={''} />
                    <Label title={'Sneakers'} nameRadio={"test"} click={handleChangeRadio} value={'sneakers'} />
                    <Label title={'Flats'} nameRadio={"test"} click={handleChangeRadio} value={'flats'} />
                    <Label title={'Sandals'} nameRadio={"test"} click={handleChangeRadio} value={'sandals'} />
                    <Label title={'Heels'} nameRadio={"test"} click={handleChangeRadio} value={'heels'} />
                </div>
            </div>
            {/*  price  */}
            <div className={s.price}>
                <h2 className={s.sidebar_title + ' ' + s.prise_title}>Price</h2>

                <input type="range" min="0" max="200" step="50" value={rangeValue} onChange={handleRangeChange}/>

                <div className={s.rangeLabels}>
                    <span>$0</span>
                    <span>$100</span>
                    <span>$200</span>
                </div>

                {/*<Label title={'All'} nameRadio={"test2"} click={handleChangeRadio2} value={''} />*/}
                {/*<Label title={'$0 - $50'} nameRadio={"test2"} click={handleChangeRadio2} value={'50'} />*/}
                {/*<Label title={'$50 - $100'} nameRadio={"test2"} click={handleChangeRadio2} value={'100'} />*/}
                {/*<Label title={'$100 - $150'} nameRadio={"test2"} click={handleChangeRadio2} value={'150'} />*/}
                {/*<Label title={'Over $150'} nameRadio={"test2"} click={handleChangeRadio2} value={'200'} />*/}
            </div>
            {/*  color  */}
            <div className={s.color}>
                <h2 className={s.sidebar_title + ' ' + s.prise_title}>Color</h2>

                <Label title={'All'} nameRadio={"test3"} click={handleChangeRadio3} value={''}/>
                <Label title={'Black'} nameRadio={"test3"} click={handleChangeRadio3} value={'black'} />
                <Label title={'White'} nameRadio={"test3"} click={handleChangeRadio3} value={'white'} />
                <Label title={'Blue'} nameRadio={"test3"} click={handleChangeRadio3} value={'blue'} />
                <Label title={'Red'} nameRadio={"test3"} click={handleChangeRadio3} value={'red'} />
                <Label title={'Yellow'} nameRadio={"test3"} click={handleChangeRadio3} value={'yellow'} />
            </div>
        </section>

        <section className={s.card_container}>

            <div className={s.divInput}>
                <input type='text' onChange={handleChangeInput} value={query} />
            </div>

            <section>
                <h2 className={s.recommended_title}>Recommended</h2>
                <div className={s.recommended_flex}>
                    <button onClick={() => setSelectedCategory('')}>All Products</button>
                    <button onClick={() => setSelectedCategory('Nike')}>Nike</button>
                    <button onClick={() => setSelectedCategory('Adidas')}>Adidas</button>
                    <button onClick={() => setSelectedCategory('Puma')}>Puma</button>
                    <button onClick={() => setSelectedCategory('Vans')}>Vans</button>
                </div>
            </section>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                { filterData(products, selectedCategory, selectedColor, selectedPrise, query) }
            </div>
        </section>
    </>);
}

export default Page;