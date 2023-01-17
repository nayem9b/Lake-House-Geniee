import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import profilePic from "../Assets/Md Razwan Niam-compressed.jpg";
const SideNav = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/lakehouseadmin/800fdf1f30cf202172a55d5c1daa1290/raw/b2b92dd9b051e7b2d4b916d2873c06a7aa1b9699/sidebar.json"
    )
      .then((res) => res.json())
      .then((data) => setFetchedData(data.data));
  }, []);
  console.log(fetchedData);
  const fetchedDataArray = fetchedData.data;
  return (
    <div>
      <div class='flex flex-col justify-between h-screen bg-white border-r w-1/4'>
        <div class='px-4 py-6'>
          <span class='block w-32 h-10 bg-gray-200 rounded-lg'></span>

          <nav aria-label='Main Nav' class='flex flex-col mt-6 space-y-1'>
            {fetchedData.map((category) => (
              <Category category={category}></Category>
            ))}
          </nav>
        </div>

        <div class='sticky inset-x-0 bottom-0 border-t border-gray-100'>
          <Link
            to='/'
            class='flex items-center p-4 bg-white shrink-0 hover:bg-gray-50'>
            <img
              alt='Man'
              src={profilePic}
              class='object-cover w-10 h-10 rounded-full'
            />

            <div class='ml-1.5'>
              <p class='text-xs'>
                <strong class='block font-medium'>Md Razwan Niam</strong>

                <span> razwanniam1@gmail.com</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
