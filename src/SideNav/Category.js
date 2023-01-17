import React from "react";

const Category = ({ category }) => {
  const name = category.category.name;
  const icon = category.category.ui_info.icon;
  const sub = category.sub_categories;
  console.log(sub);
  return (
    <div>
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
              d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>

          <span class='ml-3 text-sm font-medium'> {name} </span>

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

        <nav aria-label='Teams Nav' class='mt-1.5 ml-8 flex flex-col'>
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
                d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
              />
            </svg>

            <span class='ml-3 text-sm font-medium'> Banned Users </span>
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
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>

            <span class='ml-3 text-sm font-medium'> Calendar </span>
          </a>
        </nav>
      </details>
    </div>
  );
};

export default Category;
