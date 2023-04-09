import React from "react";
import { Link } from "react-router-dom";

const Connector = () => {
  return (
    <div className='mx-auto'>
      <h1 className='text-center text-4xl font-semibold'>
        {" "}
        Welcome to Connector
      </h1>
      <h1 className='text-center text-4xl font-semibold font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10'>
        {" "}
        Let's connect!
      </h1>
      <div className='flex mx-auto justify-center items-center'>
        <img
          src='https://i.ibb.co/Hp64Fb6/Md-Razwan-Niam.png'
          alt=''
          className='rounded-3xl w-44 justify-center block '
        />

        <div className='grid grid-cols-3 gap-3 ml-3'>
          <a
            class='inline-flex items-center rounded-full border-2 border-[#0077b5] bg-[#0077b5] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75'
            href='https://www.linkedin.com/in/razwan-niam'
            target='_blank'
            rel='noreferrer'>
            LinkedIn
            <svg
              class='ml-2 h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z' />
            </svg>
          </a>
          <a
            class='inline-flex items-center rounded-full border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
            href='https://github.com/nayem9b'
            target='_blank'
            rel='noreferrer'>
            GitHub
            <svg
              class='ml-2 h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'>
              <path
                fill-rule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clip-rule='evenodd'></path>
            </svg>
          </a>
          <a
            href='https://drive.google.com/file/d/1W4NqxdvKMD9h_79CIj3I43eM0BUcrgra/view?usp=share_link'
            class='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'>
            <span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
            <span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
            <span class='relative text-white'>Resumeeee</span>
          </a>
          <Link
            to='/'
            class='relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 rounded-full'>
            <span class='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
            <h1 className='text-center text-md'>Back</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connector;
