import React from "react";
import TimesItem from "./TimesItem";
import Pagination from "./Pagination";
import Loading from "./Loading";

function Times({ forecastPaginate, item, pager, setPage }) {
    return (
        <section className="times">
            {item !== undefined ? (
                <div className="container">
                    <div className="times__title">По времени на 5 дней</div>
                    <TimesItem
                        activeItem={item}
                        key={item?.dt}
                        dt={item?.dt}
                        dt_txt={item?.dt_txt}
                        icon={item?.weather && item?.weather[0].icon}
                        main={item?.weather && item?.weather[0].main}
                        temp={item?.main?.temp}
                        feels_like={item?.main?.feels_like}
                        pressure={item?.main?.pressure}
                        humidity={item?.main?.humidity}
                    />
                    <Pagination
                        forecastPaginate={forecastPaginate}
                        pager={pager}
                        setPage={setPage}
                    />
                </div>
            ) : (
                <Loading />
            )}
        </section>
    );
}

export default Times;
