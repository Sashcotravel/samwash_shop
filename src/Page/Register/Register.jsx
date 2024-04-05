import s from './register.module.css';
import {useState} from "react";
import '../../App.css'
import {Link} from "react-router-dom";


function Register() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [changePerson, setChangePerson] = useState(true)
    const [person, setPerson] = useState(1)
    const [open, setOpen] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [select, setSelect] = useState('')
    const [number, setNumber] = useState('')
    const [company, setCompany] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [home, setHome] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [inputCheck, setInputCheck] = useState(false);
    const [inputCheck2, setInputCheck2] = useState(false);

    const check = () => {
        setInputCheck(p => !p)
        document.getElementById('checkbox').checked = inputCheck
        if (!inputCheck) {
            document.getElementById('image').style.display = 'block'
        } else {
            document.getElementById('image').style.display = 'none'
        }
    }

    const check2 = () => {
        setInputCheck2(p => !p)
        document.getElementById('checkbox2').checked = inputCheck2
        if (!inputCheck2) {
            document.getElementById('image2').style.display = 'block'
        } else {
            document.getElementById('image2').style.display = 'none'
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        const {name} = e.target;

        if(name === 'email'){
            setEmail(e.target.value)
        }
        else if(name === 'select'){
            setSelect(e.target.value)
        }
        else if(name === 'number'){
            setNumber(e.target.value)
        }
        else if(name === 'company'){
            setCompany(e.target.value)
        }
        else if(name === 'city'){
            setCity(e.target.value)
        }
        else if(name === 'street'){
            setStreet(e.target.value)
        }
        else if(name === 'home'){
            setHome(e.target.value)
        }
        else if(name === 'name'){
            setName(e.target.value)
        }
        else if(name === 'phone'){
            setPhone(e.target.value)
        }
        else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailDoc = document.getElementById('email')
        const passwordDoc = document.getElementById('password')
        const selectDoc = document.getElementById('select')

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;

        if (!emailPattern.test(email)) {
            emailDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            emailDoc.style.border = '1px solid gray';
        }

        if (select.trim() === '') {
            selectDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            selectDoc.style.border = '1px solid gray';
        }

        if (password.trim().length < 8) {
            passwordDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            passwordDoc.style.border = '1px solid gray';
        }

        // Виведення загального результату валідації
        if (isValid) {
            emailDoc.style.border = '1.5px solid #ecedec'
            passwordDoc.style.border = '1.5px solid #ecedec'
            selectDoc.style.border = '1.5px solid #ecedec'

            console.log(email, password, select)

            setOpen(false)
        }
        else {
            console.log("Є помилки у введених даних.");
        }
    }

    const handleSubmit2 = (e) => {
        e.preventDefault()

        const companyDoc = document.getElementById('company')
        const cityDoc = document.getElementById('city')
        const streetDoc = document.getElementById('street')
        const homeDoc = document.getElementById('home')
        const phoneDoc = document.getElementById('phone')
        const checkDoc = document.getElementById('check')

        const phonePattern = /^\+380\d{9}$/;
        let isValid = true;

        if (!phonePattern.test(phone)) {
            phoneDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            phoneDoc.style.border = '1px solid gray';
        }

        if (company.trim() === '') {
            companyDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            companyDoc.style.border = '1px solid gray';
        }

        if (city.trim() === '') {
            cityDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            cityDoc.style.border = '1px solid gray';
        }

        if (street.trim() === '') {
            streetDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            streetDoc.style.border = '1px solid gray';
        }

        if (home.trim() === '') {
            homeDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            homeDoc.style.border = '1px solid gray';
        }

        if (!inputCheck) {
            checkDoc.classList.add(s['span2'])
            isValid = false;
        }
        else {
            checkDoc.classList.remove(s['span2'])
        }

        // Виведення загального результату валідації
        if (isValid) {
            console.log(company, city, street, home, phone)
        } else {
            console.log("Є помилки у введених даних.");
        }
    }

    const handleSubmit3 = (e) => {
        e.preventDefault()

        const emailDoc = document.getElementById('email')
        const passwordDoc = document.getElementById('password')
        const selectDoc = document.getElementById('select')
        const cityDoc = document.getElementById('city')
        const streetDoc = document.getElementById('street')
        const homeDoc = document.getElementById('home')
        const phoneDoc = document.getElementById('phone')
        const checkDoc = document.getElementById('check')
        const nameDoc = document.getElementById('name')

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+380\d{9}$/;
        let isValid = true;

        if (!emailPattern.test(email)) {
            emailDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            emailDoc.style.border = '1px solid gray';
        }

        if (select.trim() === '') {
            selectDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            selectDoc.style.border = '1px solid gray';
        }

        if (password.trim().length < 8) {
            passwordDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            passwordDoc.style.border = '1px solid gray';
        }

        if (name.trim() === '') {
            nameDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            nameDoc.style.border = '1px solid gray';
        }

        if (city.trim() === '') {
            cityDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            cityDoc.style.border = '1px solid gray';
        }

        if (street.trim() === '') {
            streetDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            streetDoc.style.border = '1px solid gray';
        }

        if (home.trim() === '') {
            homeDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            homeDoc.style.border = '1px solid gray';
        }

        if (!phonePattern.test(phone)) {
            phoneDoc.style.border = '2px solid red';
            isValid = false;
        }
        else {
            phoneDoc.style.border = '1px solid gray';
        }

        if (!inputCheck) {
            checkDoc.classList.add(s['span2'])
            isValid = false;
        }
        else {
            checkDoc.classList.remove(s['span2'])
        }

        // Виведення загального результату валідації
        if (isValid) {
            console.log(company, city, street, home, phone)
        }
        else {
            console.log("Є помилки у введених даних.");
        }
    }

    const style = {
        backgroundColor: '#eb1c24',
        color: 'white'
    }

    const chang = () => {
        setChangePerson(prev => !prev)
        if(person === 1){
            setPerson(2)
        } else {
            setPerson(1)
        }
    }


    return (
        <div className={s.main}>

            <div className={s.two_div}>
                <h2>Зареєструватися</h2>
                <div onClick={chang} className={s.switch}>
                    <button style={person === 1 ? style : undefined}>Приватна особа</button>
                    <button style={person === 2 ? style : undefined}>Бізнес</button>
                </div>
                {changePerson ? <form className={s.form} onSubmit={handleSubmit3}>
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

                        <div className={s.flex_column}>
                            <label>Країна <span style={{color: 'red'}}>*</span> </label>
                        </div>
                        <div className={s.inputForm} id='select'>
                            <select name="select" className={s.select} onChange={handleChange}>
                                <option value="" hidden>виберіть країну</option>
                                <option value="Польща">Польща</option>
                                <option value="Німеччина">Німеччина</option>
                                <option value="Данія">Данія</option>
                            </select>
                        </div>

                        <div className={s.flex_column}>
                            <label>Ім'я та прізвище <span style={{color: 'red'}}>*</span> </label>
                        </div>
                        <div className={s.inputForm} id='name'>
                            <input name='name' type="text" className={s.input} onChange={handleChange}
                                   value={name}/>
                        </div>

                        <div className={s.flex_column}>
                            <label>Назва міста <span style={{color: 'red'}}>*</span> </label>
                        </div>
                        <div className={s.inputForm} id='city'>
                            <input name='city' type="text" className={s.input} onChange={handleChange}
                                   value={city}/>
                        </div>

                        <div className={s.flex_column}>
                            <label>Назва вулиця <span style={{color: 'red'}}>*</span> </label>
                        </div>
                        <div className={s.inputForm} id='street'>
                            <input name='street' type="text" className={s.input} onChange={handleChange}
                                   value={street}/>
                        </div>

                        <div className={s.flex_column}>
                            <label>Номер будинку <span style={{color: 'red'}}>*</span> </label>
                        </div>
                        <div className={s.inputForm} id='home'>
                            <input name='home' type="text" className={s.input} onChange={handleChange}
                                   value={home}/>
                        </div>

                        <div className={s.flex_column}>
                            <label>Номер телефону <span style={{color: 'red'}}>*</span> </label>
                        </div>
                        <div className={s.inputForm} id='phone'>
                            <input name='phone' type="text" className={s.input} onChange={handleChange}
                                   value={phone}/>
                        </div>

                        <lable className={s.label} onClick={check}>
                            <input type='checkbox'
                                   id='checkbox'
                                   className={s.checkbox}
                                   placeholder="Введіть адресу вашої електронної пошти"
                                   onChange={check}/>
                            <img src='/main/image5.png' alt='slider' className={s.imgInput} id='image'/>
                            <span className={s.span} id='check'>
                                    <span>
                                        <small style={{color: 'red'}}>*</small>  Я прочитав і повністю приймаю
                                        <Link to='/' style={{color: 'red'}}> Правила</Link>
                                    </span>
                                </span>
                        </lable>

                        <lable className={s.label} onClick={check2}>
                            <input type='checkbox'
                                   id='checkbox2'
                                   className={s.checkbox}
                                   placeholder="Введіть адресу вашої електронної пошти"
                                   onChange={check2}/>
                            <img src='/main/image5.png' alt='slider' className={s.imgInput} id='image2'/>
                            <span className={s.span}>Я даю згоду на отримання розсилки</span>
                        </lable>

                        <button className={s.button_submit}>зареєструватися</button>
                    </form>
                    :
                    <>
                        <form className={s.form} style={!open ? {display: 'none'} : {display: 'flex'}}
                              onSubmit={handleSubmit}>
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

                            <div className={s.flex_column}>
                                <label>Країна <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.inputForm} id='select'>
                                <select name="select" className={s.select} onChange={handleChange}>
                                    <option value="" hidden>виберіть країну</option>
                                    <option value="Польща">Польща</option>
                                    <option value="Німеччина">Німеччина</option>
                                    <option value="Данія">Данія</option>
                                </select>
                            </div>

                            <div className={s.flex_column}>
                                <label>Ідентифікаційний податковий номер <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.flex}>
                                <div className={s.inputForm + ' ' + s.half} id='select2'>
                                    <select name="select2" className={s.select}>
                                        <option value="" hidden>PL - Польща</option>
                                        <option value="PL - Польща">PL - Польща</option>
                                    </select>
                                </div>
                                <div className={s.inputForm + ' ' + s.half} id='input'>
                                    <input name='number' type="text" className={s.input} onChange={handleChange}
                                           value={number}/>
                                </div>
                            </div>

                            <button className={s.button_submit}>Дані компанії ></button>
                        </form>
                        <form className={s.form} onSubmit={handleSubmit2}
                              style={!open ? {display: 'flex'} : {display: 'none'}}>

                            <p className={s.p_back} onClick={() => setOpen(true)}>{'<<'} назад</p>

                            <div className={s.flex_column}>
                                <label>Назва компанії <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.inputForm} id='company'>
                                <input type="text" className={s.input} name='company' onChange={handleChange}
                                       value={company}/>
                            </div>

                            <div className={s.flex_column}>
                                <label>Назва міста <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.inputForm} id='city'>
                                <input name='city' type="text" className={s.input} onChange={handleChange}
                                       value={city}/>
                            </div>

                            <div className={s.flex_column}>
                                <label>Назва вулиця <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.inputForm} id='street'>
                                <input name='street' type="text" className={s.input} onChange={handleChange}
                                       value={street}/>
                            </div>

                            <div className={s.flex_column}>
                                <label>Номер будинку <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.inputForm} id='home'>
                                <input name='home' type="text" className={s.input} onChange={handleChange}
                                       value={home}/>
                            </div>

                            <div className={s.flex_column}>
                                <label>Номер телефону <span style={{color: 'red'}}>*</span> </label>
                            </div>
                            <div className={s.inputForm} id='phone'>
                                <input name='phone' type="text" className={s.input} onChange={handleChange}
                                       value={phone}/>
                            </div>

                            <lable className={s.label} onClick={check}>
                                <input type='checkbox'
                                       id='checkbox'
                                       className={s.checkbox}
                                       placeholder="Введіть адресу вашої електронної пошти"
                                       onChange={check}/>
                                <img src='/main/image5.png' alt='slider' className={s.imgInput} id='image'/>
                                <span className={s.span} id='check'>
                                    <span>
                                        <small style={{color: 'red'}}>*</small>  Я прочитав і повністю приймаю
                                        <Link to='/' style={{color: 'red'}}> Правила</Link>
                                    </span>
                                </span>
                            </lable>

                            <lable className={s.label} onClick={check2}>
                                <input type='checkbox'
                                       id='checkbox2'
                                       className={s.checkbox}
                                       placeholder="Введіть адресу вашої електронної пошти"
                                       onChange={check2}/>
                                <img src='/main/image5.png' alt='slider' className={s.imgInput} id='image2'/>
                                <span className={s.span}>Я даю згоду на отримання розсилки</span>
                            </lable>

                            <button className={s.button_submit}>зареєструватися</button>
                        </form>
                    </>
                }
            </div>
            <div style={{background: '#f9f9f9'}} className={s.two_div}>
                <h3>Ви тут вперше? <br/>
                    Перевірте, чому варто мати акаунт в магазині SAMWASH?</h3>
                <ul>
                    <li>Створіть обліковий запис всього за 10 секунд</li>
                    <li>Легко перевіряйте історію замовлень</li>
                    <li>Робіть покупки вдвічі швидше</li>
                    <li>Підпишіться на розсилку та отримайте стартову знижку 5%!</li>
                </ul>
            </div>

        </div>
    );
}

export default Register;