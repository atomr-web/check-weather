import React, { useEffect } from "react";
import "./assets/css/main.css";
import { useFetchData, usePaginate } from "./hooks";
import { getNowDate } from "./helpers";
import MainInfo from "./components/MainInfo";
import Form from "./components/Form";
import Times from "./components/Times";

function App() {
    const [
        setApiKey,
        apiKey,
        curWeather,
        forecastItems,
        isLoaded,
        errText,
        setErrText,
    ] = useFetchData(null);

    const [setItemsForPaginate, setPage, pager, activeItem] = usePaginate();

    const inputRef = React.createRef();
    const nowDate = getNowDate();

    useEffect(() => {
        const storageKey = localStorage.getItem("key");
        if (storageKey !== null) {
            setApiKey(storageKey);
        }

        if (isLoaded) {
            setItemsForPaginate(forecastItems);
        }
    }, [setApiKey, forecastItems, isLoaded, setItemsForPaginate]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setApiKey(inputRef.current.value);
    };

    const handleChangeInput = () => setErrText("");

    return (
        <main className="App">
            <MainInfo
                isLoaded={isLoaded}
                curWeather={curWeather}
                nowDate={nowDate}
            />

            <Times item={activeItem} pager={pager} setPage={setPage} />

            {localStorage.getItem("key") === null && (
                <Form
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                    inputRef={inputRef}
                    errText={errText}
                    apiKey={apiKey}
                />
            )}
        </main>
    );
}

export default App;
