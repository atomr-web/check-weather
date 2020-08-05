import { useEffect, useState, useCallback } from "react";
import { getPage } from "../helpers";

const currentUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Chelyabinsk&appid=";
const forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=Chelyabinsk&appid=";

export const useFetchData = (key) => {
    const [apiKey, setApiKey] = useState(key);
    const [forecastItems, setForecastItems] = useState([]);
    const [curWeather, setCurWeather] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errText, setErrText] = useState("");

    useEffect(() => {
        if (apiKey !== null) {
            Promise.all([
                fetch(currentUrl + apiKey),
                fetch(forecastUrl + apiKey),
            ])
                .then(([currentRes, forecastRes]) => {
                    if (currentRes.ok && forecastRes.ok) {
                        localStorage.setItem("key", "" + apiKey);
                        Promise.all([
                            currentRes.json(),
                            forecastRes.json(),
                        ]).then(([currentResult, forecastResult]) => {
                            setCurWeather(currentResult);
                            setForecastItems(forecastResult.list);
                            setIsLoaded(true);
                        });
                    } else {
                        setErrText(
                            `Проверьте API ключ. ${currentRes.statusText}`
                        );
                        localStorage.removeItem("key");
                        setApiKey(null);
                        setIsLoaded(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [apiKey]);

    return [
        setApiKey,
        apiKey,
        curWeather,
        forecastItems,
        isLoaded,
        errText,
        setErrText,
    ];
};

export const usePaginate = (items) => {
    const [itemsForPaginate, setItemsForPaginate] = useState(items);
    const [pager, setPager] = useState();
    const [activeItem, setActiveItem] = useState();

    const initPage = 1;

    const setPage = useCallback(
        (page, items = itemsForPaginate) => {
            if (page < 1 || page > pager?.totalPages) {
                return;
            }

            let updatePager = getPage(items?.length, page, itemsForPaginate);
            setPager(updatePager);
            setActiveItem(updatePager.pages.find((i) => i.id === page));

            return pager;
        },
        [itemsForPaginate]
    );

    useEffect(() => {
        setItemsForPaginate(
            items?.map((i, idx) => {
                return {
                    id: idx,
                    dt: i.dt,
                };
            })
        );
    }, [items]);

    useEffect(() => {
        if (itemsForPaginate !== undefined) {
            setPage(initPage);
        }
    }, [itemsForPaginate, setPage]);

    return [setItemsForPaginate, setPage, pager, activeItem];
};
