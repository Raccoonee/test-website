import { useState, useEffect } from "react";
import axios from "axios"
import "./DataTable.css"

function PageRefresh() {
  window.location.reload();
}

// This sorts from A to Z

function sortStoreNamesAZ(a, b) {
  const storeNameA = a?.brand?.toUpperCase();

  const storeNameB = b?.brand?.toUpperCase();

  let comparison = 0;

  if (storeNameA > storeNameB) {
    comparison = 1;
  } else if (storeNameA < storeNameB) {
    comparison = -1;
  }

  return comparison;
}

// This sorts from Z to A

function sortStoreNamesZA(a, b) {
  const storeNameA = a?.brand?.toUpperCase();

  const storeNameB = b?.brand?.toUpperCase();

  let comparison = 0;

  if (storeNameA < storeNameB) {
    comparison = 1;
  } else if (storeNameA > storeNameB) {
    comparison = -1;
  }

  return comparison;
}

const DataTable = () => {
  const [weedData, setWeedData] = useState([]);

  useEffect(() => {
    axios
      .get('https://random-data-api.com/api/cannabis/random_cannabis?size=50')
      .then(function (response) {
        // logs the response
        console.log(response.data);
        const data = [...response.data];
        // setting the initial data
        setWeedData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
 


  const sortAZ = () => {
    const sortedList = weedData.sort(sortStoreNamesAZ);

    setWeedData([...sortedList]);
  };

  const sortZA = () => {
    const sortedList = weedData.sort(sortStoreNamesZA);

    setWeedData([...sortedList]);
  };
  return (
    <>
      <div className="container">
        <button onClick={PageRefresh}>New Data</button>
        <button onClick={sortAZ}>Sort From A to Z</button>
        <button onClick={sortZA}>Sort From Z to A</button>
        <table className={"data-table"}>
          <thead>
            <tr>
              <th>Weed Brand</th>
              <th>Buzzword</th>
              <th>Cannabinoid</th>
              <th>Category</th>
              <th>Health Benefit</th>
              <th>Medical Use</th>
              <th>Strain</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {weedData.map((weed) => (
              <tr key={weed.id}>
                <td>{weed.brand}</td>
                <td>{weed.buzzword}</td>
                <td>{weed.cannabinoid}</td>
                <td>{weed.category}</td>
                <td>{weed.health_benefit}</td>
                <td>{weed.medical_use}</td>
                <td>{weed.strain}</td>
                <td>{weed.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default DataTable;
