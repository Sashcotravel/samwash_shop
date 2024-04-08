import s from './payment.module.css';
import Link from "next-intl/link";



function WithdrawalForm() {
    return (
        <div className={s.divMain}>

            <div className={s.divRedLine}>
                <span>Політика конфіденційності</span> <br/>
                <span>Дата публікації: 2023-04-13 08:37:00</span>
            </div>

            <div>
                <h2 className={s.h2}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ В ІНТЕРНЕТ-МАГАЗИНІ <br/>
                    <a href="mailto:info@samwash.ua"><b> info@samwash.ua</b></a></h2>
                <br/>
                <br/>
                <p>1. Клієнт, який є Споживачем, який уклав Договір купівлі-продажу, може відмовитися від нього
                    без пояснення причини протягом 14 днів.</p>
                <p>2. Для відмови від Договору купівлі-продажу Споживач повинен подати заяву про відмову. Форму
                    відмови можна завантажити
                    <Link target='_blank'
                          href='https://docs.google.com/document/d/1RQ1jRkbnOmd-w0CO3H1FGfTdx0l_tAJSY1vo1v6jKHg/edit#heading=h.iaa6h6b136lr'> тут</Link>.
                </p>
                <p>3. Декларація повинна бути заповнена та надіслана електронною поштою на адресу Продавця:
                    <a href="mailto:info@samwash.ua"><b> info@samwash.ua</b></a>.</p>
            </div>

        </div>
    );
}

export default WithdrawalForm;