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
      <div class='flex flex-col justify-between  bg-white border-r w-1/4'>
        <div class='px-4 py-6'>
          <Link>
            <div className='flex'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/005/012/265/non_2x/cute-blue-genie-free-vector.jpg'
                alt=''
                className='w-12'
              />
              <h1 className='ml-8 text-2xl font-semibold '>Lake House Genie</h1>
            </div>
          </Link>

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
