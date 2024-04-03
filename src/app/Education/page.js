import React from 'react';
import EduNav from '../Components/EduNav';
import EduCard from '../Components/EduCard';
import { module_1 } from '../utils/info';
import topics from '../utils/topics';

const Page = () => {
  return (
    <div>
      <EduNav />
      <div className="flex overflow-x-auto">
        {topics.map((topic, index) => (
          <EduCard
            key={index}
            title={topic.title}
            description={topic.description}
            imgSrc={topic.imgSrc}
            percentage={50} // Default percentage value
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
