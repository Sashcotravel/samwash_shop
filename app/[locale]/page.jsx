"use client"

import {useEffect, useRef, useState} from 'react';
import s from './main.module.css'
import './page.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next-intl/link";
import Image from "next/image";
import TopButton from "@/app/component/topButton/topButton";
import axios from "axios";
import {useLocale} from "next-intl";


const MainPage = () => {

    const locale = useLocale();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [inputEmail, setInputEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [inputCheck, setInputCheck] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [news1, setNews1] = useState('');
    const [news2, setNews2] = useState('');
    const [news3, setNews3] = useState('');

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 500) {
                setSlidesPerView(1)
            }
            else if(window.innerWidth < 800) {
                setSlidesPerView(2)
            }
            else if (window.innerWidth < 1000) {
                setSlidesPerView(3)
            }
        })
        if(window.innerWidth < 500) {
            setSlidesPerView(1)
        }
        else if(window.innerWidth < 800) {
            setSlidesPerView(2)
        }
        else if (window.innerWidth < 1000) {
            setSlidesPerView(3)
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)

        if (news1.length === 0) {
            axios
                .get(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/pumps-for-self-service-car-washes-how-to-choose-14055636`)
                .then(res => {
                    const data = res.data.data
                    setNews1(data)
                })
        }
        if (news2.length === 0) {
            axios
                .get(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/two-cylinder-softening-system-in-car-wash-22065841`)
                .then(res => {
                    const data = res.data.data
                    setNews2(data)
                })
        }
        if (news3.length === 0) {
            axios
                .get(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/film-for-washing-21192423`)
                .then(res => {
                    const data = res.data.data
                    setNews3(data)
                    console.log(res.data.data)
                })
        }
    }, []);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const check = () => {
        setInputCheck(p => !p)
        document.getElementById('checkbox').checked = inputCheck
        if (!inputCheck) {
            document.getElementById('image').style.display = 'block'
        } else {
            document.getElementById('image').style.display = 'none'
        }
    }

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        setIsSubmitting(true);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setEmailError(!emailPattern.test(inputEmail));
        setCheckboxError(!inputCheck);

        if (inputCheck && emailPattern.test(inputEmail)) {
            console.log(e)
        }

    }


    return (
        <div className={s.main}>

            <TopButton index={4} />

            <section className={s.section}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={true}
                    loop={true}
                    autoplay={{delay: 6000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper firstSlider"
                >
                    <SwiperSlide>
                        <Link href='/goods?goods=goods6'>
                            {/*<Image src='/main/image1.jpg' alt='slider' width={2200} height={600} />*/}
                            <Image src='/main/back2.jpg' alt='slider' width={2200} height={600} />
                        </Link>
                    </SwiperSlide>
                    {/*<SwiperSlide>*/}
                    {/*    <Link href='/goods?goods=goods7'>*/}
                    {/*        <Image src='/main/image2.jpg' alt='slider' width={2200} height={600} />*/}
                    {/*    </Link>*/}
                    {/*</SwiperSlide>*/}
                    <svg viewBox="0 0 48 48" ref={progressCircle} style={{display: 'none'}}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent} style={{display: 'none'}}></span>
                </Swiper>
            </section>

            <section className={s.section_goods}>
                <h2>Найкращі продавці</h2>
                <Swiper
                    centeredSlides={true}
                    navigation={true}
                    loop={true}
                    loopedSlides={8}
                    modules={[Navigation]}
                    slidesPerView={slidesPerView}
                    slidesPerGroup={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods13'>
                                <div className={s.image_goods}>
                                    <span className={s.news}>Новинка</span>
                                    <Image src='/test/1.jpg' alt='slider' width={160} height={160} className={s.image_new} />
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods15-6'>
                                <div className={s.image_goods}>
                                    <Image src='/equipmentWashing/6.jpg' alt='slider' width={160} height={160} />
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Тримач склоочисника / килимка (нержавіюча сталь)</h4>
                                    <p>139,61 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods15-3'>
                                <div className={s.image_goods}>
                                    <Image src='/equipmentWashing/3.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Наклейка з прайс-листом на безконтактну мийку (чорна)</h4>
                                    <p>7,13 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods18-34'>
                                <div className={s.image_goods}>
                                    <Image src='/weapons/34.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Щітка низького тиску зі спицем і ручкою (RM, EasyTurn, R+M)</h4>
                                    <p>523,97 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods3-3'>
                                <div className={s.image_goods}>
                                    <Image src='/pump/3.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Дозатрон (D3RE2AF 0,2-2% AF)</h4>
                                    <p>3120,97 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods4-47'>
                                <div className={s.image_goods}>
                                    <Image src='/water-pumps/47.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Набір для ремонту ущільнювача гарячої води для насосів CAT
                                        310/340/350 [33623]</h4>
                                    <p>571,30 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods2-7'>
                                <div className={s.image_goods}>
                                    <Image src='/electromagnetic/7.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Електромагнітний клапан 1/2'' з нержавіючої сталі 6213, ущільнення VITON</h4>
                                    <p>596,80 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods11-2'>
                                <div className={s.image_goods}>
                                    <Image src='/maintenance/2.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Clean Up Car Wash 10L ADR Препарат для очищення конструкцій
                                        безконтактних мийок</h4>
                                    <p>138,82 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={s.section_goods}>
                <h2>Нещодавно куплений</h2>
                <Swiper
                    centeredSlides={true}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    slidesPerView={slidesPerView}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods15'>
                                <div className={s.image_goods}>
                                    <span className={s.news} style={{background: '#4DB6AC'}}>Чудова якість</span>
                                    <span className={s.news2} style={{background: '#A1887F'}}>Хороша ціна</span>
                                    <Image src='/test/2.jpg' alt='slider' width={160} height={160} className={s.image_new} />
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Автономна каша Ultra Fresh (25 кг), аромат</h4>
                                    <p>562,15 гривень</p>
                                    <span>Субпродукти</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    {/*<SwiperSlide>*/}
                    {/*    <div className={s.goods_slider}>*/}
                    {/*        <Link href='/product'>*/}
                    {/*            <div className={s.image_goods}>*/}
                    {/*                <span className={s.news} style={{background: '#ff0400'}}>-5%</span>*/}
                    {/*                <span className={s.news2} style={{background: '#F06292'}}>Розпродаж</span>*/}
                    {/*                <Image src='/main/image3.jpg' alt='slider' width={160} height={160}/>*/}
                    {/*            </div>*/}
                    {/*            <div className={s.text_goods}>*/}
                    {/*                <h4>Автоматичний регулятор тиску W3-0</h4>*/}
                    {/*                <p>*/}
                    {/*                    195,15 гривень <del> 203,54 гривень</del><br/>*/}
                    {/*                    <font>Найнижча ціна за 30 днів до знижки 195,15 грн</font>*/}
                    {/*                </p>*/}
                    {/*                <span>Субпродукти</span>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods3'>
                                <div className={s.image_goods}>
                                    <Image src='/test/3.jpg' alt='slider' width={160} height={160} className={s.image_new} />
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Активна піна для миття автомобіля Green Alka Foam (20л), колір зелений</h4>
                                    <p>329,48 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods18'>
                                <div className={s.image_goods}>
                                    <Image src='/test/4.jpg' alt='slider' width={160} height={160} className={s.image_new} />
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Шампунь для автомийки Turbo Plus (20 л) ADR</h4>
                                    <p>342,14 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods3-3'>
                                <div className={s.image_goods}>
                                    <Image src='/pump/3.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Дозатрон (D3RE2AF 0,2-2% AF)</h4>
                                    <p>3120,97 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link href='/goods?goods=goods2-10'>
                                <div className={s.image_goods}>
                                    <Image src='/electromagnetic/10.jpg' alt='slider' width={160} height={160}/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Електромагнітний клапан Jaksa BS3IS (DN8 G3/8 PK NC 24VDC)</h4>
                                    <p>1488,53 гривень</p>
                                    <span>Подробиці</span>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={s.section_goods}>
                <div className={s.div_box}>
                    <Swiper
                        centeredSlides={true}
                        navigation={true}
                        loop={true}
                        modules={[Navigation]}
                        slidesPerView={slidesPerView}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper mySwiper2"
                    >
                        <SwiperSlide>
                            <div className={s.div_icon}>
                                <Image src='/main/icon1.png' alt='slider' width={47} height={43}/>
                                <p><b>ШВИДКА ДОСТАВКА</b></p>
                                <p>Лише 24 години</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.div_icon}>
                                <Image src='/main/icon2.png' alt='slider' width={42} height={42}/>
                                <p><b>ЗРУЧНА ОПЛАТА</b></p>
                                <p>Легко і безпечно</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.div_icon}>
                                <Image src='/main/icon3.png' alt='slider' width={37} height={46}/>
                                <p><b>ЗНИЖКИ</b></p>
                                <p>До -50%</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.div_icon}>
                                <Image src='/main/icon4.png' alt='slider' width={44} height={42}/>
                                <p><b>info@samwash.ua</b></p>
                                <p>Контакт з е-магазином</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.div_icon}>
                                <Image src='/main/icon5.png' alt='slider' width={76} height={63}/>
                                <p><b>ЯКІСТЬ</b></p>
                                <p>Продукція найвищої якості</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={s.div_icon + ' ' + s.hidden2}>
                        <Image src='/main/icon1.png' alt='slider' width={47} height={43}/>
                        <p><b>ШВИДКА ДОСТАВКА</b></p>
                        <p>Лише 24 години</p>
                    </div>
                    <div className={s.div_icon + ' ' + s.hidden2}>
                        <Image src='/main/icon2.png' alt='slider' width={42} height={42}/>
                        <p><b>ЗРУЧНА ОПЛАТА</b></p>
                        <p>Легко і безпечно</p>
                    </div>
                    <div className={s.div_icon + ' ' + s.hidden2}>
                        <Image src='/main/icon3.png' alt='slider' width={37} height={46}/>
                        <p><b>ЗНИЖКИ</b></p>
                        <p>До -50%</p>
                    </div>
                    <div className={s.div_icon + ' ' + s.hidden2}>
                        <Image src='/main/icon4.png' alt='slider' width={44} height={42}/>
                        <p><b>info@samwash.ua</b></p>
                        <p>Контакт з е-магазином</p>
                    </div>
                    <div className={s.div_icon + ' ' + s.hidden2}>
                        <Image src='/main/icon5.png' alt='slider' width={76} height={63}/>
                        <p><b>ЯКІСТЬ</b></p>
                        <p>Продукція найвищої якості</p>
                    </div>
                </div>
            </section>

            <section className={s.section_yellow}>
                <Image src='/main/image4.png' alt='slider' width={300} height={310} />
                <div className={s.div_info}>
                    <h3>Підпишіться на розсилку та отримайте <b>знижку 5% на все!</b></h3>
                    <div className={s.div_mail}>
                        <div className={s.div_input}>
                            <input type='email'
                                   name='email'
                                   className='input'
                                   placeholder="Введіть адресу вашої електронної пошти"
                                   value={inputEmail}
                                   onChange={handleEmailChange}/>
                            {isSubmitting && emailError && <p className={s.redP}>Будь ласка, введіть дійсну адресу
                                електронної пошти</p>}
                            <button onClick={handleSubmit}>
                                <Image src='/main/arrow-right.svg' alt='slider' width={16} height={16} />
                            </button>
                        </div>
                        <lable className={s.label} onClick={check}>
                            <input type='checkbox'
                                   id='checkbox'
                                   className={s.checkbox}
                                   placeholder="Введіть адресу вашої електронної пошти"
                                   onChange={check}/>
                            <Image src='/main/image5.png' alt='slider' className={s.imgInput} id='image'
                                 width={16} height={16} />
                            <span className={s.span}>
                                <span><small style={{color: 'red'}}>*</small> Я даю згоду на отримання розсилки</span>
                            </span>
                            {isSubmitting && checkboxError && <p className={s.redP2} id='red-in'>Обов'язкове поле</p>}
                        </lable>
                    </div>
                </div>
            </section>

            <section className={s.section_goods}>
                <h2>Новини</h2>
                <div className={s.div_blog + ' ' + s.hidden}>
                    <div className={s.item}>
                        <div className={s.image_box}>
                            {news1 === '' ? '' : <Image src={'https://cb.samwash.ua/storage/image/'
                                + news1?.id + '/' + news1?.images[0]?.path}
                                    alt={news1?.content[0]?.title}
                                    width={435} height={325}/>}
                        </div>
                        <div className={s.div_text}>
                            <h3>{news1 === '' ? '' : news1?.content[0]?.title}</h3>
                            <p>{news1 === '' ? '' : news1?.content[0]?.meta_description.slice(0, 100) + ' ...'}</p>
                            <time>{news1 === '' ? '' : news1?.updated_at.slice(0, 10) + '  ' + news1?.updated_at.slice(11, 19)}</time>
                        </div>
                        <Link href={`/article?article=${news1?.slug}`}>читати далі {' >>'}</Link>
                    </div>
                    <div className={s.item}>
                        <div className={s.image_box}>
                            {news2 === '' ? '' : <Image src={'https://cb.samwash.ua/storage/image/'
                                + news2?.id + '/' + news2?.images[0]?.path}
                                                        alt={news2?.content[0]?.title}
                                                        width={435} height={325}/>}
                        </div>
                        <div className={s.div_text}>
                            <h3>{news2 === '' ? '' : news2?.content[0]?.title}</h3>
                            <p>{news2 === '' ? '' : news2?.content[0]?.meta_description.slice(0, 100) + ' ...'}</p>
                            <time>{news2 === '' ? '' : news2?.updated_at.slice(0, 10) + '  ' + news2?.updated_at.slice(11, 19)}</time>
                        </div>
                        <Link href={`/article?article=${news2?.slug}`}>читати далі {' >>'}</Link>
                    </div>
                    <div className={s.item}>
                        <div className={s.image_box}>
                            {news3 === '' ? '' : <Image src={'https://cb.samwash.ua/storage/image/'
                                + news3?.id + '/' + news3?.images[0]?.path}
                                                        alt={news3?.content[0]?.title}
                                                        width={435} height={325}/>}
                        </div>
                        <div className={s.div_text}>
                            <h3>{news3 === '' ? '' : news3?.content[0]?.title}</h3>
                            <p>{news3 === '' ? '' : news3?.content[0]?.meta_description.slice(0, 100) + ' ...'}</p>
                            <time>{news3 === '' ? '' : news3?.updated_at.slice(0, 10) + '  ' + news3?.updated_at.slice(11, 19)}</time>
                        </div>
                        <Link href={`/article?article=${news3?.slug}`}>читати далі {' >>'}</Link>
                    </div>
                </div>
                <div className={s.divDisplay2}>
                    <Swiper
                        centeredSlides={true}
                        navigation={true}
                        loop={true}
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.image_box}>
                                    {news1 === '' ? '' : <Image src={'https://cb.samwash.ua/storage/image/'
                                        + news1?.id + '/' + news1?.images[0]?.path} alt={news1?.content[0]?.title}
                                                                width={435} height={325}/>}
                                </div>
                                <div className={s.div_text}>
                                    <h3>{news1 === '' ? '' : news1?.content[0]?.title}</h3>
                                    <p>{news1 === '' ? '' : news1?.content[0]?.meta_description.slice(0, 100) + ' ...'}</p>
                                    <time>{news1 === '' ? '' : news1?.updated_at.slice(0, 10) + '  ' + news1?.updated_at.slice(11, 19)}</time>
                                </div>
                                <Link href={`/article?article=${news1?.slug}`}>читати далі {' >>'}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.image_box}>
                                    {news2 === '' ? '' : <Image src={'https://cb.samwash.ua/storage/image/'
                                        + news2?.id + '/' + news2?.images[0]?.path} alt={news2?.content[0]?.title}
                                                                width={435} height={325}/>}
                                </div>
                                <div className={s.div_text}>
                                    <h3>{news2 === '' ? '' : news2?.content[0]?.title}</h3>
                                    <p>{news2 === '' ? '' : news2?.content[0]?.meta_description.slice(0, 100) + ' ...'}</p>
                                    <time>{news2 === '' ? '' : news2?.updated_at.slice(0, 10) + '  ' + news2?.updated_at.slice(11, 19)}</time>
                                </div>
                                <Link href={`/article?article=${news2?.slug}`}>читати далі {' >>'}</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.image_box}>
                                    {news3 === '' ? '' : <Image src={'https://cb.samwash.ua/storage/image/'
                                        + news3?.id + '/' + news3?.images[0]?.path} alt={news3?.content[0]?.title}
                                                                width={435} height={325}/>}
                                </div>
                                <div className={s.div_text}>
                                    <h3>{news3 === '' ? '' : news3?.content[0]?.title}</h3>
                                    <p>{news3 === '' ? '' : news3?.content[0]?.meta_description.slice(0, 100) + ' ...'}</p>
                                    <time>{news3 === '' ? '' : news3?.updated_at.slice(0, 10) + '  ' + news3?.updated_at.slice(11, 19)}</time>
                                </div>
                                <Link href={`/article?article=${news3?.slug}`}>читати далі {' >>'}</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={s.section_info}>
                <div className={s.div_text_end}>
                <div className={s.text}>
                        <h3>Про автомийку SAMWASH</h3>
                        <p>
                            SAMWASH спеціалізується на системах миття транспортних засобів, з особливим акцентом на
                            безконтактному мийці. Багаторічний досвід дозволив створити пристрої останнього покоління,
                            які відповідають вимогам світового автомобільного ринку. Наші автомийки відрізняються
                            найвищою якістю, надійністю та низьким рівнем відмов.
                        </p>
                        <p>
                            Нашу технологію визнали як швидко зростаюча група користувачів автомийок SAMWASH, так і
                            спеціалісти, про що свідчать нагороди: Продукт року 2006 і Продукт року 2004, нагороджені на
                            престижному ярмарку Stacja Paliw, а також титул Автомобіль Нагорода «Прання року» на
                            виставці Stacja i Biznes Przyszłości у 2015 та 2016 роках.
                        </p>
                    </div>
                    <div className={s.text}>
                        <h3>Ваша безконтактна автомийка, ваш інтернет-магазин</h3>
                        <p>
                            Серед великого асортименту нашого магазину ви знайдете все необхідне для роботи вашої
                            безконтактної мийки. Починаючи від хімікатів найвищої якості для безконтактних мийок, через
                            насоси та дозатори миючих засобів, до електромагнітних клапанів і ремонтних комплектів.
                        </p>
                        <p>
                            Велика пропозиція активних пін, пральних порошків, воску та активних шампунів дозволить вам
                            знайти всі необхідні продукти в одному місці. Швидка доставка та першокласне обслуговування
                            клієнтів означають, що користуватися нашим магазином ніколи не було простіше.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MainPage