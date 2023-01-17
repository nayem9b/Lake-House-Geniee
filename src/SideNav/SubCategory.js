import React from "react";
import { Link } from "react-router-dom";
import subCatIcon from "../Assets/icons8-folder-48.png";
const SubCategory = ({ subCat }) => {
  const { name, action_url } = subCat;
  console.log(name);
  return (
    <div>
      <Link
        to={action_url}
        class='flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700'>
        <img src={subCatIcon} alt='' className='w-5' />

        <span class='ml-3 text-sm font-medium'> {name} </span>
      </Link>
    </div>
  );
};

export default SubCategory;
