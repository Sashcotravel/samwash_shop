"use client"

import '../../[locale]/page.css'
import s from './footer.module.css';
import Link from "next-intl/link";
import {useState} from "react";
import Image from "next/image";


function Footer() {

    const [inputEmail, setInputEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [inputCheck, setInputCheck] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const check = () => {
        setInputCheck(p => !p)
        document.getElementById('checkbox2').checked = inputCheck
        if (!inputCheck) {
            document.getElementById('image2').style.display = 'block'
        } else {
            document.getElementById('image2').style.display = 'none'
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
        <footer className={s.footer}>
            <div className={s.footer_div}>
                <div className={s.column}>
                    <div className={s.col}>
                        <Link href="/" className={s.logo_link}>
                            <Image src='/new_logo.svg' alt='logo' width={250} height={100} />
                        </Link>
                        <p>SAMWASH Безконтактні мийки</p>
                        <ul>
                            <li>
                                <a href="tel:0975794930">+380 97 57 94930</a>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" title="Напишіть нам">info@samwash.ua</a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6?g_st=it" target="_blank">
                                    Україна, м. Львів, вул. Кульпарківська 108
                                </a>
                            </li>
                            <li>
                                НІП: ПЛ 782-237-01-46
                            </li>
                            <li>
                                Графік роботи: Пн-Пт 8:00-16:00
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>Шопінг</p>
                        <ul>
                            <li>
                                <Link href='/'>Продукти</Link>
                            </li>
                            <li>
                                <Link href='/basket'>Кошик</Link>
                            </li>
                            <li>
                                <Link href='/'>Розширений пошук</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>Мій рахунок</p>
                        <ul>
                            <li>
                                <Link href='/login'>Логін</Link>
                            </li>
                            <li>
                                <Link href='/'>Профіль клієнта</Link>
                            </li>
                            <li>
                                <Link href='/register'>Реєстрація</Link>
                            </li>
                            <li>
                                <Link href='/password-reminder'>Нагадування пароля</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>Інформація</p>
                        <ul>
                            <li>
                                <Link href='/'>Блог</Link>
                            </li>
                            <li>
                                <Link href='/'>Статут</Link>
                            </li>
                            <li>
                                <Link href='/withdrawal-form'>Форма вилучення</Link>
                            </li>
                            <li>
                                <Link href='/delivery-of-goods'>Умови доставки</Link>
                            </li>
                            <li>
                                <Link href='/payment-methods'>Методи оплати</Link>
                            </li>
                            <li>
                                <Link href='/privacy-policy'>Політика конфіденційності</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Контакт</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.div_soc}>
                        <p>Слідуй за нами</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/samwashcarwash" target="_blank">
                                    <Image alt="Facebook" width={50} height={50} src="/other/facebook.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/samwash_carwash/" target="_blank">
                                    <Image alt="instagram" width={50} height={50} src="/other/Instagram.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@samwash" target="_blank">
                                    <Image alt="youtube" width={50} height={50} src="/other/youtube.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@samwash.official" target="_blank">
                                    <Image alt="tiktok" width={50} height={50} src="/other/tiktok.png"/>
                                </a>
                            </li>
                        </ul>
                        <div className={s.mail_box}>
                            <p>Не пропустіть жодної акції, отримуйте додаткові знижки.</p>
                            <p>Підпишіться на розсилку та отримайте знижку 5% на все!</p>
                            <div className={s.div_mail}>
                                <div className={s.div_input}>
                                    <input type='email'
                                           name='email'
                                           className='input'
                                           placeholder="Введіть адресу вашої електронної пошти"
                                           value={inputEmail}
                                           onChange={handleEmailChange}/>
                                    {isSubmitting && emailError &&
                                        <p className={s.redP}>Будь ласка, введіть дійсну адресу
                                            електронної пошти</p>}
                                    <button onClick={handleSubmit}>
                                        <img src='/main/arrow-right.svg' alt='slider'/>
                                    </button>
                                </div>
                                <lable className={s.label} onClick={check}>
                                    <input type='checkbox'
                                           id='checkbox2'
                                           className={s.checkbox}
                                           placeholder="Введіть адресу вашої електронної пошти"
                                           onChange={check}/>
                                    <Image src='/main/image5.png' alt='slider' className={s.imgInput} id='image2'
                                           width={16} height={15}/>
                                    <span className={s.span}>
                                        <span>
                                            <small style={{color: 'red'}}>*</small> Я даю згоду на отримання розсилки
                                        </span>
                                    </span>
                                    {isSubmitting && checkboxError &&
                                        <p className={s.redP2} id='red-in'>Обов'язкове поле</p>}
                                </lable>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={s.rule}>© SAMWASH 2024. Усі права захищено На основі
                    <Link href="https://www.comarchesklep.pl"> Comarch e-Sklep®</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;