import s from './contact.module.css';
import {BiMapAlt} from "react-icons/bi";
import {BiLocationPlus} from "react-icons/bi";


function Contact() {


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
                </div>
            </div>
            <div className={s.div_column2}></div>

        </div>
    );
}

export default Contact;