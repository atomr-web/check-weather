import React from "react";

function TimesItem({
    dt_txt,
    icon,
    main,
    temp,
    feels_like,
    pressure,
    humidity,
}) {
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className="times__item">
            <div className="times-item__title">{dt_txt}</div>
            <div className="times__degrees">
                <div className="times__icon">
                    <img src={iconUrl} alt={main} title={main} />
                </div>
                <div className="times__val">{temp} °F</div>
            </div>
            <div className="times-item__table">
                <div className="times-item-table__item">
                    <div className="times-item-table__name">
                        Чувствуется как
                    </div>
                    <div className="times-item-table__val">{feels_like} °F</div>
                </div>
                <div className="times-item-table__item">
                    <div className="times-item-table__name">Давление</div>
                    <div className="times-item-table__val">{pressure} hPa</div>
                </div>
                <div className="times-item-table__item">
                    <div className="times-item-table__name">Влажность</div>
                    <div className="times-item-table__val">{humidity}%</div>
                </div>
            </div>
        </div>
    );
}

export default TimesItem;
