import s from './footer.module.css';
import {Link} from "react-router-dom";
import {useState} from "react";




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
                        <Link to="/" className={s.logo_link}>
                            <img src='/new_logo.svg' alt='slider'/>
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
                                <Link to='/'>Продукти</Link>
                            </li>
                            <li>
                                <Link to='/basket'>Кошик</Link>
                            </li>
                            <li>
                                <Link to='/'>Розширений пошук</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>Мій рахунок</p>
                        <ul>
                            <li>
                                <Link to='/login'>Логін</Link>
                            </li>
                            <li>
                                <Link to='/'>Профіль клієнта</Link>
                            </li>
                            <li>
                                <Link to='/register'>Реєстрація</Link>
                            </li>
                            <li>
                                <Link to='/password-reminder'>Нагадування пароля</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>Інформація</p>
                        <ul>
                            <li>
                                <Link to='/'>Блог</Link>
                            </li>
                            <li>
                                <Link to='/'>Статут</Link>
                            </li>
                            <li>
                                <Link to='/'>Форма вилучення</Link>
                            </li>
                            <li>
                                <Link to='/'>Умови доставки</Link>
                            </li>
                            <li>
                                <Link to='/'>Методи оплати</Link>
                            </li>
                            <li>
                                <Link to='/'>Політика конфіденційності</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Контакт</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.div_soc}>
                        <p>Слідуй за нами</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/samwashcarwash" target="_blank">
                                    <img alt="Facebook"
                                         src="https://bkfmyjnie.pl/wp-content/uploads/sites/2/2019/07/icon-FB.svg"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/samwash_carwash/" target="_blank">
                                    <img alt="Facebook"
                                         src="https://cdn.icon-icons.com/icons2/1753/PNG/128/iconfinder-social-media-applications-3instagram-4102579_113804.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@samwash" target="_blank">
                                    <img alt="Facebook"
                                         src="https://bkfmyjnie.pl/wp-content/uploads/sites/2/2020/02/icon-YT-sqr.svg"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@samwash.official" target="_blank">
                                    <img alt="Facebook"
                                         src="data:image/png;base64,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"/>
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
                                    <img src='/main/image5.png' alt='slider' className={s.imgInput} id='image2'/>
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
                    <Link to="https://www.comarchesklep.pl"> Comarch e-Sklep®</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;