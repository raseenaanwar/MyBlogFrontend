// import React from 'react'
// import { Link } from 'react-router-dom'

// const BlogCard = ({blog}) => {
//     let content=blog.content.substring(0,200)+" ......."
//   return (
//     <div className="max-w-sm bg-white mb-6 border border-gray-200 rounded-lg shadow">
//     <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//     <div className="p-5">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h5>
//         <p className="mb-3 font-normal text-gray-700">
//             {content}
//             </p>
//         <Link to={`blogs/${blog.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </Link>
//     </div>
// </div>

//   )
// }

// export default BlogCard
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  let content = blog.content.substring(0, 200) + " ....";

  return (
    <div className="max-w-sm bg-white mb-6 border border-gray-200 rounded-lg shadow">
      {/* Image with fallback */}
      <img
        className="rounded-t-lg"
        src={blog.image || '/docs/images/blog/default-image.jpg'}
        alt={blog.title || 'Blog Image'}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h5>
        <p className="mb-3 font-normal text-gray-700">{content}</p>
        <Link
          to={`blogs/${blog.slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
