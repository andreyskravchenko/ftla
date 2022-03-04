import React from "react";
import s from "../Header/Header.module.css";

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logo_container}>
                
            </div>
            <div className={s.contacts_container}>
                <div className={s.contacts}>
                    <p>Дніпро, вул. Барикадна 15А, б. 3, оф. 602</p>
            
            <p><a href="mailto:info@ftla.com.ua">info@ftla.com.ua</a></p>
                <p><a href="tel:+380563757434">+38 (056) 375-74-34</a></p>
                </div>
            </div>    
        </div>
    )
}

export default Header;

