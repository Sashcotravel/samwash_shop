import s from './payment.module.css';
import Link from "next-intl/link";
import TopButton from "@/app/component/topButton/topButton";


function WithdrawalForm() {
    return (
        <div className={s.divMain}>

            <TopButton index={4} />

            <div className={s.divRedLine}>
                <span>Політика конфіденційності</span> <br/>
                <span>Дата публікації: 2023-04-13 08:37:00</span>
            </div>

            <div>
                <h2 className={s.h2}>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ В ІНТЕРНЕТ-МАГАЗИНІ <br/>
                    <a href="https://samwash-shop.vercel.app/"><b> samwash.ua</b></a></h2>
                <br/>
                <details className={s.details}>
                    <summary>I. Обробка персональних даних у зв'язку з використанням Інтернет-магазину</summary>
                    У зв’язку з використанням Клієнтом Інтернет-магазину, розташованого за адресою samwash.ua
                    (далі: Магазин), Клієнт приймає правила, що містяться в цій Політиці конфіденційності, у зв’язку з
                    тим, що Адміністратор збирає дані в обсязі, необхідному для надання індивідуальним Пропоновані
                    послуги обробляються лише в тому обсязі та з метою, на яку дав згоду Клієнт. Надання персональних
                    даних і згода на їх обробку є абсолютно добровільним.
                </details>
                <details className={s.details}>
                    <summary>II. Хто і які персональні дані обробляє</summary>
                    <p>
                        Адміністратором Персональних даних і власником Магазину є SamWash Group
                        з зареєстрованим офісом у Україна, Львівська область, село Наварія 11,
                        внесене до реєстру підприємців, який веде Окружний суд Щецин-Центр у м. Щецин, 13-й
                        комерційний відділ Національного судового реєстру, номер KRS: 0000262269, NIP: 7822370146,
                        REGON: 300392077, номер BDO: 000018553 (далі: Продавець).
                    </p>
                    <br/>
                    <p>Продавець збирає та зберігає лише персональні дані, необхідні для обробки замовлень, а саме:</p>
                    <br/>
                    <ul>
                        <li>Прізвище та ім'я замовника;</li>
                        <li>Адреса проживання замовника;</li>
                        <li>адреса для листування (тільки якщо відрізняється від адреси проживання);</li>
                        <li>адреса електронної пошти та номер телефону для зв'язку із Замовником;</li>
                        <li>ІПН Клієнта (тільки якщо Клієнт є підприємцем);</li>
                        <li>компанія Клієнта (тільки якщо Клієнт є підприємцем);</li>
                        <li>номер банківського рахунку (тільки у разі оплати безготівковим розрахунком);</li>
                    </ul>
                </details>
                <details className={s.details}>
                    <summary>III. Використання персональних даних покупця</summary>
                    <ol>
                        <li>
                            Використання Магазину <br/>
                            Особисті дані всіх осіб, які користуються Магазином, обробляються Адміністратором для
                            надання послуг в електронному вигляді в рамках надання Клієнтам вмісту, зібраного в
                            Магазині, а також розміщення замовлення та його виконання, включаючи доставку.
                            Персональні дані Клієнта не будуть продані третім особам. Деякі персональні дані можуть бути
                            передані третім особам, наприклад компаніям, які займаються доставкою замовлених товарів
                            (перевізникам), або компаніям, які займаються онлайн-платежами. Персональні дані будуть
                            передані цим компаніям лише в мінімально необхідному обсязі.
                        </li>
                        <li>
                            Маркетинг <br/>
                            Особисті дані Клієнта також можуть використовуватися Продавцем у комерційних і маркетингових
                            цілях через різні канали, наприклад, електронну пошту, SMS/MMS, телефон. Подібні дії
                            Продавець вживає лише за наявності згоди Клієнта, яка може бути відкликана в будь-який
                            момент.
                        </li>
                    </ol>
                </details>
                <details className={s.details}>
                    <summary>IV. Зміна або видалення даних</summary>
                    Клієнт має право отримати доступ до даних і вимагати їх виправлення, видалення, обмеження обробки,
                    право передачі даних і право подати скаргу до контролюючого органу, відповідального за захист
                    персональних даних. <br/>
                    Клієнт також має право заперечити проти обробки даних на підставі законного інтересу Продавця.
                    Якщо дані Клієнта обробляються на основі згоди, ви можете відкликати цю згоду в будь-який час,
                    зв’язавшись з Продавцем, надіславши інформацію на електронну адресу:
                    <a href="https://samwash-shop.vercel.app/"><b> samwash.ua</b></a>
                </details>
                <details className={s.details}>
                    <summary>V. Cookies</summary>
                    «Cookies» — це текстові файли, надіслані Магазином, які зберігаються на кінцевому пристрої, який
                    використовує Клієнт під час перегляду вмісту Магазину (комп’ютер, ноутбук, планшет, смартфон). Файли
                    cookie не містять персональних даних. За замовчуванням веб-браузери дозволяють зберігати файли
                    cookie на кінцевому пристрої. Клієнт може змінити ці налаштування, щоб заблокувати автоматичну
                    обробку файлів cookie. Детальна інформація про можливості та способи обробки файлів cookie доступна
                    в налаштуваннях веб-браузера та у вкладці «ДОПОМОГА». Обмеження або вимкнення використання файлів
                    cookie може вплинути на деякі функції, доступні в Магазині.<br/>
                    Крім того, Магазин може містити плагіни від інших постачальників електронних послуг, наприклад
                    Facebook або Twitter. Електронні послуги, які вони надають, базуються на принципах, передбачених
                    положеннями цих порталів, а принципи конфіденційності викладені в політиках конфіденційності, що
                    застосовуються на цих порталах.
                </details>
                <details className={s.details}>
                    <summary>VI. Безпека персональних даних</summary>
                    Продавець проводить аналіз ризиків на постійній основі, щоб забезпечити безпечну обробку
                    персональних даних. Під час збору персональних даних Клієнта зв’язок між Магазином і кінцевим
                    пристроєм Клієнта шифрується за допомогою протоколу SSL (Secure Socket Layer). Бази даних Продавця
                    захищені від доступу третіх осіб.
                </details>
                <details className={s.details}>
                    <summary>VII. Термін обробки персональних даних</summary>
                    Термін обробки даних Продавцем залежить від виду наданої послуги та мети обробки. Як правило, дані
                    обробляються протягом терміну надання послуги, до моменту відкликання згоди або висунення
                    ефективного заперечення щодо обробки даних у випадках, коли правовою підставою для обробки даних є
                    законний інтерес Продавця.
                </details>
                <details className={s.details}>
                    <summary>VIII. Контактні дані</summary>
                    Зв'язатися з Продавцем можна електронною поштою за такою адресою
                    електронної пошти: <a href="mailto:info@samwash.ua"><b> info@samwash.ua</b></a> або за телефоном:
                    <a href="tel:0975794930">+380 97 57 94930</a>.
                </details>
                <details className={s.details}>
                <summary>IX. Зміни до Політики конфіденційності</summary>
                    Політика постійно перевіряється та за необхідності оновлюється. <br/>
                    Поточну редакцію Політики прийнято та діє з 7 серпня 2023 року.
                </details>

            </div>

        </div>
    );
}

export default WithdrawalForm;