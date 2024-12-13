import React, { useState, useEffect } from 'react';
import { getAllCountries } from '../allApi';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getAllCountries();
    console.log(result);
    if (result.status === 200) {
      setData(result.data);
    }
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='container-fluid p-5'>
        {
          data.length > 0 ?
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    currentItems.map((item) => (
                      <tr key={item.name.common}>
                        <td>
                          <img src={item.flags.png} height={'50px'} alt={`${item.name.common} flag`} />
                        </td>
                        <td>{item.name.common}</td>
                        <td>
                          <Link to={`/cnt/${item.name.common}`} className='btn btn-primary'>More Details</Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="pagination">
                <nav>
                  <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li 
                        key={index + 1} 
                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                      >
                        <button 
                          className="page-link" 
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </>
            :
            <h4>No Countries</h4>
        }
      </div>
    </>
  );
}

export default Home;
