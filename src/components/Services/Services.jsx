import React from "react";
import s from "../Services/Services.module.css";

const Services = () => {
  return (
    <div className={s.wrapper}>

        <div className={s.services}>
            <div className={s.header}>
                <h2>Послуги FTLA</h2>
                <p>Юридичні послуги на проектній основі та у форматі абонентскої плати</p>
            </div>
            <div className={s.serviceitems}>
                <div className={s.item}>
                    <p><strong>Судове право</strong></p>
                    <ul>
                        <li>Партнерські справи</li>
                        <li>Податкові справи</li>
                        <li>Пайові внески</li>
                        <li>Господарські позови</li>
                        <li>Представництво в судах</li>
                    </ul>
                </div>
                <div className={s.item}>
                    <p><strong>Податкове право</strong></p>
                    <ul>
                        <li>Декларації фізичних осіб</li>
                        <li>Податкові накладні</li>
                    </ul>
                </div>
                <div className={s.item}>
                    <p><strong>Нетипові ситуації</strong></p>
                    <ul>
                        <li>Зняття арештів з майна</li>
                        <li>Зняття арештів з рахунків</li>
                        <li>Обшуки та допити</li>
                        <li>Кримінальні справи</li>
                    </ul>
                </div>
                <div className={s.item}>
                    <p><strong>Супровід роботи</strong></p>
                    <ul>
                        <li>Відповіді на запити</li>
                        <li>Страхування</li>
                        <li>Фрахти</li>
                        <li>Документи на землю</li>
                        <li>Документи на нерухомість</li>
                        <li>Корпоративні інвестфонди</li>
                        <li>Майнові права</li>
                        <li>Корпоративні права</li>
                        <li>Кадрові договори</li>
                    </ul>
                </div>
                <div className={s.item}>
                    <p><strong>Перевірки</strong></p>
                    <ul>
                        <li>Екологічні</li>
                        <li>Охорона праці</li>
                        <li>Посадові інструкції</li>
                        <li>Податкові перевірки</li>
                    </ul>
                </div>
            </div>
            
        </div>

    </div>
  );
};

export default Services;
