import React from 'react';

const EduCard = ({ imgSrc, title, description, percentage }) => {
  return (
    <div className="float float-col justify-between w-72  p-5 m-3 bg-white rounded-lg shadow-md overflow-x-auto overflow-y-auto">

      <div className=" items-center h-60">
        {/* <img src={imgSrc} alt={title} className="w-28 h-28 mr-4 rounded-full allign-item-center justify-center" /> */}
        <div className='md-10'>
          <h2 className="text-lg font-semibold mx-2 text-center my-4">{title}</h2>
          <p className="text-sm text-gray-600  mx-2 text-center my-4 ">{description}</p>
        </div>
      </div>
      <div className="w-full h-2 mt-4 bg-gray-200 rounded-full">
        <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="mt-2 text-xs text-gray-500">{percentage}% Complete</div>
    </div>
  );
};

export default EduCard;
