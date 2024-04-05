import s from './login.module.css';
import {useState} from "react";
import {Link} from "react-router-dom";

function PasswordReminder() {

    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        const emailDoc = document.getElementById('email')

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailPattern.test(email)){
            emailDoc.style.border = '1px solid gray'
            setOpen(true)
            console.log(email)
        }
        else if(!emailPattern.test(email)){
            emailDoc.style.border = '2px solid red'
        }
    }


    return (
        <div className={s.main}>
            {!open ? <div className={s.two_div}>
                <h2>Відновлення пароля</h2>
                <p className={s.pRem}>
                    Введіть адресу електронної пошти, на яку буде надіслано посилання для зміни пароля.</p>
                <form className={s.form} onSubmit={handleSubmit} style={{padding: '0', margin: '20px 0'}}>
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
                               onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>


                    <button className={s.button_submit}>Надіслати</button>
                </form>
            </div>
            : <div className={s.divWin}>
                    <div className={s.win_div}>
                        <img src="/other/check-mark.png" alt="arrow" />
                        <p>Посилання для зміни пароля надіслано</p>
                    </div>
                </div>}
        </div>
    );
}

export default PasswordReminder;