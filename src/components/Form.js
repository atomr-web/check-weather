import React from "react";

function Form({handleSubmitForm, inputRef, errText}) {
    return (
        <div className="form-container">
            <form action="#" onSubmit={handleSubmitForm}>
                <div className="form__title">Введите API ключ</div>
                <div className="form__alert show">{errText}</div>
                <input
                    ref={inputRef}
                    type="text"
                    className={errText.length ? "invalid" : ""}
                    required
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default Form;
