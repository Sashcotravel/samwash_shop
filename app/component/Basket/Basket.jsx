"use client"

import s from './basket.module.css';
import {useStore} from "@/store/store";
import {useState} from "react";
import Image from "next/image";
import Link from "next-intl/link";


function Basket() {

    const [openWin, setOpenWin] = useState(false)

    const goods = useStore(store => store.goods)
    const sum = useStore(store => store.sum)

    const open = () => {
        if(openWin){
            setOpenWin(false)
        } else {
            setOpenWin(true)
        }
    }


    return (<>
        <div className={s.basket} onClick={open}>
            <Image src='/header/basket.png' alt='search' width={48} height={48} />
            {goods.length !== 0 && <span className={s.goodsLength}>{goods.length}</span>}
            <p>{sum} гривень</p>
        </div>

        <div className={s.div_goods} id='goods' style={openWin ? {display: 'block'} : {display: 'none'}}>
            <p onClick={() => setOpenWin(false)} className={s.close}>X</p>
            {sum === 0 ? <p className={s.text}>
                <Image src='/header/basket-gray.png' alt='search' width={64} height={64} />
                Ваш кошик порожній</p>
                : <div className={s.basket_items}>
                    <div className={s.basket_name}>
                        <p>
                            <Image src='/header/registration.png' alt='search' width={20} height={20} />
                            Кошик:
                        </p>
                    </div>
                    <div className={s.div_for_goods}>
                        {
                            goods?.map(item => {
                                // console.log(item)
                                return (
                                    <div key={item.name}>
                                        <Link href={item.link}>
                                            <Image src={item.img} alt={item.name} width={200} height={200} />
                                            <div>
                                                <p>{item.name}</p>
                                                <p>{item.number} x <b style={{fontWeight: 700}}>{item.prise} грн</b></p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className={s.sum}>Кількість товару: {goods.length} <span>{sum} гривень</span></p>
                    <Link href='/basket' className={s.but_basket} onClick={() => setOpenWin(false)}>
                        <Image src='/header/basket-gray.png' alt='search' width={30} height={30} />
                        До кошика
                    </Link>
                </div>
            }
        </div>
    </>);
}

export default Basket;