import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(2);

  const indexOfLastItem = (currentPage + 1) * dataPerPage;
  const indexOfFirstItem = indexOfLastItem - dataPerPage;

  //funciton for fetch the data
  async function GetData() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (response.ok) {
        const data = await response.json();
        setUserData(data.users);
      }
    } catch (error) {
      console.error(error);
    }
  }
  // useEffect for get the feched data
  useEffect(() => GetData, []);

  //
  const handlePageNumber = (index) => {
    setCurrentPage(index);
  };
  const nextPage = () => {
    if (currentPage < userData.length / dataPerPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const priviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(currentPage);
  return (
    <>
      <div className="container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {userData
                .slice(indexOfFirstItem, indexOfLastItem)
                .map((details, index) => {
                  return (
                    <tr key={index}>
                      <td>{details.id}</td>
                      <td>{details.firstName}</td>
                      <td>{details.email}</td>
                      <td>{details.gender}</td>
                      <td>{details.phone}</td>
                      <td>{details.age}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <a href="#" onClick={() => priviousPage()}>
            &laquo;
          </a>
          {[...Array(userData.length / dataPerPage)].map((_, index) => (
            <a
              className={currentPage === index ? "active" : ""}
              href="#"
              key={index}
              onClick={() => handlePageNumber(index)}
            >
              {index + 1}
            </a>
          ))}
          <a href="#" onClick={() => nextPage()}>
            &raquo;
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
