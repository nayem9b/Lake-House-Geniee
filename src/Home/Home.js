import React, { useEffect, useState } from "react";
import SideNav from "../SideNav/SideNav";

const Home = () => {
  const [fetchedData, setFetchedData] = useState({});
  const fetchedDataArray = fetchedData.data;
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/lakehouseadmin/800fdf1f30cf202172a55d5c1daa1290/raw/b2b92dd9b051e7b2d4b916d2873c06a7aa1b9699/sidebar.json"
    )
      .then((res) => res.json())
      .then((data) => setFetchedData(data));
  }, []);
  console.log(fetchedDataArray, fetchedData);
  return (
    <div>
      <SideNav></SideNav>
    </div>
  );
};

export default Home;
