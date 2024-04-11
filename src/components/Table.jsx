import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import Pagination from "./Pagination";

const Table = ({
  data,
  totalEntries,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
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
    <div className="table-container rounded-lg border-2 sm:m-8 m-2 shadow-md p-5 flex flex-col justify-center items-center overflow-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center text-[10px] mb-10 ">
        <h1 className="text-lg font-bold mr-8">Transactions</h1>
        <div className="flex flex-wrap justify-center items-center text-sm border-gray-400 space-x-2 mb-2 lg:mb-0">
          <div className="border rounded-l-lg border-gray-400 p-2">1 DAY</div>
          <div className="border border-gray-400 p-2">WEEK</div>
          <div className="border border-gray-400 p-2">MONTH</div>
          <div className="border border-gray-400 p-2">YEAR</div>
          <div className="border rounded-r-lg border-gray-400 p-2">
            ALL TIME
          </div>
        </div>
        <div className="flex items-center lg:ml-4 mt-4 lg:mt-0">
          <div className="flex items-center border rounded-lg p-3 border-gray-400">
            <h1>09.12.2021</h1>
            <FaAngleRight className="mx-2" />
            <h1>12.8.2023</h1>
          </div>
          <div className="flex flex-row items-center border rounded-lg border-gray-400 ml-2 mt-4 lg:mt-0">
            <input
              type="search"
              placeholder="Search"
              className="rounded-lg p-3"
            />
            <IoSearch className="h-6 w-6 ml-2" />
          </div>
          <select className="w-full lg:w-auto p-3 ml-2 mt-4 lg:mt-0 rounded-lg bg-white border border-gray-400">
            <option>status</option>
            <option>option2</option>
            <option>option3</option>
          </select>
          <button
            onClick={handleDownloadCSV}
            className="flex items-center border-2 border-gray-300 py-2 px-2 rounded-xl hover:bg-gray-300 ml-2 mt-4 lg:mt-0"
          >
            Download CSV
            <MdFileDownload className="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>

      <div className="overflow-scroll max-h-[600px]">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Country</th>
              <th>Language</th>
              <th>Link</th>
              <th>Pages</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-gray-300 border-b-2 h-16 even:bg-gray-100 odd:bg-white'"
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.country}</td>
                <td>{item.language}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title} Link
                  </a>
                </td>
                <td>{item.pages}</td>
                <td>{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalEntries={totalEntries}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};

export default Table;
