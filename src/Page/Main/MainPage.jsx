import {useEffect, useRef, useState} from 'react';
import s from './MainPage.module.css'
import '../../App.css'
import {useStore} from "../../store/store.js";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import TopButton from "../../component/TopButton/TopButton.jsx";


const MainPage = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [inputEmail, setInputEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [inputCheck, setInputCheck] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(4);

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
                        <Link to='/'>
                            <img src='/main/image1.jpg' alt='slider'/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/'>
                            <img src='/main/image2.jpg' alt='slider'/>
                        </Link>
                    </SwiperSlide>
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
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <span className={s.news}>Новинка</span>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
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
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <span className={s.news} style={{background: '#4DB6AC'}}>Чудова якість</span>
                                    <span className={s.news2} style={{background: '#A1887F'}}>Хороша ціна</span>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>
                                        402,21 гривень
                                        <p>Найнижча ціна за 30 днів до знижки 195,15 грн</p>
                                    </p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <span className={s.news} style={{background: '#ff0400'}}>-5%</span>
                                    <span className={s.news2} style={{background: '#F06292'}}>Розпродаж</span>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.goods_slider}>
                            <Link to='/'>
                                <div className={s.image_goods}>
                                    <img src='/main/image3.jpg' alt='slider'/>
                                </div>
                                <div className={s.text_goods}>
                                    <h4>Порошок ORANGE FF миючий порошок (25 кг), без фосфатів, аромат</h4>
                                    <p>402,21 гривень</p>
                                    <Link to='/'>Подробиці</Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className={s.section_goods}>
                <div className={s.div_box}>
                    {
                        window.innerWidth < 1000 &&
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
                                <div className={s.div_icon}>
                                    <img src='/main/icon1.png' alt='slider'/>
                                    <p><b>ШВИДКА ДОСТАВКА</b></p>
                                    <p>Лише 24 години</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.div_icon}>
                                    <img src='/main/icon2.png' alt='slider'/>
                                    <p><b>ЗРУЧНА ОПЛАТА</b></p>
                                    <p>Легко і безпечно</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.div_icon}>
                                    <img src='/main/icon3.png' alt='slider'/>
                                    <p><b>ЗНИЖКИ</b></p>
                                    <p>До -50%</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.div_icon}>
                                    <img src='/main/icon4.png' alt='slider'/>
                                    <p><b>info@samwash.ua</b></p>
                                    <p>Контакт з е-магазином</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.div_icon}>
                                    <img src='/main/icon5.png' alt='slider'/>
                                    <p><b>ЯКІСТЬ</b></p>
                                    <p>Продукція найвищої якості</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    }
                    <div className={s.div_icon+' '+s.hidden2}>
                        <img src='/main/icon1.png' alt='slider'/>
                        <p><b>ШВИДКА ДОСТАВКА</b></p>
                        <p>Лише 24 години</p>
                    </div>
                    <div className={s.div_icon+' '+s.hidden2}>
                        <img src='/main/icon2.png' alt='slider'/>
                        <p><b>ЗРУЧНА ОПЛАТА</b></p>
                        <p>Легко і безпечно</p>
                    </div>
                    <div className={s.div_icon+' '+s.hidden2}>
                        <img src='/main/icon3.png' alt='slider'/>
                        <p><b>ЗНИЖКИ</b></p>
                        <p>До -50%</p>
                    </div>
                    <div className={s.div_icon+' '+s.hidden2}>
                        <img src='/main/icon4.png' alt='slider'/>
                        <p><b>info@samwash.ua</b></p>
                        <p>Контакт з е-магазином</p>
                    </div>
                    <div className={s.div_icon+' '+s.hidden2}>
                        <img src='/main/icon5.png' alt='slider'/>
                        <p><b>ЯКІСТЬ</b></p>
                        <p>Продукція найвищої якості</p>
                    </div>
                </div>
            </section>

            <section className={s.section_yellow}>
                <img src='/main/image4.png' alt='slider'/>
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
                                <img src='/main/arrow-right.svg' alt='slider'/>
                            </button>
                        </div>
                        <lable className={s.label} onClick={check}>
                            <input type='checkbox'
                                   id='checkbox'
                                   className={s.checkbox}
                                   placeholder="Введіть адресу вашої електронної пошти"
                                   onChange={check}/>
                            <img src='/main/image5.png' alt='slider' className={s.imgInput} id='image'/>
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
                <div className={s.div_blog+' '+s.hidden}>
                    <div className={s.item}>
                        <div className={s.image_box}>
                            <img src='/main/image7.jpg' alt='slider'/>
                        </div>
                        <div className={s.div_text}>
                            <h3>Рейтинг насосів для автомийки. CAT vs HAWK, який вибрати?</h3>
                            <p>Рейтинг насосів: CAT vs HAWK - який з них найкращий для автомийки?
                                Використання насосів без...</p>
                            <time>2024-02-05 11:50:00</time>
                        </div>
                        <Link to='/'>читати далі >></Link>
                    </div>
                    <div className={s.item}>
                        <div className={s.image_box}>
                            <img src='/main/image7.jpg' alt='slider'/>
                        </div>
                        <div className={s.div_text}>
                            <h3>Рейтинг насосів для автомийки. CAT vs HAWK, який вибрати?</h3>
                            <p>Рейтинг насосів: CAT vs HAWK - який з них найкращий для автомийки?
                                Використання насосів без...</p>
                            <time>2024-02-05 11:50:00</time>
                        </div>
                        <Link to='/'>читати далі >></Link>
                    </div>
                    <div className={s.item}>
                        <div className={s.image_box}>
                            <img src='/main/image7.jpg' alt='slider'/>
                        </div>
                        <div className={s.div_text}>
                            <h3>Рейтинг насосів для автомийки. CAT vs HAWK, який вибрати?</h3>
                            <p>Рейтинг насосів: CAT vs HAWK - який з них найкращий для автомийки?
                                Використання насосів без...</p>
                            <time>2024-02-05 11:50:00</time>
                        </div>
                        <Link to='/'>читати далі >></Link>
                    </div>
                </div>
                {
                    window.innerWidth < 1200 &&
                    <Swiper
                        centeredSlides={true}
                        navigation={true}
                        loop={true}
                        modules={[Navigation]}
                        slidesPerView={1}
                        slidesPerGroup={2}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.image_box}>
                                    <img src='/main/image7.jpg' alt='slider'/>
                                </div>
                                <div className={s.div_text}>
                                    <h3>Рейтинг насосів для автомийки. CAT vs HAWK, який вибрати?</h3>
                                    <p>Рейтинг насосів: CAT vs HAWK - який з них найкращий для автомийки?
                                        Використання насосів без...</p>
                                    <time>2024-02-05 11:50:00</time>
                                </div>
                                <Link to='/'>читати далі >></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.image_box}>
                                    <img src='/main/image7.jpg' alt='slider'/>
                                </div>
                                <div className={s.div_text}>
                                    <h3>Рейтинг насосів для автомийки. CAT vs HAWK, який вибрати?</h3>
                                    <p>Рейтинг насосів: CAT vs HAWK - який з них найкращий для автомийки?
                                        Використання насосів без...</p>
                                    <time>2024-02-05 11:50:00</time>
                                </div>
                                <Link to='/'>читати далі >></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.image_box}>
                                    <img src='/main/image7.jpg' alt='slider'/>
                                </div>
                                <div className={s.div_text}>
                                    <h3>Рейтинг насосів для автомийки. CAT vs HAWK, який вибрати?</h3>
                                    <p>Рейтинг насосів: CAT vs HAWK - який з них найкращий для автомийки?
                                        Використання насосів без...</p>
                                    <time>2024-02-05 11:50:00</time>
                                </div>
                                <Link to='/'>читати далі >></Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                }
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