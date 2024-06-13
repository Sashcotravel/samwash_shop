"use client"

import '../../[locale]/page.css'
import s from './footer.module.css';
import Link from "next-intl/link";
import {useState} from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {useTranslations} from "next-intl";


function Footer() {

    const t = useTranslations();

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
            let templateParams = {
                name2: "Футер || 5%",
                email: inputEmail,
            };
            emailjs.send('service_n1hiumb', 'template_gjt4wd5', templateParams, 'nLpwYEGZpz0suGwLV')
                .then(res => {
                    if(res.status === 200){
                        console.log(templateParams)
                        setInputEmail("")
                    }
                })
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
                        <p>SamWash Group {t("footer.footer1")}</p>
                        <ul>
                            <li>
                                <a href="tel:0975794930">+38 097 579 49 30</a>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" title={t("footer.footer2")}>info@samwash.ua</a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6?g_st=it" target="_blank">
                                    {t("footer.footer3")}
                                </a>
                            </li>
                            <li>
                                НІП: ПЛ 782-237-01-46
                            </li>
                            <li>
                                {t("footer.footer4")}: {t("footer.footer5")} 8:00-16:00
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>{t("footer.footer7")}</p>
                        <ul>
                            <li>
                                <Link href='/product'>{t("footer.footer8")}</Link>
                            </li>
                            <li>
                                <Link href='/basket'>{t("footer.footer9")}</Link>
                            </li>
                            <li>
                                <Link href='/advanced-search'>{t("footer.footer10")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>{t("footer.footer6")}</p>
                        <ul>
                            <li>
                                <Link href='/login'>{t("footer.footer11")}</Link>
                            </li>
                            <li>
                                <Link href='/'>{t("footer.footer12")}</Link>
                            </li>
                            <li>
                                <Link href='/register'>{t("footer.footer13")}</Link>
                            </li>
                            <li>
                                <Link href='/password-reminder'>{t("footer.footer14")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.col}>
                        <p>{t("footer.footer15")}</p>
                        <ul>
                            <li>
                                <Link href='/blog'>{t("footer.footer16")}</Link>
                            </li>
                            <li>
                                <Link href='/regulations'>{t("footer.footer17")}</Link>
                            </li>
                            <li>
                                <Link href='/withdrawal-form'>{t("footer.footer18")}</Link>
                            </li>
                            <li>
                                <Link href='/delivery-of-goods'>{t("footer.footer19")}</Link>
                            </li>
                            <li>
                                <Link href='/payment-methods'>{t("footer.footer20")}</Link>
                            </li>
                            <li>
                                <Link href='/privacy-policy'>{t("footer.footer21")}</Link>
                            </li>
                            <li>
                                <Link href='/contact'>{t("footer.footer22")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={s.div_soc}>
                        <p>{t("footer.footer23")}</p>
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
                            <p>{t("footer.footer24")}</p>
                            <p>{t("footer.footer25")}</p>
                            <div className={s.div_mail}>
                                <div className={s.div_input}>
                                    <input type='email'
                                           name='email'
                                           className='input'
                                           placeholder={t("footer.footer27")}
                                           value={inputEmail}
                                           onChange={handleEmailChange}/>
                                    {isSubmitting && emailError &&
                                        <p className={s.redP}>{t("footer.footer26")}</p>}
                                    <button onClick={handleSubmit}>
                                        <img src='/main/arrow-right.svg' alt='slider'/>
                                    </button>
                                </div>
                                <lable className={s.label} onClick={check}>
                                    <input type='checkbox'
                                           id='checkbox2'
                                           className={s.checkbox}
                                           placeholder={t("footer.footer27")}
                                           onChange={check}/>
                                    <Image src='/main/image5.png' alt='image' className={s.imgInput} id='image2'
                                           width={16} height={15}/>
                                    <span className={s.span}>
                                        <span>
                                            <small style={{color: 'red'}}>*</small> {t("footer.footer28")}
                                        </span>
                                    </span>
                                    {isSubmitting && checkboxError &&
                                        <p className={s.redP2} id='red-in'>{t("footer.footer29")}</p>}
                                </lable>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={s.rule}>Copyright © 2008 SamWash Group. {t("footer.footer30")}.</p>
            </div>
        </footer>
    );
}

export default Footer;