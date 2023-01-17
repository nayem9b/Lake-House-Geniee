import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";

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

            <a
              href='#'
              class='flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-5 h-5 opacity-75'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>

              <span class='ml-3 text-sm font-medium'> Billing </span>
            </a>

            <a
              href='#'
              class='flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-5 h-5 opacity-75'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>

              <span class='ml-3 text-sm font-medium'> Invoices </span>
            </a>

            <details class='group [&_summary::-webkit-details-marker]:hidden'>
              <summary class='flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-5 h-5 opacity-75'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>

                <span class='ml-3 text-sm font-medium'> Account </span>

                <span class='ml-auto transition duration-300 shrink-0 group-open:-rotate-180'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fill-rule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label='Account Nav' class='mt-1.5 ml-8 flex flex-col'>
                <a
                  href='#'
                  class='flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 opacity-75'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                    />
                  </svg>

                  <span class='ml-3 text-sm font-medium'> Details </span>
                </a>

                <a
                  href='#'
                  class='flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-5 h-5 opacity-75'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>

                  <span class='ml-3 text-sm font-medium'> Security </span>
                </a>

                <form action='/logout'>
                  <button
                    type='submit'
                    class='flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                      />
                    </svg>

                    <span class='ml-3 text-sm font-medium'> Logout </span>
                  </button>
                </form>
              </nav>
            </details>
          </nav>
        </div>

        <div class='sticky inset-x-0 bottom-0 border-t border-gray-100'>
          <a
            href='#'
            class='flex items-center p-4 bg-white shrink-0 hover:bg-gray-50'>
            <img
              alt='Man'
              src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              class='object-cover w-10 h-10 rounded-full'
            />

            <div class='ml-1.5'>
              <p class='text-xs'>
                <strong class='block font-medium'>Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
