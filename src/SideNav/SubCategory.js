import React from "react";
import { Link } from "react-router-dom";

const SubCategory = ({ subCat }) => {
  const { name, action_url } = subCat;
  console.log(name);
  return (
    <div>
      <Link
        to={action_url}
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

        <span class='ml-3 text-sm font-medium'> {name} </span>
      </Link>
    </div>
  );
};

export default SubCategory;
