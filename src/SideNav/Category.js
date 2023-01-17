import React, { useEffect } from "react";
import SubCategory from "./SubCategory";

const Category = ({ category }) => {
  const name = category.category.name;
  const icon = category.category.ui_info.icon;
  const subCategories = category.sub_categories;

  return (
    <div>
      <details class='group [&_summary::-webkit-details-marker]:hidden'>
        <summary class='flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700'>
          <img src={icon} alt='' className='w-7' />

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
          {subCategories.map((subCat) => (
            <SubCategory subCat={subCat}></SubCategory>
          ))}
        </nav>
      </details>
    </div>
  );
};

export default Category;
