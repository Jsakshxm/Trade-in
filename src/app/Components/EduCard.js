import React from 'react';

const EduCard = ({ imgSrc, title, description, percentage }) => {
  return (
    <div className="flex flex-col justify-between max-w-sm p-4 m-2 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img src={imgSrc} alt={title} className="w-16 h-16 mr-4 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
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
