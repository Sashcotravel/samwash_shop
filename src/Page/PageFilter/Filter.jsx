import s from './filter.module.css';
import {AiFillStar} from "react-icons/ai";
import {BsFillBagFill} from "react-icons/bs";

function Filter() {



    return (
        <section className={s.card_container}>
            <section className={s.card}>
                <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                     className={s.card_img}/>
                <div className={s.card_details}>
                    <h3 className={s.card_title}>Shoe</h3>
                    <section className={s.card_reviews}>
                        <AiFillStar className={s.rating_start} />
                        <AiFillStar className={s.rating_start} />
                        <AiFillStar className={s.rating_start} />
                        <AiFillStar className={s.rating_start} />
                        <span className={s.total_reviews}>4</span>
                    </section>
                    <section className={s.card_prise}>
                        <div className={s.price}>
                            <del>$300</del> 200
                        </div>
                        <div className={s.bag}>
                            <BsFillBagFill className={s.bag_icon} />
                        </div>
                    </section>
                </div>
            </section>
        </section>
    );
}

export default Filter;