import React from "react";
import s from "../Team/Team.module.css";
import partner1 from "../../media/partner1.png";
import partner2 from "../../media/partner2.png";

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
                <img src={partner1} alt='partner1'/>
                <div className={s.partner_descr}>
                  <p><strong>Ліна Новікова</strong> керуючий партнер</p>
                </div>
            </div>
            <div className={s.partner}>
                <img src={partner2} alt='partner2'/>
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
