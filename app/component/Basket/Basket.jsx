"use client"

import s from './basket.module.css';
import {useStore} from "@/store/store";
import {useState} from "react";
import Image from "next/image";
import Link from "next-intl/link";


function Basket() {

    const [openWin, setOpenWin] = useState(false)

    const order = useStore(store => store.order)
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
            {order.length !== 0 && <span className={s.goodsLength}>{order.length}</span>}
            <p>{sum} гривень</p>
        </div>

        <div className={s.div_goods} id='goods' style={openWin ? {display: 'block'} : {display: 'none'}}>
            <p onClick={() => setOpenWin(false)} className={s.close}>X</p>
            {sum === 0 ? <p className={s.text}>
                <Image src='/header/basket-gray.png' alt='search' width={26} height={26} />
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
                            order?.map((item, index) => {
                                // console.log(item)
                                return (
                                    <div key={index}>
                                        <Link href={'/product/' + item.slug}>
                                            <Image alt={item.catalog_goods_content[0].title}
                                                   width={200} height={200}
                                                src={item.catalog_goods_images.length === 0 ? '/other/noImage.jpg'
                                                : 'https://cb.samwash.ua/storage/' + item.catalog_goods_images[2].path
                                            }/>
                                            <div>
                                                <p>{item.catalog_goods_content[0].title}</p>
                                                <p>{item.size} x <b style={{fontWeight: 700}}>{item.price} грн</b></p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className={s.sum}>Кількість товару: {order.length} <span>{sum} гривень</span></p>
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