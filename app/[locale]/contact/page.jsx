"use client"

import s from './contact.module.css';
import {BiMapAlt} from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { GrMailOption } from "react-icons/gr";
import {BiLocationPlus} from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {useEffect, useState} from "react";


function Contact() {

    const [user, setUser] = useState({
        email: '', phone: '+380', topic: '', text: ''
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleSubmit = () => {

        const fDoc = (name) => {
            return document.getElementById(name)
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+380\d{9}$/;
        let isValid = true;


        if (!emailPattern.test(user.email)) {
            fDoc('email').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('email').style.border = '1px solid #DDDDDD';
        }

        if (!phonePattern.test(user.phone)) {
            fDoc('phone').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('phone').style.border = '1px solid #DDDDDD';
        }

        if (user.topic.trim() === '') {
            fDoc('topic').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('topic').style.border = '1px solid #DDDDDD';
        }

        if (user.text.trim() === '') {
            fDoc('text').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('text').style.border = '1px solid #DDDDDD';
        }

        if (isValid) {
            console.log(user)
        }
        else {
            console.log("Є помилки у введених даних.");
        }
    }


    return (
        <div className={s.mainDiv}>

            <h1>
                <BiMapAlt/>
                контакти
            </h1>

            <div className={s.div_column1}>
                <h2><b>Мики самообслуговування SAMWASH</b></h2>
                <div className={s.div_address}>
                    <a href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6?g_st=it" target="_blank"
                       className={s.address1_div}>
                        <p>
                            <BiLocationPlus/>
                            <span>Кульпарківська 108</span>
                        </p>
                        <p>Львів</p>
                        <p>Україна</p>
                    </a>
                    <div className={s.address2_div}>
                        <p>
                            <TfiHeadphoneAlt/>
                            <a href="tel:0975794930">+38 097 579 4930</a>
                        </p>
                        <p>
                            <GiSmartphone />
                            <a href="tel:0975794930">+38 097 579 4930</a>
                        </p>
                        <p>
                            <CgMail />
                            <a href="mailto:info@samwash.ua" title="Напишіть нам">info@samwash.ua</a>
                        </p>
                    </div>
                </div>
                <div className={s.div_address2}>
                    <p>
                        <CiWallet />
                        АТ КБ "ПРИВАТБАНК", код ЄДРПОУ 14360570, було зареєстровано 19.03.1992.
                    </p>
                    <p>24-1500-1113-1211-1004-5113-0000</p>
                    <p>
                        <b>ІПН </b> ПЛ 782-237-01-46
                    </p>
                    <p>
                        <b>Регіональний </b> номер 300392077
                    </p>
                </div>
                <p className={s.div_address3}>
                    ЄДЗПОУ: 0000262269 <br/>
                    Окружний суд у Щецині, 13-й господарський відділ Національного судового реєстру <br/>
                    Статутний капітал: 300 000 злотих
                </p>
            </div>
            <div className={s.div_column2}>
                <h3>Контактний формуляр</h3>
                <label className={s.label_email2}>
                    <span>Електронна пошта <small style={{color: 'red'}}> *</small></span>
                    <input type='email'
                           id='email'
                           className={s.inputEmail2}
                           value={user.email}
                           onChange={e => setUser(prev => {
                               return {...prev, email: e.target.value}})}
                    />
                </label>
                <label className={s.label_email2}>
                    <span>Телефон <small style={{color: 'red'}}> *</small></span>
                    <input type='text'
                           id='phone'
                           className={s.inputEmail2}
                           value={user.phone}
                           onChange={e => setUser(prev => {
                               return {...prev, phone: e.target.value}})}
                    />
                </label>
                <label className={s.label_email2}>
                    <span>Тема <small style={{color: 'red'}}> *</small></span>
                    <input type='text'
                           id='topic'
                           className={s.inputEmail2}
                           value={user.topic}
                           onChange={e => setUser(prev => {
                               return {...prev, topic: e.target.value}})}
                    />
                </label>
                <label className={s.label_email2}>
                    <span>Повідомлення <small style={{color: 'red'}}> *</small></span>
                    <textarea
                           id='text'
                           className={s.textarea}
                           value={user.text}
                           onChange={e => setUser(prev => {
                               return {...prev, text: e.target.value}})}
                    />
                </label>
                <button onClick={handleSubmit}><GrMailOption /> Надіслати</button>
            </div>

        </div>
    );
}

export default Contact;