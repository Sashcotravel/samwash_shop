"use client"

import s from '../../[locale]/filter/filter.module.css';


function Label({nameRadio, title, click, value}) {
    return (
        <label className={s.sidebarLabel}>
            <input type="radio" name={nameRadio}
                   value={value}
                   onClick={click} />
            <span className={s.checkmark}></span>{title}
        </label>
    );
}

export default Label;