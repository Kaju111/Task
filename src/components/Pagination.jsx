import React from "react";

const Pagination = ({
  totalEntries,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalEntries / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    onPageSizeChange(newSize);
  };

  return (
    <div className="pagination flex flex-row gap-96 mt-3 px-8 mb-6">
      <span>
        Page Size:{" "}
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="border py-2 px-3 rounded-lg cursor-pointer"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </span>
      <span>
        Page:
        <button
          className="border-2 py-2 px-3 rounded-lg cursor-pointer border-gray-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={
              page === currentPage
                ? "border-2 py-2 px-3 rounded-lg cursor-pointer border-blue-600 "
                : "border-2 py-2 px-3 rounded-lg cursor-pointer border-gray-300"
            }
          >
            {page}
          </button>
        ))}
        <button
          className="border-2 py-2 px-3 rounded-lg cursor-pointer border-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </span>
    </div>
  );
};

export default Pagination;
