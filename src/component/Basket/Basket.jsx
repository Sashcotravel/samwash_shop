import s from './basket.module.css';
import {useStore} from "../../store/store.js";
import {useState} from "react";
import {Link} from "react-router-dom";


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
            <img src='/header/basket.png' alt='search' />
            {goods.length !== 0 && <span className={s.goodsLength}>{goods.length}</span>}
            <p>{sum} гривень</p>
        </div>

        <div className={s.div_goods} id='goods' style={openWin ? {display: 'block'} : {display: 'none'}}>
            <p onClick={() => setOpenWin(false)} className={s.close}>X</p>
            {sum === 0 ? <p className={s.text}>
                <img src='/header/basket-gray.png' alt='search'/>
                Ваш кошик порожній</p>
                : <div className={s.basket_items}>
                    <div className={s.basket_name}>
                        <p>
                            <img src='/header/registration.png' alt='search'/>
                            Кошик:
                        </p>
                    </div>
                    <div className={s.div_for_goods}>
                        {
                            goods?.map(item => {
                                // console.log(item)
                                return (
                                    <div key={item.name}>
                                        <Link to={item.link}>
                                            <img src={item.img} alt={item.name} />
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
                    <Link to='/basket' className={s.but_basket} onClick={() => setOpenWin(false)}>
                        <img src='/header/basket-gray.png' alt='search'/>
                        До кошика
                    </Link>
                </div>
            }
        </div>
    </>);
}

export default Basket;