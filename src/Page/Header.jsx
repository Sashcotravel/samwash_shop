import s from './Header.module.css'
import {Link} from "react-router-dom";
import svg from '/public/icon-header.png'


const Header = () => {

    return (
        <div className={s.mainDiv}>
            <div style={{marginTop: '5px'}}>
                <Link to='/' className={s.logoLink}>
                    <img src={svg} className={s.logoImg} alt="logo" />
                </Link>
            </div>

        </div>
    )
}

export default Header