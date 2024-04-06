import React from "react";

const Table = ({ data }) => {
  return (
    <div className="table-responsive rounded-lg border-2 sm:m-8 m-2 shadow-md p-5 flex justify-center items-center overflow-x-auto ">
      <table className="table table-striped ">
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
            <tr key={item.id} className="border-gray-300 border-b-2 h-10">
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
  );
};

export default Table;
