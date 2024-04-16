"use client"

import s from '../../[locale]/filter/filter.module.css';
import {AiFillStar} from "react-icons/ai";
import {BsFillBagFill} from "react-icons/bs";

function Card({img, title, star, reviews, prevPrice, newPrice, company, color, category}) {


    return (
        <div className={s.card} key={Math.random()}>
            <img src={img} alt={title} className={s.card_img}/>
            <div className={s.card_details}>
                <h3 className={s.card_title}>{title}</h3>
                <section className={s.card_reviews}>
                    <AiFillStar className={s.rating_start}/>
                    <AiFillStar className={s.rating_start}/>
                    <AiFillStar className={s.rating_start}/>
                    <AiFillStar className={s.rating_start}/>
                    <span className={s.total_reviews}>{reviews}</span>
                </section>
                <section className={s.card_prise}>
                    <div className={s.price2}>
                        <del>{prevPrice}</del>
                        {newPrice}
                    </div>
                    <div className={s.bag}>
                        <BsFillBagFill className={s.bag_icon}/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Card;