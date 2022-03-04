import React from "react";
import s from "../Hero/Hero.module.css";
import client1 from "../../media/client.png";

const Hero = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.heroscreen}>
          <div className={s.herotext}>
            <h1>Юридичний консалтінг з корпоративного права</h1>
            <p>
              З 2008 року ми допомогли цим компаніям вдало вирішити більше ніж
              1342 юридичних питання з корпоративного права
            </p>
          </div>
          <div className={s.clients_logo}>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
            <img src={client1} alt="smth"></img>
          </div>
        </div>
    </div>
  );
};

export default Hero;
