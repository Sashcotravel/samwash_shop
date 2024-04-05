import React, { useEffect, useState } from 'react';
import s from './TopButton.module.css'


function TopButton({index}) {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    return (
        <div>
            {showScrollButton && (
                <button className={s.scroll_button} onClick={scrollToTop} style={{zIndex: index}}>
                    <img src='/other/up.svg' alt='вверх' width={40} height={40} onClick={scrollToTop} />
                </button>
            )}
        </div>
    );
}

export default TopButton;