import React from "react";
import Loading from "./Loading";

function MainInfo({ isLoaded, curWeather, nowDate }) {
    const name = curWeather.name;
    const temperature = curWeather.main?.temp;
    const icon = curWeather.weather && curWeather.weather[0]?.icon;
    const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const iconTitle = curWeather.weather && curWeather.weather[0].main;
    const feels_like = curWeather.main?.feels_like;
    const pressure = curWeather.main?.pressure;
    const humidity = curWeather.main?.humidity;

    return (
        <section className="main-info">
            <div className="container">
                <div className="main-info__city">{name}</div>
                <div className="main-info__date">{nowDate}</div>
                <div className="main-info__degrees">
                    <div className="main-info__icon">
                        <img src={iconSrc} alt={iconTitle} title={iconTitle} />
                    </div>
                    <div className="main-info__val">{temperature} °F</div>
                </div>
                <div className="main-info__table">
                    <div className="main-info-table__item">
                        <div className="main-info-table__name">
                            Чувствуется как
                        </div>
                        <div className="main-info-table__val">
                            {feels_like} °F
                        </div>
                    </div>
                    <div className="main-info-table__item">
                        <div className="main-info-table__name">Давление</div>
                        <div className="main-info-table__val">
                            {pressure} hPa
                        </div>
                    </div>
                    <div className="main-info-table__item">
                        <div className="main-info-table__name">Влажность</div>
                        <div className="main-info-table__val">{humidity}%</div>
                    </div>
                </div>
            </div>
            {!isLoaded && <Loading />}
        </section>
    );
}

export default MainInfo;
