import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import { MdFileDownload } from "react-icons/md";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import Toggle from "./components/Toggle";

function App() {
  const [data, setData] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // State variable to track fetching status
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

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

  return (
    <div className="">
      {loading ? (
        <Loader /> // Render the Loader component when data is being fetched
      ) : (
        <>
          <div className="flex">
            {sidebarVisible && <Sidebar />}
            <h1>
              <Toggle onClick={toggleSidebar} />
            </h1>
            <Table
              data={data}
              totalEntries={totalEntries}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
