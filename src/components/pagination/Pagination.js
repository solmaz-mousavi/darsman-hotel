import React, { useState } from "react";
import { CiViewColumn, CiViewTable, CiGrid41 } from "react-icons/ci";
import Table from "./Table";
import RowGridView from "./RowGridView";
import "./pagination.css";

export default function Pagination({
  body,
  title,
  actions,
  photoes,
  onlyTable,
}) {
  const [view, setView] = useState("table");
  const limit = 10;
  const pageNumbers = Array.from(Array(Math.ceil(body.length / limit)).keys());
  const [page, setPage] = useState(1);
  const endIndex = page * limit;
  const startIndex = endIndex - limit;
  const data = body.slice();
  const paginatedData = data.slice(startIndex, endIndex);

  const setPageNum = (event) => {
    setPage(Number(event.target.innerHTML));
  };

  return (
    <>
      {!onlyTable && (
        <div className="view-container">
          <CiViewTable
            className="view-item"
            title="نمایش جدولی"
            onClick={() => setView("table")}
          />
          <CiViewColumn
            className="view-item"
            title="نمایش افقی"
            onClick={() => setView("row")}
          />
          <CiGrid41
            className="view-item"
            title="نمایش برگه ای"
            onClick={() => setView("grid")}
          />
        </div>
      )}

      {view === "table" ? (
        <Table title={title} body={paginatedData} actions={actions} />
      ) : (
        <RowGridView
          title={title}
          body={paginatedData}
          actions={actions}
          photoes={photoes}
          view={view}
        />
      )}

      <div className="pagination-container">
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={`pageNumber ${pageNumber + 1 === page ? "active" : ""}`}
            onClick={(event) => setPageNum(event)}
          >
            {pageNumber + 1}
          </div>
        ))}
      </div>
    </>
  );
}
