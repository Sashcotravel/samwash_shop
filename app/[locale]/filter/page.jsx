"use client"

import s from './filter.module.css';
import {AiFillStar} from "react-icons/ai";
import {BsFillBagFill} from "react-icons/bs";
import Image from "next/image";

function Page() {



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
                    <label className={s.sidebarLabel}>
                        <input type="radio" name="test"/>
                        <span className={s.checkmark}></span>All
                    </label>
                    <label className={s.sidebarLabel}>
                        <input type="radio" name="test"/>
                        <span className={s.checkmark}></span>Sneakers
                    </label>
                    <label className={s.sidebarLabel}>
                        <input type="radio" name="test"/>
                        <span className={s.checkmark}></span>Flats
                    </label>
                    <label className={s.sidebarLabel}>
                        <input type="radio" name="test"/>
                        <span className={s.checkmark}></span>Sandals
                    </label>
                    <label className={s.sidebarLabel}>
                        <input type="radio" name="test"/>
                        <span className={s.checkmark}></span>Heels
                    </label>
                </div>
            </div>
            {/*  price  */}
            <div className={s.price}>
                <h2 className={s.sidebar_title + ' ' + s.prise_title}>Price</h2>

                <label className={s.sidebarLabel}>
                    <input type="radio" name="test2"/>
                    <span className={s.checkmark}></span>All
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test2"/>
                    <span className={s.checkmark}></span>$0 - $50
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test2"/>
                    <span className={s.checkmark}></span>$50 - $100
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test2"/>
                    <span className={s.checkmark}></span>$100 - $150
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test2"/>
                    <span className={s.checkmark}></span>Over $150
                </label>
            </div>
            {/*  color  */}
            <div className={s.color}>
                <h2 className={s.sidebar_title + ' ' + s.prise_title}>Color</h2>

                <label className={s.sidebarLabel}>
                    <input type="radio" name="test3"/>
                    <span className={s.checkmark}></span>All
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test3"/>
                    <span className={s.checkmark}></span>Black
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test3"/>
                    <span className={s.checkmark}></span>Blue
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test3"/>
                    <span className={s.checkmark}></span>Red
                </label>
                <label className={s.sidebarLabel}>
                    <input type="radio" name="test3"/>
                    <span className={s.checkmark}></span>White
                </label>
            </div>
        </section>

        <section className={s.card_container}>

            <section>
                <h2 className={s.recommended_title}>Recommended</h2>
                <div className={s.recommended_flex}>
                    <button>All Products</button>
                    <button>Nike</button>
                    <button>Adidas</button>
                    <button>Puma</button>
                    <button>Vans</button>
                </div>
            </section>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={s.card}>
                    <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='image'
                         className={s.card_img}/>
                    <div className={s.card_details}>
                        <h3 className={s.card_title}>Shoe</h3>
                        <section className={s.card_reviews}>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <AiFillStar className={s.rating_start}/>
                            <span className={s.total_reviews}>4</span>
                        </section>
                        <section className={s.card_prise}>
                            <div className={s.price}>
                                <del>$300</del>
                                200
                            </div>
                            <div className={s.bag}>
                                <BsFillBagFill className={s.bag_icon}/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Page;