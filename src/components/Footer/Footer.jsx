import React from "react";
import s from "../Footer/Footer.module.css";

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                
            </div>
            <div className={s.description}>
                Finances, Taxes & Law Assistance. (c) 2008-{new Date().getFullYear()}
            </div>
            <div className={s.contact}>
                <a href="tel:+380563757434">+38 (056) 375-74-34</a>
            </div>    
        </div>
    )
}

export default Footer;