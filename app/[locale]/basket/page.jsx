"use client"

import s from './basketPage.module.css';
import {useState, useRef, useEffect} from "react";
import Link from "next-intl/link";
import {useStore} from "@/store/store";
import { LuMail } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import {AiOutlineDelete} from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlinePaperClip } from "react-icons/ai";
import Image from "next/image";

let arrFile = []

function Page() {

    const [sale, setSale] = useState('')
    const [open, setOpen] = useState(false)
    const [change, setChange] = useState(false)
    const [change2, setChange2] = useState(true)
    const [isValidSet, setIsValidSet] = useState(false)
    const [inputCheck, setInputCheck] = useState(false);
    const [inputCheck2, setInputCheck2] = useState(false);
    const [radio, setRadio] = useState(1)
    const [radio2, setRadio2] = useState(1)
    const [radio3, setRadio3] = useState(1)
    const [taxNumber, setTaxNumber] = useState('')
    const [textarea, setTextarea] = useState('')
    const [files, setFiles] = useState([])
    const [user, setUser] = useState({
        email: '', name: '', street: '', country: '', city: '', phone: '+380',
        numBud: '', numFlat: '', company: ''
    })
    const [user2, setUser2] = useState({
        name: '', street: '', country: '', city: '', numBud: '', numFlat: '', company: ''
    })
    const [user3, setUser3] = useState({
        name: '', street: '', country: '', city: '', numBud: '', numFlat: '', company: ''
    })

    const fileInputRef = useRef(null);

    const order = useStore(store => store.order)
    const sum = useStore(store => store.sum)
    const addCount = useStore(store => store.addCount)
    const minesCount = useStore(store => store.minesCount)
    const deleteGoods = useStore(store => store.deleteGoods)
    const allClean = useStore(store => store.allClean)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const addCol = (item) => {
        addCount(item.id)
    }

    const minesCol = (item) => {
        minesCount(item.id)
    }

    const deleteGoodsItem = (item) => {
        // let sum = item.prise * item.col
        // deleteGoods(item.id, sum)
        deleteGoods(item.id, item)
    }

    const style = {
        cursor: 'default',
        color: '#DDDDDD',
        background: '#f4f4f4'
    }

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

        if (user.country.trim() === '') {
            fDoc('country').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('country').style.border = '1px solid #DDDDDD';
        }

        if (user.street.trim() === '') {
            fDoc('street').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('street').style.border = '1px solid #DDDDDD';
        }

        if (user.city.trim() === '') {
            fDoc('city').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('city').style.border = '1px solid #DDDDDD';
        }

        if (!phonePattern.test(user.phone)) {
            fDoc('phone').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('phone').style.border = '1px solid #DDDDDD';
        }

        if(radio === 1){
            if (user.name.trim() === '') {
                fDoc('name').style.border = '2px solid red';
                isValid = false;
            }
            else {
                fDoc('name').style.border = '1px solid #DDDDDD';
            }
        }
        else {
            if (user.company.trim() === '') {
                fDoc('company').style.border = '2px solid red';
                isValid = false;
            }
            else {
                fDoc('company').style.border = '1px solid #DDDDDD';
            }
        }

         if(radio2 === 2){
             if (user2.country.trim() === '') {
                 fDoc('country2').style.border = '2px solid red';
                 isValid = false;
             }
             else {
                 fDoc('country2').style.border = '1px solid #DDDDDD';
             }

             if (user2.street.trim() === '') {
                 fDoc('street2').style.border = '2px solid red';
                 isValid = false;
             }
             else {
                 fDoc('street2').style.border = '1px solid #DDDDDD';
             }

             if (user2.city.trim() === '') {
                 fDoc('city2').style.border = '2px solid red';
                 isValid = false;
             }
             else {
                 fDoc('city2').style.border = '1px solid #DDDDDD';
             }

             if(radio === 1){
                 if (user2.name.trim() === '') {
                     fDoc('name2').style.border = '2px solid red';
                     isValid = false;
                 }
                 else {
                     fDoc('name2').style.border = '1px solid gray';
                 }
             }
             else {
                 if (user2.company.trim() === '') {
                     fDoc('company2').style.border = '2px solid red';
                     isValid = false;
                 }
                 else {
                     fDoc('company2').style.border = '1px solid #DDDDDD';
                 }
             }
        }

        if (isValid) {
            setOpen(false)
            setIsValidSet(true)
            console.log(user, user2)
        }
        else {
            console.log("Є помилки у введених даних.");
            setIsValidSet(false)
        }
    }

    const handleSubmit2 = () => {

        const fDoc = (name) => {
            return document.getElementById(name)
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+380\d{9}$/;
        let isValid = true;

        if(radio === 1){
            if (user.name.trim() === '') {
                fDoc('name10').style.border = '2px solid red';
                isValid = false;
            }
            else {
                fDoc('name10').style.border = '1px solid #DDDDDD';
            }
        }
        else {
            if (user.company.trim() === '') {
                fDoc('company10').style.border = '2px solid red';
                isValid = false;
            }
            else {
                fDoc('company10').style.border = '1px solid #DDDDDD';
            }
        }


        if (!emailPattern.test(user.email)) {
            fDoc('email10').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('email10').style.border = '1px solid #DDDDDD';
        }

        if (user.country.trim() === '') {
            fDoc('country10').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('country10').style.border = '1px solid #DDDDDD';
        }

        if (user.street.trim() === '') {
            fDoc('street10').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('street10').style.border = '1px solid #DDDDDD';
        }

        if (user.city.trim() === '') {
            fDoc('city10').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('city10').style.border = '1px solid #DDDDDD';
        }

        if (!phonePattern.test(user.phone)) {
            fDoc('phone10').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('phone10').style.border = '1px solid #DDDDDD';
        }

        if (isValid) {
            setChange(false)
        }
        else {
            console.log("Є помилки у введених даних.");
        }
    }

    const handleSubmit3 = () => {

        const fDoc = (name) => {
            return document.getElementById(name)
        }

        let isValid = true;

        if(radio === 1){
            if (user3.name.trim() === '') {
                fDoc('name11').style.border = '2px solid red';
                isValid = false;
            }
            else {
                fDoc('name11').style.border = '1px solid #DDDDDD';
            }
        }
        else {
            if (user3.company.trim() === '') {
                fDoc('company11').style.border = '2px solid red';
                isValid = false;
            }
            else {
                fDoc('company11').style.border = '1px solid #DDDDDD';
            }
        }

        if (user3.country.trim() === '') {
            fDoc('country11').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('country11').style.border = '1px solid #DDDDDD';
        }

        if (user3.street.trim() === '') {
            fDoc('street11').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('street11').style.border = '1px solid #DDDDDD';
        }

        if (user3.city.trim() === '') {
            fDoc('city11').style.border = '2px solid red';
            isValid = false;
        }
        else {
            fDoc('city11').style.border = '1px solid #DDDDDD';
        }

        if (isValid) {
            setChange2(false)
        }
        else {
            console.log("Є помилки у введених даних.");
        }
    }

    const finalSubmit = () => {

        let isValid = true;
        const checkDoc = document.getElementById('check')

        if (!inputCheck) {
            checkDoc.classList.add(s['span2'])
            isValid = false;
        }
        else {
            checkDoc.classList.remove(s['span2'])
        }

        if (isValid) {
            console.log()
        }
        else {
            console.log("Є помилки у введених даних.");
        }
    }

    const handleFileSelect = (e) => {
        const galleryImagesCopy = [...files];
        const filesArray = Array.from(e.target.files);
        let notEmptyCount = 0;
        filesArray.forEach((file) => {
            for (let i=0; i<galleryImagesCopy.length; i++) {
                if (galleryImagesCopy[i].type === 'no-image') {
                    galleryImagesCopy[i] = file;
                    notEmptyCount++;
                    break;
                }
            }
        });
        setFiles(prev => {
            // Створюємо копію попереднього стану
            const prevFiles = [...prev];
            // Додаємо нові файли до копії попереднього стану
            const updatedFiles = prevFiles.concat(filesArray);
            // Повертаємо оновлений стан
            return updatedFiles;
        });
    };

    function startFileSelection() {
        fileInputRef.current.click();
    }

    const deletePhoto = (indexToRemove) => {
        setFiles(prevFiles => {
            // Копіюємо масив файлів
            const updatedFiles = [...prevFiles];
            // Видаляємо фото з вказаним індексом
            updatedFiles.splice(indexToRemove, 1);
            // Повертаємо оновлений масив файлів
            return updatedFiles;
        });
    };

    return (
        <div className={s.main}>

            <div className={s.div_goods}>
                <div className={s.div_manu}>
                    <div className={s.num_goods}></div>
                    <div className={s.name_goods}>Назва товару</div>
                    <div className={s.priseN_goods}>Ціна нетто</div>
                    <div className={s.priseN_goods}>Ціна брутто</div>
                    <div className={s.priseN_goods}>ПДВ</div>
                    <div className={s.col_goods}>Кількість</div>
                    <div className={s.clean_goods}>Чиста вартість</div>
                    <div className={s.clean_goods}>Валова вартість</div>
                    <div className={s.clean_goods}>Валюта</div>
                    <div className={s.option_goods}>...</div>
                </div>
                {
                    order.length !== 0 && order?.map((item, index) => {

                        return (
                            <div className={s.item_goods} key={index}>
                                <div className={s.delete_item + ' ' + s.item_div}>
                                    <AiOutlineDelete className={s.iconD} onClick={() => deleteGoodsItem(item)}/>
                                    <span className={s.delete1}>Видалити</span>
                                </div>
                                <div className={s.num_item}>{index + 1}</div>
                                <div className={s.item_goods_name + ' ' + s.item_div}>
                                    <Link href={'/product/' + item.slug}>
                                        <div className={s.item_img}>
                                            <Image alt={item.catalog_goods_content[0].title}
                                                   width={200} height={200}
                                                   src={item.catalog_goods_images.length === 0 ? '/other/noImage.jpg'
                                                       : 'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path
                                                   }/>
                                        </div>
                                        <div className={s.item_name_text}>
                                            <h3><b>{item.catalog_goods_content[0].title}</b></h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className={s.item_prise_net + ' ' + s.item_div}>
                                    <span className={s.delete2}>нетто</span>
                                    {item.price}
                                    <span style={{marginLeft: '5px'}} className={s.delete1}> доларів</span>
                                </div>
                                <div className={s.item_prise_gross + ' ' + s.item_div}>
                                    <span className={s.delete3}>брутто</span>
                                    {item.price}
                                    <span style={{marginLeft: '5px'}} className={s.delete1}> доларів</span>
                                </div>
                                <div className={s.item_pdv + ' ' + s.item_div}>
                                    <span style={{marginRight: '5px'}} className={s.delete1}>ПДВ</span>
                                    23,00%
                                </div>
                                <div className={s.item_col + ' ' + s.item_div}>
                                    <div className={s.div_col}>
                                        <div className={s.div_col}>
                                            <button onClick={() => minesCol(item)}
                                                    disabled={item.size === 1}
                                                    style={item.size === 1 ? style : undefined}
                                            >-
                                            </button>
                                            <p>{item.size}</p>
                                            <button onClick={() => addCol(item)}>+</button>
                                        </div>
                                        <span>шт.</span>
                                    </div>
                                </div>
                                <div className={s.item_clean + ' ' + s.item_div}>
                                    <span style={{marginRight: '5px'}} className={s.delete1}>чистий</span>
                                    <b>{item.price * item.size}</b>
                                    <span style={{marginLeft: '5px'}} className={s.delete1}> доларів</span>
                                </div>
                                <div className={s.item_val + ' ' + s.item_div}>
                                    <span style={{marginRight: '5px'}} className={s.delete1}>брутто</span>
                                    <b>{item.price * item.size}</b>
                                    <span style={{marginLeft: '5px'}} className={s.delete1}> доларів</span>
                                </div>
                                <div className={s.item_currency + ' ' + s.item_div}>
                                    долари
                                </div>
                                <div className={s.option_goods + ' ' + s.item_div}>...</div>
                            </div>
                        )
                    })
                }
                <div className={s.goods_sum}>
                    <div className={s.delete_item + ' ' + s.item_div}>
                        <AiOutlineDelete className={s.iconD} onClick={() => allClean()}/>
                        <span style={{marginRight: '5px'}} className={s.delete1}>Видалити все</span>
                    </div>
                    <div className={s.clean_all_item}>Видалити все</div>
                    <div className={s.name_goods_basket}></div>
                    <div className={s.priseN_goods}></div>
                    <div className={s.priseN_goods}></div>
                    <div className={s.priseN_goods}></div>
                    <div className={s.col_goods}></div>
                    <div className={s.item_clean + ' ' + s.item_div}>
                        <span style={{marginRight: '5px'}} className={s.delete1}>брутто</span>
                        <b>{sum}</b>
                        <span style={{marginLeft: '5px'}} className={s.delete1}> доларів</span>
                    </div>
                    <div className={s.item_val + ' ' + s.item_div}>
                        <span style={{marginRight: '5px'}} className={s.delete1}>брутто</span>
                        <b>{sum}</b>
                        <span style={{marginLeft: '5px'}} className={s.delete1}> доларів</span>
                    </div>
                    <div className={s.item_currency + ' ' + s.item_div}>
                        долари
                    </div>
                    <div className={s.option_goods}></div>
                </div>
            </div>

            <div className={s.div_goods_order}>
                <div className={s.div1}>
                    <div className={s.block1}>
                        <div className={s.div_input_block1}>
                            <p>Код знижки</p>
                            <input type="text" value={sale}
                                   onChange={(e) => setSale(e.target.value)} />
                        </div>
                    </div>
                    <button className={s.but1}>Обчислити</button>
                </div>
                <div className={s.div2}>
                    <div className={s.divUnder}>
                        <span>Ми доставимо Ваше замовлення в країни:</span>
                        <select>
                            <option value="Україна">Україна</option>
                            <option value="Польща">Польща</option>
                        </select>
                    </div>
                </div>
                <div className={s.div3}>
                    <div className={s.twins_div}>
                        <div className={s.div3_block1}>
                            <p><b>Доставка</b></p>
                            <div className={s.block3_1}>
                                <p><b>Способи доставки</b></p>
                                <select>
                                    <option value="Кур'єрська доставка">Кур'єрська доставка (24,60 злотих)</option>
                                </select>
                                <p><b>Запланована дата доставки</b></p>
                                <p>Доставка протягом 3 робочих днів</p>
                            </div>
                        </div>
                        <div className={s.div3_block1}>
                            <p><b>Оплата</b></p>
                            <div className={s.block3_1}>
                                <p><b>Методи оплати</b></p>
                                <select>
                                    <option value="платежу">Платіж (46,60 злотих)</option>
                                </select>
                                <img src="/other/ima.jpg" alt="Запланована дата платежу"/>
                                <p><b>Запланована дата платежу</b></p>
                                <p>45 днів</p>
                            </div>
                        </div>
                    </div>
                    <span>Виберіть платіжний канал</span>
                    <div className={s.block3_div4}>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                        <label>
                            <div className={s.div_image}>
                                <img alt='' src='/other/googlePay.svg'/>
                            </div>
                            <div className={s.name_pay}><b>Google Pay</b></div>
                        </label>
                    </div>
                    {isValidSet && <div className={s.div_pay}>
                        <div className={s.div_pay_one}>
                            <p>Відправка на вашу адресу</p>
                            <div>
                                <div className={s.but_update}>
                                    {!change && <button onClick={() => setChange(true)}>
                                        <FiEdit2/>
                                        <span>Інша адреса</span>
                                    </button>}
                                    {change && <button  onClick={handleSubmit2}>
                                        <AiOutlineCheck />
                                        <span>Підтвердити</span>
                                    </button>}
                                </div>
                                <div>
                                    <div className={s.div_input_address}>
                                        {
                                            radio === 1 ? <>
                                                    {!change && <p style={{margin: '5px 0'}}><b>{user.name}</b></p>}
                                                    {change && <input type='email' value={user.name} placeholder="ім'я" id='name10'
                                                                      onChange={e => setUser(prev => {
                                                                          return {...prev, name: e.target.value}
                                                                      })} />}
                                            </>
                                                : <>
                                                    {!change && <p style={{margin: '5px 0'}}><b>{user.company}</b></p>}
                                                    {change && <input type='text' value={user.company} placeholder="ім'я компанії" id='company10'
                                                                      onChange={e => setUser(prev => {
                                                                          return {...prev, company: e.target.value}
                                                                      })} />}
                                                </>
                                        }
                                        {!change && <p style={{margin: '5px 0'}}>{user.street} {user.numBud}/{user.numFlat}</p>}
                                        {change && <input type='text' value={user.street} placeholder='вулиця' id='street10'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, street: e.target.value}
                                                          })} />}
                                        {change && <input type='text' value={user.numBud} placeholder='номер будинку'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, numBud: e.target.value}})} />}
                                        {change && <input type='text' value={user.numFlat} placeholder='номер квартири'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, numFlat: e.target.value}
                                                          })} />}
                                        {!change && <p style={{margin: '5px 0'}}>{user.city}</p>}
                                        {change && <input type='text' value={user.city} placeholder='місто' id='city10'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, city: e.target.value}
                                                          })} />}
                                        {!change && <p style={{margin: '5px 0'}}>{user.country}</p>}
                                        {change && <input type='text' value={user.country} placeholder='країна' id='country10'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, country: e.target.value}
                                                          })} />}
                                    </div>
                                    <div className={s.divMail} style={change ? {width: '100%'} : undefined}>
                                        {!change && <LuMail />}
                                        {!change && <span>{user.email}</span>}
                                        {change && <input type='text' value={user.email} placeholder='пошта' id='email10'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, email: e.target.value}})} />}
                                    </div>
                                    <div className={s.divPhone} style={change ? {float: 'left', width: '100%'} : undefined}>
                                        {!change && <img src='/header/headphone.png' alt='phone'/>}
                                        {!change && <span>{user.phone}</span>}
                                        {change && <input type='text' value={user.phone} placeholder='телефон' id='phone10'
                                                          onChange={e => setUser(prev => {
                                                              return {...prev, phone: e.target.value}})} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.div_pay_one}>
                            <label className={s.label_radio2} onClick={() => setRadio3(1)}>
                                <input type='radio' name='name' className={s.inputHidden}/>
                                <span className={`${s.realRadio} ${radio3 === 1 ? s.realRadio2 : undefined}`}></span>
                                <span><b>розписка</b></span>
                            </label>
                            <label className={s.label_radio2} onClick={() => setRadio3(2)}>
                                <input type='radio' name='name' className={s.inputHidden}/>
                                <span className={`${s.realRadio} ${radio3 === 2 ? s.realRadio2 : undefined}`}></span>
                                <span><b>рахунок-фактура</b></span>
                            </label>
                            <div>
                                {radio3 === 1 && <label className={s.label_email2}>
                                    <span><b>Ідентифікаційний податковий номер</b></span>
                                    <input type='text'
                                           id='taxNumber'
                                           className={s.inputEmail2}
                                           value={taxNumber}
                                           onChange={e => setTaxNumber(e.target.value)}
                                    />
                                </label>}
                                {radio3 === 2 && <div className={s.factura}>
                                    {!change2 && <button onClick={() => setChange2(true)}>
                                        <FiEdit2/>
                                        <span>Інша адреса</span>
                                    </button>}
                                    {change2 && <button  onClick={handleSubmit3}>
                                        <AiOutlineCheck />
                                        <span>Підтвердити</span>
                                    </button>}

                                    {
                                        radio === 1 ? <>
                                                {!change2 && <p style={{margin: '5px 0'}}><b>{user3.name}</b></p>}
                                                {change2 && <input type='email' value={user3.name} placeholder="ім'я" id='name11'
                                                                  onChange={e => setUser3(prev => {
                                                                      return {...prev, name: e.target.value}
                                                                  })} />}
                                            </>
                                            : <>
                                                {!change2 && <p style={{margin: '5px 0'}}><b>{user3.company}</b></p>}
                                                {change2 && <input type='text' value={user3.company} placeholder="ім'я компанії" id='company11'
                                                                  onChange={e => setUser3(prev => {
                                                                      return {...prev, company: e.target.value}
                                                                  })} />}
                                            </>
                                    }
                                    {!change2 && <p style={{margin: '5px 0'}}>{user3.street} {user.numBud}/{user.numFlat}</p>}
                                    {change2 && <input type='text' value={user3.street} placeholder='вулиця' id='street11'
                                                      onChange={e => setUser3(prev => {
                                                          return {...prev, street: e.target.value}
                                                      })} />}
                                    {change2 && <input type='text' value={user3.numBud} placeholder='номер будинку'
                                                      onChange={e => setUser3(prev => {
                                                          return {...prev, numBud: e.target.value}})} />}
                                    {change2 && <input type='text' value={user3.numFlat} placeholder='номер квартири'
                                                      onChange={e => setUser3(prev => {
                                                          return {...prev, numFlat: e.target.value}
                                                      })} />}
                                    {!change2 && <p style={{margin: '5px 0'}}>{user3.city}</p>}
                                    {change2 && <input type='text' value={user3.city} placeholder='місто' id='city11'
                                                      onChange={e => setUser3(prev => {
                                                          return {...prev, city: e.target.value}
                                                      })} />}
                                    {!change2 && <p style={{margin: '5px 0'}}>{user3.country}</p>}
                                    {change2 && <input type='text' value={user3.country} placeholder='країна' id='country11'
                                                      onChange={e => setUser3(prev => {
                                                          return {...prev, country: e.target.value}
                                                      })} />}
                                </div>}
                            </div>
                        </div>
                    </div>}
                </div>
                <div className={s.div4}>
                    <div>
                        {isValidSet && <div className={s.div_add_file}>
                            <div>
                                <div className={s.block1_price2} onClick={startFileSelection}>
                                    <AiOutlinePaperClip/>
                                    Додати вкладення (макс. 5)
                                    <input className={s.input_file} id="file" type="file" name="file"
                                           accept=".csv, .doc, .docx, .jfif, .jpe, .jpeg, .jpg, .ods, .odt, .pdf, .txt, .xls, .xlsx"
                                           multiple onChange={handleFileSelect} ref={fileInputRef}/>
                                </div>
                                <div className={s.div_file}>
                                    {
                                        files?.map((item, index) => {
                                            // console.log(item);
                                            return <div className={s.file} key={item.name}>
                                                <BsCardImage />
                                                <span>{item.name}</span>
                                                <AiOutlineClose className={s.file_close}
                                                                onClick={() => deletePhoto(index)} />
                                            </div>
                                        })
                                    }
                                </div>
                                <div className={s.block1_price3}>
                                    <AiOutlineSave />
                                    Додайте повідомлення
                                </div>
                                <div className={s.div_area}>
                                    <textarea
                                        className={s.area}
                                        value={textarea}
                                        onChange={e => setTextarea(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>}
                        <div className={s.div4_block1}>
                            <div className={s.block1_text}>Чиста вартість замовлення</div>
                            <div className={s.block1_price} style={{color: '#ed1c24'}}>{sum} доларів</div>
                            <div className={s.block1_text}>Валова вартість замовлення</div>
                            <div className={s.block1_price}>{sum} доларів</div>
                            <div className={s.block1_text}>вартість ПДВ</div>
                            <div className={s.block1_price}>23%</div>
                        </div>
                        <div className={s.div4_block2}>
                            <div className={s.block1_text}>Вартість доставки</div>
                            <div className={s.block1_price}>24,60 гривень</div>
                            <div className={s.block1_text}>Вартість оплати</div>
                            <div className={s.block1_price}>0,00 гривень</div>
                            {!isValidSet && <div className={s.block1_text}>
                                <b style={{fontFamily: 'Ubuntu Regular, sans-serif'}}>Заплатити</b>
                            </div>}
                            {!isValidSet && <div className={s.block1_price}>
                                <b style={{fontFamily: 'Ubuntu Regular, sans-serif', fontSize: '1.3rem'}}>
                                    {sum} доларів
                                </b>
                            </div>}
                        </div>
                        {!isValidSet && <div className={s.div4_block3}>
                            <p className={s.p_div4}><b>Для виконання замовлення</b></p>
                            <p className={s.p2_div4}><b>увійдіть або створіть новий обліковий запис у магазині.</b></p>
                            <Link className={s.loginBut} href='/login'>авторизуватися</Link>
                            <p className={s.orP}>Або</p>
                            <Link className={s.registerBut} href='/register'>зареєструватися</Link>
                            <div className={s.divWithout}>
                                <p className={s.p_div4}><b>Бажаєте зробити покупку без реєстрації?</b></p>
                                <Link className={s.registerBut2} href='#' onClick={() => setOpen(true)}>Заповніть форму
                                    доставки</Link>
                            </div>
                        </div>}
                        {isValidSet && <div className={s.div_order}>
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
                                        <Link href='/' style={{color: 'red'}}> Правила</Link>
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
                            <small>
                                <span style={{color: '#EF5350'}}>* </span>
                                <b>Поля, позначені зірочкою, обов'язкові для заповнення</b>
                            </small>
                            <div>
                                <div style={{margin: '10px 0'}}>
                                    <div className={s.block1_text}>
                                        <b style={{
                                            fontFamily: 'Ubuntu Regular, sans-serif',
                                            fontSize: '17px'
                                        }}>Заплатити</b>
                                    </div>
                                    <div className={s.block1_price}>
                                        <b style={{fontFamily: 'Ubuntu Regular, sans-serif', fontSize: '1.3rem'}}>
                                            {sum} доларів
                                        </b>
                                    </div>
                                </div>
                                <button className={s.but_final} onClick={finalSubmit}>Замовляю і оплачую</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>

            {open && <div className={s.hidden_div}>
                <div className={s.div_form}>
                    <CgClose onClick={() => setOpen(false)} className={s.close_form}/>
                    <p className={s.titleForm}><b>Заповніть форму доставки</b></p>
                    <div>
                        <label className={s.label_radio} onClick={() => setRadio(1)}>
                            <input type='radio' name='business' className={s.inputHidden}/>
                            <span className={`${s.realRadio} ${radio === 1 ? s.realRadio2 : undefined}`}></span>
                            <span>Приватна особа</span>
                        </label>
                        <label className={s.label_radio} onClick={() => setRadio(2)}>
                            <input type='radio' name='business' className={s.inputHidden}/>
                            <span className={`${s.realRadio} ${radio === 2 ? s.realRadio2 : undefined}`}></span>
                            <span>Бізнес</span>
                        </label>
                        <div>
                            <div className={s.div_one}>
                                <p className={s.info_delivery}>Інформація Доставка</p>
                                <div>
                                    <div>
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Електронна пошта</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='email'
                                                   id='email'
                                                   className={s.inputEmail}
                                                   value={user.email}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, email: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Країна</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='country'
                                                   className={s.inputEmail}
                                                   value={user.country}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, country: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        {radio === 1 && <label className={s.label_email}>
                                            <span>
                                                <b>Ім'я та прізвище</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='name'
                                                   className={s.inputEmail}
                                                   value={user.name}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, name: e.target.value}
                                                   })}
                                            />
                                        </label>}
                                        {radio === 2 && <label className={s.label_email}>
                                            <span>
                                                <b>Назва компанії</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='company'
                                                   className={s.inputEmail}
                                                   value={user.company}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, company: e.target.value}
                                                   })}
                                            />
                                        </label>}
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Вулиця</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='street'
                                                   className={s.inputEmail}
                                                   value={user.street}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, street: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Місто</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='city'
                                                   className={s.inputEmail}
                                                   value={user.city}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, city: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        <div>
                                            <div className={s.number_div}>
                                                <label className={s.label_email}>
                                                <span>
                                                    <b>Номер будинку</b>
                                                    {/*<span style={{color: '#EF5350'}}>*</span>*/}
                                                </span>
                                                    <input type='text'
                                                           id='numBud'
                                                           className={s.inputEmail}
                                                           value={user.numBud}
                                                           onChange={e => setUser(prev => {
                                                               return {...prev, numBud: e.target.value}
                                                           })}
                                                    />
                                                </label>
                                            </div>
                                            <div className={s.number_div2}>
                                                <label className={s.label_email}>
                                                <span>
                                                    <b>Номер квартири</b>
                                                    {/*<span style={{color: '#EF5350'}}>*</span>*/}
                                                </span>
                                                    <input type='text'
                                                           id='numFlat'
                                                           className={s.inputEmail}
                                                           value={user.numFlat}
                                                           onChange={e => setUser(prev => {
                                                               return {...prev, numFlat: e.target.value}
                                                           })}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Номер телефону</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='phone'
                                                   className={s.inputEmail}
                                                   value={user.phone}
                                                   onChange={e => setUser(prev => {
                                                       return {...prev, phone: e.target.value}
                                                   })}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={s.div_two}>
                                <p className={s.info_delivery}>
                                    {radio2 === 1 ? "Реквізити квитанції" : 'Виставлення рахунків'}
                                </p>
                                <label className={s.label_radio} onClick={() => setRadio2(1)}>
                                    <input type='radio' name='business2' className={s.inputHidden}/>
                                    <span className={`${s.realRadio} ${radio2 === 1 ? s.realRadio2 : undefined}`}></span>
                                    <span><b>Я хочу отримати квитанцію</b></span>
                                </label>
                                <label className={s.label_radio} onClick={() => setRadio2(2)}>
                                    <input type='radio' name='business2' className={s.inputHidden}/>
                                    <span className={`${s.realRadio} ${radio2 === 2 ? s.realRadio2 : undefined}`}></span>
                                    <span><b>Я хочу отримати рахунок</b></span>
                                </label>
                                {radio2 === 1
                                    ? <div className={s.text_label}>
                                        <p>
                                            Якщо ви хочете отримати рахунок-фактуру для цієї квитанції в майбутньому,
                                            надайте свій ідентифікаційний податковий номер
                                        </p>
                                        <label className={s.label_email}>
                                            <span><b>Ідентифікаційний податковий номер</b></span>
                                            <input type='text'
                                                   id='taxNumber'
                                                   className={s.inputEmail}
                                                   value={taxNumber}
                                                   onChange={e => setTaxNumber(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    : <div className={s.text_label}>
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Країна</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='country2'
                                                   className={s.inputEmail}
                                                   value={user2.country}
                                                   onChange={e => setUser2(prev => {
                                                       return {...prev, country: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        <label className={s.label_email}>
                                            <span><b>Ідентифікаційний податковий номер</b></span>
                                            <input type='text'
                                                   id='taxNumber2'
                                                   className={s.inputEmail}
                                                   value={taxNumber}
                                                   onChange={e => setTaxNumber(e.target.value)}
                                            />
                                        </label>
                                        {radio === 1 && <label className={s.label_email}>
                                            <span>
                                                <b>Ім'я та прізвище</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='name2'
                                                   className={s.inputEmail}
                                                   value={user2.name}
                                                   onChange={e => setUser2(prev => {
                                                       return {...prev, name: e.target.value}
                                                   })}
                                            />
                                        </label>}
                                        {radio === 2 && <label className={s.label_email}>
                                            <span>
                                                <b>Назва компанії</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='company2'
                                                   className={s.inputEmail}
                                                   value={user2.company}
                                                   onChange={e => setUser2(prev => {
                                                       return {...prev, company: e.target.value}
                                                   })}
                                            />
                                        </label>}
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Вулиця</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='street2'
                                                   className={s.inputEmail}
                                                   value={user2.street}
                                                   onChange={e => setUser2(prev => {
                                                       return {...prev, street: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        <label className={s.label_email}>
                                            <span>
                                                <b>Місто</b> <span style={{color: '#EF5350'}}>*</span>
                                            </span>
                                            <input type='text'
                                                   id='city2'
                                                   className={s.inputEmail}
                                                   value={user2.city}
                                                   onChange={e => setUser2(prev => {
                                                       return {...prev, city: e.target.value}
                                                   })}
                                            />
                                        </label>
                                        <div>
                                            <div className={s.number_div}>
                                                <label className={s.label_email}>
                                                <span>
                                                    <b>Номер будинку</b>
                                                    {/*<span style={{color: '#EF5350'}}>*</span>*/}
                                                </span>
                                                    <input type='text'
                                                           id='numBud2'
                                                           className={s.inputEmail}
                                                           value={user2.numBud}
                                                           onChange={e => setUser2(prev => {
                                                               return {...prev, numBud: e.target.value}
                                                           })}
                                                    />
                                                </label>
                                            </div>
                                            <div className={s.number_div2}>
                                                <label className={s.label_email}>
                                                <span>
                                                    <b>Номер квартири</b>
                                                    {/*<span style={{color: '#EF5350'}}>*</span>*/}
                                                </span>
                                                    <input type='text'
                                                           id='numFlat2'
                                                           className={s.inputEmail}
                                                           value={user2.numFlat}
                                                           onChange={e => setUser2(prev => {
                                                               return {...prev, numFlat: e.target.value}
                                                           })}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className={s.div_tree}>
                                <button className={s.button_tree} onClick={handleSubmit}>Збережіть дані</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default Page;