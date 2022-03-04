import React from "react";
import s from "../Team/Team.module.css";
import l from "../../media/l.png";
import m from "../../media/m.png";

const Team = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.team}>
          <div className={s.teamcontent}>
                <h2>Команда</h2>
                <p>Досвід роботи кожного з керуючих партнерів понад 14 років</p>
          </div>
          <div className={s.teamphoto}>
            <div className={s.partner}>
                <img src={l} alt='l'/>
                <div className={s.partner_descr}>
                  <p><strong>Ліна Новікова</strong> керуючий партнер</p>
                </div>
            </div>
            <div className={s.partner}>
                <img src={m} alt='m'/>
                <div className={s.partner_descr}>
                  <p><strong>Маріанна Бєлкіна</strong> керуючий партнер</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Team;
