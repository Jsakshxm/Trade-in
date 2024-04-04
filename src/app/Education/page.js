import React from 'react';
import EduNav from '../Components/EduNav';
import EduCard from '../Components/EduCard';
import { module_1 } from '../utils/info';
import topics from '../utils/topics';
import Link from 'next/link';

const Page = () => {

  const redirect = (key) => {
    console.log(key);
  }
  return (
    <div>
      <EduNav />
      <div className="flex  flex-wrap justify-center">
        {topics.map((topic, index) => (
          <Link href={`/Education/${index+1}`}>
          
          <EduCard 
            key={index}
            title={topic.title}
            description={topic.description}
            imgSrc={topic.imgSrc}
            percentage={50} // Default percentage value
          />
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;