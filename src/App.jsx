import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { MdFileDownload } from "react-icons/md";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // State variable to track fetching status

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);

  const fetchData = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await fetch(
        `http://fe-test.dev.rampnow.io:8000/api/books?page=${currentPage}&limit=${pageSize}`
      );
      const jsonData = await response.json();
      setData(jsonData.data);
      setTotalEntries(jsonData.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDownloadCSV = () => {
    // Convert data to CSV format
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => Object.values(row).join(",")).join("\n");
    // Create a temporary anchor element to trigger the download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "books.csv");
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Cleanup
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <h1 className="font-bold text-xl  mt-3 flex flex-col justify-center items-center">
        Books Table
      </h1>
      <button
        onClick={handleDownloadCSV}
        className="flex flex-row items-center ml-8 border-2 border-gray-300 py-3 px-2 rounded-xl hover:bg-gray-300"
      >
        Download CSV
        <h1>
          <MdFileDownload />
        </h1>
      </button>
      {loading ? (
        <Loader /> // Render the Loader component when data is being fetched
      ) : (
        <>
          <Table data={data} />
          <Pagination
            totalEntries={totalEntries}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
