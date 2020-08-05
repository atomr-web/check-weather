import React from "react";

function Pagination({ pager, setPage }) {
    return (
        <div className="times-pagination">
            <button
                className={pager?.currentPage === 1 ? "disabled" : ""}
                onClick={() => setPage(pager.currentPage - 1)}
            >
                Prev
            </button>
            {pager?.pages.map((i, idx) => (
                <button
                    key={idx}
                    title={i.dt_txt}
                    className={pager?.currentPage === i.id ? "active" : ""}
                    onClick={() => setPage(i.id)}
                >
                    {i?.id}
                </button>
            ))}
            <button
                className={
                    pager?.currentPage === pager?.totalPages ? "disabled" : ""
                }
                onClick={() => setPage(pager.currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
