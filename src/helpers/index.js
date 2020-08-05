export const getNowDate = () => {
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    const mounts = [
        "декабря",
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
    ];
    const now = new Date();
    const dateString = `${days[now.getDay()]}, ${now.getDate()} ${
        mounts[now.getMonth()]
    }, ${now.getFullYear()}`;

    return dateString;
};

export const getPage = (totalItems, currPage, forecastPaginate) => {
    currPage = currPage || 1;

    const totalPages = totalItems;

    let startPage;
    let endPage;

    if (totalPages <= 4) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currPage <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (currPage + 2 >= totalPages) {
            startPage = totalPages - 4;
            endPage = totalPages;
        } else {
            startPage = currPage - 2;
            endPage = currPage + 2;
        }
    }

    const startIndex = currPage - 1;
    const endIndex = Math.min(startIndex - 1, totalPages - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
        (i) => startPage + i
    );
    pages.map((i, idx) => (pages[idx] = { ...forecastPaginate[i - 1], id: i }));

    return {
        currentPage: currPage,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
    };
};
