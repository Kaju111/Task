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
    <div className="table-responsive h-svh   rounded-lg border-2 sm:m-8 m-2 shadow-md p-5 flex flex-col justify-center items-center  overflow-scroll ">
      <div className=" flex flex-row items-center text-[10px] mb-10 ">
        <h1 className="text-lg font-bold mr-8">Transactions</h1>
        <span className=" text-[10px] items-center text-sm border-gray-400 flex flex-row">
          <h1 className="border rounded-l-lg border-gray-400 p-1">1 DAY</h1>
          <h1 className="border border-gray-400 p-1">WEEK</h1>
          <h1 className="border border-gray-400 p-1">MONTH</h1>
          <h1 className="border border-gray-400 p-1">YEAR</h1>
          <h1 className="border rounded-r-lg border-gray-400 p-1">ALL TIME</h1>
        </span>
        <span className="flex ml-4 flex-row items-center border rounded-lg p-2 border-gray-400">
          <h1>09.12.2021</h1>
          <FaAngleRight />
          <h1>12.8.2023</h1>
        </span>
        <span className="flex flex-row items-center border rounded-lg border-gray-400 mx-2">
          <input
            type="search"
            placeholder="Search"
            className="rounded-lg p-2 "
          />
          <IoSearch className="h-6 w-6" />
        </span>
        <select className="w-[200px] p-2 mr-[200px] rounded-lg bg-white border border-gray-400">
          <option>staus</option>
          <option>option2</option>
          <option>option3</option>
        </select>
        <button
          onClick={handleDownloadCSV}
          className="flex flex-row items-center ml-8 border-2 border-gray-300 py-2 px-2 rounded-xl hover:bg-gray-300"
        >
          Download CSV
          <h1>
            <MdFileDownload className="w-6 h-6" />
          </h1>
        </button>
      </div>
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
