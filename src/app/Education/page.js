<<<<<<< HEAD
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
=======
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
>>>>>>> 7086b897c88c23a8e0e438d31bdc733b5e5c42e8
