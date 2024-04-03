import React from 'react';

const EduCard = ({ imgSrc, title, description, percentage,read }) => {
  return (
    <div className='flex items-center p-4 m-2 bg-white rounded-lg shadow-md'>
      <img src={imgSrc} alt={title} className='w-16 h-16 mr-4 rounded-full' />
      <div>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
        <div className='w-full h-2 mt-2 bg-gray-200 rounded-full'>
          <div className='h-2 bg-blue-500 rounded-full' style={{ width: `${percentage}%` }}></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EduCard;