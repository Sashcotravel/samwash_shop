"use client"

import s from './login.module.css';
import {useEffect, useState} from "react";
import Link from "next-intl/link";
import TopButton from "@/app/component/topButton/topButton";

function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        const {name} = e.target;

        if(name === 'email'){
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailDoc = document.getElementById('email')
        const passwordDoc = document.getElementById('password')

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailPattern.test(email) && password.length >= 8){
            emailDoc.style.border = '1px solid gray'
            passwordDoc.style.border = '1px solid gray'

            console.log(email, password)
        }
        else if(!emailPattern.test(email) && password.length < 8){
            emailDoc.style.border = '2px solid red'
            passwordDoc.style.border = '2px solid red'
        }
        else if (password.length < 8) {
            emailDoc.style.border = '1px solid gray'
            passwordDoc.style.border = '2px solid red'
        }
        else if(!emailPattern.test(email)){
            emailDoc.style.border = '2px solid red'
            passwordDoc.style.border = '1px solid gray'
        }
    }


    return (
        <div className={s.main}>

            <TopButton index={4} />

            <div className={s.two_div}>
                <h2>Авторизуватися</h2>
                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.flex_column}>
                        <label>Електронна пошта <span style={{color: 'red'}}>*</span> </label>
                    </div>
                    <div className={s.inputForm} id='email'>
                        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                            <g id="Layer_3" data-name="Layer 3">
                                <path
                                    d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                            </g>
                        </svg>
                        <input type="text" className={s.input} name='email' placeholder="Введіть email..."
                               onChange={handleChange} value={email}/>
                    </div>

                    <div className={s.flex_column}>
                        <label>Пароль <span style={{color: 'red'}}>*</span> </label>
                    </div>
                    <div className={s.inputForm} id='password'>
                        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                            <path
                                d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                        </svg>
                        <input name='password'
                            type={passwordVisible ? "text" : "password"} className={s.input}
                            placeholder="Введіть пароль..." onChange={handleChange} value={password}/>
                        <svg viewBox="0 0 576 512" height="1em" style={{marginLeft: '-10px'}}
                             xmlns="http://www.w3.org/2000/svg" onClick={togglePasswordVisibility}>
                            <path
                                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                        </svg>
                    </div>

                    <div className={s.flex_row}>
                        <Link href='/password-reminder' className={s.span}>Ви не пам'ятаєте пароль?</Link>
                    </div>
                    <button className={s.button_submit}>Авторизуватися</button>
                    <p className={s.p}>Немає облікового запису? <Link href='/register'
                                                                      className={s.span}>Зареєструватися</Link></p>
                </form>
            </div>
            <div style={{background: '#f9f9f9'}} className={s.two_div}>
                <h3>Ви вже підписалися на нашу розсилку? <br/>
                    Перевірте, чому це варто зробити:</h3>
                <ul>
                    <li>Ви отримуєте додаткові знижки та акції</li>
                    <li>Ви в курсі нових пропозицій</li>
                    <li>Ви економите час і гроші!</li>
                </ul>
                <p><b>Увійдіть і перевірте, чи погодилися ви на розсилку новин у кабінеті клієнтів.</b></p>
            </div>

        </div>
);
}

export default Login;