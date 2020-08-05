import React from "react";
import loadingIcon from "../assets/img/loading.svg";

function Loading() {
    return (
        <div className="loading">
            <img alt="loading" src={loadingIcon} />
        </div>
    );
}

export default Loading;
